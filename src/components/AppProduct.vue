<template>
  <div class="product">
    <div class="img">
      <img :src="data.url" alt="photo" @click="openInner">
    </div>
    <strong class="title">{{ data.title }}</strong>
    <p class="description">{{ data.description }}</p>
    <strong class="price">{{ data.price }}.00 USD</strong>
    <div style="text-align: center;">
      <button class="view" @click="openInner">View</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {}
  },
  methods:{
    openInner(){
      this.$router.push({path: 'inner', query: { plan: this.data.id }})
    }
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.product {
  border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  width: 400px;
  height: auto;
  display: inline-block;
  margin-left: 25px;
  margin-top: 25px;
  border-radius: 3px;
}
.title{
  font-size: 18px;
}
.description{
  font-size: 15px;
}
.price{
  color: green;
}
.view{
  background-color: #4CAF50;
  border: none;
  color: white;
  width: 150px;
  height: 35px;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

}
</style>