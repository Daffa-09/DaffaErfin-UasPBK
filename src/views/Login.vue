<template>
  <div class="login-container">
    <h2>Login Admin</h2>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const login = () => {
  if (username.value === 'admin' && password.value === 'admin123') {
    localStorage.setItem('isAdmin', 'true')
    router.push('/admin')
  } else {
    error.value = 'Username atau Password salah!'
  }
}
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 100px auto;
  padding: 20px;
  background: #1e1e1e;
  color: white;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 10px #007aff;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 5px;
}
button {
  padding: 10px 20px;
  background: #007aff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
