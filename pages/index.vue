<template>
  <div>
    <ThreeCanvas />
    <WorldClocks />
    <oldpage />
    <section class="PageSize">
        <Profile />
        <Skills />
    </section>
  </div>
</template>

<script setup>
import ThreeCanvas from "~/components/ThreeCanvas.vue";
import WorldClocks from "~/components/WorldClocks.vue";
import Profile from "~/components/Profile.vue";
import Skills from "~/components/Skills.vue";
import oldpage from "~/components/oldpage.vue";
import { useNuxtApp } from "#app";
import { onMounted, onBeforeUnmount } from "vue";

const { $lenis } = useNuxtApp();

onMounted(() => {
  if (process.client) {
    $lenis.start();
  }
});

onBeforeUnmount(() => {
  if (process.client) {
    $lenis.stop();
  }
});
</script>

<style scoped lang="scss">

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  overflow: hidden;
  height: 100%;
}

.PageSize {
  width: 100%;
  height: 450vh;
}
</style>
