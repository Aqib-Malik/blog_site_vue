import Vue from "vue";
import VueRouter from "vue-router";
import loadingScreen from "../views/loadingScreen.vue";

Vue.use(VueRouter);
// var a=true
const routes = [
    
    {
    path: "/",
    name: "loadingScreen",
    component: loadingScreen,
  }
  ,
  
  {
    path: "/login",
    name: "login",
    component: () =>
      import("../views/login.vue"),
  },
  {
    path: "/wellcome",
    name: "wellcome",
    props: true,
    component: () =>
      import("../views/wellcome.vue"),
  },
  {
    path: "/detail_blog",
    name: "detail_blog",
    props: true,
    component: () =>
      import("../views/detail_blog.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () =>
      import("../views/signup.vue"),
  },
  {
    path: "/profile",
    name: "profile",
  
    component: () =>
      import("../views/profile.vue"),
  },
  {
    path: "/search_blog",
    props:true,
    name: "search_blog",
    component: () =>
      import("../views/search_blog.vue"),
      
  },
  {
    path: "/cat_blogs",
    props:true,
    name: "cat_blogs",
    component: () =>
      import("../views/cat_blogs.vue"),
      
  },
  
  
  
  
  
  
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
