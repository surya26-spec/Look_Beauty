const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false,   // 🔥 safest in OCI
    specPattern: 'cypress/e2e/**/*.cy.js'
  }
})
