<template>
    <div id="app">
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

<style>

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

</style>