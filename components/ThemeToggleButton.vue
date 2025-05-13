<template>
  <div class="theme-toggle-button-base">
    <button @click="toggleTheme" class="theme-toggle-button"></button>
  </div>
</template>

<script setup>
import { rotate } from "three/examples/jsm/nodes/Nodes.js";
import { ref, onMounted } from "vue";

const currentTheme = ref("dark");

const applyTheme = (theme) => {
  if (process.client) {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty(
        "--background-color",
        "linear-gradient(180deg, rgba(0, 0, 0, 0.466) 0%, rgba(153, 41, 41, 0.418) 100%)"
      );
      root.style.setProperty("--themebuttontogglesvg", "scale(-1,1)");
      root.style.setProperty("--namecolor", "#fff");
      root.style.setProperty("--clocks-textcolor", "#fff");
      root.style.setProperty("--profile-textcolor", "#fff");
      root.style.setProperty("--skills-textcolor", "#fff");
      root.style.setProperty("--themebuttonsvg-color", "#fff");
      root.style.setProperty("--themebuttonsvg-bordercolor", "#fff");
    } else {
      root.style.setProperty(
        "--background-color",
        "linear-gradient(180deg, rgba(255, 255, 255, 0.76) 0%, rgba(255, 130, 130, 0.418) 100%)"
      );
      root.style.setProperty("--themebuttontogglesvg", "scale(1,1)");
      root.style.setProperty("--namecolor", "#031625");
      root.style.setProperty("--clocks-textcolor", "#031625");
      root.style.setProperty("--profile-textcolor", "#031625");
      root.style.setProperty("--skills-textcolor", "#031625");
      root.style.setProperty("--themebuttonsvg-color", "#031625");
      root.style.setProperty("--themebuttonsvg-bordercolor", "#031625");
    }
  }
};

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
  applyTheme(currentTheme.value);
};

onMounted(() => {
  if (process.client) {
    applyTheme(currentTheme.value);
  }
});
</script>

<style scoped lang="scss">
.theme-toggle-button-base {
  position: fixed;
  width: 3rem;
  height: 3rem;
  border: 1px solid var(--themebuttonsvg-bordercolor);
  box-shadow: 0 2px 10px rgba(255, 255, 255, 0.397);
  border-radius: 50%;
  .theme-toggle-button {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    margin: 0.5rem;
    border: none;
    outline: none;
    transition: all 0.2s ease;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    --themebuttonsvg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M9.066 19h-2.45q-.667 0-1.141-.475T5 17.386v-2.451l-1.79-1.803q-.237-.243-.349-.534t-.111-.594q0-.301.112-.596t.347-.538L5 9.066v-2.45q0-.667.475-1.141T6.615 5h2.451l1.803-1.79q.243-.237.534-.349t.594-.111q.301 0 .596.112t.538.347L14.934 5h2.45q.667 0 1.142.475T19 6.615v2.451l1.79 1.803q.237.243.349.534t.111.594q0 .301-.111.596t-.348.538L19 14.934v2.45q0 .667-.475 1.142t-1.14.474h-2.451l-1.803 1.79q-.243.237-.534.349t-.594.111q-.301 0-.596-.111t-.538-.348zm.433-1l2.059 2.058q.173.173.442.173t.442-.173L14.502 18h2.882q.27 0 .443-.173t.173-.442V14.5l2.058-2.059q.173-.173.173-.442t-.173-.442L18 9.498V6.617q0-.27-.173-.443T17.385 6H14.5l-2.059-2.058Q12.27 3.77 12 3.77t-.442.173L9.498 6H6.617q-.27 0-.443.173T6 6.616v2.883l-2.058 2.059q-.173.173-.173.442t.173.442L6 14.502v2.882q0 .27.173.443t.443.173zM12 16.23q1.748 0 2.99-1.237q1.24-1.237 1.24-2.993t-1.237-2.993T12 7.769z'/%3E%3C/svg%3E");
    background-color: var(--themebuttonsvg-color);
    -webkit-mask-image: var(--themebuttonsvg);
    mask-image: var(--themebuttonsvg);
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100%;
    transform: var(--themebuttontogglesvg);
    &:hover {
      background-color: #a3a3a3;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 5px #a3a3a3;
    }
  }
}
</style>
