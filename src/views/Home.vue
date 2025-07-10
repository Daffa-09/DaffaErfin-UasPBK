<template>
  <div class="home-container">
    <h1 class="title">Selamat Datang di Toko Olahraga</h1>
    <p class="subtitle">Dapatkan perlengkapan olahraga terbaik hanya di sini!</p>

    <h2 class="section-title">Produk Terbaru</h2>
    <div class="product-list">
      <div
        v-for="product in latestProducts"
        :key="product.id"
        class="product-card"
      >
        <img :src="product.image" alt="produk" class="product-image" />
        <h3>{{ product.name }}</h3>
        <p>Rp {{ formatPrice(product.price) }}</p>
        <router-link :to="`/products`" class="btn-detail">Lihat Semua</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const latestProducts = ref([])

const getLatestProducts = async () => {
  const res = await axios.get('http://localhost:3001/products?_sort=id&_order=desc&_limit=4')
  latestProducts.value = res.data
}

const formatPrice = (price) => {
  return price.toLocaleString('id-ID')
}

onMounted(getLatestProducts)
</script>

<style scoped>
.home-container {
  padding: 40px 20px;
  max-width: 1000px;
  margin: auto;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e90ff;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 40px;
  color: #1e90ff;
}

.section-title {
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: #007ffe;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-card {
  background: #fff;
  border-radius: 12px;
  padding: 15px;
  width: 200px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

h3 {
  margin: 10px 0 5px;
  color: #000;
}

p {
  margin: 0;
  color: #444;
  font-weight: bold;
}

.btn-detail {
  display: inline-block;
  margin-top: 10px;
  padding: 6px 12px;
  background-color: #1e90ff;
  color: white;
  text-decoration: none;
  border-radius: 6px;
}

.btn-detail:hover {
  background-color: #006ad1;
}
</style>
