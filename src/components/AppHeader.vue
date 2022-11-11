<!--1:08:40-->

<template>
  <h1 v-if="header_title===undefined">this is default header</h1>
  <h1 :style="`color: ${color}`">{{header_title}}</h1>
  <h1 class="item-description" :style="`font-size: ${font_size}px`">this bag is very soft and easy to use</h1>
</template>

<script>
export default {
  //to give parameters from parent to child, its if we want to use same components more than once
  props: {
    header_title: {
      required: false
    },
    color:{
      required: false
    },
    font_size:{
      required: false
    }
  },
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
.item-description{
  color: black;
}
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