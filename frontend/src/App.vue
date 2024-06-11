<template>
  <div id="app">
    <AppNavbar/>
    <router-view />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
export default {
  name: 'App',
  components : {
    AppNavbar
  }
};
</script>

<style>

html {
  overflow: hidden;
}

#app {
  display: flex;  
  flex-direction: column;
  margin: -10px 0px 0px -10px;
  width: 101vw;
  height: 101vh;
  font-family: Arial, sans-serif;
  background-color: #282828;
  color: #c19e16;
}


</style>
