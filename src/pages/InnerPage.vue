<template>
  <div class="inner">
    <div class="img-section">
      <img class="image" :src="currentData[0].url" alt="logo">
    </div>
    <div class="product-info">
      <strong class="product-title">{{ currentData[0].title }}</strong>
      <p class="product-description">
        {{ currentData[0].description }}
      </p>
      <strong class="product-price">Price: {{ full_balance }} USD</strong>
      <div class="quantity-section">
        <button class="button" :disabled="buttonDisabled === true" @click="minus">-</button>
        {{ quantity }}
        <button class="button" :disabled="buttonDisabled === true" @click="add">+</button>
      </div>
      <br>
      <button class="order-button" :disabled="buttonDisabled === true" @click="addItem"><strong>Add to cart</strong></button>
      <br>
    </div>
  </div>
</template>

<script>
import productData from '@/products.json'
import store from '@/store/index'

export default {

  data() {
    return {
      currentData: productData,
      quantity: 1,
      full_balance: 0,
      added_item: null,
      buttonDisabled: false
    }
  },
  mounted() {
    this.currentData = productData.filter(el => el.id === parseInt(this.$route.query.plan))
    this.full_balance = this.currentData[0].price * this.quantity
    this.disableButton()
  },
  methods: {
    minus() {
      if (this.quantity <= 1) {
        return 0
      } else {
        this.quantity--
        this.decreaseFullBalance()
      }
    },
    add() {
      this.quantity++
      this.increaseFullBalance()
    },
    increaseFullBalance() {
      this.full_balance += this.currentData[0].price
    },
    decreaseFullBalance() {
      this.full_balance -= this.currentData[0].price
    },
    disableButton(){
      store.getters.getProducts.forEach((element) => {
        if(element.id === this.currentData[0].id) {
          this.buttonDisabled = true
        }
      })
    },
    addItem() {
      this.added_item = {
        id: this.currentData[0].id,
        url: this.currentData[0].url,
        title: this.currentData[0].title,
        description: this.currentData[0].description,
        price: this.full_balance,
        quantity: this.quantity,
      }
      // on this line I call store (store/index.js) mutations method to push my added_item in state's cartProducts array
      store.commit("setProduct", this.added_item)
      // Created local storage with name of cartProducts, it saves our cartProducts defined in store
      localStorage.setItem('cartProducts', JSON.stringify(store.state.cartProducts))
      this.disableButton()
    }
  }
}

</script>

<style>
.inner{
  margin-top: 5%;
  display: inline-block;
  border-top: #2c3e50 1px solid;
  border-bottom: #2c3e50 1px solid;
}
.img-section {
  float: left;
  margin-top: 8%;
}

.image {
  width: 400px;
}

.product-title {
  font-size: 36px;
}

.product-description {
  font-size: 20px;
}

.product-price {
  font-size: 24px;
  color: green;
}

.product-info {
  width: 40%;
  margin-left: 36%;
  margin-top: 8%;
}

.quantity-section {
  margin-top: 20px;
}

.button {
  width: 40px;
  height: 25px;
  margin: 10px;
  cursor: pointer;
}

.order-button {
  width: 200px;
  height: 40px;
  background-color: #189b80;
  color: white;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  border: 1px solid;
}
.order-button:hover{
  color: #189b80;
  background-color: white;
}
</style>