<template>
  <div class="home">
    <div class="search-cont">
      <input type="search" class="search" placeholder="Search your item...">
    </div>
    <div class="product-container">
      <AppProduct v-for="(item,index) in products" :key="index" :data="item"/>
    </div>
  </div>
</template>

<script>
import productData from '../products.json'
import AppProduct from "@/components/AppProduct";

export default {
  components: {AppProduct},
  data(){
    return{
      products: productData
    }
  }
}
</script>

<style scoped>

</style>