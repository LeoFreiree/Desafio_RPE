const { defineConfig } = require("cypress")

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      const envConfig = require('./cypress.env.json')
      config.env = { ...config.env, ...envConfig }
      return config
    },
  },
})
