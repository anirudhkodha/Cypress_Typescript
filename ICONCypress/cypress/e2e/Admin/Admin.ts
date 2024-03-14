import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import Dashboard from '../pages/Dashboard'
import UserSearch from '../pages/UserSearch';
import EscadIconDataDisplay from '../pages/EscadIconDataDisplay'
import dayjs from 'dayjs'
import INCIDENTLOCATORS from '../pages/Incidentlocators';
import Operations from "../pages/Operations&fiu";
import BIRS_COMMONPAGES from '../pages/Birs_common_pages';



const dashboard = new Dashboard()
const userSearch = new UserSearch()
const escadIconDataDisplay = new EscadIconDataDisplay()
const incidentlocators = new INCIDENTLOCATORS()
const operations = new Operations()
const birspage = new BIRS_COMMONPAGES()


Given('I have opened web application', () => {
    cy.ntlmReset()
    cy.loginToICON()
})

When('I expand Admin menu', () => {
    dashboard.ADMIN_MENU_ICON().click()
})
And('I expand Administration menu', () => {
    dashboard.ADMINISTRATION_MENU().should('exist').invoke('show')
})
And('I Select User Management link', () => {
    dashboard.ICON_USER_MANAGEMENT_MENU().click({force: true})
    cy.waitForLoadingSpinner()
})
Then('I Verify User Search Page controls', () => {
    
    userSearch.USER_AGENCY().should('be.visible')
    userSearch.USER_AGENCY().select("Rural Fire Service")
    userSearch.btn_Search().click({force: true})

    userSearch.RESULT_SUMMARY().should('contain.text', 'Showing 1 to 10 of')
})
And('I can look for {string}', (keyword) => {
    userSearch.SEARCH_EMAIL().type(Cypress.env('TEST_USER_RFS_Email'),{force: true})
    userSearch.SEARCH_KEYWORD().click()
    userSearch.SEARCH_KEYWORD().type(keyword,{force: true})
})
And('I verify total numbers of users', () => {
    userSearch.RESULT_SUMMARY().should('contain.text', '(')
    userSearch.RESULT_SUMMARY().should('contain.text', 'Showing 1 to 10 of')

})


//>>>>>>>>>>>>> BR-ADMIN-11 ESCAD ICON Data Display >>>>>>>>>>>



Given('Escad-Icon Data Display page is displayed', () => {
    // Login to ICON
    cy.loginToICON()
    
    // Check current incidents list is displayed
    dashboard.CURRENT_INCIDENTS().should('exist')
    
    // Click on the admin menu icon
    dashboard.ADMIN_MENU_ICON().click()
    
    // The administration menu should appear
    dashboard.ADMINISTRATION_MENU().should('exist')
    
    // Click on the Escad-Icon Data Display menu
    dashboard.ESCAD_ICON_DATA_DISPLAY_MENU().click({force: true})

    // Wait for loading spinner
    cy.waitForLoadingSpinner()

    // Check Incident Start From field is displayed
    escadIconDataDisplay.INCIDENT_START_FROM().should('exist')
})
When('the user searches by incident start from past 3 months', () => {
    // Enter incident start from date from 3 months ago
    const incidentStartFromDate = dayjs().subtract(3, 'month').format('DD/MM/YYYY HH:mm');
    escadIconDataDisplay.INCIDENT_START_FROM().type(incidentStartFromDate,{force: true})

    // Click Search button to perform search
    escadIconDataDisplay.SEARCH_BUTTON().click()
})
Then('incident search results are displayed', () => {
    // Check if the results summary shows some results
    escadIconDataDisplay.RESULT_SUMMARY().should('contain.text', 'Showing 1 to')
})



//>>>>>>>>>>>>>>>> ICONSUP-T457 (1.0) BR-ADMIN-2 LGA Administrator>>>>>>>>>>


And ('I search for admin user',()=> {
    userSearch.SEARCH_EMAIL().type(Cypress.env('TEST_USER_RFS_Email'),{force: true})
    userSearch.SEARCH_KEYWORD().type(Cypress.env('TEST_USER_RFS_2_USERNAME'),{force: true})
})



And ('I click on the testuser',()=> {
    
    userSearch.ADMIN_SELECTEDTESTUSER().click({force: true})

})

And ('I go to LGA roles',()=> {

    userSearch.ADMIN_LGAMODULETAB().click({force: true})

})

And ('I check for LGA ADMIN',()=> {

    // making sure to check the main checkbox first so we can then uncheck it and thus uncheck all children checkboxes
    userSearch.ADMIN_LGA_ADMIN_MAIN_CHECKBOX().check({force: true}).should('be.checked')
    userSearch.ADMIN_LGA_ADMIN_MAIN_CHECKBOX().uncheck({force: true}).should('not.be.checked')
    

    userSearch.ADMIN_ROLESAVE().scrollIntoView().click({force: true})
    cy.waitForLoadingSpinner()
    userSearch.ADMIN_SAVESUCCESS().should('be.visible').and('contain','Permission updated successfully')

})

And ('I open ICON as testuser',()=> {
    
    cy.clearCookies()
    cy.ntlmReset()
    cy.loginToICON(`${Cypress.env('ICON_HOST_URL')}`, Cypress.env('TEST_USER_RFS_2_USERNAME'), Cypress.env('TEST_USER_RFS_2_PASSWORD'))
})

And ('I verify with Administration tab is not visible',()=> {

    dashboard.ADMIN_MENU_ICON().click({force: true})

    userSearch.ADMIN_MENUTAB().should('be.visible').and('not.contain','Administration')

    dashboard.ADMIN_MENU_ICON().click({force: true})
    cy.waitForLoadingSpinner()
    cy.wait(3000)
})


And ('I have opened web application as automation user',()=> {
    
    cy.clearCookies()
    cy.ntlmReset()
    cy.loginToICON()
})

And ('I check for LGA ADMIN to tick',()=> {

    userSearch.ADMIN_LGACHECKBOX1().check({force: true})
    userSearch.ADMIN_LGACHECKBOX2().check({force: true})
    userSearch.ADMIN_ROLESAVE().scrollIntoView().click({force: true})
    cy.waitForLoadingSpinner()
    userSearch.ADMIN_SAVESUCCESS().should('be.visible').and('contain','Permission updated successfully')

})









//>>>>>>>>>>>>>>>>>>>>>>>>>>>> ICONSUP-T458 (1.0) BR-ADMIN-3 OCSC Administrator >>>>>>>>>>>>>>>>



And ('I go to General roles',()=> {
    
    cy.go('back')
    userSearch.ADMIN_GENERALROLE().click({force: true})

})

And ('I look for grant - uncheck',()=> {

    userSearch.ADMIN_OCSCCHECKBTTN().uncheck({force: true})
    userSearch.ADMIN_OCSCSAVEBTTN().click({force: true})
    userSearch.ADMIN_OCSCSAVESUCCESS().should('be.visible').and('contain', 'Permission updated successfully.')
    

})


And ('I go to General roles again',()=> {
    cy.go('back')
    userSearch.ADMIN_GENERALROLE().click({force: true})

})
And ('I look for grant - check',()=> {

    userSearch.ADMIN_OCSCCHECKBTTN().check({force: true})
    userSearch.ADMIN_OCSCSAVEBTTN().click({force: true})
    userSearch.ADMIN_OCSCSAVESUCCESS().should('be.visible').and('contain', 'Permission updated successfully.')
    cy.wait(6000)

})


And ('I verify with Administration tab visible contains all menu',()=> {

    dashboard.ADMIN_MENU_ICON().click()

    
    dashboard.ADMINISTRATION_MENU().should('exist')
    cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(1)').should('exist').contains('ICON User Management')
    cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(2)').should('exist').contains('Notifications')
    cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(3)').should('exist').contains('RART Call Signs')
    cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(4)').should('exist').contains('GRN Management')
    cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(5)').should('exist').contains('Email')
    cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(6)').should('exist').contains('Escad-Icon Data Display')
    cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(7)').should('exist').contains('AFA Maintenance')
    cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(8)').should('exist').contains('Agency Regions')
    // cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(9)').should('exist').contains('Audit Log')
    
})

 // OCSC II 

 Given ('I open ICON as testuser - II', ()=> {

    cy.loginToICON1()
 })




 And('I have opened web application again',()=>{
    cy.clearCookies()
    cy.ntlmReset()
    cy.loginToICON()
 })





//>>>>>>>>>>>> View SitRep/Birs details >>>>>>>>>>>

And ('I verify SitrepViewer uncheck all LGA',()=> { 

    userSearch.ADMIN_SITREPVIEW_MAIN_CHECKBOX().check({force: true}).should('be.checked')
    userSearch.ADMIN_SITREPVIEW_MAIN_CHECKBOX().uncheck({force: true}).should('not.be.checked')

    userSearch.ADMIN_ROLESAVE().click({force:true}).waitForLoadingSpinner()
    userSearch.ADMIN_SAVESUCCESS().should('be.visible').and('contain','Permission updated successfully')
    

})


And ('I verify SitrepViewer check all LGA',()=> { 
    userSearch.ADMIN_SITREPVIEW_MAIN_CHECKBOX().check({force: true}).should('be.checked')


    userSearch.ADMIN_ROLESAVE().scrollIntoView().click({force:true}).waitForLoadingSpinner()
    userSearch.ADMIN_SAVESUCCESS().should('be.visible').and('contain','Permission updated successfully')
    

})

When ('I expand operations tab',()=> {
    operations.OPERATIONS_TAB().should('be.visible').click()
  
})
    
And ('I select Current incident serch',()=> {

    //incidentlocators.CURRENT_INCIDENT_SEARCH().click()

    incidentlocators.CURRENT_INCIDENT_SEARCH().click({force: true})
 })

  
 And ('I can see Incident list',()=> {


    incidentlocators.INCIDENT_INCIDENT_LIST().click({force: true})
    incidentlocators.INCIDENT_EVENT_LIST_ALERT().should('be.visible').and('contain','Incident and Event List')
    
    
 })



And ('I Search for 1st LGA',()=> {

    incidentlocators.INCIDENT_SEARCH_TYPE().type('Blacktown',{force: true})
    incidentlocators.INCIDENT_NORESULTLGA().should('be.visible').and('contain','No data available in table')
    incidentlocators.INCIDENT_SEARCH_TYPE().clear()

})

And ('I Search for 2nd LGA',()=> {

    incidentlocators.INCIDENT_SEARCH_TYPE().type('Armidale',{force: true})
    incidentlocators.INCIDENT_NORESULTLGA().should('be.visible').and('contain','No data available in table')

    //clear search area 

    incidentlocators.INCIDENT_SEARCH_TYPE().clear()

})


And ('I verified one of the incidents',()=> {

    incidentlocators.INCIDENT_SEARCH_TYPE().clear()
    incidentlocators.INCIDENT_SEARCH1().click({force: true})
    incidentlocators.INCIDENT_SEARCH2().should('be.visible').and('contain','Incident Details').click({force: true})
    incidentlocators.INCIDENT_ADDSITREP().prev().should('not.contain','Add SitRep')
    incidentlocators.INC_SITREPVIEWBTTN().should('exist')
    incidentlocators.INC_SITREPPDFBTTN().should('exist')
    //cy.go('back')
})

And ('I verify Brigade report as testuser',()=> {

    birspage.BRIGADE_REPORTING().click({force: true}).waitForLoadingSpinner()
    birspage.BIRS_SELECTBRIGADETYPE().focus().click({force: true})
    birspage.BIRS_VALIDATEANDSAVE().click({force : true}).waitForLoadingSpinner()
    
    birspage.BIRS_VALIDATEFOOTER().should('not.exist')

})




//ICONSUP-T540 (1.0) ICONSUP - 3153 - Adding NSW Health to the Agency List in ICON >>>>


And ('I click on Username',()=> {

    userSearch.ADMIN_USERTAB().click({force: true})

})
And ('I Verified Agency Dropdown and select NSW Health',()=> {

    userSearch.ADMIN_AGENCYID().should('be.visible').find('option').and('contain','NSW Health')
    userSearch.ADMIN_AGENCYID().select("NSW Health", {force: true})

})
And ('I save the details',()=> {
    userSearch.ADMIN_ROLESAVE().scrollIntoView().click({force: true})
    cy.waitForLoadingSpinner()

})
And ('I Reload the page',()=> {

    cy.reload()

})
And ('I verified Agency is NSW Health',()=> { 
    userSearch.ADMIN_AGENCYID().and('contain.text','NSW Health')

})
And ('I Verified Agency Dropdown and select Rural Fire Service',()=>{
    userSearch.ADMIN_AGENCYID().select("6", {force: true})

})
And ('I Reload the page',()=> {
    cy.reload()

})

And ('I verified Agency is Rural Fire Service',()=> {

    userSearch.ADMIN_AGENCYID().focus().and('contain.text','Rural Fire Service')
})