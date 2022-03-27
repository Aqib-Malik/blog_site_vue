<template>
<div>
    <navbar />
   
     <div class="container">
      <div class="cover-photo">
        <img :src="image" class="profile">
      </div>
      <div class="profile-name">{{name}}</div>
      <p class="about">{{email}}</p>
      <button class="msg-btn">Message</button>
      <button class="follow-btn">Following</button>
      <div>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-twitter"></i>
      </div>
    </div>
</div>
    
</template>
<script>
import navbar from "./navbar.vue";
export default {
    name:"profile",
    components: {
    navbar,
  },
    data(){
        return {
            name:localStorage.username,
            email:localStorage.email,
            image:localStorage.userimage,
        }
    }
}
</script>
<style scoped>
body{
  font-family: Montserrat, sans-serif;
  background: #17A2B8;
}
.container{
  user-select: none;
  margin: 100px auto;
  background: #17A2B8;
  color: #ffffff;
  border-radius: 5px;
  width: 350px;
  text-align: center;
  box-shadow: 0 10px 20px -10px rgba(0,0,0,.75);
}
.cover-photo{
  background: url(https://images.unsplash.com/photo-1540228232483-1b64a7024923?ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80);
  height: 160px;
  width: 100%;
  border-radius: 5px 5px 0 0;
}
.profile{
  height: 120px;
  width: 120px;
  border-radius: 50%;
  margin: 93px 0 0 -175px;
  border: 1px solid #01535f;
  padding: 7px;
  background: #01535f;
}
.profile-name{
  font-size: 25px;
  font-weight: bold;
  margin: 27px 0 0 120px;
}
.about{
  margin-top: 35px;
  line-height: 21px;
}
button{
  margin: 10px 0 40px 0;
}
.msg-btn, .follow-btn{
  background: #76b4ee;
  border: 1px solid #ece4ea;
  padding: 10px 25px;
  color: #ffffff;
  border-radius: 3px;
  font-family: Montserrat, sans-serif;
  cursor: pointer;
}
.follow-btn{
  margin-left: 10px;
  background: transparent;
  color: #ffffff;
}
.follow-btn:hover{
  color: #231e39;
  background: #76b4ee;
  transition: .5s;
}
.container i{
  padding-left: 20px;
  font-size: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: .5s;
}
.container i:hover{
  color: #03bfbc;
}
</style>