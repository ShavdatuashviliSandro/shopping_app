<template>
  <AppHeader/>
  <div class="inner" style="display: inline-block">
    <div class="img-section">
      <img class="image" :src="currentData[0].url" alt="logo">
    </div>
    <div class="product-info">
      <strong class="product-title">{{currentData[0].title}}</strong>
      <p class="product-description">
        {{currentData[0].description}}
      </p>
      <strong class="product-price">Price: {{full_balance}} USD</strong>
      <div class="quantity-section">
        <button class="button" @click="minus">-</button>
        {{ quantity }}
        <button class="button" @click="add">+</button>
      </div>

      <br>
      <br>
      <br>
      <button class="order-button" @click="addItem"><strong>Add to cart</strong></button>

    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import productData from '@/products.json'
import store from '@/store/index'
export default {
  components: {AppHeader},

  data() {
    return {
      currentData: productData,
      quantity: 1,
      full_balance: 0,
      added_item: {}
    }
  },
  mounted() {
    this.currentData = productData.filter(el => el.id === parseInt(this.$route.query.plan))
    this.full_balance = this.currentData[0].price * this.quantity
  },
  methods:{
    minus(){
      if(this.quantity<=1){
        return 0
      }else{
        this.quantity--
        this.decreaseFullBalance()
      }
    },
    add(){
      this.quantity++
      this.increaseFullBalance()
    },
    increaseFullBalance(){
      this.full_balance += this.currentData[0].price
    },
    decreaseFullBalance(){
      this.full_balance -= this.currentData[0].price
    },
    addItem(){
      this.added_item = {
        id: this.currentData[0].id,
        url: this.currentData[0].url,
        title: this.currentData[0].title,
        description: this.currentData[0].description,
        price: this.full_balance,
        quantity: this.quantity,
      }
      // on this line I call store (store/index.js) mutations method to push my added_item in states cartProducts list
      store.commit("setProduct", this.added_item)
      console.log(store.state.cartProducts)
    }
  }
}

</script>

<style>
.img-section {
  float: left;
  margin-top: 10%;
}

.image {
  width: 400px;
}

.product-title {
  font-size: 36px;
}
.product-description{
  font-size: 20px;
}

.product-price{
  font-size: 24px;
  color: green;
}

.product-info {
  width: 80%;
  margin-left: 400px;
  margin-top: 200px;
}
.quantity-section{
  margin-top: 20px;
}
.button{
  width: 40px;
  height: 25px;
  margin: 10px;
}
.order-button {
  width: 200px;
  height: 40px;
  background-color: antiquewhite;
  color: black;
  border-radius: 5px;
  font-size: 16px;
}
</style>