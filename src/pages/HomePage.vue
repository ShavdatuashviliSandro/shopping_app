<template>
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
  <br>
  <br>
  <br>
</template>

<script>
import productData from '../products.json';
import AppProduct from "@/components/AppProduct";
export default {
  components: {AppProduct},
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
        }else{
          //else statement for not return error message when we delete search field
          this.errorMessage = ''
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
.search-cont{
  margin-top: 30px;
}
.search-result{
  margin-top: 50px;
  font-size: 30px;
}
</style>