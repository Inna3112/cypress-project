const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // для всього проекту змінить з 4000 на 6000
  // defaultCommandTimeout: 6000,
  env: {
    url: 'https://rahulshettyacademy.com',
    // userId: 'admin',
    // password: 'password',
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    // specPattern: 'cypress/integraions/examples/*.js',
  },
});
