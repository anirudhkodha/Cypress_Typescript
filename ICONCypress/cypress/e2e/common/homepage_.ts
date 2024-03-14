import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Dashboard from "../pages/Dashboard";
import Operations from "../pages/Operations&fiu";


const dashboard= new Dashboard()
const operations = new Operations()


    //****************************************************************************************/
    //                              ***RANDOMIZED DATA*** 
    //----------------------------------------------------------------------------------------}
Given ('I open ICON webpage',()=>{
    cy.loginToICON()
    // cy.loginToICONScriptTEST()

})


And('I can see dashboard', () => {
    dashboard.CURRENT_INCIDENTS().should('exist')    
})


When('I go to the ICON Landing Page',()=>{
    // I open ICON webpage
    cy.visit(`https://${Cypress.env('ICON_HOST_URL')}`,{failOnStatusCode:false})
    // I can see dashboard
    dashboard.CURRENT_INCIDENTS().should('exist')
})
 
When(/^I expand breadcrumb_menu & submenu "(.*?)"(?: "(.*?)")?$/,(menuString , submenu_item)=> {

   
    operations.OPEN_MENU_(menuString, submenu_item) 
    
})
    
And('I can see the page header {string}',(validatepage)=> {

    operations.VALIDATE_LANDING_FROM_TOPMENU(validatepage)
    

})