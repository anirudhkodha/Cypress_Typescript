import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { any, TimeoutError } from "cypress/types/bluebird";
import dayjs from "dayjs";
import Dashboard from "../pages/Dashboard";
import knowledge from "../pages/knowledge";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import iall_DOM from "..//domains/incidentAlertLevelList"


const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const incident_alert_level = new knowledge()
const iall = new iall_DOM()

var detIALL:string[]=[]
var detINC:string[]=[]

Given ('I open ICON webpage',()=> {

    cy.loginToICON()
})

And ('I can see dashbaord',()=> {
    dashboard.CURRENT_INCIDENTS().should('exist')

})

And('I expand Knowledge',() =>{
    incident_alert_level.KNOWLEDGE_TAB().click()
})

And ('I Open incident alert level list',()=>{
    incident_alert_level.incident_alert_list().click()

})

Then ('I verify the incident alert level page is displayed',()=>{
    cy.url().should('not.include','Errors')
    cy.url().should('include','AlertLevel')
    incident_alert_level.incident_alert_heading().should('contain.text','Incidents Alert Levels List')
    incident_alert_level.incident_alert_table().should('exist')
    
})

Then ('I search for {string} incident',(keyword)=>{
    iall.search_Given_Incident(keyword)
    detIALL = iall.fetch_searchedINC_Details_fromIALL()
})

And ('I look for the incident details',()=>{
    iall.select_firstMatch()
    detINC = iall.fetch_Incident_Details_fromINCPAGE()
})

Then ('I verify the details on incident alert level list match the incident details',()=>{
    
        // win is the remote window
        iall.verify_incidentDET_match_iall(detINC, detIALL) 
    
      
})