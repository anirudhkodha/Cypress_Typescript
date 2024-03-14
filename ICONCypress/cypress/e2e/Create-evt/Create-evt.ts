import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import SecureLogon from '../pages/SecureLogon';
import Dashboard from '../pages/Dashboard'
import UserSearch from "../pages/UserSearch";
import Operations from "../pages/Operations&fiu";
import { contains } from "cypress/types/jquery";
import { nth } from "cypress/types/lodash";
import dayjs from "dayjs";
import Eventpage from "../pages/Eventpage";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";


const secureLogon = new SecureLogon()
const dashboard = new Dashboard()
const userSearch = new UserSearch()
const operations = new Operations()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
let loc_address = ''

Given ('I open ICON',()=>{
    cy.loginToICON()
})

And('I can see dashbaord', () => {
    dashboard.CURRENT_INCIDENTS().should('exist')    
})

When ('I expand operations tab',()=> {
    operations.OPERATIONS_TAB().should('be.visible').click()
    
})

And ('I expand Incidents',()=>{
    eventlocators.INCIDENT_TAB().click({force: true})

})

And ('I can select Create Event item',()=>{
    eventlocators.CREATE_EVENT_TAB().click({force: true, timeout: 120000})
    
})

And ('I enter  indidentname in the field on create event page for future',()=>{
    eventlocators.INCIDENT_NAME().type ('AutoamtionTest for planned event',{force: true})

})
And ('I enter LGA on create event page',()=>{
    eventlocators.LGA_NAME().select('0060')

})
And ('I enter date time 3 months from now on create event page', ()=>{

    const eventstartdate = dayjs().add(3,'month').format('DD/MM/YYYY HH:mm');
    eventlocators.START_DATE().type(eventstartdate,{force: true})

})
And ('I select enenttype on create event page',()=> {

    eventlocators.EVENT_TYPE().select('10',{force: true})

})
And ('I enter eventareasize on create event page',()=> {

    eventlocators.FIRE_SIZE().clear().type('10',{force: true})

})

And ('I enter tenure on create event page',()=> {
    eventlocators.TENURE_NAME().type('Council{enter}')
    //incidentlocators.TENURE_SELECTED_SR().click({force: true})

})
And ('I select agency responsible on create event page', ()=> {
    eventlocators.AGENCY_RESPONSIBLE_TAB().click()
    eventlocators.SELECTED_AGENCY().select('6',{force: true})

})
And ('I select incident owner on create event page', ()=> {
    eventlocators.SELECTED_INCIDENT_OWNER().select('6',{force: true})

})
And ('I enter incident location on create event page',()=> {
    
    loc_address = '260 WATERLOO RD, WOODSTOCK'
    incidentlocators.INCIDENT_LOCATION().type(loc_address,{force: true}).wait(4000).type('{downArrow}').type('{enter}')
    incidentlocators.INC_LOCATION_BUSH2().click({force: true})    


})
And ('I click save button on create event page',()=> {
 cy.wait(10000)
 cy.waitUntil(()=>eventlocators.SAVE_EVENT().scrollIntoView().should('be.visible').click({force: true,timeout: 180000}))
 cy.wait(20)
 

})
Then ('I verify SR authorised and planned',()=> {

    cy.waitUntil(()=>eventlocators.TOOGLE_INCIDENTDETAILS().should('be.visible',{setTimeout: 280000}).click({force: true}))
    eventlocators.STATUS().should('contain.text','Planned')
    eventlocators.SR_AUTHORISED().should('contains.text','(SR) Authorised')
})

And ('I click on Add sitrep and verify details',()=> {
    
    incidentlocators.INCIDENT_ADDSITREP().prev().contains('Add SitRep').click({force: true})
    incidentlocators.SITREP_COMMENTS_SR().type('Automation test Only',{force: true})

    const currentreporttime_EVENT = dayjs().subtract(5,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.CURRENT_REPORT_TIME_SR().should('be.visible').type(currentreporttime_EVENT,{force: true})
    
    incidentlocators.INC_SUPPORT_TAB().click({force: true}).waitForLoadingSpinner()
    incidentlocators.INCCONTROLLER_SRE().type('TeamC',{force: true})
    incidentlocators.INC_AUTHORISE_SRE().click({force: true, timeout: 180000})    
    
    incidentlocators.INC_SITREP_ALERTMSSG().should('be.visible').and( 'contains.text','Report date must be later than the last authorised SitRep date','Report Date cannot be in the past.Start Date cannot be later than Report Date')

    
    incidentlocators.INC_SITREPMAINTAB().click({force: true})
    const currentreporttime_EVENT2 = dayjs().add(4,'month').format('DD/MM/YYYY HH:mm');
    incidentlocators.CURRENT_REPORT_TIME_SR().should('be.visible').type(currentreporttime_EVENT2)

    incidentlocators.INC_AUTHORISE_SRE().click({force: true,timeout: 60000})    
    incidentlocators.INC_BTN_AUTHORISE_SRE().scrollIntoView().click({force: true})
    incidentlocators.INC_SRE_USERNAME()
    incidentlocators.INC_SRE_PASSWORD()
    incidentlocators.INC_CREDENTIALSOK().click({force:true})

    incidentlocators.INC_CLOSE_SITREPE1().click()  // Close the SitRep window
    incidentlocators.INC_HEADERINCDETAILS().click()

})



// Create event for Past date with >>>>>>>>


And ('I enter  indidentname in the field on create event page for contain',()=>{

    eventlocators.INCIDENT_NAME().type ('AutoamtionTest for contained event', {force: true})
})


And ('I enter date time 3 months before from now on create evnt page', ()=>{

    const eventpastdate = dayjs().subtract(12,'day').format('DD/MM/YYYY HH:mm');
    eventlocators.START_DATE().type(eventpastdate, {force: true})
})


Then ('I look for SR authorised Contained',()=>{
    cy.waitUntil(()=> eventlocators.TOOGLE_INCIDENTDETAILS().should('be.visible',{setTimeout: 180000}).click({force: true}))
    eventlocators.STATUS().should('contain.text','Contained')
    eventlocators.SR_AUTHORISED().should('contains.text', '(SR) Authorised ')
})