<template>
  <AppHeader/>
  <br>
  <div class="home">
    <div class="search-cont">
      <input v-model="searchWord" type="search" class="search" placeholder="Search your item...">
    </div>
    <div class="search-result">
      <strong v-show="errorMessage.length !== 0">{{errorMessage}}</strong>
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
      searchWord: '',
      errorMessage: ''
    }
  },
  computed:{
    getData(){
      return this.productsData.filter(el => el.title.toLowerCase().includes(this.searchWord.toLowerCase()))
    }
  },
  watch:{
    getData:{
      immediate: true,
      handler: function(){
        if(this.getData.length===0){
          this.errorMessage = 'Sorry.. we cant find item with this name.'
        }
      }
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
.search-result{
  margin-top: 70px;
  font-size: 30px;
}
</style>