<template>
  <div id="app">
    <div class="spacer" style="height: 150vh;"></div>
    <div class="fade-element" :class="{ fixed: isFixed, absolute: !isFixed }" :style="{ opacity: isVisible ? 1 : 0 }">
      <h2>瀬戸章皓</h2>
      <p>SETO AKIHIRO</p>
    </div>
    <div class="spacer" style="height: 150vh;"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      isFixed: false,
      scrollY: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
      if (this.scrollY > 150 * window.innerHeight / 100 && this.scrollY < 300 * window.innerHeight / 100) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }

      if (this.scrollY > 150 * window.innerHeight / 100) {
        this.isFixed = true;
      } else {
        this.isFixed = false;
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style scoped lang="scss">

@mixin mobile {
  @media (max-width: 767px) {
    @content;
  }
}
.fade-element {
  transition: opacity 0.4s;
  opacity: 0;
  color: var(--profile-textcolor);
  h2 {
    font-size: 5vw;
    @include mobile {
      font-size: 15vw;
    }
  }
  p {
    font-size: 2.4vw;
    @include mobile {
      font-size: 7vw;
    }
  }
}
.fixed {
  position: fixed;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
}
.absolute {
  position: absolute;
  right: 5%;
  top: calc(150vh + 50%);
  transform: translateY(-50%);
}
.spacer {
  height: 150vh;
}
</style>
