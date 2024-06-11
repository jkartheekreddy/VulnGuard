<template>
  <div id="app">
    <HomePage/>
  </div>
</template>

<script>

import HomePage from './components/AppNavbar';

export default {
  name: 'App',
  components: {
    HomePage
  }
};
</script>

<style>

html {
  overflow: hidden;
}

#app {
  margin: -10px 0px 0px -10px;
  width: 101vw;
  height: 101vh;
  font-family: Arial, sans-serif;
  background-color: #282828;
  color: #c19e16;
}
</style>
