import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { times } from 'lodash';
import dayjs from "dayjs";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Operations from "../pages/Operations&fiu";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import Cop from "../pages/Cop";
import ALERTLVL_DOM from "../domains/alertLevel";
import iall_DOM from "..//domains/incidentAlertLevelList"
import knowledge from "../pages/knowledge";
import inc from "..//domains/incidents"

const incident_alert_level = new knowledge()
const iall = new iall_DOM()
const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const copLocators = new Cop()
const alertlvl = new ALERTLVL_DOM()
const INC = new inc()
let txt = ''
let primary_mergenum: number 
let secondary_mergenum: number
let inc_NAME_BUSH: string
var detIALL:string[]=[]
var detINC:string[]=[]


// BR INC 2.1 Create Full incident - Bushfire types >>>>>>>>>>>>>>>

// Given ('I open ICON webpage',()=>{
//     cy.loginToICON()
// })

// When ('I expand operations tab',()=> {
// operations.OPERATIONS_TAB().should('be.visible').click()

// })


// And ('I expand Incidents',()=>{
//     eventlocators.INCIDENT_TAB().click()

// })

And ('I can select Create Full Incident', ()=> {

    
    incidentlocators.CREATE_FULL_INCIDENT_TAB().click({force: true, timeout: 180000})
    incidentlocators.INCIDENT_NAME().should('exist')
})

And ('I enter incident name in the field on create full incident page',()=> {
    var uuid = Cypress._.random(0,9999)
    inc_NAME_BUSH = 'Full_incident Automation_test_Bushfire_type_'+uuid
    incidentlocators.INCIDENT_NAME().type(inc_NAME_BUSH)
})

And ('I enter LGA on create full incident page', ()=> {

    incidentlocators.INC_LGA().select('0060') // Default '0060'
})

And ('I enter incident location on create full incident page',()=>{
    incidentlocators.CREATEFULLINC_MAPLOC().type('Albury',{force: true})
    incidentlocators.ZOOMBUTTON_FULLINC().click({force: true}).wait(4000).click()

})

And ('I enter Incident Number-Local on create full incident page', ()=>{
    const localnumber = `${Math.floor(Math.random() * 100000000)}`
    incidentlocators.LOCALINC_NUMBER().type(localnumber,{force: true})
})

And ('I enter 000 Reference No on create full incident page',()=> {

    const UniqueNumber = ` 000- ${Math.floor(Math.random() * 10000000000000)}`
    incidentlocators.TRIPLE0_NUMBER().type(UniqueNumber, {force: true})
})

And ('I enter Agency Call received date-time on create full incident page',()=>{
    const eventstartdate = dayjs().subtract(10,'minute').format('DD/MM/YYYY HH:mm');

    incidentlocators.AGENCY_CALL_RECEIVED_DATE_TIME().scrollIntoView().type(eventstartdate, {force: true})

})

And ('I validate fire type requirement message on create full incident page',()=>{

  
})


And ('I select bushfire types on create full incident page',()=> {
   incidentlocators.BUSHFIRE_TYPE_TAB().click({force: true})
   incidentlocators.SELECTED_BUSHFIRETYPE_FOREST().click({force: true})
})

And ('I select Other bush Fire Type on create full incident page',()=> {

})

And ('I select Non-fire Incident on create full incident page',()=> {
   

})
And ('I click on save button on create full incident page',()=> {
    incidentlocators.SAVE_BTTN_FULLINC().should('be.visible').click({force: true, timeout: 180000}).waitUntil(()=>incidentlocators.INCIDENTDETAILS().should('exist',{setTimeout: 180000}))
})

And ('I verified saved page with no sitrep authorised',()=> {

   incidentlocators.FULLINC_SUMMARY_ALERT().should('be.visible').contains('Info! No SitRep Authorised')
   incidentlocators.INC_ASSERT_BUSH1().should('contain.text','(SR) Draft')

})

And ('I click on Edit SitRep for full incident summary page',()=> {
    incidentlocators.EDIT_SITREP_BTTN().click({force: true})
    
})

And ('I verify create Sitrep page for full incident and assert alerts',()=>{
    cy.get('h1').contains('Edit SitRep')
    incidentlocators.CURRENT_REPORT_TIME_SR().should('exist')

    //Assert Alerts
    incidentlocators.INC_AUTHORISE_SRE().click( {force: true,timeout: 120000})

    
    let sitrep_alerts = ['Start Date is required.','At least one current tenure is required.','Current threat is required.','Alert level is required.','Incident Controller is required.','Lead Agency is required.']

    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[0])
    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[1])
    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[2])
    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[3])
    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[4])
    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[5])
})

And ('I can verify report date as current' ,()=> {
    const currentreporttime = dayjs().subtract(15,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.CURRENT_REPORT_TIME_SR().should('exist').type(currentreporttime,{force:true})  

})

And ('I enter SitRep comments',()=> {

    incidentlocators.SITREP_COMMENTS_SR().type('SitRep for Full Incident Bushfire type - Automation test only',{force: true})
    
})

And ('I enter Damage area size',()=>{

    incidentlocators.FIRETAB_SITREP().click({force: true}).waitForLoadingSpinner()     // Fire (&other incidenrts/Events)
    incidentlocators.DAMAGETAB_SITREP().click({force: true})
    const areasize = `${Math.floor(Math.random() * 8)+1}`
    incidentlocators.DAMAGE_NAITONALPARK_SR().click({force: true}).type(areasize,{force: true})

})


And ('I enter start origin date',()=> {
      

    incidentlocators.INCIDENT_ORIGIN_TAB_SR().click({force: true})     // Expand Incident Origin Details

    const incidentorigindate = dayjs().subtract(30,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.INC_STARTDATE_SR().click({force:true}).type(incidentorigindate,{force: true})
})            

And ('I enter tenure', ()=> {
    incidentlocators.INCLOCDETAILS_TAB_SR().click({force:true})           //Expand Current Incidentdetaillink                             // Expand Current Incident Location Details
    incidentlocators.TENURE_TAB_SR().type('Council{enter}')
    //incidentlocators.TENURE_SELECTED_SR().click({force:true})

    
})

And ('I enter threat potential in <2 hours',()=>{
    incidentlocators.THREATS_TAB_SR().click({force: true}).waitForLoadingSpinner()
    incidentlocators.THREAT_POTENTIAL_SR().type('This is a potential Threat of Smoke, heading "S", All types threats to be listed', {force:true})

})

//new steps after new alert levels (from ///* to *///)
And ('verify Alert modal window',()=>{
    incidentlocators.ACTION_TAB_SR().click({force: true}).waitForLoadingSpinner()
    incidentlocators.ALERTLEVEL_REQTEXT().should('contain.text','Current Alert Level is required.')
    incidentlocators.SETALERTBTTN_SR().should('be.visible').click({force: true})
    alertlvl.verify_Alert_Modal_Win()   
})

And ('verify ALert Level value correctly selected',()=>{
    alertlvl.verify_WA_BTNS()
    alertlvl.verify_Set_AlertLevel()     
    alertlvl.verify_Regrade_AlertLevel_notVisible()
})

Then ('upgrade to EW and verify regrade fields',()=>{
    alertlvl.click_upgrade_EW()
    alertlvl.verify_WA_BTNS_DISABLED()
    alertlvl.regrade_AlertLevel()
    incidentlocators.SETALERTOK_SR().click({force: true})
    alertlvl.verify_alertLVL_TXT()
})

And ('I Set Alert Level',()=>{

    //incidentlocators.ACTION_TAB_SR().click({force: true}).waitForLoadingSpinner()
    //incidentlocators.ALERTLEVEL_REQTEXT().should('contain.text','Current Alert Level is required.')
    //incidentlocators.SETALERTBTTN_SR().should('be.visible').click({force: true})
    incidentlocators.ALERTLEVETBOX_SR().should('exist').should('contain.text','Incident Alert Level')
    incidentlocators.SELECTED_ALERTLEVEL() // Select WA
    //incidentlocators.SETALERTOK_SR().click({force: true})
    //incidentlocators.VERIFY_ALERTLEVLTXT().should('contain.text','Selected Alert Level: A')
})

//Verify clear is required to reset alert level
And ('I reset Alert Level',()=>{
    
    incidentlocators.ACTION_TAB_SR().click({force: true}).waitForLoadingSpinner()
    incidentlocators.SETALERTBTTN_SR().should('be.visible').click({force: true})
    incidentlocators.ALERTLEVETBOX_SR().should('exist').should('contain.text','Incident Alert Level')
    incidentlocators.ALERT_CLEAR().click()
    incidentlocators.SELECTED_ALERTLEVEL() // Select WA
})

And ('I select Incident Controller',()=>{
    incidentlocators.INCCONTROLLER_SRE_TAB().click({force: true}).waitForLoadingSpinner()   //Expand Command/control/comms
    incidentlocators.INCCONTROLLER_SRE().type('TeamC', {force: true})

})

And ('I select Lead Agency',()=> {

    incidentlocators.INCLEAD_AGENCY_SRE().select("6",{force: true}) // 6 == 'Rural Fire Service'
})

And ('I Authorise SitRep', ()=> {

    incidentlocators.INC_AUTHORISE_SRE().click( {force: true,timeout: 120000})
    incidentlocators.INC_AUTHORISE_SRE_VERIFY1().should('exist').should('contain','Notifiable Incident*')
    incidentlocators.INC_AUTHORISE_SRE_VERIFY2().should('exist').should('contain','Request Fire Investigation')
    incidentlocators.INC_AUTHORISE_SRE_VERIFY3().should('exist').should('contain','Include Intel')
    incidentlocators.INC_BTN_AUTHORISE_SRE().scrollIntoView().click()
    incidentlocators.INC_SRE_USERNAME()
    incidentlocators.INC_SRE_PASSWORD()
    incidentlocators.INC_CREDENTIALSOK().click({force:true,timeout: 120000})
})


And ('I verify that Sitrep is Authorised',()=>{

    incidentlocators.INC_SITREP_SUCCESS().should('contain.text','Success!')
    incidentlocators.INC_CLOSE_SITREPE1().click()  // Close the SitRep window
    incidentlocators.INC_HEADERINCDETAILS().click({force:true})
    incidentlocators.INC_ASSERT_FULLINC_SRE().should('be.visible').and('contain','(SR) Authorised')
})





//  BR INC 2.1 Create Full incident - Other types>>>>>>>>>>>>>>


And ('I enter incident name {string} in the field on create full incident page - other types',(keyword)=>{

    incidentlocators.INC_NAME_OTHER_TYPE().type('A-OtherTypes_'+keyword,{force: true})
})

And ('I enter incident name {string} in the field on create full incident page - non-fire types',(keyword)=>{

    incidentlocators.INC_NAME_OTHER_TYPE().type('A-Non-fireTypes_'+keyword,{force: true})
})


//Other type
And ('I select Other {string} Fire Type on create full incident page', (keyword)=>{
    incidentlocators.INC_OTHERFIRE_TYPE().select(keyword,{force:true}) 
})
// Non-Fire type
And ('I select non fire {string} Fire Type on create full incident page', (keyword)=>{
    incidentlocators.INC_FIRE_TYPE_CALLOUT().select(keyword,{force:true})
    
})
And ('I enter support resources',()=> {
    incidentlocators.INC_SUPPORT_TAB().click({force:true}).waitForLoadingSpinner()
    
    const firepersonnel = `${Math.floor(Math.random() * 8)+1}`
    incidentlocators.INC_FIELDPERSONNEL().type(firepersonnel,{force: true})

})

And ('I verify create Sitrep page for full incident and assert alerts - OTHER TYPES Incident',()=>{

    cy.get('h1').contains('Edit SitRep')
    incidentlocators.CURRENT_REPORT_TIME_SR().should('exist')

    //Assert Alerts
    
    incidentlocators.INC_AUTHORISE_SRE().click( {force: true,timeout: 120000})

    
    let sitrep_alerts = ['Start Date is required.','At least one current tenure is required.','Incident Controller is required.','Lead Agency is required.']

    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[0])
    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[1])
    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[2])
    incidentlocators.INC_SITREPALERTS().invoke('text').should('contain', sitrep_alerts[3])
})




//BR INC 2.1 - Create Incident - Bushfire Shell >>>>>>>>>>>>>>

And ('I open Create bushfire Shell',()=> {

    incidentlocators.INCCREATE_BUSHFIRESHELL1().click({force: true, timeout: 120000})
})

And ('I write Incident name to incident creation',()=> {
    
    incidentlocators.INC_NAME_BUSH().type('AutomationBushShell',{force: true})

})

And ('I enter Start Date Time to incident creation',()=> {
    const start_date_time = dayjs().subtract(50,'minute').format('DD/MM/YYYY HH:mm');
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

    // incidentlocators.INC_TENURE_TAB_BUSH().click({force: true})
    // incidentlocators.INC_TENURE_BUSH().invoke('show').click({force: true})
    incidentlocators.INC_STATUS_BUSH1().click({force: true})
})


And ('I select Incident Status to incident creation',()=> {

    incidentlocators.INC_STATUS().select('1')
})

And ('I select responsible agency to incident creation',()=> {

    incidentlocators.INC_RESPONSIBLE_AGENCY_().select('6',{force: true})
})

And ('I select Incident owner to incident creation',()=> {

    incidentlocators.INC_OWNER_().select('6', {force: true})
})

And ('I select suspected cause to incident creation',()=> {

    incidentlocators.INC_SUSPECTED_CAUSE_().select('18', {force: true})

})

And ('I enter set alert level to incident creation',()=>{

    incidentlocators.INC_ALERT_LVL_BUSH1().click({force: true})
  
    incidentlocators.INC_ALERT_LVL_BUSH3().click({force: true})
    incidentlocators.INC_ALERT_LVL_BUSH4().click({force: true})

})

And ('I enter location to incident creation - bushfireshell',()=> {

    incidentlocators.INC_LOCATION_BUSH1().type('Albury',{force: true})
    incidentlocators.INC_LOCATION_BUSH2().click({force: true}).wait(4000).click({force: true})
})


And ('I enter 000 Reference to incident creation',()=> {
    const Triple0_ref = `000- ${Math.floor(Math.random() * 1000000000)}`
    incidentlocators.INC_000REF_BUSH().type(Triple0_ref, {force: true})
})


And ('I enter heading direction to incidentcreation',()=> {

    incidentlocators.INC_DIRECTION_BUSH().type('Heading West, Keep away from westside',{force: true})
})

And ('I enter resources to incident creation',()=> {
    const resouces_bushfireshell = `${Math.floor(Math.random() * 10)}`;
   incidentlocators.INC_RESOURCES_BUSH().type(resouces_bushfireshell,{force: true})

})



And ('I Save the incident creation form',()=> {

    incidentlocators.INC_SAVE_().click({force: true,timeout: 180000}).waitUntil(()=>incidentlocators.INCIDENTDETAILS().should('exist',{setTimeout: 180000}))
})

And ('I Assert with the Authorised SitRep, Investigation by the FIU', ()=> {
   incidentlocators.INC_ASSERT_BUSH1().should('contain.text','(SR) Authorised')
   incidentlocators.INC_ASSERT_BUSH2().contains('Info! This incident is under investigation by the FIU')
   incidentlocators.INCIDENTDETAILS().click({force: true})
    incidentlocators.INC_COPYNUMBER().then(($text)=> {
    txt = $text.text()
   })

})


/// BR INC 2.1 - Create Incident - Call Out  >>>>>>>>>>>>>>>>>>>>

And ('I select Create Call Out',()=> {

    incidentlocators.INCCREATE_CALLOUT1().click({force: true, timeout: 120000})
   
})


And ('I write Incident name to incident creation - Call out',()=> {

    incidentlocators.INC_NAME_CALLOUT().type('AutomationCallOutIncident',{force: true})
})

And ('I select Non-fire Incident to incident creation',()=> {
    incidentlocators.INC_FIRE_TYPE_CALLOUT().scrollIntoView().select('81')

})

And ('I enter tenure to incident creation - Call out',()=> {

   
    incidentlocators.INC_TENURE_CALLOUT1().type('Council{enter}')
    //.contains('Council').click({force: true})
    //incidentlocators.INC_TENURE_CALLOUT2().invoke('show').click({force: true})
    incidentlocators.INC_TENURE_CALLOUT3().click({force: true})
})

And ('I select from action taken to incident creation',()=> {

   incidentlocators.INC_ACTIONSTAKEN_CALLOUT().select('13')
})

And ('I select the suspected cause to incident creation - Call out',()=> {

    incidentlocators.INC_SUSPECTEDCAUSE_CALLOUT().select('11')
})

And ('I enter location to incident creation - Call out',()=>{

    incidentlocators.INC_LOCATION_CALLOUT1().type('Albury',{force: true})
    incidentlocators.INC_LOCATION_CALLOUT2().click({force: true}).wait(4000).click({force: true})

})


And ('I enter RFS call received date to incident creation',()=>{
    
    const RFS_Call = dayjs().subtract(20,'minute').format('DD/MM/YYYY HH:mm');
   incidentlocators.INC_RFSCALL_CALLOUT().scrollIntoView().type(RFS_Call, {force: true})
})

And ('I enter Stop message date to incident creation',()=>{
    const stop_message = dayjs().subtract(5,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.INC_STOP_MESSAGE_CALLOUT().type(stop_message,{force: true})
})



And ('I save the incident For Call out',()=> {

    incidentlocators.INC_SAVE_CALLOUT().click({force: true,timeout: 180000}).waitUntil(()=>incidentlocators.INCIDENTDETAILS().should('exist',{setTimeout: 180000}))

})

And ('I verify Authorised and out',()=> {

    incidentlocators.INCIDENTDETAILS().click({force: true})
    incidentlocators.INC_ASSERT_CALLOUT2().should('contain.text', 'Out')
    incidentlocators.INC_ASSERT_CALLOUT3().should('contain.text', '(SR) Authorised')

})






///>>>>>>>>>>>>>>>>>>>>>>>>SET TO OUT >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



 
 And ('I write Incident name to incident creation -settoout',()=> {
     
     incidentlocators.INC_NAME_BUSH().type('AutomationBushShell-settoout',{force: true})
 
 })
 And ('I enter LGA on create full incident page -settoout', ()=> {

    incidentlocators.INC_LGA().select('0060')
})
 
 And ('I enter Start Date Time to incident creation -settoout',()=> {
         const start_date_time = dayjs().subtract(1,'hour').format('DD/MM/YYYY HH:mm');
         incidentlocators.INC_STARTDATETIME_().type(start_date_time,{force: true})
 })
 
 
 And ('I select the type of the fire to incident creation -settoout',()=> {
 
     incidentlocators.INC_BUSHFIRETYPE_TAB().click({force: true})
     incidentlocators.INC_BUSHFIRETYPE().click({force: true})
 
 })
 
 And ('I type firesize to incident creation -settoout',()=> {
     incidentlocators.INC_FIRESIZETAB_BUSH().click({force: true})
     const area_size = `${Math.floor(Math.random() * 8)+1}`
     incidentlocators.INC_FIRESIZE_BUSH().clear().type(area_size,{force: true})
 })
 
 And ('I enter tenure to incident creation -settoout',()=>{
 

    incidentlocators.INC_TENURE_TAB_().type('Council{enter}')

    //  incidentlocators.INC_TENURE_TAB_BUSH().click({force: true})
    //  incidentlocators.INC_TENURE_BUSH().invoke('show').click({force: true})
     incidentlocators.INC_STATUS_BUSH1().click({force: true})
 })
 
 And ('I select Incident Status to incident creation -settoout',()=> {
 
     incidentlocators.INC_STATUS().select('1')
 })
 
 And ('I select responsible agency to incident creation -settoout',()=> {
 
     incidentlocators.INC_RESPONSIBLE_AGENCY_().select('6',{force: true})
 })
 
 And ('I select Incident owner to incident creation -settoout',()=> {
 
     incidentlocators.INC_OWNER_().select('6')
 })
 
 And ('I select suspected cause to incident creation -settoout',()=> {
 
     incidentlocators.INC_SUSPECTED_CAUSE_().select('11')
 
 })
 
 And ('I enter set alert level to incident creation -settoout',()=>{
 
     incidentlocators.INC_ALERT_LVL_BUSH1().click({force: true})
     incidentlocators.INC_ALERT_LVL_BUSH2().should('exist')
     incidentlocators.INC_ALERT_LVL_BUSH3().click({force: true})
     incidentlocators.INC_ALERT_LVL_BUSH4().click({force: true})
 
 })
 
 And ('I enter location to incident creation - bushfireshell -settoout',()=> {
 
     incidentlocators.INC_LOCATION_BUSH1().type('Albury',{force: true})
     incidentlocators.INC_LOCATION_BUSH2().click({force: true}).wait(4000).click({force: true})
 })
 
 
 And ('I enter 000 Reference to incident creation -settoout',()=> {
     const Triple0_ref = `000- ${Math.floor(Math.random() * 1000000000)}`
     incidentlocators.INC_000REF_BUSH().type(Triple0_ref, {force: true})
 })
 
 
 And ('I enter heading direction to incidentcreation -settoout',()=> {
 
     incidentlocators.INC_DIRECTION_BUSH().type('Heading West, Keep away from westside',{force: true})
 })
 
 And ('I enter resources to incident creation -settoout',()=> {
     const resouces_bushfireshell = `${Math.floor(Math.random() * 8)+1}`;
    incidentlocators.INC_RESOURCES_BUSH().clear({force: true}).type(resouces_bushfireshell,{force: true})
 
 })
 
 
 
 And ('I Save the incident creation form -settoout',()=> {
 
     incidentlocators.INC_SAVE_().click({force:true,timeout: 180000}).waitUntil(()=>incidentlocators.INCIDENTDETAILS().should('exist',{setTimeout: 180000}))  // Can take 1.7 minutes to return on cold start
 
    })
 
 And ('I Assert with the Authorised SitRep -settoout', ()=> {
    incidentlocators.INC_ASSERT_BUSH1().should('contain.text','(SR) Authorised')
    
 
 })
 
 And ('I click on add SitRep -settoout',()=> {

    incidentlocators.INCIDENT_ADDSITREP().prev().contains('Add SitRep').click({force: true})

 })



And ('I can verify report date as current -settoout' ,()=> {
    const currentreporttime = dayjs().subtract(15,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.CURRENT_REPORT_TIME_SR().should('exist').type(currentreporttime,{force:true})

})


And ('I type Incident controller -settoout',()=> {
    incidentlocators.INC_INCCONTROLLER_ADDSR_SETTOOUT().click({force: true}).waitForLoadingSpinner()
    incidentlocators.INCCONTROLLER_SRE().type('TeamC',{force: true})

})

And ('I Authorise SitRep -settoout', ()=> {

    incidentlocators.INC_AUTHORISE_SRE().click( {force: true,timeout: 60000})
    incidentlocators.INC_AUTHORISE_SRE_VERIFY1().should('exist').should('contain','Notifiable Incident*')
    incidentlocators.INC_AUTHORISE_SRE_VERIFY2().should('exist').should('contain','Request Fire Investigation')
    incidentlocators.INC_AUTHORISE_SRE_VERIFY3().should('exist').should('contain','Include Intel')
    incidentlocators.INC_BTN_AUTHORISE_SRE().scrollIntoView().click({force: true})
    incidentlocators.INC_SRE_USERNAME()
    incidentlocators.INC_SRE_PASSWORD()
    incidentlocators.INC_CREDENTIALSOK().click({force:true})
})


And ('I verify that Sitrep is Authorised -settoout',()=>{

    incidentlocators.INC_SITREP_SUCCESS().should('contain.text','Success!')
    incidentlocators.INC_CLOSE_SITREPE1().click({force: true})  // Close the SitRep window
    incidentlocators.INC_HEADERINCDETAILS().click({force: true})
    incidentlocators.INC_ASSERT_FULLINC_SRE().should('contain.text','(SR) Authorised')
})


And ('I edit Incident and set to out -settoout',()=> {

    incidentlocators.INC_SETTOOUT_ICON().should('be.visible').click({force: true}).waitForLoadingSpinner()
    incidentlocators.INC_EDITINCIDENT_SETTOOUT().should('exist').click({force: true})

    const RFSreceivedcall = dayjs().subtract(45,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.AGENCY_CALL_RECEIVED_DATE_TIME().scrollIntoView().type(RFSreceivedcall, {force: true})

    const Stopmessaging = dayjs().subtract(5,'minute').format('DD/MM/YYYY HH:mm');

    incidentlocators.INC_STOPMESSAGE_DATE().scrollIntoView().type(Stopmessaging , {force: true})
    incidentlocators.INC_SAVE_EDITINCIDENT().click({force: true,timeout: 120000})

    incidentlocators.INC_SETTOOUT_ICON().should('be.visible').click({force: true})
    cy.waitUntil(()=>incidentlocators.INC_SETTOUT_YES(),{timeout: 30000}).click({force: true})
})


And ('I assert for Success -settoout`', ()=> {

    cy.waitUntil(()=>incidentlocators.INC_SUCCESS_SETTOIUT()
    .contains('Success!')).should('exist')
})



//>>>>>>>>>>>>>>>> Edit Incident after RFSDATETIME after set to out >>>>>>>>>>>





 



And ('I edit Incident and set to out -settoout -for edit incident feature test',()=> {

    incidentlocators.INC_SETTOOUT_ICON().should('be.visible').click({force: true})
    incidentlocators.INC_EDITINCIDENT_SETTOOUT().should('exist').click({force: true})

    const RFSreceivedcall = dayjs().subtract(3,'day').format('DD/MM/YYYY HH:mm');
    incidentlocators.AGENCY_CALL_RECEIVED_DATE_TIME().scrollIntoView().type(RFSreceivedcall, {force : true})

    const Stopmessaging = dayjs().subtract(1,'hour').format('DD/MM/YYYY HH:mm');

    incidentlocators.INC_STOPMESSAGE_DATE().scrollIntoView().type(Stopmessaging, {force: true})
    incidentlocators.INC_SAVE_EDITINCIDENT().click({force: true,timeout: 120000})

    incidentlocators.INC_SETTOOUT_ICON().should('be.visible').click({force: true})
    cy.waitUntil(()=>incidentlocators.INC_SETTOUT_YES(),{timeout: 30000}).click({force: true})
    
})


And ('I assert for Success -settoout', ()=> {

    incidentlocators.INC_SUCCESS_SETTOIUT().should('be.visible').and('contain','Success!')
})

And ('I can only edit agency received time after settoout and cannot change the incident type',()=>{

        incidentlocators.INC_EDITINCIDENTBTTN_SETOOUT().click({force: true})
        const RFSreceivedcallupdated = dayjs().subtract(2,'day').format('DD/MM/YYYY HH:mm');
        incidentlocators.AGENCY_CALL_RECEIVED_DATE_TIME().scrollIntoView().type(RFSreceivedcallupdated, {force: true})

        incidentlocators.INC_RFSDATETIME_REASONFORCHANGE().type('For Automation Only',{force: true})
        incidentlocators.INC_CANNOTBE_CHANGEALERT().should('be.visible').and('contain','The incident type with Status OUT/OutAmalgamated/Planned/Withdrawn can not be changed.!!',{force: true})
        
})

And ('I save updated details',()=> {

    incidentlocators.INC_SAVE_EDITINCIDENT().click({force: true,timeout: 120000})
    incidentlocators.INCIDENTDETAILS().should('exist').click({force: true})
})






//>>>>>>>>>>>>>>>> INCIDENT SEARCH >>>>>>>>>>>>>>>>>

And ('I select Current incident serch',()=> {

   incidentlocators.CURRENT_INCIDENT_SEARCH().click({force : true})

})


    And ('I can see Incident list',()=> {

       incidentlocators.SEARCH_BTTN().click({force: true})


    })

    
    And ('I verified one of the incidents',()=> {

        incidentlocators.INCIDENT_EVENT_LIST_ALERT().should('be.visible').and('contain','Incident and Event List')
        cy.waitForLoadingSpinner()
        cy.waitUntil(()=> incidentlocators.INCIDENT_SEARCH1(),{timeout: 180000}).click({force: true})
        incidentlocators.INCIDENT_SEARCH2().should('be.visible').and('contain','Incident Details')

    })


//     >>>>>>>>>    View Merge Incidents >>>>>>>>>>>>>>>




And ('I select Merge Incidnets',()=> {
    
    incidentlocators.INC_MERGEINCIDENTSTAB().click({force: true})
    cy.waitForLoadingSpinner()
   
    
})

And ('I Select LGA',()=> {

    incidentlocators.INC_SELECT_LGA().select("0060").wait(4000)
    cy.waitForLoadingSpinner()
    cy.waitUntil(()=> cy.get('#incidentListTable_wrapper > div.dataTables_scroll > div.dataTables_scrollBody')).should('be.visible')
})

And ('I search for Incident with the status OUT',()=> {
    
    incidentlocators.INC_REFNO_SEARCH().type(incidentlocators.mergenum_Out,{force: true})
    incidentlocators.INC_NORESULTFOUND().should('be.visible').and('contain','No matching records found')

})

And ('I search for Incident with the status OutAmalgamated',()=> {

    incidentlocators.INC_REFNO_SEARCH().clear().type(incidentlocators.mergenum_outamalgamated,{force: true})
    incidentlocators.INC_NORESULTFOUND().should('be.visible').and('contain','No matching records found')

})
And ('I search for Incident with the status Planned', ()=> {
    incidentlocators.INC_REFNO_SEARCH().clear().type(incidentlocators.mergenum_planned,{force: true})
    incidentlocators.INC_NORESULTFOUND().should('be.visible').and('contain','No matching records found')

})


And ('I look for the incidents to be merged',()=> {

    //times(2, () => {
        //cy.get('#incidentListTable_wrapper > div.dataTables_scroll > div.dataTables_scrollHead > div > table > thead > tr > th:nth-child(9)')
          //.click()
      //})

      incidentlocators.INC_SEARCHMERGE().type('Bushfire_shell',{force: true})


})


And ('I select incidents and click on merge',()=> {

    incidentlocators.INC_SELECTED1().click({force : true})
    
    incidentlocators.INC_SELECTED2().click({force : true})

    incidentlocators.INC_SUBMITMERGE().scrollIntoView().click({force : true})

})

And ('I select primary Incidents',()=> {
    incidentlocators.INC_SELECTEDPRIMARY().click({force: true})


    //cy.get('#primaryIncidentSelection > tbody > tr.even > td.hidden-phone > span > a').then(($txt)=>{
        //const secondarynumber = $txt.text()

    //})

    incidentlocators.INC_PRIMARYMERGENUM().then(($num1)=>{

        let primary_merge = $num1.text()
         primary_mergenum = parseInt(primary_merge)

         
    })

    incidentlocators.INC_PRIMARYMERGENUM().then(($num2)=>{

       let secondary_merge = $num2.text()
       secondary_mergenum = parseInt(secondary_merge)
   })
   

    incidentlocators.INC_MERGEREASON().type('Automation test Only',{force: true})
    incidentlocators.INC_SUBMITMERGE().click({force : true})
})

And ('I verify with the merged details',()=> {
    let merge_details = [primary_mergenum, secondary_mergenum]

    console.log(merge_details[0])
    incidentlocators.INCIDENTDETAILS().click({force: true}).invoke('show')

    incidentlocators.INC_SUMMARYDETAILS().invoke('text')
                                          .should('contain', merge_details[0])
                                          .should('contain', merge_details[1])
    //incidentlocators.INC_ASSERTMERGEDNUMBER().should('be.visible')//.should('equal', `${secon}`)

    

})


//>>>>>>>>>>> change incident type >>>>>>>>>>>>>>>>

And ('I select Advanced incident search',()=> {

    incidentlocators.ADVANCE_INCIDENTSEARCH().click({force: true})
})

And ('I go to Advanced incident search page',()=> {

    cy.visit(`https://${Cypress.env('ICON_HOST_URL')}${'/FireIncident/FireIncident/AdvancedSearch'}`,{failOnStatusCode: false})
})



And ('I click Search and select the planned event',()=> {
    //cy.get('@eventNamePlanned').then((eventName)=>{
        //const name = eventName.text()
        incidentlocators.INC_ADVANCESEARCH_NAME().type('Planned',{force: true})
        incidentlocators.INC_ADVANCESEARCH_BTTN().click({force: true})
        incidentlocators.INC_REFNUMBER().click({force: true})


})


And ('I click Search and select the Incident',()=> {

    incidentlocators.INC_ADVANCESEARCH_BTTN().click({force: true})
    incidentlocators.INC_REFNUMBER().click({force: true})

})
And ('I click on edit incident',()=> {
    incidentlocators.INC_EDITINCIDENTBTTN().click({force: true})

})




And ('I Assert with Alert message to can not change type',()=> {

    incidentlocators.INC_TYPECHANGEALRTMSSG().scrollIntoView().should('be.visible').and( 'contain.text','The incident type with Status OUT/OutAmalgamated/Planned/Withdrawn can not be changed.')
})

//>>>>>>>>>>>>>>>>>>>>> Authorise Map >>>>>>>>>>>>>>>>>>>>>>

And ('I search for incident with no authorise map',()=> {

    incidentlocators.INC_ADVANCESEARCHNAVTAB()
                                            .contains('Other')
                                            .click({force:true})
                                            .then(()=>{
    
            incidentlocators.INC_NOAUTHORISEMAP()
            .click({force: true})
          })
        incidentlocators.INCIDENT_SEARCH().click({force: true})
        cy.waitForLoadingSpinner
})



And ('I click on edit current map',() => {

    incidentlocators.INC_EDITCURRENTMAP_().contains('Edit Current Map').scrollIntoView().click({force: true,timeout: 180000}).waitForLoadingSpinner()
    
    cy.waitUntil(()=>incidentlocators.INC_EDITOR_BTTNINMAP(),{timeout: 180000})    //incidentlocators.INC_EIDTCURRENTMAPBTTN().scrollIntoView().click({force: true}).waitForLoadingSpinner().wait(10000)
    cy.wait(20000)

})
And ('I put a Label in the map',()=> {

    incidentlocators.INC_EDITOR_BTTNINMAP().should('be.visible').click({force: true}).wait(6000)
    
    cy.waitUntil(()=> incidentlocators.INC_MAPWIDGET(),{timeout: 120000})
    
    
    incidentlocators.INC_SAFETYTAG()
    .click({force:true}).wait(6000)

   


    incidentlocators.INC_MAP_LAYERS()
    .click('left',{force: true}).wait(6000)

    incidentlocators.INC_MAP_LAYERS()
    .click('top',{force: true}).wait(6000)
    
    cy.waitUntil(()=>incidentlocators.INC_LABELOK(),{timeout: 60000}).click({force: true})

    incidentlocators.INC_EMERGENCYALERT().scrollIntoView()
    .click({force:true})

    incidentlocators.INC_MAP_LAYERS()
    .click('bottomRight',{force: true}).wait(6000)

    incidentlocators.INC_MAP_LAYERS()
    .click('center',{force: true}).wait(6000)

    incidentlocators.INC_MAP_LAYERS()
    .dblclick('bottomLeft',{force: true}).wait(6000)

    cy.waitUntil(()=>incidentlocators.INC_LABELOK(),{timeout: 60000})
    .click({force: true})

    incidentlocators.INC_EDITOR_BTTNINMAP().should('be.visible').click({force: true})
})


And ('I authorise the map and assert',()=> {

    incidentlocators.INC_AUTHORESEMAP_BTTN().click({force: true})
    incidentlocators.INC_AUTHORESEMAP_BTTN2().type('Automation Test Only',{force: true})
    incidentlocators.INC_AUTHORESEMAP_BTTN3().type(Cypress.env('TEST_USER_RFS_2_USERNAME'),{force: true})
    incidentlocators.INC_AUTHORESEMAP_BTTN4().type(Cypress.env('TEST_USER_RFS_2_PASSWORD'),{force: true})
    incidentlocators.INC_AUTHORESEMAP_BTTN5().click({force: true, timeout: 240000})
    // cy.wait(120000)
    cy.waitForLoadingSpinner()
    incidentlocators.INC_AUTHORISEMAPSUCCESS1().should('be.visible').and('contain','Success!')
    incidentlocators.INC_AUTHORISEMAPSUCCESS2().scrollIntoView().should('be.visible').and('contain','Automation')

})

//>>>>>>>>>>>>>>>>>>>>>>>>ATTACH DOCUMENTS >>>>>>>>>>>>>>>>>>>>>>>>>>>>


And ('I click into Attach documents',()=> {
    //click on attachment button
    incidentlocators.INC_ATTACHDOCUMENT().click({force: true})
    
    //ATTACHMENT Modal
    incidentlocators.INC_ATTACHDOCUMENTMODAL().should('exist')
    
    //ADD files and error Assert
    const filepath = 'attachment/AutomationAttach.docx'
    incidentlocators.INC_ADDFILES().attachFile(filepath)
    incidentlocators.INC_ATTACHFILENAMEBOX().invoke('text').should('contain', 'AutomationAttach.docx')
    incidentlocators.INC_STARTUPLOAD().click({force: true})
    incidentlocators.INC_UPLOADALERT().invoke('text').should('eq','Description is required.')
    
    //Reattach file
    incidentlocators.INC_ADDFILES().attachFile(filepath).wait(4000)
    incidentlocators.INC_UPLOADDESCRIPTION().type('Automation test only',{force: true})
    incidentlocators.INC_STARTUPLOAD().click({force: true}).waitForLoadingSpinner()
    incidentlocators.INC_UPLOADCLOSE().click({force: true}).waitForLoadingSpinner()
    
    //Assert Attach details
    incidentlocators.INC_UPLOADASSERT1().scrollIntoView().invoke('text').should('contain','AutomationAttach')
    incidentlocators.INC_UPLOADASSERT2().scrollIntoView().invoke('text').should('contain','Automation test only')
    incidentlocators.INC_UPLOADASSERT3().scrollIntoView().invoke('text').should('contain',Cypress.env('ICON_USERNAME'))

})

//>>>>>>>>>>>>>> IAP>>>>>>>>>>>
And ('I click on IAP and save',()=> {
    //IAPbutton 
    incidentlocators.INC_ADDIAPBTTN().click({force : true})
    //IAP from details fillup
    incidentlocators.INC_ADDIAPFORM().should('be.visible')
    incidentlocators.INC_IAPNAME().type('IAP AUTOMATION',{force: true})
    
    const iapstartdate = dayjs().format('DD/MM/YYYY HH:mm');
    incidentlocators.INC_IAPSTARTDATETIME().type(iapstartdate,{force: true})

    const iapenddate = dayjs().add(2,'day').format('DD/MM/YYYY HH:mm');
    incidentlocators.INC_IAPENDDATETIME().type(iapenddate,{force: true})
        
    incidentlocators.INC_SAVE_().click({force: true,timeout: 180000}).waitForLoadingSpinner()

})


And ('I can see IAP Edit page and save',()=> {

    incidentlocators.INC_AUTHORISEIAP().scrollIntoView().click({force: true}).waitForLoadingSpinner()
    incidentlocators.INC_IAPAUTHORISEERROR().scrollIntoView().should('be.visible').invoke('text').should('contain','Preparer Details need to be entered before this IAP can be Authorised.')
 

    //Situaltion tab 

    incidentlocators.INC_IAPSITUATIONTAB().scrollIntoView().click({force: true}).waitForLoadingSpinner()

    //current situation

    incidentlocators.INC_CURRENSITUATIONTAB().invoke('show').click({force:true})
    incidentlocators.INC_IAPCURRENTSITUATION().type('The fire is burning in High fire danger conditions and is currently less than two hours from properties. Under these conditions, fires can be difficult to control. Embers may be blown ahead of the fire, creating spot fires. These spot fires may threaten your home earlier than the predicted main fire front.',{force: true})
    incidentlocators.INC_CURRENTSITADDNEW().click({force:true})
    incidentlocators.INC_SITUATIONSELECTEDCATEGORY().select('Incident Management Team',{force: true})
    incidentlocators.INC_CURRENTSITUATIONEDITENTRY().type('Fire Behaviour: Variable based on local conditions{enter}Fire Intensity:{enter}• Fires can be controlled{enter}• Spot fires can occur close to the main fire',{force: true})
    incidentlocators.INC_SAVEENTRYCURRENTSITUATION().click({force : true})
    incidentlocators.INC_IAPCURRENTSITUATIONASSERT1().scrollIntoView().should('contain','Incident Management Team')
    incidentlocators.INC_IAPCURRENTSITUATIONASSERT2().scrollIntoView().invoke('text').and('contain','Fire Behaviour: Variable based on local conditions')

    //Current Weather

    incidentlocators.INC_IAPCURRENTWEATHERTAB().invoke('show').click({force: true})
    
    incidentlocators.INC_IAPCURRENTWEATHERTAB().scrollIntoView().type('SMOKE Rising. Carbon increased in the air.',{force: true})
    incidentlocators.INC_IAPWEATHERLOC().type('Albury',{force: true})
    
    const weathertakendate = dayjs().format('DD/MM/YYYY HH:mm');
    incidentlocators.INC_IAPWEATHERTAKENDATE().scrollIntoView().type(weathertakendate,{force: true})

    incidentlocators.INC_IAPWEATHERSAVE().scrollIntoView().click({force: true})
    incidentlocators.INC_WEATHERSAVESUCCESS().invoke('text').should('contain', 'The record was updated successfully.')

    //preparer details

    incidentlocators.INC_IAPPREPARERTAB().scrollIntoView().invoke('show').click({force: true})
    incidentlocators.INC_IAPPREPARE().type('TeamC',{force: true})

    incidentlocators.INC_IAPSAVE().scrollIntoView().click({force: true, timeout: 120000})
    incidentlocators.INC_SAVENOTIFICATIONMESSAGE().invoke('text').should('contain','IAP data saved successfully')

    //AUTHORISE IAP
    incidentlocators.INC_AUTHORISEIAP().scrollIntoView().click({force: true})

    incidentlocators.INC_IAPAUTHORISE1().type(Cypress.env('ICON_USERNAME'),{force: true})
    incidentlocators.INC_IAPAUTHORISE2().type(Cypress.env('ICON_PASSWORD'),{force: true})
    incidentlocators.INC_IAPAUTHORISEOK().click({force: true})
    incidentlocators.INC_IAPAUTHORISESUCCESS().invoke('text').should('contain','Success!')

    //Back to incident details page

    incidentlocators.INC_HEADERINCDETAILS().click({force: true})


})

And ('Edit incident from bushfire to non bushfire',()=> {

    incidentlocators.INC_EDITINCTONONBUSH().click({force: true})

    //Agency call received time
    const agency_recievedcall = dayjs().subtract(50,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.AGENCY_CALL_RECEIVED_DATE_TIME().scrollIntoView().type(agency_recievedcall, {force : true})



    incidentlocators.INC_CHANGEINCIDENTTYPE().click({force: true})

    incidentlocators.INC_CHANGEINCWARNALERT().should('be.visible').invoke('text').and('contain', 'Incident type change will result in a new Authorised SitRep!!')
    incidentlocators.INC_CHANGEINCINFOALERT().should('be.visible').invoke('text').and('contain', 'Select at least one fire type and Reason!')
    incidentlocators.INC_CHANGEINCIDENTREASON().type('Automation test only',{force: true})
    cy.wait(5000)
    incidentlocators.INC_NEWFIRETYPE().select("40")
    incidentlocators.INC_SAVE_().click({force: true,timeout: 180000})
    //Assert after change

    
    cy.get('#incidentSummaryDetails > div > div > div:nth-child(1) > div > div > dl > dd:nth-child(2) > a').then(($text1)=> {
        const txt1 = $text1.text()
        expect($text1.text()).to.eq(txt)
    })
    incidentlocators.INC_CONFIRMTYPECHANGEDALRT().should('be.visible').invoke('text').and('contain','Incident Type changed from Bush fire to Other - fire.')
    incidentlocators.INC_SITREPBOX1().invoke('text').should('contain','(SR) Authorised (Going)')
    incidentlocators.INC_SITREPBOX2().invoke('text').should('contain','(SR) Authorised (Going)')
    incidentlocators.INC_UPLOADASSERT1().scrollIntoView().invoke('text').should('contain','AutomationAttach')
    incidentlocators.INC_UPLOADASSERT2().scrollIntoView().invoke('text').should('contain','Automation test only')
    incidentlocators.INC_UPLOADASSERT3().scrollIntoView().invoke('text').should('contain',Cypress.env('ICON_USERNAME'))


})


//>>>>>>>>>>>> DELETE INCIDENT >>>>>>>>>>>>

And ('I click Edit incident and Delete it',()=> {

    incidentlocators.INC_EDITINCTONONBUSH().click({force: true})
    
    incidentlocators.INC_DELETEBTTN().click({force: true}).waitForLoadingSpinner()
    incidentlocators.INC_DELETEOK().click({force: true})
    incidentlocators.INC_DELETERSNALERT().invoke('text').should('contain','The DeleteReason field is required.')
    incidentlocators.INC_DELETEREASON().type('Automation Test Only', {force: true})
    incidentlocators.INC_DELETEOK().click({force: true})
    
    const delsuccessalert = 'Success!'
    incidentlocators.INC_DELETESUCCESS().then(($el)=>{
        const success_text = $el.text()
        expect(success_text).to.contain(delsuccessalert)

    })
    


})


// Delete no available >>>>>>>>>>>>>

And ('I select edit incident and assert that Delete not available',()=> {
    
    incidentlocators.INC_EDITINCTONONBUSH().click({force: true})
    incidentlocators.INC_DELETENOTAVAILABE().should('not.contain','Delete')

})

//ICONSUP-T553 (1.0) Validate Incident Owner is default to "ACT" when "ACT Rural Fire Service" user creates an Bushfire Shell incident>>>

When('I expand Admin menu', () => {
    dashboard.ADMIN_MENU_ICON().click()
})

And ('I click on Username',()=> {
    userSearch.ADMIN_USERTAB().click({force: true})

})

And('I verify user agency is ACT Rural Fire Service',()=>{
    userSearch.ADMIN_AGENCYID().should('be.visible').find('option').and('contain','ACT Rural Fire Service').invoke('attr', 'selected')
    .should('equal', 'selected')

})

And ('I Verified Agency Dropdown and select ACT Rural Fire Service',()=> {

    userSearch.ADMIN_AGENCYID().focus().should('be.visible').find('option').and('contain','ACT Rural Fire Service')
    userSearch.ADMIN_AGENCYID().select("201", {force: true})

})
And ('I save the details',()=> {
    userSearch.ADMIN_ROLESAVE().click({force: true})
    cy.waitForLoadingSpinner()
    
})
    
Given ('I open ICON webpage while logging in with RFS-ACT user', ()=>{
    cy.clearCookies()
    cy.ntlmReset()
    cy.loginToICON(Cypress.env('ICON_HOST_URL'), Cypress.env('TEST_USER_RFS_ACT_USERNAME'), Cypress.env('TEST_USER_RFS_ACT_PASSWORD'))
    userSearch.ADMIN_USERTAB().should('contain.text','ACTRFS')
})

And ('I enter LGA on create full incident page - ACT',()=> {
    incidentlocators.INC_LGA().select('0001')
})

And ('I select responsible agency to incident creation - ACT Rural Fire Service',()=> {

    incidentlocators.INC_RESPONSIBLE_AGENCY_().select("201",{force: true})

})

And ('I select Incident owner to incident creation - ACT',()=> {

    incidentlocators.INC_OWNER_().invoke('val').should('equal','201')

})

And ('I enter location to incident creation - ACT',()=> {
    incidentlocators.INC_LOCATION_BUSH1().type('-35.34319942486327, 149.08499240544717',{force: true})
    incidentlocators.INC_LOCATION_BUSH2().click({force: true}).wait(4000).click({force: true})
    
})


And ('I Open Bushfire Shell incident and validate Incident owner is displayed as "ACT"',()=> {

    incidentlocators.INC_ASSERT_BUSH1().should('contain.text','(SR) Authorised')
    incidentlocators.INC_ASSERT_BUSH2().contains('Info! This incident is under investigation by the FIU')
    incidentlocators.INCIDENTDETAILS().should('exist')

    incidentlocators.INC_DETAILSOWNER().should('exist').then(($owner)=> {
        
        let Owner = $owner.text()
        expect(Owner).to.equal('ACT')
    
    })

    incidentlocators.INC_DETAILSLGA().should('exist').then(($owner)=> {
        
        let LGA = $owner.text()
        expect(LGA).to.equal('ACT')
    
    })

  incidentlocators.INC_DETAILSREGION().should('exist').then(($owner)=> {
        
        let Region = $owner.text()
        expect(Region).to.equal('ACT')
    
    })

 

})

And ('I Validate Incident Owner is displayed as "ACT" as Default on SitRep Main tab',()=> {

    incidentlocators.INC_SITREPVIEWBTTN().should('exist').click({force: true})

    incidentlocators.INC_OWNER_().should('be.disabled').invoke('val').should('equal','201')

    incidentlocators.INCCONTROLLER_SRE_TAB().click({force: true}).waitForLoadingSpinner()   //Expand Command/control/comms


    incidentlocators.INC_STRPCONTROLCNTR().should('be.disabled').invoke('val').should('equal','20')

    
    incidentlocators.INC_STRPCONTROLLERAGENCY().should('be.disabled').invoke('val').should('equal','201')


     incidentlocators.INCLEAD_AGENCY_SRE().should('be.disabled').invoke('val').should('equal','201')



})


And ('I Go Back to Incident details page and click on Add SitRep button',()=> {

    incidentlocators.INC_HEADERINCDETAILS().click({force:true})
    
    incidentlocators.INCIDENT_ADDSITREP().prev().contains('Add SitRep').click({force: true})

})


And ('I validate specific fields',()=> {
    
    incidentlocators.INC_OWNER_().invoke('val').should('equal','201')


    incidentlocators.INCCONTROLLER_SRE_TAB().click({force: true}).waitForLoadingSpinner()   //Expand Command/control/comms


    incidentlocators.INC_STRPCONTROLCNTR().invoke('val').should('equal','20')

    
    incidentlocators.INC_STRPCONTROLLERAGENCY().invoke('val').should('equal','201')


     incidentlocators.INCLEAD_AGENCY_SRE().invoke('val').should('equal','201')

})

And ('I Verified Agency Dropdown and select Rural Fire Service',()=>{
    userSearch.ADMIN_AGENCYID().select("6", {force: true})

})


And ('I verified Agency is Rural Fire Service',()=> {

    userSearch.ADMIN_AGENCYID().focus().and('contain.text','Rural Fire Service')
})





//_____________ edit Incident local number after settoout>>>>>>>>>>>>>>>>>>>>>>>>



And ('I edit Incident local number after settoout',()=>{

    // Go to EDIT INCIDENTS
    incidentlocators.INC_EDITINCIDENTBTTN_SETOOUT().click({force: true})

    //TYPE LOCAL NUMBER
    let localnumber = `${Math.floor(Math.random() * 99998)+1}`
    console.log(localnumber)
    incidentlocators.INC_LOCALNUMCADPAGE().type(localnumber,{force: true})
    //Save
    incidentlocators.INC_SAVE_EDITINCIDENT().click({force: true,timeout: 120000})
    
    //REASON FORCHANGE

    incidentlocators.INC_DETAILSPAGEERRORALET().invoke('text').and('contain',' Please enter a reason for changing the Incident Number Local')
    incidentlocators.INC_LOCALNUMCHANGERSN().type('For Automation Test Only')

    //SAVE
    incidentlocators.INC_SAVE_EDITINCIDENT().click({force: true,timeout: 120000})

    //open incident details tab and check local number
    
    incidentlocators.INC_SUMMARYDETAILS().invoke('text').should('contain', localnumber)



})




Given('I navigate to Create Full Incident page',()=>{
    cy.loginToICONNoVisit()
    incidentlocators.VISIT_CREATE_FULL_INCIDENT_PAGE()
    
})
And('I create full incident with pending sitrep',()=>{
    // I enter incident name in the field on create full incident page - other types
    
    incidentlocators.CREATEFULLINC_NAME().then(($nameField)=>{
        const nameField = $nameField
        const timeStamp = Date.now().toString()
        const name = 'ICONSUP-T425-428:Sitrep Pending- ' + timeStamp
        cy.wrap(name).as('incName')
        cy.wrap(nameField).type(name)
    })
    // I enter LGA on create full incident page
    incidentlocators.INC_LGA().select('A001') // A001 == Armidale
    // I enter incident location on create full incident page

    incidentlocators.CREATEFULLINC_MAPLOC().then(($el)=>{
        const locationTextField = $el
        // We are using 'A001' value from the dropbox that selects LGA
        // 'A001' corresponds to Armidale
        // if the item selected is changed in the future
        // make sure to change the location value below as well
        const location = 'Armidale'
        cy.wrap(location).as('incidentLocation')
        cy.wrap(locationTextField).type(location,{force: true})
    })
    incidentlocators.ZOOMBUTTON_FULLINC().click({force: true}).wait(4000).click()
    // I enter Incident Number-Local on create full incident page
    incidentlocators.LOCALINC_NUMBER().then(($localIncNumberField)=>{
        const localIncNumberField = $localIncNumberField
        const localIncNumber = `${Math.floor(Math.random() * 100000000)}`
        cy.wrap(localIncNumberField).type(localIncNumber,{force: true})
    })
    // I enter 000 Reference No on create full incident page
    incidentlocators.TRIPLE0_NUMBER().then(($tripleZeroNumberField)=>{
        const tripleZeroNumberField = $tripleZeroNumberField
        const UniqueNumber = ` 000- ${Math.floor(Math.random() * 10000000000000)}`
        cy.wrap(tripleZeroNumberField).type(UniqueNumber, {force: true})
    })
    // I enter Agency Call received date-time on create full incident page
    const eventstartdate = dayjs().subtract(10,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.AGENCY_CALL_RECEIVED_DATE_TIME().scrollIntoView().then(($agencyReceivedDateTimeField)=>{
        const agencyReceivedDateTimeField = $agencyReceivedDateTimeField
        const eventstartdate = dayjs().subtract(10,'minute').format('DD/MM/YYYY HH:mm');
        cy.wrap(agencyReceivedDateTimeField).type(eventstartdate, {force: true})
    })
    // I select Other  Fire Type on create full incident page
    incidentlocators.INC_OTHERFIRE_TYPE().select('40',{force:true})

    // I click on save button on create full incident page
    incidentlocators.SAVE_BTTN_FULLINC().should('be.visible').click({force: true, timeout: 180000}).waitUntil(()=>incidentlocators.INCIDENTDETAILS().should('exist',{setTimeout: 180000}))

    // I verified saved page with no sitrep authorised
    incidentlocators.FULLINC_SUMMARY_ALERT().should('be.visible').contains('Info! No SitRep Authorised')
    incidentlocators.INC_ASSERT_BUSH1().should('contain.text','(SR) Draft')

    // get the incident id from the url so it can be used in subsequent steps
    cy.url().then((url)=>{
        const id = url.split('/').slice(-1)[0]
        cy.wrap(id).as('incId')
    })
})


Then('I should see the created incident displayed on Landing Page map with dotted border',()=>{
    cy.get('@incId').then((incId)=>{
        const id = incId
        //incidentlocators.SITREP_PENDING_INC_MARKER_ICON_MAP(id).should('exist')
    })
})





And('I edit and authorise sitrep for the created incident',()=>{
    // I click on add SitRep
    incidentlocators.EDIT_SITREP_BTTN().click({force: true})

    // I can verify report date as current
    const currentreporttime = dayjs().subtract(5,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.CURRENT_REPORT_TIME_SR().should('be.visible').type(currentreporttime,{force: true})

    // I enter SitRep comments
    incidentlocators.SITREP_COMMENTS_SR().type('SitRep for Full Incident Bushfire type - Automation test only',{force: true})

    incidentlocators.EDIT_SITREP_PAGE_SAVE_BUTTON().click({force:true}).waitForLoadingSpinner()

    // I enter start origin date
    incidentlocators.INCIDENT_ORIGIN_TAB_SR().click({force: true}).waitForLoadingSpinner()     // Expand Incident Origin Details

    const incidentorigindate = dayjs().subtract(30,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.INC_STARTDATE_SR().click({force:true}).type(incidentorigindate,{force: true})

    // add tenure
    incidentlocators.INCLOCDETAILS_TAB_SR().click({force:true}).waitForLoadingSpinner()           //Expand Current Incidentdetaillink                             // Expand Current Incident Location Details
    incidentlocators.TENURE_TAB_SR().type('Council{enter}').waitForLoadingSpinner
    incidentlocators.TENURE_SELECTED_SR().click({force:true})

    // I enter threat potential in <2 hours
    incidentlocators.THREATS_TAB_SR().click({force: true}).waitForLoadingSpinner()
    incidentlocators.THREAT_POTENTIAL_SR().type('This is a potential Threat of Smoke, heading "S", All types threats to be listed', {force:true})

    // I Set Alert Level
    incidentlocators.ACTION_TAB_SR().click({force: true}).waitForLoadingSpinner()
    incidentlocators.ALERTLEVEL_REQTEXT().should('contain.text','Current Alert Level is required.')
    incidentlocators.SETALERTBTTN_SR().click({force: true})
    incidentlocators.ALERTLEVETBOX_SR().should('exist').should('contain.text','Incident Alert Level')
    incidentlocators.SELECTED_ALERTLEVEL() // Select A
    incidentlocators.SETALERTOK_SR().click({force: true})
    incidentlocators.VERIFY_ALERTLEVLTXT().should('contain.text','Selected Alert Level: A')


    // I type Incident controller
    incidentlocators.INC_INCCONTROLLER_ADDSR_SETTOOUT().click({force: true}).waitForLoadingSpinner()
    incidentlocators.INCCONTROLLER_SRE().type('TeamC',{force: true})

    //lead agency
    incidentlocators.INCLEAD_AGENCY_SRE().select("6",{force: true}) // 6 == 'Rural Fire Service'

    // I Authorise SitRep
    incidentlocators.INC_AUTHORISE_SRE().click( {force: true,timeout: 60000})
    incidentlocators.INC_AUTHORISE_SRE_VERIFY1().should('exist').should('contain','Notifiable Incident*')
    incidentlocators.INC_AUTHORISE_SRE_VERIFY2().should('exist').should('contain','Request Fire Investigation')
    incidentlocators.INC_AUTHORISE_SRE_VERIFY3().should('exist').should('contain','Include Intel')
    incidentlocators.INC_BTN_AUTHORISE_SRE().scrollIntoView().click({force: true})
    incidentlocators.INC_SRE_USERNAME()
    incidentlocators.INC_SRE_PASSWORD()
    incidentlocators.INC_CREDENTIALSOK().click({force:true})
    // I verify that Sitrep is Authorised
    incidentlocators.INC_SITREP_SUCCESS().should('contain.text','Success!')
    incidentlocators.INC_CLOSE_SITREPE1().click()  // Close the SitRep window
    incidentlocators.INC_HEADERINCDETAILS().click({force:true})
    incidentlocators.INC_ASSERT_FULLINC_SRE().should('be.visible').and('contain','(SR) Authorised')
})

And ('I open COP page',()=> {
    cy.loginToCOP()
})

And('I search the location of the incident',()=>{
    copLocators.SHOW_LOCATION_SEARCH_BUTTON().click({force:true})
    copLocators.LOCATION_SEARCH_TEXT_FIELD().should('exist')
    cy.get('@incidentLocation').then((loc)=>{
        const incidentLocation = loc.text()
        copLocators.LOCATION_SEARCH_TEXT_FIELD().type(incidentLocation)
    })
})

Then('I should see the incident',()=>{
    cy.get('@incName').then((name)=>{
        const incName = name
        copLocators.FIND_INCIDENT_IN_MAP_BY_NAME(name).should('exist')
    })
})


And('I navigate to Create New Event page',()=>{
    eventlocators.VISIT_CREATE_NEW_EVENT_PAGE()
})

And('I create event with a future date with planned status',()=>{
    // I can select Create Event item
    eventlocators.CREATE_EVENT_TAB().click({force: true, timeout: 120000})
    // And I enter incident name in the field on create event page for future
    eventlocators.INCIDENT_NAME().then(($nameField)=>{
        const nameField = $nameField
        const timeStamp = Date.now().toString()
        const name = 'ICONSUP-T425-T404 Event'+ timeStamp
        cy.wrap(name).as('eventNamePlanned')
        cy.wrap(nameField).type(name)
    })
    // And I enter LGA on create event page
    eventlocators.LGA_NAME().select('A001') // A001 == Armidale
    // And I enter date time 3 months from now on create event page
    const eventstartdate = dayjs().add(3,'month').format('DD/MM/YYYY HH:mm');
    eventlocators.START_DATE().type(eventstartdate,{force: true})
    // And I select event type on create event page
    eventlocators.EVENT_TYPE().select('10',{force: true})
    // And I enter event area size on create event page
    eventlocators.FIRE_SIZE().clear().type('10',{force: true})
    // And I enter tenure on create event page
    eventlocators.TENURE_NAME().type('Council{enter}')
    // And I select agency responsible on create event page
    eventlocators.AGENCY_RESPONSIBLE_TAB().click()
    eventlocators.SELECTED_AGENCY().select('6',{force: true})
    // And I select incident owner on create event page
    eventlocators.SELECTED_INCIDENT_OWNER().select('6',{force: true})
    // And I enter incident location on create event page
    eventlocators.INCIDENT_LOCATION().then(($el)=>{
        const locationTextField = $el
        // We are using 'A001' value from the dropbox that selects LGA
        // 'A001' corresponds to Armidale
        // if the item selected is changed in the future
        // make sure to change the location value below as well
        const location = 'Armidale'
        cy.wrap(location).as('eventLocationPlanned')
        cy.wrap(locationTextField).type(location,{force: true})
    })
    
    eventlocators.SELECT_INCIDENT_LOCATION().click().wait(4000).click()
    // And I click save button on create event page
    cy.waitUntil(()=>eventlocators.SAVE_EVENT().scrollIntoView().should('be.visible').click({force: true,timeout: 180000}))
    // Then I verify planned status
    cy.waitUntil(()=> eventlocators.TOOGLE_INCIDENTDETAILS().should('be.visible',{setTimeout: 180000}).click({force: true}))
    eventlocators.STATUS().should('contain.text','Planned')
})

When('I search the location of the event-planned',()=>{
    copLocators.SHOW_LOCATION_SEARCH_BUTTON().click({force:true})
    copLocators.LOCATION_SEARCH_TEXT_FIELD().should('exist')
    cy.get('@eventLocationPlanned').then((loc)=>{
        const eventLocation = loc.text()
        copLocators.LOCATION_SEARCH_TEXT_FIELD().type(eventLocation)
    })
})

Then('I should not see the event-planned',()=>{
    cy.get('@eventNamePlanned').then((name)=>{
        const incName = name
        copLocators.FIND_INCIDENT_IN_MAP_BY_NAME(name).should('not.exist')
    })
})

And('I create event with a past date with contained status',()=>{
    // I can select Create Event item
    eventlocators.CREATE_EVENT_TAB().click({force: true, timeout: 120000})
    // And I enter incident name in the field on create event page for future
    eventlocators.INCIDENT_NAME().then(($nameField)=>{
        const nameField = $nameField
        const timeStamp = Date.now().toString()
        const name = 'ICONSUP-T425 Event'+ timeStamp
        cy.wrap(name).as('eventNameContained')
        cy.wrap(nameField).type(name)
    })
    // And I enter LGA on create event page
    eventlocators.LGA_NAME().select('A001') // A001 == Armidale
    // And I enter date time 3 months from now on create event page
    const eventstartdate = dayjs().subtract(3,'month').format('DD/MM/YYYY HH:mm');
    eventlocators.START_DATE().type(eventstartdate,{force: true})
    // And I select event type on create event page
    eventlocators.EVENT_TYPE().select('10',{force: true})
    // And I enter event area size on create event page
    eventlocators.FIRE_SIZE().clear().type('10',{force: true})
    // And I enter tenure on create event page
    eventlocators.TENURE_NAME().type('Council{enter}')
    // And I select agency responsible on create event page
    eventlocators.AGENCY_RESPONSIBLE_TAB().click()
    eventlocators.SELECTED_AGENCY().select('6',{force: true})
    // And I select incident owner on create event page
    eventlocators.SELECTED_INCIDENT_OWNER().select('6',{force: true})
    // And I enter incident location on create event page
    eventlocators.INCIDENT_LOCATION().then(($el)=>{
        const locationTextField = $el
        // We are using 'A001' value from the dropbox that selects LGA
        // 'A001' corresponds to Armidale
        // if the item selected is changed in the future
        // make sure to change the location value below as well
        const location = 'Armidale'
        cy.wrap(location).as('eventLocationContained')
        cy.wrap(locationTextField).type(location,{force: true})
    })
    
    eventlocators.SELECT_INCIDENT_LOCATION().click().wait(4000).click()
    // And I click save button on create event page
    cy.waitUntil(()=>eventlocators.SAVE_EVENT().scrollIntoView().should('be.visible').click({force: true,timeout: 180000}))
    // Then I verify contained status
    cy.waitUntil(()=> eventlocators.TOOGLE_INCIDENTDETAILS().should('be.visible',{setTimeout: 180000}).click({force: true}))
    eventlocators.STATUS().should('contain.text','Contained')
})

When('I search the location of the event-contained',()=>{
    copLocators.SHOW_LOCATION_SEARCH_BUTTON().click({force:true})
    copLocators.LOCATION_SEARCH_TEXT_FIELD().should('exist')
    cy.get('@eventLocationContained').then((loc)=>{
        const eventLocation = loc.text()
        copLocators.LOCATION_SEARCH_TEXT_FIELD().type(eventLocation)
    })
})

Then('I should see the event-contained',()=>{
    cy.get('@eventNameContained').then((name)=>{
        const incName = name
        copLocators.FIND_INCIDENT_IN_MAP_BY_NAME(name).should('exist')
    })
})

//>>>>>>>>>>>Verify Incident alert level list page for alert level>>>>>>>>>>>>>>>>>>>>>

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

Then ('I search for incident',()=>{
    iall.search_Given_Incident(inc_NAME_BUSH)    
})

And ('I look for the incident details',()=>{
    iall.select_firstMatch()
    detINC = iall.fetch_Incident_Details_fromINCPAGE()
    cy.go(-1)
})

Then ('I verify the details on incident alert level list match the incident details',()=>{
    detIALL = iall.fetch_searchedINC_Details_fromIALL()
    cy.window().then((win) => {
        // win is the remote window
        iall.crossverify_alert_inc_iall(detINC[detINC.length-1], detIALL[detIALL.length-1]) 
        iall.crossverify_prev_alert_inc_iall('EW (WA)')
      })      
})

Then ('I click on add sitrep',()=>{
    INC.click_addSITREP()
})

And ('I save the list of options to csv',()=>{
    var list1:string[]=[]
    incidentlocators.INC_OTHERFIRE_TYPE().find('option')
    .each(($el, index, $list)=>{
        
        cy.wrap($el).invoke('text').then((text1)=>{
            list1.push(text1)
        })
    })
    cy.writeFile('otherFireTypes.csv', list1)
})
