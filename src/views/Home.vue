<template>
  <div class="home">
    <img alt="illustration" src="../assets/Illustration.svg" />
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>

.home {
  /* The image used */
  background-image: url("../assets/BG.svg");

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>