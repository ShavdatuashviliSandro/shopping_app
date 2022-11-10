<template>
  <h3>
    <HeaderComponent :header_title="'Hello Header from props'" />
    <p class="welcome-text">Welcome to shopping mall</p>
    <HeaderComponent :header_title="'Hello second Header from props'" />

  </h3>
</template>

<script>
import HeaderComponent from './components/AppHeader'
export default {
  name: 'App',
  components:{
    HeaderComponent
  },
  data(){
    return{
      main: 'main title'
    }
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
