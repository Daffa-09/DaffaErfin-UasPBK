<template>
  <div class="admin">
    <h2>Halaman Admin</h2>

    <!-- Form Tambah/Edit Produk -->
    <form @submit.prevent="isEditing ? updateProduct() : addProduct()">
      <input v-model="form.name" placeholder="Nama Produk" required />
      <input v-model="form.description" placeholder="Deskripsi" required />
      <input v-model.number="form.price" placeholder="Harga" required />
      <select v-model="form.category">
        <option value="baju">Baju</option>
        <option value="sepatu">Sepatu</option>
        <option value="bola">Bola</option>
      </select>
      <input type="file" @change="handleFileUpload" />
      <button type="submit">{{ isEditing ? 'Update' : 'Tambah' }}</button>
    </form>

    <hr />

    <!-- Daftar Produk -->
    <div v-for="product in products" :key="product.id" class="product">
      <img :src="product.image" width="100" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p style="color: black;">Rp {{ product.price }}</p>
      <button @click="editProduct(product)">Edit</button>
      <button @click="deleteProduct(product.id)">Hapus</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const products = ref([])
const isEditing = ref(false)
const form = ref({
  id: null,
  name: '',
  description: '',
  price: 0,
  category: 'baju',
  image: ''
})

const getProducts = async () => {
  const res = await axios.get('http://localhost:3001/products')
  products.value = res.data
}

onMounted(getProducts)

const addProduct = async () => {
  // Buat id otomatis
  const maxId = products.value.length > 0
    ? Math.max(...products.value.map(p => parseInt(p.id)))
    : 0
  const newProduct = { ...form.value, id: maxId + 1 }

  await axios.post('http://localhost:3001/products', newProduct)
  resetForm()
  getProducts()
}

const deleteProduct = async (id) => {
  await axios.delete(`http://localhost:3001/products/${id}`)
  getProducts()
}

const editProduct = (product) => {
  isEditing.value = true
  form.value = { ...product }
}

const updateProduct = async () => {
  await axios.put(`http://localhost:3001/products/${form.value.id}`, {
    ...form.value,
    description: form.value.description,
    price: form.value.price
  })
  resetForm()
  getProducts()
}

const resetForm = () => {
  form.value = {
    id: null,
    name: '',
    description: '',
    price: 0,
    category: 'baju',
    image: ''
  }
  isEditing.value = false
}

const handleFileUpload = (event) => {
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.onloadend = () => {
    form.value.image = reader.result
  }
  if (file) reader.readAsDataURL(file)
}
</script>

<style scoped>
.admin {
  padding: 30px;
  max-width: 800px;
  margin: auto;
}

form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.product {
  background: #ffffff;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
}

.product:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}

.product img {
  width: 100px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.product h3 {
  margin: 5px 0;
  font-size: 1.2em;
  color: #000000;
}

.product p {
  margin: 5px 0;
  color: #444444;
  font-size: 0.95em;
}

button {
  margin-right: 10px;
  padding: 6px 12px;
  border: none;
  background-color: #1e90ff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #006ad1;
}
</style>
