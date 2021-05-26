<template>
  <div class="home">
    <navbar></navbar>
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
