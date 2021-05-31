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
          <a class="down-btn">DOWNLOAD<img src="../assets/windows-logo.svg"></a>
        </div>
      <div class="box2">
        <img class="illustration-img" src="../assets/Illustration-static.svg" alt="illustration"> 
      </div>

      <div class="footer-cont">
        <p class="footer-txt">If you want to donate and help me click <a href="https://www.paypal.com/donate/?hosted_button_id=5AYDUEXRNDEEC" target="_blank">here</a> ❤</p>
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
   height: 100%;
   display: flex;
   flex-direction: row; 
   justify-content: center;
   align-items: center;
   margin: auto;

   .footer-cont{
     position: absolute;
     bottom: 0;
   }

  .footer-txt{
    color: #62A49A;
    text-align: center;

    a{
      color: #48DEC8;
    }
  }
}

.box{
  margin-top: 0;
  margin-right: 70px;
  flex-grow: 1;
  text-align: left;

  h1{
    font-size: 2.5rem;
  }

  p{
    font-size: 1.5rem;
  }

  h1,p{
    text-align: left;
    margin: 0;
  }

  .down-btn{
    background: #2C5E5F;
    display: flex;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    width: 120px;
    padding: 15px;
    border-radius: 12px;
    cursor: pointer;
    transition: ease-in-out 0.3s;

    img{
      width: 20px;
    }
  }

  .down-btn:hover{
    background: #48DEC8;
  }
  
}

.box2{
  flex-grow: 1;
}

@media only screen and (max-width: 1500px) {
.content{
  flex-direction: column;

  .footer-cont{
    position: unset;
    flex-grow: 0;
  }
}

.box{
  width: 100%;
  margin-top: 200px;
  margin-right: 0;
  flex-grow: 1;
  text-align: center;

  h1,p{
    text-align: center;
  }

  h1{
    font-size: 2rem;
  }

  p{
    font-size: 1.2rem;
  }

  .down-btn{
    margin: auto;
  }
}

.illustration-img{
  width: 100%;
}

}

</style>