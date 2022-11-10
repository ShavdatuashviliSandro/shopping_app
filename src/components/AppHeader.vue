<template>
  <div class="main-class">
<!--    directives-->
    <h1 v-if="render===true">Shopping mall is open</h1>
    <h1 v-else-if="render===false">Sorry, we're closed</h1>
    <h1 v-else>Something bad happened to website</h1>
    <br>
    <p>Tech stack used in this</p>
    <p v-for="(item,index) in dataArray" :key="index">{{ index }} - {{ item }}</p>
    <br>
    <h3 :class="{'dev-text' : developerClass}">Developers:</h3>
    <p v-for="(item,index) in developersArray" :key="index">{{ item }}</p>
<!--    -->
    <div v-html="editor"></div>
<!--    -->
<!--    interacted input-->
    <label for="text">Enter:</label>
    <input type="text" v-model="textValue">
    {{ textValue }}
<!--    -->
    <div class="box" @click="clickFunction">
      {{ getData }}
    </div>
<!--    button increase-decrease-->
    <button @click="numberVariable--">-</button>
    {{ numberVariable }}
    <button @click="numberVariable++">+</button>
    <p>You want {{getData}} piece</p>
<!--    -->
  </div>
</template>

<script>
export default {
  // data is for variables we use in html, variables like Array, String, div block etc.
  data() {
    return {
      numberVariable: 0,
      textValue: null,
      editor: '<div><p>Copyright: Sandro</p></div>',
      max_limit: '<p>maximum limit<p/>',
      developerClass: true,
      render: true,
      dataArray: ['Rails', 'Css', 'HTML', 'Vue.Js'],
      developersArray: ['Sandro Shavdatuashvili', 'Some other dev']
    }
  },
  // methods is for functions like click, for example: @click='changeColor'
  methods: {
    clickFunction() {
      console.log(this.dataArray)
    }
  },
  // is called after page will be uploaded in browser
  mounted() {
    this.clickFunction()
  },
  created() {
    console.log(this.render)
  },
  // computed is a reactive data
  computed: {
    getData() {
      return this.numberVariable
    }
  },
  //watch is a like a watcher to a specific paragraph or a div, we can make
  watch: {
    numberVariable: {
      immediate: true,
      handler: function (){
        if (this.numberVariable > 5) {
          this.numberVariable = 0;
        }
      }
    }
  }
}
</script>


<style scoped>
h1 {
  font-size: 36px;
  color: orange;
}

.dev-text {
  color: darkgoldenrod;
}

.second-dev-text {
  color: green;
}

.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>