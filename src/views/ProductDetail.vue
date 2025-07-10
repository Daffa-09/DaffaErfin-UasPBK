<template>
  <div v-if="product">
    <h2>{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>Harga: Rp {{ product.price }}</p>
    <button @click="cart.addToCart(product)">Tambah ke Keranjang</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute } from 'vue-router'
import { useCartStore } from '../stores/cart'

const route = useRoute()
const product = ref(null)
const cart = useCartStore()

onMounted(async () => {
  const res = await axios.get(`http://localhost:3001/products/${route.params.id}`)
  product.value = res.data
})
</script>
