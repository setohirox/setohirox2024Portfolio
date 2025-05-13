<template>
  <div id="worldtimes">
    <p>Japan: {{ japanTime }}</p>
    <p>New York: {{ naTime }}</p>
    <p>London: {{ euTime }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import moment from "moment-timezone";

const japanTime = ref("Loading...");
const naTime = ref("Loading...");
const euTime = ref("Loading...");

const updateTimes = () => {
  japanTime.value = moment().tz("Asia/Tokyo").format("HH:mm:ss");
  naTime.value = moment().tz("America/New_York").format("HH:mm:ss");
  euTime.value = moment().tz("Europe/London").format("HH:mm:ss");
};

onMounted(() => {
  updateTimes();
  setInterval(updateTimes, 1000);
});
</script>

<style scoped lang="scss">
#worldtimes {
  position: fixed;
  bottom: 3vh;
  left: 3vh;
  z-index: 999;
  color: var(--clocks-textcolor);
  font-size: 0.8em;
}
</style>
