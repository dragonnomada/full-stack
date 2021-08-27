<template>
  <ProductList />
  <ProductDetails />
</template>

<script>
import ProductList from './components/ProductList.vue'
import ProductDetails from './components/ProductDetails.vue'

export default {
  name: 'App',
  components: {
    ProductList,
    ProductDetails,
  }
}
</script>

<style>
#app {
  display: flex;
}
</style>
