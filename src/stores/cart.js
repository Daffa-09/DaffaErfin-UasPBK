import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    totalPrice(state) {
      return state.items.reduce((total, item) => {
        const price = typeof item.price === 'string'
          ? Number(item.price.toString().replace(/\./g, ''))
          : item.price
        return total + (item.quantity * price)
      }, 0)
    }
  },
  actions: {
    addToCart(product) {
      const existing = this.items.find(item => item.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        const price = typeof product.price === 'string'
          ? Number(product.price.toString().replace(/\./g, ''))
          : product.price

        this.items.push({
          ...product,
          quantity: 1,
          price
        })
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.id !== productId)
    }
  }
})
