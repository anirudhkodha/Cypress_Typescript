import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import dayjs from "dayjs";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Operations from "../pages/Operations&fiu";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";


const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
let loc_address = ''



Given ('I open Icon page',()=> {
    cy.loginToICON()


})


And('I can see dashbaord', () => {
    dashboard.CURRENT_INCIDENTS().should('exist')    
})


When ('I expand operations tab',()=> {
operations.OPERATIONS_TAB().should('be.visible').click({force: true})

})


And ('I expand Incidents',()=>{
    eventlocators.INCIDENT_TAB().click({force: true})

})


And ('I open Create bushfire Shell',()=> {

    incidentlocators.INCCREATE_BUSHFIRESHELL1().click({force: true, timeout: 120000})
})
 
And ('I write Incident name to incident creation',()=> {
     
    incidentlocators.INC_NAME_BUSH().type('Automation BushShell',{force: true})
 
})

And ('I enter LGA on create full incident page', ()=> {

    incidentlocators.INC_LGA().select('0060')
})
 
And ('I enter Start Date Time to incident creation',()=> {
    const start_date_time = dayjs().subtract(1,'hour').format('DD/MM/YYYY HH:mm');
    incidentlocators.INC_STARTDATETIME_().type(start_date_time,{force: true})
})
 
 
And ('I select the type of the fire to incident creation',()=> {
 
    incidentlocators.INC_BUSHFIRETYPE_TAB().click({force: true})
    incidentlocators.INC_BUSHFIRETYPE().click({force: true})

})
 
And ('I type firesize to incident creation',()=> {
    incidentlocators.INC_FIRESIZETAB_BUSH().click({force: true})
    const area_size = `${Math.floor(Math.random() * 8)+1}`
    incidentlocators.INC_FIRESIZE_BUSH().clear().type(area_size,{force: true})
})
 
And ('I enter tenure to incident creation',()=>{
 
    incidentlocators.INC_TENURE_TAB_().type('Council{enter}')
    //incidentlocators.INC_TENURE_BUSH().invoke('show').click({force: true})
    incidentlocators.INC_STATUS_BUSH1().click({force: true})
})
 
And ('I select Incident Status to incident creation',()=> {
 
    incidentlocators.INC_STATUS().select('1')
})
 
And ('I select responsible agency to incident creation',()=> {
 
    incidentlocators.INC_RESPONSIBLE_AGENCY_().select('6',{force: true})
})
 
And ('I select Incident owner to incident creation',()=> {
 
    incidentlocators.INC_OWNER_().select('6')
})
 
And ('I select suspected cause to incident creation',()=> {
 
    incidentlocators.INC_SUSPECTED_CAUSE_().select('11')
 
})
 
And ('I enter set alert level to incident creation',()=>{

    incidentlocators.INC_ALERT_LVL_BUSH1().click({force: true}).wait(4000)
    
    incidentlocators.INC_ALERT_LVL_BUSH3().click({force: true})
    incidentlocators.INC_ALERT_LVL_BUSH4().click({force: true})
 
})
 
And ('I enter location to incident creation - bushfireshell',()=> {
 

    loc_address = '260 WATERLOO RD, WOODSTOCK'
    incidentlocators.INCIDENT_LOCATION().type(loc_address,{force: true}).wait(4000).type('{downArrow}').type('{enter}')
    incidentlocators.INC_LOCATION_BUSH2().click({force: true})    


})
 
 
And ('I enter 000 Reference to incident creation',()=> {
    const Triple0_ref = `000- ${Math.floor(Math.random() * 1000000000)}`
    incidentlocators.INC_000REF_BUSH().type(Triple0_ref,{force: true})
 })
 
 
And ('I enter heading direction to incidentcreation',()=> {
 
    incidentlocators.INC_DIRECTION_BUSH().type('Heading West, Keep away from westside',{force: true})
})
 
And ('I enter resources to incident creation',()=> {
    const resouces_bushfireshell = `${Math.floor(Math.random() * 8)+1}`;
    incidentlocators.INC_RESOURCES_BUSH().clear({force: true}).type(resouces_bushfireshell,{force: true})
 
})
 
 
 
And ('I Save the incident creation form',()=> {
 
    incidentlocators.INC_SAVE_().click({force: true,timeout: 120000})
})

And ('I Assert with the Authorised SitRep', ()=> {
    incidentlocators.INC_ASSERT_BUSH1().should('be.visible').and('contain','(SR) Authorised')
    
 
})
 
 And ('I click on add SitRep',()=> {

    incidentlocators.INCIDENT_ADDSITREP().prev().contains('Add SitRep').click({force: true})

})



And ('I can verify report date as current' ,()=> {
    const currentreporttime = dayjs().subtract(15,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.CURRENT_REPORT_TIME_SR().should('be.visible').type(currentreporttime, {force: true})

})



And ('I Change alert level on SitRep',()=> {
    incidentlocators.INC_SRACTIONTAB().click({force:true}).waitForLoadingSpinner()
    incidentlocators.SETALERTBTTN_SR().click({force:true}).wait(4000)
    incidentlocators.INC_SETALERTLEVELMESSAGE().should('contain.text','A Bushfire alert level (or No Threat) is mandatory for a fire incident')
    incidentlocators.INC_ALRTLVLDOWNGRADEBTTN().scrollIntoView().click({force:true}).wait(4000)
    //incidentlocators.INC_REGRADEDLEVEL().scrollIntoView().select("WA7",{force: true}).wait(4000)
    incidentlocators.INC_ALRTCHANGERSN().scrollIntoView().type('Automation test only', {force: true})
    incidentlocators.INC_ALERT_LVL_BUSH4().click({force:true})
    incidentlocators.INC_ALRTLVLCHNGESUCCESS().should('be.visible').and('contain.text','Selected Alert Level: A')


})




And ('I type Incident controller',()=> {
    
    cy.get('#frmSitRep > div.control-group > div > ul > li:nth-child(6) > a').click({force: true}).waitForLoadingSpinner()
    incidentlocators.INCCONTROLLER_SRE().type('TeamC',{force: true})

})


And ('I Authorise SitRep', ()=> {

    incidentlocators.INC_AUTHORISE_SRE().click( {force: true,timeout: 120000})
    incidentlocators.INC_AUTHORISE_SRE_VERIFY1().should('be.visible').should('contain','Notifiable Incident*')
    incidentlocators.INC_AUTHORISE_SRE_VERIFY2().should('be.visible').should('contain','Request Fire Investigation')
    incidentlocators.INC_AUTHORISE_SRE_VERIFY3().should('be.visible').should('contain','Include Intel')
    incidentlocators.INC_BTN_AUTHORISE_SRE().scrollIntoView().click()
    incidentlocators.INC_SRE_USERNAME()
    incidentlocators.INC_SRE_PASSWORD()
    incidentlocators.INC_CREDENTIALSOK().click({force:true,timeout: 120000})
})


And ('I verify that Sitrep is Authorised',()=>{

    incidentlocators.INC_SITREP_SUCCESS().should('be.visible').and('contain','Success!')
    incidentlocators.INC_CLOSE_SITREPE1().click({force: true})  // Close the SitRep window
    incidentlocators.INC_HEADERINCDETAILS().click({force: true})
    incidentlocators.INC_ASSERT_FULLINC_SRE().should('contain.text','(SR) Authorised')
})




And ('I assert add Situp and click',()=>{

    cy.get('#article > div:nth-child(6) > div.pull-right > a:nth-child(2)').should('be.visible').click({force: true})

})
 

And ('I assert for Alert levels, Incident locations, Headings and threats',()=> {
    //Alert levet change

    cy.get('#alertLevelInfo > div.accordion-heading > a').should('be.visible').and('contain','Alert Levels').click({force:true})
    //cy.get('#newSitRepAlertLevel > p > span').should('be.visible').and('contain.text','Regrade level and reason are required.')
    cy.get('#newSitRepAlertLevel > p > span').should('be.visible').and('contain.text','Selected Alert Level: A[WA]')
    cy.get('#newSitRepAlertLevel > p > span').should('be.visible').and('contain.text','Change Reason:')

    //incidentlocators.SETALERTBTTN_SR().click({force:true}).wait(4000)
    //incidentlocators.INC_REGRADEDLEVEL().select("5",{force:true})
    //incidentlocators.INC_ALERT_LVL_BUSH4().click({force:true})
    //incidentlocators.INC_SITUPALRTCHNGSUCCESS().should('be.visible').and('contain.text','Selected Alert Level: A')



    //Locations, Headings, Threats

    cy.get('#incidentLocation > div.accordion-heading > a').should('be.visible').and('contain','Incident Location, Heading and Threats').click({force:true})
    incidentlocators.INC_SITUPCURRENTLOCATION().should('be.visible')
    incidentlocators.INC_SITUPHEADING().should('be.visible')
    incidentlocators.INC_SITUPPOTENTIALTHREAT().should('be.visible')
    incidentlocators.INC_SITUPTHREATINHOURS().type('Put your Bush Fire Survival Plan into action.',{force: true})
    incidentlocators.INC_SITUPOTHERINFORMATION().should('be.visible')

})

And ('I save SU for the incident',()=> {
    cy.get('[value="Save and Authorise"]').click({force: true})
    cy.get('#btn_AuthorizeSitUp[value="Authorise SitUp"]').click({force: true,timeout: 120000})
    cy.get('#AuthoriserCredentials_UserName').type('paulw123', {force:true})
    cy.get('#AuthoriserCredentials_Password').type('bluesky', {force:true})
    cy.get('#wizardForm > div.modal-footer > input[name="btn_ConfirmAuthorizeSitUp"]').click({force: true})
    cy.get('#article > div.alert.alert-success').should('contain','Success!')
    cy.get('#article > div.form-actions > a').click({force: true})
    cy.get('#header > div > div.navbar-subnav > div > ul > li:nth-child(3) > a').click({force: true})
    cy.get('#sitReps > tbody > tr:nth-child(1) > td:nth-child(2)').should('be.visible').and('contain','(SU) Authorised ')
})





//>>>>>>>>>>>> Notifiable and Fire investigation>>>>>>>>>>


And ('I Authorise SitRep for Notifiable and fire investigation', ()=> {

    incidentlocators.INC_AUTHORISE_SRE().click( {force: true,timeout: 120000})
    incidentlocators.INC_AUTHORISE_SRE_VERIFY1().should('be.visible').should('contain','Notifiable Incident')    
    //incidentlocators.INC_FIREINVESTIGATIONBTTN().click({force: true})

    incidentlocators.INC_AUTHORISE_SRE_VERIFY2().should('be.visible').should('contain','Request Fire Investigation')
    incidentlocators.INC_NOTIFIABLEBTTN().click({force: true, timeout:10000})

    incidentlocators.INC_AUTHORISE_SRE_VERIFY3().should('be.visible').should('contain','Include Intel')
    //cy.get('[id="IncludeIntel"]').click({force: true})
    
    incidentlocators.INC_BTN_AUTHORISE_SRE().scrollIntoView().click({force: true})
    incidentlocators.INC_SRE_USERNAME()
    incidentlocators.INC_SRE_PASSWORD()
    incidentlocators.INC_CREDENTIALSOK().click({force:true,timeout: 120000})

})



And ('I Assert for FIU alert', ()=>{

    //incidentlocators.INC_ASSERT_BUSH2().should('be.visible').and('contain','This incident is under investigation by the FIU')
    //Assert Notifiable
    incidentlocators.INCIDENTDETAILS().click({force: true })
    incidentlocators.INC_NOTIFIABLECHECKED().should('be.checked')
})

And ('I type for incidents with Out,OutAmalgamated,Planned {string}',(keyword)=> {

    incidentlocators.INC_ADVANCESEARCH_REF().type(keyword,{force: true})
})








