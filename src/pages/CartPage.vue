<template>
  <div class="cart">
    <AppHeader/>
    <h1>My cart page</h1>
    <div style="margin-top: 5%">
      <AppCartProduct v-for="(item,index) in cartData" :key='index' data="item"/>
      <div class="cart-info">
        <strong class="cart-balance-info">Full balance of items in my cart is:</strong>
        <p> - </p>
        <strong class="price">200 USD</strong>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppCartProduct from "@/components/AppCartProduct";
import productData from "@/products.json"
export default {
  components: {AppHeader, AppCartProduct},

  data(){
    return{
      cartData: productData

    }
  }

}
</script>

<style scoped>
.cart-info{
  float: left;
  margin-left: 30%
}
.cart-balance-info{
  font-size: 26px;
}
.price{
  font-size: 20px;
  color: #0d7963
}
</style>