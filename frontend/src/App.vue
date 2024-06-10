<template>
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <div id="app">
    <div id="logo">
      <li>Logo</li>
    </div>
    <AppNavbar/>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: {
    AppNavbar
  }
};
</script>

<style>
#app>#logo {
  margin: 15px 0px 0px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
}

#logo>li {
  font-size: 20px;
  list-style-type: none; 
}

#app {
  width: 1365px;
  margin: -10px 0px 0px -7px;
  background-color: grey;
}
</style>
