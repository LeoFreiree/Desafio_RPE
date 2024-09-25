const { defineConfig } = require("cypress")

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 60000,
  e2e: {
    setupNodeEvents(on, config) {
      const loginPageConfig = require('./cypress/config/front/login/loginPage.env.json')
      config.env = { ...config.env, ...loginPageConfig }

      const loginUserConfig = require ('./cypress/config/front/login/loginUser.env.json')
      config.env = { ...config.env, ...loginUserConfig }

      return config
    },
  },
})
