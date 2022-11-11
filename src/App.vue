<template>
  <h3>
    <HeaderComponent :header_title="'black shoes for sale'" :color="'blue'" :font_size="15" />
    <Box v-for="(item,index) in dataArr " :key='index' :boxData="item" @sendData="getData"/>
  </h3>
</template>

<script>
import HeaderComponent from './components/AppHeader'
import Box from './components/AppBox'
export default {
  name: 'App',
  components:{
    HeaderComponent,
    Box
  },
  methods:{
    getData(val){
      console.log(val)
    }
  },
  data(){
    return{
      main: 'main title',
      dataArr:[
        {
          id: 1,
          title: 'box1'
        },
        {
          id: 2,
          title: 'box2'
        },
        {
          id: 3,
          title: 'box3'
        },
        {
          id: 4,
          title: 'box4'
        }
      ]

    }
  },
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
