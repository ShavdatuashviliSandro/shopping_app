<template>
  <div class="header">
    <div class="navbar">
      <ul class="nav">
        <li><router-link to="/">SHOPPING</router-link></li>
        <li id="my-cart">
          <router-link to="/cart">
            <sup>0</sup>Cart
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
ul.nav {
  margin:0;
  padding:0;
  list-style:none;
  height:40px; line-height:40px;
  background:#0d7963;
  font-family:Arial, Helvetica, sans-serif;
  font-size:13px;
}
ul.nav li {
  border-right:1px solid #189b80;
  float:left;
}
ul.nav a {
  display:block;
  padding:0 28px;
  color:#ccece6;
  text-decoration:none;
}
ul.nav a:hover,
ul.nav li.current a {
  background:#086754;
}

#my-cart{
  float: right;
  border-right: 1px solid #189b80;
  border-left: 1px solid #189b80;
}
</style>