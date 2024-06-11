<template>
  <div class="home">
    <nav class="navbar">
      <div class="navbar-links">
        <router-link to="/"><button id="homeButton">Home</button></router-link>
        <router-link to=""><button id="homeButton">Targets</button></router-link>
        <router-link to=""><button id="homeButton">Scan</button></router-link>
        <router-link to=""><button id="homeButton">Dashboard</button></router-link>
        <router-link to=""><button id="homeButton">Register</button></router-link>
        <router-link to="/login"><button id="homeButton">Login</button></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppNavBar'
}
</script>

<style scoped>

/* Button Styling */
#homeButton {
  display: inline-block;
  margin: 0.5rem;
  padding: 5px 5px;
  font-size: 16px;

  text-align: center;
  color: #007bff;
  background-color: transparent;
  border: 1px solid #007bff;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

#homeButton:hover {
  background-color: #007bff;
  color: #fff;
}

#homeButton:active {
  background-color: #0056b3;
  border-color: #0056b3;
}




.home {
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3c3836;
  border-bottom: 1px solid #504945;

}

.button { 
  margin: 0.5rem;
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
