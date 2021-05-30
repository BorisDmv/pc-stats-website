<template>
  <div class="home">
    <navbar></navbar>
    <div class="content">
        <div class="box">
          <h1>ALL THE STATS FOR<br>
            YOUR SYSTEM
          </h1>
          <p>Application with system information for your
            computer.
          </p>
        </div>
      <div class="box2">
        <img class="illustration-img" src="../assets/Illustration-static.svg" alt="illustration"> 
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

<style scoped lang="scss">
.home{
  height: 100%;
}

.content{
   max-width: 60%;
   height: 70%;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   margin: auto;
}

.box{
  margin-top: 150px;
  margin-right: 70px;
  flex-grow: 1;

  h1,p{
    text-align: left;
    margin: 0;
  }
}

.box2{
  flex-grow: 1;
}

@media only screen and (max-width: 1200px) {
.content{
  flex-direction: column;
}

.box{
  width: 100%;
  margin-right: 0;
  margin-bottom: 80px;
  flex-grow: 0;

  h1,p{
    text-align: center;
  }

  h1{
    font-size: 2rem;
  }

  p{
    font-size: 1.2rem;
  }
}

.illustration-img{
  width: 100%;
}

}

</style>