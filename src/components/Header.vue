<template>
  <header class="header">
    <h1>Toko Olahraga</h1>
    <nav>
      <RouterLink to="/" exact-active-class="active">Home</RouterLink> |
      <RouterLink to="/products" exact-active-class="active">Produk</RouterLink> |
      <RouterLink to="/cart" exact-active-class="active">Keranjang</RouterLink>
      <RouterLink to="/login" exact-active-class="active">login</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.header {
  background: #007aff;
  padding: 30px 0;
  text-align: center;
  color: white;
}
.header h1 {
  margin: 0;
  font-size: 2.5rem;
}
nav {
  margin-top: 10px;
}
a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
a.active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
