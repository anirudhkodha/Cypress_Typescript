import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import INCIDENTS_DOMAIN from "../domains/incidents"
import INC_SEARCH_DOM from "../domains/incidentSearch"
import ADV_SEARCH_DOM from "../domains/advIncidentSearch"
import OP_LOG_DOM from "../domains/operationsLog_Message_IntelList"
import RART_DOM from "../domains/rart"
import DOCTRINE_DOM from "../domains/doctrine"
import DISPATCH_DOM from "../domains/dispatch"
import Dashboard from "../pages/Dashboard";
import SecureLogon from "../pages/SecureLogon";
import Operations from "../pages/Operations&fiu";

const incidents = new INCIDENTS_DOMAIN()
const dashboard= new Dashboard()
const secureLogon = new SecureLogon()
const operations = new Operations()
const inc_search = new INC_SEARCH_DOM()
const adv_search = new ADV_SEARCH_DOM()
const op_log = new OP_LOG_DOM()
const rart = new RART_DOM()
const doctrine = new DOCTRINE_DOM()
const dispatch = new DISPATCH_DOM()




And('I can see dashbaord', () => {
    dashboard.CURRENT_INCIDENTS().should('exist')       
})

// When ('I expand operations tab',()=> {
//     operations.OPERATIONS_TAB().should('be.visible').click()  
// })

Then ('I navigate to create full incident page',()=>{
    incidents.navigate_createFullIncident_page()
})

And ('I verify create full incident page',()=> {
    incidents.verify_createFullIncident_page()
})
Then ('I click save',()=> {
    incidents.save_fullIncident()
})

And ('I validate the mandatory fields',()=> {
    incidents.validate_mandatoryFields_errorOut_fullIncident()
})

Then ('I navigate to create bush shell page',()=>{
    incidents.navigate_createBushShell_page()
})

And ('I verify create bush shell page',()=> {
    incidents.verify_createBushShell_page()
})

And ('I validate the mandatory fields for bush shell',()=> {
    incidents.validate_mandatoryFields_errorOut_bushShell()
})

Then ('I navigate to create other shell page',()=>{
    incidents.navigate_createOtherShell_page()
})

And ('I verify create other shell page',()=> {
    incidents.verify_createOtherShell_page()
})

And ('I validate the mandatory fields for other shell',()=> {
    incidents.validate_mandatoryFields_errorOut_otherShell()
})

Then ('I navigate to create event page',()=>{
    incidents.navigate_createEvent_page()
})

And ('I verify create event page',()=> {
    incidents.verify_createEvent_page()
})

And ('I validate the mandatory fields for create event',()=> {
    incidents.validate_mandatoryFields_errorOut_event()
})

Then ('I navigate to call out page',()=>{
    incidents.navigate_createCallOut_page()
})

And ('I verify call out page',()=> {
    incidents.verify_createCallOut_page()
})

And ('I validate the mandatory fields for call out',()=> {
    incidents.validate_mandatoryFields_errorOut_callout()
})

Then ('I navigate to merge incidents page',()=>{
    incidents.navigate_mergeIncidents_page()
})

And ('I verify create merge incidents page',()=> {
    incidents.verify_mergeIncidents_page()
})

Then ('I click merge',()=> {
    incidents.merge_Incident()
})

And ('I validate the errors for merge incident page',()=> {
    incidents.validate_errorOut_mergeInc()
})

Then ('I navigate to brigade report search page',()=>{
    incidents.navigate_brigadeReportSearch_page()
})

And ('I verify create brigade report search page',()=> {
    incidents.verify_brigadeReportSearch_page()
})


//Incident search
Then ('I navigate to incident search page',()=> {
    inc_search.navigate_currentIncidentSearch_page()
})

And ('I verify incident search page',()=> {
    inc_search.verify_currentIncidentSearch_page()
})

Then ('I verify create full incident link',()=> {
    inc_search.click_Create()
    inc_search.select_Create_Options('full_Incident')
    cy.go(-1)
})

Then ('I verify create bush shell link',()=> {
    inc_search.click_Create()
    inc_search.select_Create_Options('bush_Shell')
    cy.go(-1)
})

Then ('I verify create other shell link',()=> {
    inc_search.click_Create()
    inc_search.select_Create_Options('other_Shell')
    cy.go(-1)
})

Then ('I verify create event link',()=> {
    inc_search.click_Create()
    inc_search.select_Create_Options('event')
    cy.go(-1)
})

Then ('I verify create callout link',()=> {
    inc_search.click_Create()
    inc_search.select_Create_Options('callout')
    cy.go(-1)
})

Then ('I verify merge incidents link',()=> {
    inc_search.click_MergeINC()
    cy.go(-2)
})

Then ('I verify search brigade report link',()=> {
    inc_search.click_SEARCH_BRIGADE_REP()
    cy.go(-1)
})

Then ('I verify advanced search link',()=> {
    inc_search.click_ADV_SEARCH()
    cy.go(-1)
})

//Advanced Incident search
Then ('I navigate to advanced search page',()=> {
    adv_search.navigate_advIncidentSearch_page()
})

And ('I verify advanced search page',()=> {
    adv_search.verify_advIncidentSearch_page()
})

//Operations Log/Message/Intel List
Then ('I navigate to operations log page',()=> {
    op_log.navigate_operationLog_page()
})

And ('I verify operations log page',()=> {
    op_log.verify_operationsLog_Message_IntelList_page()
    op_log.verify_LogTable_Columns()
})

And ('I validate the table contains data',()=> {
    op_log.select_search_2days()
    op_log.validate_first_row_containsDATA()
})

//RART
Then ('I navigate to rart page',()=> {
    rart.navigate_rart_page()
})

And ('I verify rart page',()=> {
    rart.verify_rart_page
    rart.verify_RARTTable_Columns()
})

And ('I validate the rart table contains data',()=> {
    rart.validate_first_row_containsDATA()
})

//DOCTRINE
Then ('I navigate to doctrine page',()=> {
    doctrine.navigate_doctrine_page()
})

And ('I verify doctrine page',()=> {
    doctrine.verify_doctrine_page()
    doctrine.verify_LogTable_Columns()
})

And ('I add new doctrine file',()=> {
    doctrine.add_newDoc()
})

And ('I edit the new doctrine file',()=> {
    doctrine.edit_Doctrine_added()
})

Then ('I delete the new doctrine file',()=> {
    doctrine.del_Doctrine_added()
})

//DISPATCH

Then ('I navigate to dispatch page',()=> {
    dispatch.navigate_dispatch_page()
})

And ('I verify redirection to dispatch page',()=> {
    dispatch.verify_dispatch_page()
})