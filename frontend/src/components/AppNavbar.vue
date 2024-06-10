<template>
  <nav class="nav-bar">
    <ul id="nav-items">
      <li v-for="link in links" :key="link">
        <a href="#">{{ link }}</a>
      </li>
    </ul>  
  </nav>
</template>

<script>
  export default {
      name: 'AppNavbar',
      data() {
        return {
          links: ["Home", "Dashboard", "Login", "Register"]
        }
      }
  };
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
}

#nav-items {
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  padding: 0px;
  
}

li {
  font-size: 20px;
  list-style-type:none;
  padding: 0px 10px 0px 10px;
}

#nav-items>a {
  text-decoration: none;
}
</style>