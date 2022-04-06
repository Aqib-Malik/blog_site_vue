<template>
<div>
  <navbar />

    <div class="wrapp">
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <div class="box box-down blue">
      <h2>{{ data["title"] }}</h2>
      <p id="text-block">{{ data["code"] }}</p>
      <br>
      <ul class="post-meta list-inline">
                <li class="list-inline-item">
                  <i class="fa fa-user-circle-o"></i>
                  <a href="#">{{ data["user"]["username"] }}</a>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-calendar-o"></i>
                  <a href="#">{{ data["date"] }}</a>
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-tags"></i>
                  <a href="#">{{ data["category"]["title"] }}</a>
                </li>
              </ul>
      <img src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
    </div>
    <div class="desciption">
    <p >{{ data["content"] }}</p>
    </div>
</div>

  </div>
</template>
<script>
import navbar from "./navbar.vue";
export default {
  name: "detail_blog",
  components: {
    navbar,
  },
  props: ["data"],
  // mounted() {
  //   this.data;
  // },
};
</script>
<style scoped>
body {
  margin-top: 20px;
  background: #f3f3f3;
}
/*
Timeline
*/

.page-timeline {
  margin: 30px auto 0 auto;
  position: relative;
  max-width: 1000px;
}

.page-timeline:before {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 303px;
  right: auto;
  height: 100%;
  width: 3px;
  background: #17a2b8;
  z-index: 0;

  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
}

.page-timeline:after {
  position: absolute;
  content: "";
  width: 3px;
  height: 40px;
  background: #17a2b8;
  background: -webkit-linear-gradient(top, #17a2b8, rgba(52, 152, 219, 0));
  background: linear-gradient(to bottom, #17a2b8, rgba(52, 152, 219, 0));
  top: 100%;
  left: 303px;

  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
}

.vtimeline-content {
  margin-left: 350px;
  background: #fff;
  border: 1px solid #e6e6e6;
  padding: 35px 20px;
  border-radius: 3px;
  text-align: left;

  -webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.3);
}

.vtimeline-content h3 {
  font-size: 1.5em;
  font-weight: 600;
  display: inline-block;
  margin: 0;
}

.vtimeline-content p {
  font-size: 0.9em;
  margin: 0;
}

.vtimeline-point {
  position: relative;
  display: block;
  vertical-align: top;
  margin-bottom: 30px;
}

.vtimeline-icon {
  position: relative;
  color: #fff;
  width: 50px;
  height: 50px;
  background: #17a2b8;
  border-radius: 50%;
  float: left;
  text-align: center;
  line-height: 50px;
  z-index: 99;
  margin-left: 280px;
}

.vtimeline-icon i {
  display: block;
  font-size: 1.5em;
  line-height: 50px;
}

.vtimeline-date {
  width: 260px;
  text-align: right;
  position: absolute;
  left: 0;
  top: 10px;
  font-weight: 400;
  color: #374054;
}
.post-meta {
  padding-top: 15px;
  margin-bottom: 20px;
}
.post-meta li:not(:last-child) {
  margin-right: 10px;
}
h3 {
  font-family: "Montserrat", sans-serif;
  color: #252525;
  font-weight: 700;
  font-variant-ligatures: common-ligatures;
  margin-top: 0;
  letter-spacing: -0.2px;
  line-height: 1.3;
}
.mb20 {
  margin-bottom: 20px !important;
}
#text-block {
  overflow: auto;
  padding: 5px;
  white-space: pre;
  text-align: left;
}
#maincrd {
  background-color: rgb(235, 245, 245);
}

:root {
  --red: hsl(0, 78%, 62%);
  --cyan: hsl(180, 62%, 55%);
  --orange: hsl(34, 97%, 64%);
  --blue: hsl(212, 86%, 64%);
  --varyDarkBlue: hsl(234, 12%, 34%);
  --grayishBlue: hsl(229, 6%, 66%);
  --veryLightGray: hsl(0, 0%, 98%);
  --weight1: 200;
  --weight2: 400;
  --weight3: 600;
}

body {
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  background-color: var(--veryLightGray);
}

.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}

h1:first-of-type {
  font-weight: var(--weight1);
  color: var(--varyDarkBlue);
}

h1:last-of-type {
  color: var(--varyDarkBlue);
}

@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
  }
}

.header {
  text-align: center;
  line-height: 0.8;
  margin-bottom: 50px;
  margin-top: 100px;
}

.header p {
  margin: 0 auto;
  line-height: 2;
  color: var(--grayishBlue);
}

.box p {
  color: var(--grayishBlue);
}

.box {
  border-radius: 5px;
  box-shadow: 0px 30px 40px -20px var(--grayishBlue);
  padding: 30px;
  margin: 20px;
  background-color: #ecfafd;
  margin: 60px;
  /* padding: 60px; */
  
}

img {
  float: right;
}

@media (max-width: 450px) {
  .box {
    text-align: center;
    margin: 10px;
    /* height: 200px; */
  }
}

@media (max-width: 1200px) and (min-width: 450px) {
  .box {
    text-align: center;
    /* height: 180px; */
  }
}

.cyan {
  border-top: 3px solid var(--cyan);
}
.red {
  border-top: 3px solid var(--red);
}
.blue {
  border-top: 3px solid var(--blue);
}
.orange {
  border-top: 3px solid var(--orange);
}

h2 {
  color: var(--varyDarkBlue);
  font-weight: var(--weight3);
}
#cattit{
  align-self: start;
  text-decoration: none;
  background-color: #17A2B8;
  color: white;
  padding: 10px;
  left: 0;
  position: relative;
  left: 0;
   top: 0;
    z-index: 9;
}

.desciption{
  padding-inline: 70px;
}
</style>