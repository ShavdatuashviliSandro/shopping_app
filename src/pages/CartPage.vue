<template>
  <div class="cart">
    <AppHeader/>
    <h1>My cart page</h1>
    <div class="cart-info">
      <strong class="cart-balance-info">Full balance of items in my cart is:</strong>
      <p> - </p>
      <strong class="price">{{this.getFullBalance}} USD</strong>
    </div>
    <br><br>
    <div class="cart-products" style="width: 100%;height:100%;position: absolute;">
      <p class="err" v-show="getData.length === 0" style="font-weight: bold; font-size: 30px;text-align: center; color: darkred">Your cart is empty</p>
      <AppCartProduct v-for="(item,index) in getData" :key='index' :data="item"/>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppCartProduct from "@/components/AppCartProduct";
import store from '@/store/index'

export default {
  components: {AppHeader, AppCartProduct},

  data() {
    return {
      full_balance: 0
    }
  },
  computed: {
    getData() {
      return store.getters.getProducts
    },
    getFullBalance(){
      let balance = 0
      this.getData.forEach(item => {
        balance+=item.price
      })
      return balance;
    }
  }
}
</script>

<style scoped>
.cart-info {
  float: left;
  margin-left: 40%;
}

.cart-balance-info {
  font-size: 26px;
}

.price {
  font-size: 20px;
  color: #0d7963
}

.cart-products {
  margin-top: 5%;
  width: 100%;
  height: 100%;
  display: flex
}
</style>