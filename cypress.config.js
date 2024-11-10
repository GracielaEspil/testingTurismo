const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://tapalque.tur.ar',
      
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:['cypress/e2e/tests/**/*.{ts,js}'],
   
  },
});

