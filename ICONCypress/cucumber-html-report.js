const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
metadata: {
browser: {
name: "Chrome",
version: "",
},
device: "Global",
platform: {
name: "Windows ",
version: "10 Pro",
},
},
});