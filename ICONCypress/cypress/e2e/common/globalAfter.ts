// import { After } from 'cypress-cucumber-preprocessor/steps';


// After({tags:"@Regression"},() => {
//   cy.screenshot({capture:"runner", overwrite:true});
//   var screenshotsFolder = Cypress.config("screenshotsFolder");
//   var testState = window.testState;
//   var stepResult = testState.runTests[testState.currentScenario.name][testState.currentStep];
//     var screenshotFileName = `${testState.feature.name.replace(/"|\/|\\|:|\||<|>|\*/g,'').trim()} -- ${testState.currentScenario.name.replace(/"|\/|\\|:|\||<|>|\*/g,'').trim()} -- after each hook.png`;
//   cy.readFile(
//     `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
//     "base64"
//   ).then((imgData) => {
//     stepResult.attachment = {
//       data: imgData,
//       media: { type: "image/png" },
//       index: testState.currentStep,
//       testCase: testState.formatTestCase(testState.currentScenario),
//     };
//   });
// })