<template>
  <div class="box" @click="sendDataToParent">
    <h1>{{boxData.title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    boxData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  methods:{
    sendDataToParent(){
      this.$emit('sendData',this.boxData.title)
    }
  }
}
</script>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  border: 5px solid black;
}

</style>