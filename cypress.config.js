const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //implement node event listeners here
    },
    defaultCommandTimeout: 6000,
    watchForFileChanges: false,
    'baseUrl':'https://pushing-front.vercel.app/'
  },
});
