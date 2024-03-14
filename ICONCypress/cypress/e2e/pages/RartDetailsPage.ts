class RartDetailsPage {
  DEPLOYMENT_DETAILS_REF = () =>
    cy.get(`:nth-child(8) > tbody > :nth-child(2) > .ng-binding`);
}

export default RartDetailsPage;
