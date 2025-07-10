<template>
  <div class="product-card">
    <img :src="product.image" alt="gambar produk" />
    <div class="card-body">
      <h3>{{ product.name }}</h3>
      <p class="desc">{{ product.description }}</p>
      <p class="price">Rp {{ product.price.toLocaleString() }}</p>
      <button @click="cart.addToCart(product)">🛒 Tambah ke Keranjang</button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/cart'
defineProps(['product'])

const cart = useCartStore()
</script>

<style scoped>
.product-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  width: 240px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.2s;
}
.product-card:hover {
  transform: translateY(-5px);
}
.product-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}
.card-body {
  padding: 15px;
}
.card-body h3 {
  font-size: 1.1rem;
  margin: 10px 0 5px;
}
.card-body .desc {
  font-size: 0.9rem;
  color: #666;
  min-height: 40px;
}
.card-body .price {
  font-weight: bold;
  margin: 10px 0;
}
.card-body button {
  background-color: #007aff;
  border: none;
  color: white;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  width: 100%;
}
.card-body button:hover {
  background-color: #005bb5;
}
</style>
