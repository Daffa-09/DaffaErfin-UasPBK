<template>
  <div class="products">
    <h2>Daftar Produk Olahraga</h2>

    <!-- Baju -->
    <div class="category-section">
      <h3>Baju</h3>
      <div class="product-list">
        <div class="product" v-for="p in products.filter(p => p.category === 'baju')" :key="p.id">
          <img :src="p.image" alt="produk" />
          <h4>{{ p.name }}</h4>
          <p>{{ p.description }}</p>
          <strong class="harga">Rp {{ p.price.toLocaleString() }}</strong>
          <button @click="addToCart(p)">Masukkan ke Keranjang</button>
        </div>
      </div>
    </div>

    <!-- Sepatu -->
    <div class="category-section">
      <h3>Sepatu</h3>
      <div class="product-list">
        <div class="product" v-for="p in products.filter(p => p.category === 'sepatu')" :key="p.id">
          <img :src="p.image" alt="produk" />
          <h4>{{ p.name }}</h4>
          <p>{{ p.description }}</p>
         <strong class="harga">Rp {{ p.price.toLocaleString() }}</strong>
          <button @click="addToCart(p)">Masukkan ke Keranjang</button>
        </div>
      </div>
    </div>

    <!-- Bola -->
    <div class="category-section">
      <h3>Bola</h3>
      <div class="product-list">
        <div class="product" v-for="p in products.filter(p => p.category === 'bola')" :key="p.id">
          <img :src="p.image" alt="produk" />
          <h4>{{ p.name }}</h4>
          <p>{{ p.description }}</p>
          <strong class="harga">Rp {{ p.price.toLocaleString() }}</strong>
          <button @click="addToCart(p)">Masukkan ke Keranjang</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useCartStore } from '../stores/cart'

const products = ref([])
const cart = useCartStore()

const addToCart = (product) => {
  cart.addToCart(product)
}

onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3001/products')
    products.value = res.data
  } catch (err) {
    console.error('Gagal mengambil produk:', err)
  }
})
</script>

<style scoped>
.products {
  text-align: center;
  padding: 20px;
}
.category-section {
  margin-bottom: 40px;
}
.product-list {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}
.product {
  background: #f1f1f1;
  padding: 15px;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
.product img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}
.product h4 {
  margin: 10px 0 5px;
  color: #000;
}
.product p {
  font-size: 0.9rem;
  color: #444;
}
button {
  margin-top: 10px;
  padding: 5px 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
.harga {
  color: #000;
}

</style>
