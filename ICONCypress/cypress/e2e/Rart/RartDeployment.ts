import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import RartListPage from "../pages/RartListPage";
import RartDetailsPage from "../pages/RartDetailsPage";
import Dashboard from "../pages/Dashboard";

// login using credentials
// import SecureLogon from "../pages/SecureLogon";
// const secureLogon = new SecureLogon();

const dashboard = new Dashboard();
const rartListPage = new RartListPage();
const rartDetailsPage = new RartDetailsPage();

// generic function to intercept network calls
const interceptCallAndAlias = function(
  method: string,
  url: string,
  alias: string
) {
  cy.intercept({
    method: method,
    url: url,
  }).as(alias);
};

// BR-RART-4

Given("I have opened web application", () => {
  //login using credentials
  //   secureLogon.logon(Cypress.env("ICON_USERNAME"), Cypress.env("ICON_PASSWORD"));

  //login using ntlm
  cy.loginToICON();
});

And("I can see dashboard", () => {
  dashboard.CURRENT_INCIDENTS().should("exist");
});

And("I expand operations tab", () => {
  dashboard
    .OPERATIONS()
    .should("be.visible")
    .click();
});

When("I select Rart operation", () => {
  // setting up interception for the final network call after rart tab is opened
  // aliasing
  interceptCallAndAlias(
    "GET",
    "/HO/Rart/RartIndexModel",
    "resolveRartListPage"
  );
  dashboard
    .RART_OPTION()
    .should("be.visible")
    .click();
});

And("I see the Rart list page", () => {
  // waiting for network call to resolve to make sure that the page has loaded
  cy.wait("@resolveRartListPage")
    .its("response.statusCode")
    .should("equal", 200);

  // asserting and aliasing the element
  rartListPage
    .FIRST_DEPLOYMENT()
    .as("firstDeployment")
    .should("have.length.greaterThan", 0);

  // aliasing reference number to check in another step
  rartListPage
    .FIRST_DEPLOYMENT()
    .invoke("text")
    .as("deploymentReference");
});

// intercept and alias network call and click on rart standup
And("I click the first Rart standup", () => {
  cy.get("@deploymentReference").then((el) => {
    interceptCallAndAlias(
      "GET",
      "/HO/Rart/ViewStandup/" + encodeURIComponent(el.toString()),
      "resolveRartDetailsPage"
    );
    cy.get("@firstDeployment").click();
  });
});

//wait till network call returns 200 and assert element on page
Then("I am taken to Rart Details page", () => {
  cy.wait("@resolveRartDetailsPage");
  rartDetailsPage.DEPLOYMENT_DETAILS_REF().should("have.length.greaterThan", 0);
});

//check if rart reference number is the same as the one clicked
And("I can see details of the Rart standup I clicked", () => {
  cy.get("@deploymentReference").then((el) => {
    rartDetailsPage.DEPLOYMENT_DETAILS_REF().should("have.text", el); 
   });
});
