/// <reference types="cypress-xpath" />
class rartPage{

    LGA_DD =() => cy.get(`.select2-choice`)

    CHECKBOX =() => cy.get(`input[type="checkbox"]`) //5 checkboxes

    REPORTS_BTN=() => cy.get(`[href="/HO/Rart/RartReports"]`)
    NEWSTANDUP_BTN=() => cy.get(`[href="#/DeploymentDetails"]`)
    
    RART_TABLE_COLS =() => cy.xpath(`//span[contains(text(),'Reference')]`) //8columns
    TAB_FIRST_ROW =() => cy.get('.table.table-condensed.table-bordered.ng-scope.ng-table>tbody>tr:nth-child(1)>td')    
}

export default rartPage