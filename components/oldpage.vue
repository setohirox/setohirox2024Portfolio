<template>
  <div>
    <button @click="goToOldSite" class="oldsite"></button>
  </div>
</template>
<script>
export default {
  methods: {
    goToOldSite() {
      window.location.href = '/portfolio2023/';
    },
  },
};
</script>
<style scoped lang="scss">
.oldsite {
  z-index: 999;
  position: fixed;
  bottom: 3vh;
  right: 3vh;
  display: inline-block;
  width: 2rem;
  height: 2rem;
  transition: all 0.2s ease;
  --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m7.375 16.781l1.25-1.562L4.601 12l4.024-3.219l-1.25-1.562l-5 4a1 1 0 0 0 0 1.562zm9.25-9.562l-1.25 1.562L19.399 12l-4.024 3.219l1.25 1.562l5-4a1 1 0 0 0 0-1.562zm-1.649-4.003l-4 18l-1.953-.434l4-18z'/%3E%3C/svg%3E");
  background-color: #fff;
  -webkit-mask-image: var(--svg);
  mask-image: var(--svg);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-size: 100% 100%;
  mask-size: 100% 100%;
  cursor: pointer;
  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  &:hover {
    background-color: #a3a3a3;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px #a3a3a3;
  }
}
</style>
