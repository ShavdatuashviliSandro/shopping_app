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
      <strong class="product-price">Price: {{currentData[0].price}} USD</strong>
      <div class="quantity-section">
        <button class="button">+</button>
        {{ quantity }}
        <button class="button">-</button>
      </div>

      <br>
      <br>
      <br>
      <button class="order-button">Order</button>

    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import productData from '@/products.json'
export default {
  components: {AppHeader},

  data() {
    return {
      currentData: productData,
      quantity: 0
    }
  },
  mounted() {
    this.currentData = productData.filter(el => el.id === parseInt(this.$route.query.plan))
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
  color: black;
  background-color: antiquewhite;
  border: 2px solid;
}
.order-button {
  width: 200px;
  height: 40px;
  background-color: antiquewhite;
  color: black;
  border-radius: 5px;
}
</style>