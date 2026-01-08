import { defineConfig } from 'vitest/config'

export default defineConfig({
  define: {
    __DEV__: true
  },
  resolve: {

  },
  test: {
    name: 'unit'
  }
})