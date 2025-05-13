<template>
  <div id="canvas-container">
    <canvas id="myCanvas"></canvas>
    <div class="canvas-blur"></div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

onMounted(() => {
  if (process.client) {
    const canvasElement = document.querySelector("#myCanvas");
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasElement,
      alpha: true,
    });

    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0d1b2a);
    scene.fog = new THREE.Fog(0x0d1b2a, 1000, 3000);

    const ambientLight = new THREE.AmbientLight(0x555555, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffaaaa, 0.8);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    const spotLight = new THREE.SpotLight(0xaaffaa, 3);
    spotLight.position.set(0, 500, 1000);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.2;
    spotLight.decay = 2;
    spotLight.distance = 2000;
    spotLight.castShadow = true;
    scene.add(spotLight);

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
    camera.position.set(0, 0, 1500);

    let mixer;
    const clock = new THREE.Clock();
    let actions = [];
    let delay = 2.0;
    let delayTimeout = null;
    let playbackSpeed = 1.5;
    let isTransitioning = false;
    let secondTransition = false;
    let lerpSpeed = 0.008;
    let scrollTransitionSpeed = 0.02;  // 移動速度の調整用

    const loader = new GLTFLoader();
    loader.load(
      "/models/rubik.glb",
      function (gltf) {
        const model = gltf.scene;
        model.name = "model_castle";
        model.scale.set(80.0, 80.0, 80.0);
        model.position.set(0, -200, 0);
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          const action = mixer.clipAction(clip);
          action.setLoop(THREE.LoopOnce);
          action.clampWhenFinished = true;
          action.timeScale = playbackSpeed;
          action.play();
          actions.push(action);
        });

        mixer.addEventListener("finished", onAnimationFinished);
      },
      function (error) {
        console.log(error);
      }
    );

    function onAnimationFinished() {
      if (!delayTimeout) {
        delayTimeout = setTimeout(() => {
          actions.forEach((action) => {
            action.reset();
            action.timeScale = playbackSpeed;
            action.play();
          });
          delayTimeout = null;
        }, delay * 1000);
      }
    }

    function getRandomPosition(radius) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.random() * Math.PI;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      return { x, y, z };
    }

    let targetPosition = getRandomPosition(1500);
    const fixedCameraPosition = new THREE.Vector3(1000, 0, 1500);
    const fixedObjectPosition = new THREE.Vector3(-1000, 0, 0);
    const rightCameraPosition = new THREE.Vector3(-1000, 0, 1500);
    const rightObjectPosition = new THREE.Vector3(1000, 0, 0);
    const fixedObjectPositionLeftMobile = new THREE.Vector3(500, 0, 0);
    const fixedObjectPositionRightMobile = new THREE.Vector3(-500, 0, 0);
    const fixedCameraPositionMobile = new THREE.Vector3(200, 0, 1500);
    const rightCameraPositionMobile = new THREE.Vector3(-200, 0, 1500);
    let originalObjectPosition = new THREE.Vector3(0, -200, 0);

    function tick() {
      if (process.client) {
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }

        if (isTransitioning) {
          const model = scene.getObjectByName("model_castle");
          if (model) {
            model.position.lerp(fixedObjectPosition, scrollTransitionSpeed);
            if (window.innerWidth <= 767) {
              model.position.lerp(fixedObjectPositionLeftMobile, scrollTransitionSpeed);
            }
          }
          camera.position.lerp(fixedCameraPosition, scrollTransitionSpeed);
          if (window.innerWidth <= 767) {
            camera.position.lerp(fixedCameraPositionMobile, scrollTransitionSpeed);
          }
          camera.lookAt(new THREE.Vector3(0, 0, 0));
        } else if (secondTransition) {
          const model = scene.getObjectByName("model_castle");
          if (model) {
            model.position.lerp(rightObjectPosition, scrollTransitionSpeed);
            if (window.innerWidth <= 767) {
              model.position.lerp(fixedObjectPositionRightMobile, scrollTransitionSpeed);
            }
          }
          camera.position.lerp(rightCameraPosition, scrollTransitionSpeed);
          if (window.innerWidth <= 767) {
            camera.position.lerp(rightCameraPositionMobile, scrollTransitionSpeed);
          }
          camera.lookAt(new THREE.Vector3(0, 0, 0));
        } else {
          const model = scene.getObjectByName("model_castle");
          if (model) {
            model.position.lerp(originalObjectPosition, scrollTransitionSpeed);  // 速度を統一
          }
          let newPosition = new THREE.Vector3(
            targetPosition.x,
            targetPosition.y,
            targetPosition.z
          );
          let direction = newPosition.clone().sub(camera.position).normalize();
          let distance = camera.position.distanceTo(newPosition);
          let minDistance = 200;

          if (distance < minDistance) {
            newPosition = camera.position
              .clone()
              .add(direction.multiplyScalar(minDistance));
          }

          camera.position.lerp(newPosition, lerpSpeed);
          camera.lookAt(scene.position);

          if (
            camera.position.distanceTo(
              new THREE.Vector3(targetPosition.x, targetPosition.y, targetPosition.z)
            ) < 1
          ) {
            targetPosition = getRandomPosition(2500);
          }
        }

        renderer.render(scene, camera);
        requestAnimationFrame(tick);
      }
    }

    tick();

    window.addEventListener("resize", onWindowResize);
    function onWindowResize() {
      if (process.client) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    }

    window.addEventListener("scroll", onScroll);
    function onScroll() {
      const scrollY = window.scrollY;
      const firstTargetScrollPosition = window.innerHeight * 1.5;
      const secondTargetScrollPosition = window.innerHeight * 3.0;

      if (scrollY >= secondTargetScrollPosition) {
        secondTransition = true;
        isTransitioning = false;
      } else if (scrollY >= firstTargetScrollPosition) {
        isTransitioning = true;
        secondTransition = false;
      } else {
        isTransitioning = false;
        secondTransition = false;
      }
    }
  }
});
</script>


<style scoped>
#canvas-container {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

canvas {
  position: fixed;
  z-index: -2;
  display: block;
}
.canvas-blur {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: var(--background-color);
  z-index: -1;
}
@media (max-width: 767px) {
  .fixed-object-left {
    transform: translateX(-20vw); /* 中央から少し左 */
  }

  .fixed-object-right {
    transform: translateX(20vw); /* 中央から少し右 */
  }
}
</style>