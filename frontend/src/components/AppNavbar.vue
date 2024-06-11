<template>
  <div class="home">
    <div class="navbar-logo">
        <img src="../assets/logo.png" alt="Logo">
      </div>
    <nav class="navbar">
      <div class="navbar-links">
        <router-link to="/">Home</router-link>
        <router-link to="/targets">Targets</router-link>
        <router-link to="/scan">Scan</router-link>
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/login">Login</router-link>
        <router-link to="/register">Register</router-link>
      </div>
    </nav>
    <div class="page-content">
      <h1>Welcome to VulnGuard</h1>
      <p>VulnGuard is a powerful web vulnerability scanner designed to help you identify and mitigate security risks in your web applications.</p>
      <p>With VulnGuard, you can easily manage your targets, conduct scans, and analyze vulnerabilities to enhance the security posture of your websites.</p>
    </div>
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
  padding: 10px 20px;
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

.page-content {
  margin-top: 20px;
  text-align: center;
}

.page-content h1 {
  color: #fbf1c7;
}

.page-content p {
  color: #ebdbb2;
  font-size: 18px;
}

/* Gruvbox theme styles */
</style>
