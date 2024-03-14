class RartListPage {
  FIRST_DEPLOYMENT = () =>
    cy.get(`:nth-child(1) > [data-title="'Reference'"] > .ng-binding`);
}

export default RartListPage;
