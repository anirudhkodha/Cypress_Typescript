/// <reference types="cypress-xpath" />
class S44ReportPage{

    RUN_REP_BTN =() => cy.get(`input[value="Run the Report"]`)  
    REPORT_IFRAME =() => cy.get(`#frmReport`)
}

export default S44ReportPage