<template>
  <div>
    <navbar /><br /><br />
    <div class="loader" v-if="isLoadShow">
      <center>
        <b-spinner style="width: 3rem; height: 3rem" type="grow"></b-spinner>
      </center>
    </div>
     
    <div v-else>
      
      <div class="container">
        <div class="row">
          
          <div  class="col-md-4" v-for="(item, index) in list" :key="item.id" v-on:click="navTo(item)">
            <br>
          <br>
            <div v-if="index % 2 != 0" class="card card-3">
              <div class="post-category">
                <a id="cattit" class="cat" href="#">{{ item.category.title }}</a>
              </div>
              <br>
              
              <h3 id="hea">{{ item.title }}</h3>
              <p>{{ item.content.substring(0, 60) + "..." }}</p>
              <a href="#" class="box_btn" v-on:click="navTo(item)">read more</a>
            </div>
            <div v-else class="card card-1">
              <div class="post-category">
                <a id="cattit" class="cat" href="#">{{ item.category.title }}</a>
              </div>
              <br>
              <h3 id="hea">{{ item.title }}</h3>
              <p>{{ item.content.substring(0, 60) + "..." }}</p>
              <a href="#" class="box_btn" v-on:click="navTo(item)">read more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import navbar from "./navbar.vue";
import Vue from "vue"; // in Vue 2
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "cat_blogs",
  props: ["dat"],
  data() {
    return {
      id:this.$route.params.id,
      product: "About Page",

      isLoadShow: false,
      list: [],
    };
  },
  components: {
    navbar,
  },
  mounted() {
    this.dat;
    console.log(this.dat)
      this.isLoadShow = true;
    Vue.axios.get(`https://programmingblogs.herokuapp.com/cat/post/${this.dat}`).then((res) => {
      this.list[0] = res.data;
      console.log(this.list[0]["title"]);
      this.isLoadShow = false;
      console.log(this.list);    });
    
  },
  methods: {
    navto() {
      this.$router.push("/blog_screen");
    },
    navTo(val) {
      this.$router.replace({ name: "detail_blog", params: { data: val } });
    },
  },
};
</script>
<style scoped>
body {
  font-family: "Nunito", sans-serif;
  padding: 50px;
}
.card {
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
  transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
    0.3s box-shadow,
    0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  padding: 14px 80px 18px 36px;
  cursor: pointer;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}

.card h3 {
  font-weight: 600;
}

.card img {
  position: absolute;
  top: 20px;
  right: 15px;
  max-height: 120px;
}

.card-1 {
  background-image: url(https://ionicframework.com/img/getting-started/ionic-native-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}

.card-2 {
  background-image: url(https://ionicframework.com/img/getting-started/components-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}

.card-3 {
  background-image: url(https://ionicframework.com/img/getting-started/theming-card.png);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 80px;
}

@media (max-width: 990px) {
  .card {
    margin: 20px;
  }
}
.post-category {
  position: absolute;
  left: 0;
  top: 0;
  padding: 5px;
}
#cattit{
  text-decoration: none;
  background-color: #17A2B8;
  color: white;
  padding: 10px;
  left: 0;
  position: absolute;
   top: 0;
    z-index: 9;
}
#hea{
  padding-top: 10px;
}
</style>