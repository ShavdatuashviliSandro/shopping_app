<template>
    <title>Shop - home</title>
  <div class="header">
    <div class="navbar">
      <header>
        <ul class="nav">
          <li>
            <router-link to="/">SHOPPING</router-link>
          </li>
          <li :class="{'active' :active}" id="my-cart" class="cart">
            <router-link to="/cart">
              <span>{{ getProductLength }}</span> - Cart
            </router-link>
          </li>
        </ul>
      </header>
    </div>
  </div>
</template>

<script>
import store from '@/store/index'

export default {
  data() {
    return {
      active: false
    }
  },
  computed: {
    getProductLength() {
      return store.getters.getProducts.length
    }
  },
  watch: {
    getProductLength: function () {
      this.active = true
      setTimeout(() => {
        this.active = false
      }, 10)
    }
  }
}
</script>

<style scoped>
ul.nav {
  margin: 0;
  padding: 0;
  list-style: none;
  height: 36px;
  line-height: 36px;
  background: #0d7963;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 13px;
}

ul.nav li {
  border-right: 1px solid #189b80;
  float: left;
}

ul.nav a {
  display: block;
  padding: 0 28px;
  color: #ccece6;
  text-decoration: none;
}

ul.nav a:hover,
ul.nav li.current a {
  background: #086754;
}

#my-cart {
  float: right;
  border-right: 1px solid #189b80;
  border-left: 1px solid #189b80;
}

header .cart {
  transition: 2s;
}

header .cart.active {
  transform: scale(2);
}
</style>