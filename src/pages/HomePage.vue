<template>
  <div class="home">
    <router-link to="about">
      <button>Go to about page with vue</button>
    </router-link>
    <h1>This is home page</h1>
    <br>
    <button @click="active = !active">Open</button>
    <slide-up-down v-model="active" :duration="500">
      <br>
      Hello! state number is {{store_number}}
      <br>
      <button @click="addNumberToState">Increase</button>
<!--      <button @click="decreaseNumberToState">Decrease</button>-->
    </slide-up-down>
  </div>
</template>

<script>
import store from '../store/index'

export default {
  data(){
    return{
      active: true,
      store_number: store.state.number
    }
  },
  mounted() {
    store.commit('addVal')
    // store.commit('decreaseVal')
    this.store_number = store.getters.getVal
  },
  methods:{
    addNumberToState(){
       this.store_number++
    },
    decreaseNumberToState(){
       this.store_number--
    }
  }

}
</script>

<style scoped>

</style>