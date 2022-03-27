<template>
  <div>
    <navbar />
    <center>
      
      <div class="loader" v-if="isLoadShow">
        <center><b-spinner style="width: 3rem; height: 3rem" type="grow"></b-spinner></center>
      </div>

      <div v-else>
        <section class="blog-me pt-100 pb-100" id="blog">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 mx-auto text-center">
                <div class="section-title mb-100">
                  <h4 class="tit">Programming Blogs</h4>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                id="clblog"
                class="col-lg-4 col-md-6"
                v-for="item in list"
                :key="item.id"
              >
                <!-- Single Blog -->
                <div id="singleblog" class="single-blog">
                  <div class="blog-img">
                    <!-- <img src="http://infinityflamesoft.com/html/abal-preview/assets/img/blog/blog1.jpg" alt=""> -->
                    <div class="post-category">
                      <a id="cattit" href="#">{{ item.category.title }}</a>
                    </div>
                  </div>
                  <div class="blog-content">
                    <div id="cl" class="blog-title">
                      <h4 id="text-block">
                        <a href="#">{{ item.title }}</a>
                      </h4>
                      <div class="meta">
                        <ul>
                          <li>{{ item.date }}</li>
                        </ul>
                      </div>
                    </div>
                    <p>{{ item.content.substring(0, 60) + "..." }}</p>
                    <a href="#" class="box_btn" v-on:click="navTo(item)"
                      >read more</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </center>
  </div>
</template>
<script>
import navbar from "./navbar.vue";
import Vue from "vue"; // in Vue 2
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
export default {
  name: "search_blog",
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
    Vue.axios.get(`https://programmingblogs.herokuapp.com/fp/?search=${this.dat}`).then((res) => {
      this.list = res.data;
      console.log(this.list[0]["title"]);
      this.isLoadShow = false;
      console.log(this.list);    });
    
  },
  methods: {
    navto() {
      this.$router.push("/blog_screen");
    },
    navTo(val) {
      alert(val)
      this.$router.push({ name: "detail_blog", params: { data: val } });
    },
  },
};
</script>
<style scoped>
.pb-100 {
  padding-bottom: 40px;
}
.pt-100 {
  padding-top: 40px;
}
.mb-100 {
  margin-bottom: 40px;
}
a {
  text-decoration: none;
  color: #333;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.section-title {
  position: relative;
}
.section-title p {
  font-size: 16px;
  margin-bottom: 5px;
  font-weight: 400;
}
.section-title h4 {
  font-size: 40px;
  font-weight: 600;
  text-transform: capitalize;
  position: relative;
  padding-bottom: 20px;
  display: inline-block;
}
.section-title h4::before {
  position: absolute;
  content: "";
  width: 80px;
  height: 2px;
  background-color: #d8d8d8;
  bottom: 0;
  left: 50%;
  margin-left: -40px;
}
.section-title h4::after {
  position: absolute;
  content: "";
  width: 50px;
  height: 2px;
  background-color: #17A2B8;
  left: 0;
  bottom: 0;
  left: 50%;
  margin-left: -25px;
}
.blog-img {
  position: relative;
}
.blog-img img {
  width: 100%;
}
.post-category a {
  display: inline-block;
  background-color: #17A2B8;
  color: #fff;
  font-size: 15px;
  padding: 5px 20px;
}
.single-blog:hover img {
  opacity: 0.85;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";
}
.post-category {
  position: absolute;
  left: 0;
  bottom: 0;
}
.blog-content {
  padding: 30px 20px;
}
.single-blog {
  border: 1px solid #eee;
}
.blog-title h4 {
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 5px;
}
.meta ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.meta {
  margin-bottom: 20px;
  opacity: 0.85;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=85)";
}
.blog-content a.box_btn {
  display: inline-block;
  background-color: #17A2B8;
  padding: 5px 15px;
  color: #fff;
  text-transform: capitalize;
  margin-top: 20px;
}
a.box_btn::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  background-color: #17A2B8;
  left: -100%;
  top: 0;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  z-index: -1;
}
a.box_btn {
  overflow: hidden;
  z-index: 2;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  position: relative;
  text-decoration: none;
}
a.box_btn:hover::before {
  left: 0;
  z-index: -1;
}

#rw {
  padding-top: 10px;
}
#cl {
  overflow: auto;
}
#clblog {
  margin-top: 5%;
}
#singleblog {
  background-color: rgb(236, 248, 248);
}
#text-block {
  padding: 5px;
  white-space: pre;
  text-align: left;
}
.tit{
    color: rgb(2, 67, 83);
}
.loader{
  margin-top: 10%;
  align-self: center;
}

</style>

