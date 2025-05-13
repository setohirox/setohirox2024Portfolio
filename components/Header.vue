<template>
  <header>
    <ThemeToggleButton />
    <h1 id="myname">SETO AKIHIRO</h1>
  </header>
</template>

<script setup>
import ThemeToggleButton from "~/components/ThemeToggleButton.vue";
</script>

<style scoped lang="scss">
header {
  position: fixed;
  z-index: 999;
  top: 3vh;
  left: 3vh;
  #myname {
    position: fixed;
    top: 3vh;
    right: 3vh;
    font-size: 1.25em;
    color: var(--namecolor);
  }
}
</style>
