<template>
  <div id="main">
   <center> 
  <h1>
    <span class="let1">l</span>  
    <span class="let2">o</span>  
    <span class="let3">a</span>  
    <span class="let4">d</span>  
    <span class="let5">i</span>  
    <span class="let6">n</span>  
    <span class="let7">g</span>  
  </h1>
  </center>
  </div>

</template>
<script>
export default {
  name: "loadingScreen",
  
   created() {
       setTimeout(() => {
       console.log(localStorage.token)
       if(localStorage.token==null){
        this.$router.replace("/login");
      }
      else{
          
          this.$router.replace("/wellcome");
     }},3000)
    //    if (localStorage.getItem('token') == null) {
    //       console.log("nul====="+localStorage.token) 
    //     this.$router.push("/login");
    //   } else {
    //       console.log("not nul====="+localStorage.token) 
    //     this.$router.push("/blog_screen");
    //   }
//     console.log(localStorage.token);
//     setTimeout(() => {
      
//     }, 3000);
  },
  methods: {
    navTo() {
      localStorage.token = "qwer";
    },
  },
};
</script>
<style scoped>
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  font-size: 100%;
  background: #17A2B8;
  text-align: center;
}
#main{
  height: 100vh;
  background-color: #015461;
}

h1 {
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: ‘Arial Narrow’, sans-serif;
  font-weight: 100;
  font-size: 1.1em;
  color: #17A2B8;
}

span {
  position: relative;
  top: 0.63em;  
  display: inline-block;
  text-transform: uppercase;  
  opacity: 0;
  transform: rotateX(-90deg);
}

.let1 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.2s;
}

.let2 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.3s;
}

.let3 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.4s;
}

.let4 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.5s;

}

.let5 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.6s;
}

.let6 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.7s;
}

.let7 {
  animation: drop 1.2s ease-in-out infinite;
  animation-delay: 1.8s;
}

@keyframes drop {
    10% {
        opacity: 0.5;
    }
    20% {
        opacity: 1;
        top: 3.78em;
        transform: rotateX(-360deg);
    }
    80% {
        opacity: 1;
        top: 3.78em;
        transform: rotateX(-360deg);
    }
    90% {
        opacity: 0.5;
    }
    100% {
        opacity: 0;
        top: 6.94em
    }
}

</style>