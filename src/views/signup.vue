<template>
  <div>
    <br />

    <div>
      <div class="wrapper">
        <div class="logo">
          <img
            src="https://www.goodcore.co.uk/blog/wp-content/uploads/2019/08/coding-vs-programming-2.jpg"
            alt=""
          />
        </div>
        <div class="text-center mt-4 name">
          {{ "Programming Blogs" | uprcse }}
        </div>
        <form class="p-3 mt-3">
          <input
            type="file"
            name="imageupload"
            id="imageupload"
            @change="onFileSelecte"
          />
          <br />
          <br />

          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              placeholder="Username"
              v-model="userData.username"
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="far fa-user"></span>
            <input
              type="text"
              name="Email"
              id="userName"
              placeholder="Email"
              v-model="userData.email"
            />
          </div>
          <div class="form-field d-flex align-items-center">
            <span class="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              placeholder="Password"
              v-model="userData.password"
            />
          </div>

          <b-button variant="outline-primary" v-on:click="createdUser"
            >Sign Up</b-button
          >
        </form>
        <div class="text-center fs-6">
          <router-link :to="{ name: 'login' }">Sign In</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue"; // in Vue 2
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "signup",
  components: {},
  data() {
    return {
      userData: {
        username: null,
        email: null,
        password: null,
        image:
          "https://images.pexels.com/photos/6804595/pexels-photo-6804595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      cat: {
        title: "45ert",
      },
      signUp: {
        username: null,
        email: null,
        hobbies: [],
        gender: null,
      },
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
  async created() {
    var resp = await fetch("https://programmingblogs.herokuapp.com/");
    var a = resp.json();
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&");
    console.log(a);
  },
  methods: {
    chngGlo() {
      Vue.prototype.$actionButton = "approved";
      console.log(this.$actionButton);
    },
    onFileSelecte(event) {
      console.log(event.target.files[0]);
    },
    onSubmit() {
      alert(this.form.name);
    },
    showFormData() {
      alert(
        this.signUp.username +
          "\n" +
          this.signUp.email +
          "\n" +
          this.signUp.gender +
          "\n" +
          this.signUp.hobbies
      );
      // console.warn(this.signUp)
    },
    createdUser() {
      if (
        this.userData.username == null ||
        this.userData.email == null ||
        this.userData.password == null ||
        this.userData.image == null
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
              "https://programmingblogs.herokuapp.com/api/register/",
              this.userData
            )
            .then((response) => {
              console.log(res.status)
              //   alert(response.data.id);
              if (response.status == 200) {
                // alert("Account created Sussefully", "Created", success)
                // this.$alert("Account created Sussefully","Created", success);
                // alert("Account created Sussefully");

                console.warn(response.data);
                localStorage.storedData = this.userData.username;
                console.warn(localStorage.storedData);
                this.$router.replace("/login");
                //   alert(localStorage.storedData.text);
              } else {
                alert("Some thing gonna wrong!!");
              }
            });
        } catch (e) {
          alert(e);
        }
      }
    },
    creatCat() {
      try {
        axios
          .post(
            "https://programmingblogs.herokuapp.com/cat/category/",
            this.cat
          )
          .then((response) => alert(response.data.id));
      } catch (e) {
        alert(e);
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
