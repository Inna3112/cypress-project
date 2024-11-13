const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // для всього проекту змінить з 4000 на 6000
  // defaultCommandTimeout: 6000,
  env: {
    url: 'https://rahulshettyacademy.com',
    // userId: 'admin',
    // password: 'password',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // specPattern: 'cypress/integraions/examples/*.js',
  },
});
