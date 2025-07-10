# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

# Aplikasi Frontend Toko Olahraga

 Latar Belakang

Di era digital saat ini, transaksi jual beli semakin banyak dilakukan secara online. Website e-commerce telah menjadi solusi utama untuk menjual berbagai produk, termasuk perlengkapan olahraga. Oleh karena itu, saya memilih untuk membangun aplikasi toko online yang menjual perlengkapan olahraga seperti baju bola, sepatu, dan bola, sebagai studi kasus untuk tugas akhir mata kuliah Pemrograman Berbasis Komponen (PBK).

Tujuan dari aplikasi ini adalah untuk menampilkan daftar produk berdasarkan kategori, mempermudah pengguna dalam memilih produk, dan menyediakan fitur keranjang belanja serta admin panel untuk mengelola data produk.

---
Tools & Teknologi

Berikut adalah tools dan library yang digunakan dalam membangun aplikasi ini:

- **Vue 3**: Framework frontend utama untuk membangun UI yang reaktif.
- **Pinia**: State management untuk mengatur data keranjang belanja.
- **Vue Router**: Mengatur navigasi antar halaman seperti Home, Produk, dan Admin.
- **Axios**: Untuk melakukan HTTP request ke backend json-server.
- **json-server**: Backend palsu untuk menyimpan data produk (dihosting di Vercel).
- **Netlify**: Untuk deploy frontend secara gratis dan cepat.

---

Fitur Aplikasi

- Menampilkan produk berdasarkan kategori: Baju, Sepatu, dan Bola
- Menambahkan produk ke dalam keranjang
- Halaman Keranjang lengkap dengan total harga dan tombol Pembayaran
- Halaman Admin:
  - Tambah produk baru (dengan gambar base64)
  - Edit deskripsi dan harga produk
  - Hapus produk
- Sistem Login sederhana untuk masuk ke halaman Admin

Struktur Aplikasi
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── stores/
│   ├── views/
│   ├── App.vue
│   └── main.js
├── index.html
└── vite.config.js


Frontend ini dideploy menggunakan Netlify, dan terkoneksi dengan backend yang dideploy di Vercel.

Contoh:
- Frontend: `https://toko-olahraga.netlify.app`
- Backend API: `https://backend-uasprak.vercel.app/products`

- Nama: Daffa Erfin
- NPM: 233510462
- Jurusan: Teknik Informatika
- Universitas: Universitas Islam Riau
- Mata Kuliah: Pemrograman Berbasis Komponen (PBK)
- Semester: 4