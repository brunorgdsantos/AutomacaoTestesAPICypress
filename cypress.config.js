const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results.xml",
      toConsole: true,
    },
    cypressMochawesomeReporterReporterOptions: {
      charts:true,
      reportPageTitle: "Relatório de Testes",
      embeddedScreenshots: true,
      saveAllAttempts: false,
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
