import { defineStore } from 'pinia'

export const useCounterStore = defineStore('test', {
  state: () => {
    return { count: 0, token: '123' }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})