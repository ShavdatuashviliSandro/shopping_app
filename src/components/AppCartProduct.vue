<template>
  <div class="cart-product">
    <div class="img" style="float: left" @click="openInner">
      <img :src="data.url" alt="photo">
    </div>
    <div>
      <br>
      <strong class="cart-product-item">{{ data.title }}</strong>
      <p>{{ data.description }}</p>
      <p>Quantity: {{ data.quantity }}</p>
      <strong class="cart-price">Price: {{ data.price }} USD</strong>
      <br>
      <button class="delete-button"><strong>Delete</strong></button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
      type: Object
    }
  },
  data() {
    return {}
  },
  methods: {
    openInner() {
      this.$router.push({path: 'inner', query: {plan: this.data.id}})
    }
  }
}
</script>

<style scoped>
.img {
  cursor: pointer;
}

.cart-product {
  border: 1px solid;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  max-height: 620px;
}

.cart-product-item {
  font-size: 20px;
}

.delete-button {
  margin-top: 25px;
  width: 100px;
  height: 35px;
  background-color: darkred;
  color: white;
  border: none;
  cursor: pointer;
}
</style>