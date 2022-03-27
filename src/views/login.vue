<template>
  <div>
    <br />
    <br />
    <!-- <mainScreen/> -->
    <!-- <navbar/> -->
    <div class="wrapper">
      <div class="logo">
        <img
          src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
          alt=""
        />
      </div>
      <div class="text-center mt-4 name">Programming Blogs</div>
      <form class="p-3 mt-3">
        <div class="form-field d-flex align-items-center">
          <span class="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
            v-model="userLoginData.username"
          />
        </div>
        <div class="form-field d-flex align-items-center">
          <span class="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
            v-model="userLoginData.password"
          />
        </div>

        <b-button v-on:click="logInUser" variant="outline-primary"
          >Log in</b-button
        >
      </form>
      <div class="text-center fs-6">
        <router-link :to="{ name: 'signup' }">Sign up</router-link>
      </div>
    </div>
  </div>
</template>
<script>
// import mainScreen from './mainScreen.vue'
import Vue from "vue"; // in Vue 2
import axios from "axios";
import VueAxios from "vue-axios";
// import Navbar from './navbar.vue';
Vue.use(VueAxios, axios);
export default {
  name: "login",
  components: {
    // Navbar
    // mainScreen
  },
  data() {
    return {
      showmsg: true,
      userLoginData: {
        username: null,
        password: null,
      },
    };
  },

  methods: {
    showAlert() {
      // Use sweetalert2
      // this.$swal('Hello Vue world!!!');
      this.$swal({
        title: "Are you sure?",
        text: "You can't revert your action",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes Delete it!",
        cancelButtonText: "No, Keep it!",
        showCloseButton: true,
        showLoaderOnConfirm: true,
      }).then((result) => {
        if (result.value) {
          this.$swal(
            "Deleted",
            "You successfully deleted this file",
            "success"
          );
        } else {
          this.$swal("Cancelled", "Your file is still intact", "info");
        }
      });
    },
    navTo() {
      //this.$router.push({name:'mainScreen'})
      this.$router.push("/wellcome");
    },
    logInUser() {
      if (
        this.userLoginData.username == null ||
        this.userLoginData.password == null
      ) {
        this.$swal.fire({
          icon: "warning",
          title: "Incomplete...",
          text: '"Incomplete Data!!"',
        });
      } else {
        try {
          axios
            .post(
              "https://programmingblogs.herokuapp.com/api/login/",
              this.userLoginData
            )
            .then((response) => {
              //   alert(response.data.id);
              // console.log(response.data);
              console.log("$$$$$$$$$$$$$$");
              console.log(response.status);
              if (response.status == 200) {
                localStorage.token = response.data.token;
                localStorage.userId = response.data.user.id;
                localStorage.username = response.data.user.username;
                localStorage.email = response.data.user.email;

                console.warn(localStorage.token);
                console.log(localStorage.userId);
                console.log(localStorage.username);
                console.log(localStorage.email);
                this.$swal.fire(
                  "sign in!",
                  "You successfully login!",
                  "success"
                );
                //this.$router.push({name:'mainScreen'})
                this.$router.replace("/");
              }

              //   alert(localStorage.storedData.text);
            });
        } catch (e) {
          alert(e);
        }
      }
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: #ecf0f3;
}

.wrapper {
  max-width: 350px;
  min-height: 500px;
  margin: 10px auto;
  padding: 40px 30px 30px 30px;
  background-color: #ecf0f3;
  border-radius: 15px;
  box-shadow: 13px 13px 20px #17a2b8, -13px -13px 20px #fff;
}

.logo {
  width: 80px;
  margin: auto;
}

.logo img {
  width: 100%;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3, 8px 8px 15px #a7aaa7,
    -8px -8px 15px #fff;
}

.wrapper .name {
  font-weight: 600;
  font-size: 1.4rem;
  letter-spacing: 1.3px;
  padding-left: 10px;
  color: #555;
}

.wrapper .form-field input {
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background: none;
  font-size: 1.2rem;
  color: #666;
  padding: 10px 15px 10px 10px;
}

.wrapper .form-field {
  padding-left: 10px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: inset 8px 8px 8px #79b7db, inset -8px -8px 8px #fff;
}

.wrapper .form-field .fas {
  color: #555;
}

.wrapper .btn {
  box-shadow: none;
  width: 100%;
  height: 40px;
  background-color: #17a2b8;
  color: #fff;
  border-radius: 25px;
  box-shadow: 3px 3px 3px #c9f0fc, -3px -3px 3px #fff;
  letter-spacing: 1.3px;
}

.wrapper .btn:hover {
  background-color: #039be5;
}

.wrapper a {
  text-decoration: none;
  font-size: 0.8rem;
  color: #03a9f4;
}

.wrapper a:hover {
  color: #039be5;
}

@media (max-width: 380px) {
  .wrapper {
    margin: 30px 20px;
    padding: 40px 15px 15px 15px;
  }
}
</style>
