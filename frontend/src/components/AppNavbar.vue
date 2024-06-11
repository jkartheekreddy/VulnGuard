<template>
  <div class="home">
    <div class="navbar-logo">
        <img src="../assets/logo.png" alt="Logo">
      </div>
    <nav class="navbar">
      <div class="navbar-links">
        <!-- <router-link to="">Home</router-link>
        <router-link to="">Targets</router-link>
        <router-link to="">Scan</router-link>
        <router-link to="">Dashboard</router-link>
        <router-link to="">Register</router-link> -->
        <router-link to="/login"><button>Login</button></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3c3836;
  padding: 10px 30px;
  border-bottom: 1px solid #504945;

}

img { 
  height: 40px; /* Adjust as needed */
  float: left;
}

.navbar-links {
  display: flex;
}

.navbar-links router-link {
  margin-right: 20px;
  text-decoration: none;
  color: #fbf1c7;
}

.navbar-links router-link:hover {
  color: #fe8019;
}
/* Gruvbox theme styles */
</style>
