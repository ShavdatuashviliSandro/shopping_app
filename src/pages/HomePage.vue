<template>
  <AppHeader/>
  <br>
  <div class="home">
    <div class="search-cont">
      <input v-model="searchWord" type="search" class="search" placeholder="Search your item...">
    </div>
    <div class="product-container">
      <AppProduct v-for="(item,index) in getData" :key="index" :data="item"/>
    </div>
  </div>
</template>

<script>
import productData from '../products.json';
import AppProduct from "@/components/AppProduct";
import AppHeader from "@/components/AppHeader";

export default {
  components: {AppHeader, AppProduct},
  data(){
    return{
      productsData: productData,
      searchWord: ''
    }
  },
  mounted(){

  },
  computed:{
    getData(){
      return this.productsData.filter(el => el.title.includes(this.searchWord))
    }
  }
}
</script>

<style scoped>
.product-container{
  margin-top: 50px;
}
.search{
  width: 250px;
  height: 30px;
}
</style>