<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
</script>

<style>
body {
  margin: 0;
  background-color: #121212;
  color: #fff;
  font-family: 'Segoe UI', sans-serif;
}
</style>
