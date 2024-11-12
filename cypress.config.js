const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "c3826x", // this is taken from cypress cloud when creating new project and we want to link it with our local one
  e2e: {
    chromeWebSecurity: false,
    experimentalStudio: true,
    downloadsFolder:'cypress/downloads',
    trashAssetsBeforeRuns: true,
    reporter: 'mochawesome', // Or another valid reporter like 'junit'
    reporterOptions: {
      // Add reporter options if required
      reportDir: 'cypress/results',
      overwrite:true,
      JSON:true,
    },
   // experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
});


