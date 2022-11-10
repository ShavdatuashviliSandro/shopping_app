<template>
  <h3>
    <p class="welcome-text">Welcome to shopping mall</p>
    <HeaderComponent/>
  </h3>
</template>

<script>
import HeaderComponent from './components/AppHeader'
export default {
  name: 'App',
  components:{
    HeaderComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.welcome-text{
  color: gray;
}
</style>
