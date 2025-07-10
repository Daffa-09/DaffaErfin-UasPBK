<template>
  <div class="cart-container">
    <h2 class="cart-title">Keranjang</h2>

    <div v-if="cart.items.length === 0">Keranjang Kosong</div>

    <div v-for="item in cart.items" :key="item.id" class="cart-item">
      <h4 class="item-title">{{ item.name }}</h4>
      <p class="item-price">
        {{ item.quantity }} x Rp {{ formatPrice(item.price) }} =
        <strong>Rp {{ formatPrice(item.quantity * item.price) }}</strong>
      </p>
      <button class="delete-button" @click="cart.removeFromCart(item.id)">Hapus</button>
    </div>

    <div v-if="cart.items.length > 0" class="checkout-form">
      <h3 class="total-label">Total: Rp {{ formatPrice(cart.totalPrice) }}</h3>

      <div class="form-section">
        <input v-model="name" type="text" placeholder="Nama Penerima" required />
        <textarea v-model="address" placeholder="Alamat" rows="3" required></textarea>
        <select v-model="paymentMethod" required>
          <option disabled value="">Pilih Metode Pembayaran</option>
          <option value="transfer">Transfer Bank</option>
          <option value="cod">Bayar di Tempat (COD)</option>
          <option value="qris">QRIS</option>
        </select>
      </div>

      <button class="pay-button" @click="handlePayment">Bayar Sekarang</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
const cart = useCartStore()

const name = ref('')
const address = ref('')
const paymentMethod = ref('')

function formatPrice(value) {
  return value.toLocaleString('id-ID')
}

function handlePayment() {
  if (!name.value || !address.value || !paymentMethod.value) {
    alert('Mohon lengkapi data pembayaran!')
    return
  }

  alert(`Pembayaran berhasil!\n\nNama: ${name.value}\nAlamat: ${address.value}\nMetode: ${paymentMethod.value}`)
  cart.clearCart()
  name.value = ''
  address.value = ''
  paymentMethod.value = ''
}
</script>

<style scoped>
.cart-container {
  max-width: 600px;
  margin: 30px auto;
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.cart-title {
  color: #000;
  font-size: 1.8rem;
  margin-bottom: 20px;
}

.cart-item {
  margin-bottom: 20px;
  padding: 15px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.item-title {
  font-weight: bold;
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.item-price {
  font-weight: bold;
  color: #000;
  font-size: 1rem;
  margin-bottom: 10px;
}

.delete-button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.delete-button:hover {
  background-color: #d93636;
}

.total-label {
  font-size: 1.4rem;
  color: #000;
  margin-top: 20px;
}

.checkout-form {
  margin-top: 30px;
}

.form-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}

input,
textarea,
select {
  padding: 10px;
  font-size: 1rem;
  border-radius: 6px;
  border: 1px solid #ccc;
}

.pay-button {
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

.pay-button:hover {
  background-color: #218838;
}
</style>
