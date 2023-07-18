<template>
    <div class="home">
       <my-header></my-header>
       {{ msg }}
       <div>
          <router-link to="/foo">foo</router-link>
          <router-link to="/bar">bar</router-link>
       </div>
       <div><router-view></router-view></div>
    </div>
 </template>
 
 <script>
 module.exports = {
    data() {
       return {
          msg: 'hello world!'
       };
    }
 };
 </script>
 
 <style scoped>
 .home {
    font-size: 24px;
    font-weight: bold;
 }
 </style>
 