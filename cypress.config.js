const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern = [
        'cypress/integration/Animals/test2.js',
        'cypress/integration/Animals/test3.js'
      ]
      return config
    },
    specPattern: 'cypress/integration',
    viewportHeight: 720,
    viewportWidth: 1280,
    reporter: 'cypress-multi-reporters', //mochawesome
    "reporterOptions": {
      "reporterEnabled" : "mochawesome",
      "mochawesomeReporterOptions": {
        "reportDir": "cypress/reports/mocha",
        "quite": true,
        "overwrite": false,
        "html": false,
        "json": true
    }
    },
    experimentalWebKitSupport: true

  },
});
