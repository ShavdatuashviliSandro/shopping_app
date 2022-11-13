<template>
  <div class="cart">
    <h1>My cart page</h1>
    <strong class="cart-balance-info">Full balance of items in my cart is:</strong>
    <p> - </p>
    <strong class="price">{{ this.getFullBalance }} USD</strong>
    <div class="cart-products">
      <p class="err" v-show="getData.length === 0">🛒 Your cart is empty</p>
      <AppCartProduct v-for="(item,index) in getData" :key='index' :data="item" @getId="deleteItem"/>
    </div>
  </div>
</template>

<script>
import AppCartProduct from "@/components/AppCartProduct";
import store from '@/store/index'

export default {
  components: {AppCartProduct},

  data() {
    return {
      full_balance: 0
    }
  },
  computed: {
    getData() {
      return store.getters.getProducts
    },
    getFullBalance() {
      let balance = 0
      this.getData.forEach(item => {
        balance += item.price
      })
      return balance;
    }
  },
  methods: {
    deleteItem(id) {
      store.commit('removeProduct', id)
      localStorage.setItem('cartProducts', JSON.stringify(store.state.cartProducts))
    }
  }
}
</script>

<style scoped>

.cart-balance-info {
  font-size: 26px;
}

.price {
  font-size: 20px;
  color: #0d7963
}

.cart-products {
  margin-top: 5%;
  height: 1000px;
  margin-left: 20px;
}

.err {
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  color: darkred
}
</style>