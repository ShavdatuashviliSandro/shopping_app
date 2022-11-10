<template>
  <div>
    <h1 v-if="render===true">Shopping mall is open</h1>
    <h1 v-else-if="render===false">Sorry, we're closed</h1>
    <h1 v-else>Something bad happened to website</h1>
    <br>
    <p>Tech stack used in this</p>
    <p v-for="(item,index) in dataArray" :key="index">{{index}} - {{item}}</p>
    <br>
    <h3 :class="{'dev-text' : developerClass}">Developers:</h3>
    <p v-for="(item,index) in developersArray" :key="index">{{ item}}</p>
    <div v-html="editor"></div>
    <label for="text">Enter:</label>
    <input type="text" v-model="textValue">
    <br>
    {{textValue}}
    <div class="box" @click="clickFunction">

    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      textValue: null,
      editor: '<div><p>Copyright: Sandro</p></div>',
      developerClass: true,
      render: true,
      dataArray: ['Rails', 'Css', 'HTML', 'Vue.Js'],
      developersArray: ['Sandro Shavdatuashvili', 'Some other dev']
    }
  },
  methods:{
    clickFunction(){
      alert('You clicked the box')
    }
  }
}
</script>


<style scoped>
h1{
  font-size: 36px;
  color: orange;
}
.dev-text{
  color: darkgoldenrod;
}
.second-dev-text{
  color: green;
}
.box{
  width: 200px;
  height: 200px;
  background-color: #2c3e50;
}
</style>