<template>
  <router-link to="/">
    <button>Go to home page</button>
  </router-link>
  <div class="about-page">
    <h1>This is about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  }

}
</script>

<style scoped>

</style>