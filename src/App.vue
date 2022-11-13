<template>
  <div class="app">
    <AppHeader/>
    <router-view/>
    <br>
    <br>
    <AppFooter/>
  </div>
</template>

<script>
import store from '@/store/index'
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  name: 'App',
  components: {
    AppFooter,
    AppHeader
  },
  mounted() {
    // if we have local storage data with name cartProducts we push it in our store using mutation method replaceProduct
    if (localStorage.getItem('cartProducts')) {
      store.commit('replaceProduct', JSON.parse(localStorage.getItem('cartProducts')))
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
}

.welcome-text {
  color: gray;
}
</style>
