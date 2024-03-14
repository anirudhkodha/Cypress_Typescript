import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'afj6y3',
  // projectId: "afj6y3",
  pageLoadTimeout: 240000,
  responseTimeout: 120000,
  defaultCommandTimeout: 120000,
  execTimeout: 120000,
  redirectionLimit: 200,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)

    },
    video: true,
    specPattern: "**/*.feature",
    supportFile: "cypress/support/e2e.ts",
    trashAssetsBeforeRuns: false,
    viewportWidth: 1680,
    viewportHeight: 1050,
    retries: 	
    { 
    "runMode": 4,

    "openMode": 0 
    },
    experimentalInteractiveRunEvents: true
  }



})
