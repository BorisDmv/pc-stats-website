<template>
  <div class="home">
    <navbar></navbar>
    <div class="content">
      <div>
        <div class="box1">
          <h1>ALL THE STATS FOR
            YOUR SYSTEM
          </h1>
          <p>Application with system information for your
            computer.
          </p>
        </div>
      </div>
      <div class="box1">
        <img src="../assets/Illustration.svg" alt="illustration">
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'


export default {
  name: "Home",
  components: {
    'navbar': NavBar
  }
};
</script>

<style scoped>


</style>