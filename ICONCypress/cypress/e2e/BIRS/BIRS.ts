import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import { times } from 'lodash';
import dayjs from "dayjs";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";
import BIRSJointAgencyPage from "../pages/BIRSJointAgencyPage";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Operations from "../pages/Operations&fiu";
import S44PAGE from "../pages/S44Page";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import { data } from "cypress/types/jquery";
import IncidentSearchPage from "../pages/IncidentSearchPage";
import BrigadeReportSearchPage from "../pages/BrigadeReportSearchPage";


const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const birs_commonpage = new BIRS_COMMONPAGES()
const birsJointAgencyPage = new BIRSJointAgencyPage
const s44page = new S44PAGE()
const incidentSearchPage = new IncidentSearchPage()
const brigadeReportSearchPage = new BrigadeReportSearchPage()
let EXPSTARTDATE : any
let EXPLGA = ''
let EXPINCREF = ''
let EXPINCREF1 = ''
let EXP000REF = ''
let EXPINCNAME = ''
let EXPINCNAME1 = ''
let EXPINCLOC = ''
let EXPINCCON = ''
let EXPINCTYPE = ''
let EXPVOLREP = ''
let EXPPRIMARYBRIG = ''
let EXPSUPPORTBRIG = ''
let EXPREPCOMPLETED = ''
let EXPCOLUMN = ''
let EXPCOLUMN1 = ''
let TABLEINFO = ''
let ROWCOUNT
let ROWCOUNT1 = ''

let EXP_REGION = ''
let EXP_ZONE = ''
let EXP_DISTRICT = ''
let EXP_LGA = ''
let EXP_REF = ''
let EXP_INCIDENT_DATE = ''
let EXP_INCIDENT_TYPE = ''
let EXP_BRIGADE_NAME = ''
let EXP_APPLIANCE_USED = ''
let EXP_RESPONSE_TIME = ''
let EXP_PRIMARY_SUPPORT = ''
let loc_address = ''



When ('I expand operations tab',()=> {
    operations.OPERATIONS_TAB().should('be.visible').click()

})


And ('I expand Incidents',()=>{
    incidentlocators.INCIDENT_TAB().click()

})


And ('I open Create bushfire Shell',()=> {

    incidentlocators.INCCREATE_BUSHFIRESHELL1().click({force: true, timeout: 120000})
})

And ('I write Incident name to incident creation',()=> {
    
    incidentlocators.INC_NAME_BUSH().type('AutomationBushfireShell',{force: true})

})
And ('I enter LGA on create full incident page', ()=> {

    incidentlocators.INC_LGA().select('0060')
})

And ('I enter Start Date Time to incident creation',()=> {
        const start_date_time = dayjs().subtract(60,'hour').format('DD/MM/YYYY HH:mm');
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

    incidentlocators.INC_SUSPECTED_CAUSE_().select('18')

})

And ('I enter set alert level to incident creation',()=>{

    incidentlocators.INC_ALERT_LVL_BUSH1().click({force: true})
  
    incidentlocators.INC_ALERT_LVL_BUSH3().click({force: true})
    incidentlocators.INC_ALERT_LVL_BUSH4().click({force: true})

})

And ('I enter location to incident creation - bushfireshell',()=> {

    
    incidentlocators.INC_LOCATION_BUSH1().type('WOODSTOCK',{force: true})
    incidentlocators.INC_LOCATION_BUSH2().click({force: true}).wait(2000)

    loc_address = '258 WATERLOO RD, WOODSTOCK'
    incidentlocators.INCIDENT_LOCATION().type(loc_address,{force: true}).wait(4000).type('{downArrow}').type('{enter}')
    incidentlocators.INC_LOCATION_BUSH2().click({force: true})    


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

    incidentlocators.INC_SAVE_().click({force:true,timeout: 180000}).waitUntil(()=>incidentlocators.INCIDENTDETAILS().should('exist',{setTimeout: 180000}))})

And ('I Assert with the Authorised SitRep, Investigation by the FIU', ()=> {
   incidentlocators.INC_ASSERT_BUSH1().should('contain.text','(SR) Authorised')
   incidentlocators.INC_ASSERT_BUSH2().contains('Info! This incident is under investigation by the FIU')


   })

   And ('I select edit incident and assert that Delete not available',()=> {
    
    incidentlocators.INC_EDITINCTONONBUSH().click({force: true})
    incidentlocators.INC_DELETENOTAVAILABE().should('not.contain','Delete')

    const RFSreceivedcall = dayjs().subtract(50,'hour').format('DD/MM/YYYY HH:mm');
    incidentlocators.AGENCY_CALL_RECEIVED().type(RFSreceivedcall, {force : true})

    incidentlocators.INC_SAVE_EDITINCIDENT().click({force: true,timeout: 120000})


})


And ('I click on Brigade Reporting',()=> {

    birs_commonpage.BRIGADE_REPORTING().click({force: true}).waitForLoadingSpinner().wait(2000)
})


And ('I select validate & Complete', ()=>{
    birs_commonpage.BIRS_SELECTBRIGADETYPE().focus().click({force: true})
    birs_commonpage.BIRS_SELECTVALIDATE().focus().click({force: true})
    //cy.wait(2000)
    //birspage.BIRS_VALIDATEBTN().click({force: true})
    cy.wait(6000)
    birs_commonpage.BIRS_VALIDATEBTN().click({force: true})
    cy.wait(2000)
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT1().should('be.visible').invoke('text').and('contain','Primary Brigade must be completed.')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT2().should('be.visible').invoke('text').and('contain','Primary Brigade: Aaron Bayliss - injury details must be added.')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT3().should('be.visible').invoke('text').and('contain','Ignition: details must be entered.')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT4().should('be.visible').invoke('text').and('contain','Fire fighting: details must be entered.')
})



And ('I select Primary Brigade',()=> {

    birs_commonpage.BIRS_SELECTBRIGADETYPE().focus().click({force: true})

    birs_commonpage.BIRS_PRIMARYBRIGADE().click({force: true}).waitForLoadingSpinner()

    
})

And ('I select Add Brigade for Primary Brigade',()=> {
    
    //SELECT ADD BRIGADE
    birs_commonpage.BIRS_ADDPRIMARYBRIGADE().scrollIntoView().focus().click({force: true, timeout: 120000}).wait(4000)
    //cy.waitUntil(()=> birspage.BIRS_ADDPRIMARYBOX().should('be.visible')).wait(2000)
    
    //TYPE BRIGADE NAME
    birs_commonpage.BIRS_PRIMARYBRIGADENAME1().invoke('show')
                                       .clear().type('Hornsby FC',{force: true})
    cy.wait(2000)
    
    cy.waitUntil(()=>birs_commonpage.BIRS_PRIMARYBRIGADENAME2().should('exist'))
                                                        .click({force:true})
    

    // BRIGADE REPORTNO
    const BIRS_REPORTNO = `BR${Math.floor(Math.random() * 1000)}`
    birs_commonpage.BIRS_PRIMARYREPORTNO().type(BIRS_REPORTNO, {force: true}) 

    //BRIGADE ADVISED TIME
    const MOBILE_date = dayjs().subtract(22,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_PRIMARYMOBILEDATE().type(MOBILE_date,{force: true})


    
    //cy.get('div[id="addEditPrimaryBrigadeModal"] div[name="advisedDate"] button[ng-click="showMobiscroll()"]').click({force: true})
    //cy.get('body > div.ios7.dw-bubble > div > div.dw.dwbg.dw-ltr.dw-bubble-top > div.dwwr > div.dwcc > div:nth-child(2) > div > div:nth-child(2) > div > a.dwb-e.dwwb.dwwbp.mbsc-ic.mbsc-ic-arrow-down5').click({force: true})
    //cy.get('body > div.ios7.dw-bubble > div > div.dw.dwbg.dw-ltr.dw-bubble-top > div.dwwr > div.dwbc > span.dwbw.dwb-s > a').click({force: true})
    
    //SAVE BRIGADEINFO
    birs_commonpage.BIRS_PRIMARYBRIGADEBOX().click({force: true}).wait(2000)
    
})


//And ('I enter Brigade name',()=>{
	//cy.get('#addEditPrimaryBrigadeModal').should('be.visible')
    //cy.get('#addEditPrimaryBrigadeModal > form > div > div > div.form-horizontal.modal-body > div > div > div:nth-child(2) > div > input').click({force: true}).type('Hornsby FCC')
    //const BIRS_REPORTNO = `BR${Math.floor(Math.random() * 1000)}`
    //cy.get('[name="txtBrigadeReportNo"][class="input-small ng-scope ng-valid ng-dirty"]').type(BIRS_REPORTNO) 
    //cy.get('[ng-click="savePrimaryBrigadeDetails()"]').click()
    //cy.get(':nth-child(1) > :nth-child(1) > .form-horizontal > :nth-child(2) > :nth-child(1) > :nth-child(1) > .controls > .input-small').type('6500')
//})



And ('I select Add Appliance',()=> {

    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEBTTN().click({force: true})
    cy.wait(2000)
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT0().should('be.visible').invoke('text').and('contain','Crew member or appliance must be entered')

    birs_commonpage.BIRS_PRIMARYADDAPPLIANCEBTTN().scrollIntoView().click({force: true}).waitForLoadingSpinner().waitUntil(()=> cy.get('div[id="addPrimaryBrigadeApplianceModal"] button[ng-click="searchForAppliances()"]')).should('exist').click({force: true})
    
    
    
 
    birs_commonpage.BIRS_SELECTEDAPPLIANCE().check({force: true})
    
    birs_commonpage.BIRS_SAVEAPPLIANCE().click({force: true}).waitForLoadingSpinner()
    
    birs_commonpage.BIRS_CLOSEAPPLIANCEBOX().click({force: true}).wait(4000)
    
    
   

})


And ('I put Appliance details',()=> {
    
    birs_commonpage.BIRS_DATEINPUTBOX().should('exist')

    const MOBILE_date =  dayjs().subtract(21,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_PRIMARYMOBILEDATE1().clear({force: true}).type(MOBILE_date,{force: true})

    const ONSCENE_date  = dayjs().subtract(20,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_ONSCENEDATE().clear({force: true}).type(ONSCENE_date, {force:true})

    const RETURN_date  = dayjs().subtract(18,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_RETURNDATE().clear({force: true}).type(RETURN_date, {force:true})


    const INSTATION_date  = dayjs().subtract(17,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_INSTATIONDATE().clear({force: true}).type(INSTATION_date, {force:true})



    // FOAM USED
    birs_commonpage.BIRS_ADDFOAMUSED1().select("1",{force: true})

    birs_commonpage.BIRS_ADDFOAMUSED2().type('{selectall}1.2',{force: true})
    birs_commonpage.BIRS_ADDFOAMUSED3().type('{selectall}1.1',{force: true})

    //SELECT RESPONDED
    birs_commonpage.BIRS_SELECTRESPONDEN().select("1",{force: true})

    //ADD PRIMARY CREW
    birs_commonpage.BIRS_ADDPRIMARYCREWBUTTON().scrollIntoView().focus().click({force: true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_ADDCREWMODAL()).should('exist')
    
    
    birs_commonpage.BIRS_CREWSEARCHBTTN().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW1().check({force: true})
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW2().check({force: true})
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW3().check({force: true})
    //birspage.BIRS_SELECTEDPRIMARYCREW4().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREW_SAVEBTTN().click({force: true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_SELECTEDCREWDETAILSBOX()).should('exist')
    birs_commonpage.BIRS_SELECTEDCREWDETAILS1().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREWDETAILS2().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREWDETAILS3().check({force: true})
    birs_commonpage.BIRS_CHK_SELECTEDCREW_INJURY().check({force: true})
    
    //birspage.BIRS_SELECTEDCREWDETAILS4().check({force: true})

    //Add Responded in private vehicle
    
    birs_commonpage.BIRS_ADDRESPONDED_INVEHICLEBTTN().focus().click({force:true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_ADDCREWMODAL()).should('exist')

    birs_commonpage.BIRS_CREWSEARCHBTTN().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW1().check({force: true})
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW2().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREW_SAVEBTTN().click({force: true}).waitForLoadingSpinner().waitUntil(()=>  birs_commonpage.BIRS_INVEHICLE_SELECTEDCREWBOX()).should('exist')
    birs_commonpage.BIRS_INVEHICLE_SELECTEDCREWDETAILS().check({force: true})



    //ADD RESPONDED IN STATION
    birs_commonpage.BIRS_INSTATIONCREW_BTTN().click({force: true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_ADDCREWMODAL()).should('exist')
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW1().check({force: true})
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW2().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREW_SAVEBTTN().click({force: true}).waitForLoadingSpinner().waitUntil(()=>  birs_commonpage.BIRS_INSTATION_SELECTEDCREWBOX()).should('exist')
    birs_commonpage.BIRS_SAVEPRIMARYBRIGADEDETAILS().click({force: true})

    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERTBOX().should('be.visible').invoke('text').should('contain','Appliance and crew details successfully saved.')
})







And ('I select Support brigade for brigade reporting',()=> {

    //cy.get('div.dropdown [ng-click="showNextTab()"]').click({force: true})
    //cy.get('div.dropdown [ng-click="showNextTab()"]').click({force: true}).wait(4000)
    //cy.get('div.dropdown [ng-click="showNextTab()"]').click({force: true}).wait(4000)

    birs_commonpage.BIRS_SELECTBRIGADETYPE().focus().click({force: true})
    birs_commonpage.BIRS_SUPPORTBRIGADE().click({force: true}).waitForLoadingSpinner()
    
    //ADD SUPPORTBRIGADE

    birs_commonpage.BIRS_ADDSUPPORTBRIGADE().scrollIntoView().focus().click({force: true, timeout: 120000}).wait(2000)
    //cy.waitUntil(()=> birspage.BIRS_ADDSUPPORTBRIGADEBOX().should('be.visible')).wait(2000)
    birs_commonpage.BIRS_SUPPORTBRIGADENAME1().invoke('show').type('wagga wagga', {force: true})
    cy.wait(2000)
    cy.waitUntil(()=>birs_commonpage.BIRS_SUPPORTBRIGADENAME2()).click({force: true})
    
    const Support_BIRS_REPORTNO = `BR${Math.floor(Math.random() * 1000)}`
    birs_commonpage.BIRS_SUPPORTBRIGADENO().type(Support_BIRS_REPORTNO,{force: true})


    const MOBILE_date1 = dayjs().subtract(22,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_SUPPORTMOBILEDATE().type(MOBILE_date1,{force: true})//advised date
    //cy.get('#lnkBtnAddSelectedAppliancesbody > div.ios7.dw-bubble > div > div.dw.dwbg.dw-ltr.dw-bubble-top > div.dwwr > div.dwcc > div:nth-child(2) > div > div:nth-child(2) > div > a.dwb-e.dwwb.dwwbp.mbsc-ic.mbsc-ic-arrow-down5').dblclick().dblclick()
    //cy.get('body > div.ios7.dw-bubble > div > div.dw.dwbg.dw-ltr.dw-bubble-top > div.dwwr > div.dwbc > span.dwbw.dwb-s > a').click()
    birs_commonpage.BIRS_SAVESUPPORTBRIGADEBOX().click({force: true})
    birs_commonpage.BIRS_OPENSUPPORTBRIGADENAME().click({force: true})


    //ADD APPLIANCE

    birs_commonpage.BIRS_ADDSUPPORTAPPLIANCE().scrollIntoView().click({force: true}).waitForLoadingSpinner()
    //cy.get('#lnkBtnSearchForAppliances').should('be.visible').click({force: true}).wait(3000)
    
    birs_commonpage.BIRS_SELECTEDSUPPORTAPPLIANCE().check({force: true}).wait(4000)
    birs_commonpage.BIRS_SAVESUPPORTADDAPLIANCE().click({force: true})
    birs_commonpage.BIRS_CLOSESUPPORTADDAPPLIANCE().click({force: true}).wait(2000)

    const Support_MOBILE_date =  dayjs().subtract(21,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_SUPPORTMOBILEDATE1().clear({force: true}).type(Support_MOBILE_date)

    const Support_ONSCENE_date  = dayjs().subtract(20,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_SUPPORTONSCENEDATE().clear({force: true}).type(Support_ONSCENE_date,{force: true})


    const RETURN_date1  = dayjs().subtract(18,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_SUPPORTRETURNDATE().clear({force: true}).type(RETURN_date1,{force: true})

    const INSTATION_date1  = dayjs().subtract(17,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_SUPPORTINSTATIONDATE().clear({force: true}).type(INSTATION_date1,{force: true})

    birs_commonpage.BIRS_SUPPORTRESPOND().select("1",{force: true})


    //ADD SUPPORT CREW

    birs_commonpage.BIRS_ADDSUPPORTCREW().scrollIntoView().click({force: true}).waitForLoadingSpinner()
    cy.waitUntil(()=> birs_commonpage.BIRS_ADDSUPPORTCREWBOX()).should('exist')


    birs_commonpage.BIRS_SUPPORTCREWSEARCHBTTN().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_SELECTEDSUPPORTCREW1().check({force: true})
    birs_commonpage.BIRS_SELECTEDSUPPORTCREW2().check({force: true})
    birs_commonpage.BIRS_SELECTEDSUPPORTCREW3().check({force: true})
    
    birs_commonpage.BIRS_SAVESELECTEDSUPPORTCREW().click({force: true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_SELECTEDSUPPORTCREWDETAILSBOX()).should('exist') 
    birs_commonpage.BIRS_SELECTEDSUPPORTCREWDETAILS1().check({force: true})
    birs_commonpage.BIRS_SELECTEDSUPPORTCREWDETAILS2().check({force: true})
    birs_commonpage.BIRS_SELECTEDSUPPORTCREWDETAILS3().check({force: true})

    //ADD RESPONDED IN VEHICLE

    birs_commonpage.BIRS_ADDINVEHICLE_SUPPORTCREW().click({force: true}).waitForLoadingSpinner()
    cy.waitUntil(()=> birs_commonpage.BIRS_ADDSUPPORTCREWBOX()).should('exist')

    birs_commonpage.BIRS_SUPPORTCREWSEARCHBTTN().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_SELECTEDSUPPORTCREW1().check({force: true})
    birs_commonpage.BIRS_SELECTEDSUPPORTCREW2().check({force: true})
    birs_commonpage.BIRS_SELECTEDSUPPORTCREW3().check({force: true})
    
    birs_commonpage.BIRS_SAVESELECTEDSUPPORTCREW().click({force: true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_INVEHICLESSUPPORTCREWDETAILSBOX()).should('exist') 
    birs_commonpage.BIRS_INVEHICLESSUPPORTCREWDETAILS().check({force: true})

    //ADD RESPONDED INSTATION

    cy.waitUntil(()=> birs_commonpage.BIRS_ADDSUPPORTCREWBOX()).should('exist')
    birs_commonpage.BIRS_ADDINSTATION_SUPPORTCREW().click({force: true}).waitForLoadingSpinner()
    
    birs_commonpage.BIRS_SUPPORTCREWSEARCHBTTN().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_SELECTEDSUPPORTCREW1().check({force: true})
    birs_commonpage.BIRS_SELECTEDSUPPORTCREW2().check({force: true})

    birs_commonpage.BIRS_SAVESELECTEDSUPPORTCREW().click({force: true,}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_INSTATIONSUPPORTCREWDETAILSBOX()).should('exist') 

    birs_commonpage.BIRS_SAVESUPPORTBRIGADE().click({force: true}).wait(2000)
    birs_commonpage.BIRS_VALIDATEANDSAVEALERT().should('be.visible').invoke('text').and('contain','Appliance and crew details successfully saved.')

    //Validate And SAVE ERROR ASSERT 

    birs_commonpage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birs_commonpage.BIRS_VALIDATEANDSAVE().click({force: true}).waitForLoadingSpinner()

    birs_commonpage.BIRS_VALIDATEANDSAVEBTTN().click({multiple: true ,force:true})
    cy.waitForLoadingSpinner()

    let birsalerts = ['Primary Brigade must be completed.','Wagga Wagga FCC Support Brigade must be completed.','Ignition: details must be entered.','Fire fighting: details must be entered.']
    birs_commonpage.BIRS_VALIDATEANDSAVEALERT().should('be.visible').invoke('text').should('contain', birsalerts[0])
    birs_commonpage.BIRS_VALIDATEANDSAVEALERT().should('be.visible').invoke('text').should('contain', birsalerts[1])
    birs_commonpage.BIRS_VALIDATEANDSAVEALERT().should('be.visible').invoke('text').should('contain', birsalerts[2])
    birs_commonpage.BIRS_VALIDATEANDSAVEALERT().should('be.visible').invoke('text').should('contain', birsalerts[3])
    //birspage.BIRS_VALIDATEANDSAVEALERT().should('be.visible').invoke('text').should('contain', birsalerts[4])

})


And ('I enter Injury details',()=> {

    
    //cy.get('div.dropdown [ng-click="showNextTab()"]').click({force: true})

    birs_commonpage.BIRS_SELECTBRIGADETYPE().scrollIntoView().click({force: true})
    birs_commonpage.BIRS_INJURYDETAILS().click({force: true}).waitForLoadingSpinner()

    birs_commonpage.BIRS_INJURYDETAILSTITLE().should('contain.text','Injury Details')

    birs_commonpage.BIRS_SELECTEDINJURYPERSON().click({force: true}).invoke('show') //selected injury person
    cy.waitUntil(()=>birs_commonpage.BIRS_INJURYDETAILSMODAL().should('be.visible')).invoke('show')  //invoke('show',{setTimeout: 400000}))
    
    //INJURY TREATMENT RESULT
    
    birs_commonpage.BIRS_INJURYTREATMENTRESULT1().click({force: true}).invoke('show').wait(4000)
    cy.waitUntil(()=> birs_commonpage.BIRS_INJURYTREATMENTRESULT2().should('exist', {setTimeout: 60000})).invoke('show')
    birs_commonpage.BIRS_INJURYTREATMENTRESULT3().invoke('show').click({force: true})
    birs_commonpage.BIRS_INJURYTREATMENTRESULT4().invoke('show').click({force: true})
    //cy.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).invoke('show').should('be.visible')

    //part of body

    birs_commonpage.BIRS_PARTOFBODY1().click({force: true}).invoke('show')
    birs_commonpage.BIRS_PARTOFBODY2().invoke('show').should('exist', {setTimeout: 60000}) //part of body

    birs_commonpage.BIRS_PARTOFBODY3().invoke('show').should('exist').click({force: true})
    cy.waitUntil(()=> birs_commonpage.BIRS_PARTOFBODY4()).should('exist').and('contain.text','Shoulder').invoke('show').click({force: true})
    birs_commonpage.BIRS_PARTOFBODY5().should('exist').invoke('show').click({force: true})
    //cy.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).should('exist')
    birs_commonpage.BIRS_PARTOFBODY6().invoke('show').click({force: true})
    


    //Nature of injury

    birs_commonpage.BIRS_NATUREOFINJURY1().click({force: true}).invoke('show').wait(4000)
    cy.waitUntil(()=> birs_commonpage.BIRS_NATUREOFINJURY2()).should('exist', {setTimeout: 60000}).invoke('show')
    birs_commonpage.BIRS_NATUREOFINJURY3().invoke('show').click({force: true})
    birs_commonpage.BIRS_NATUREOFINJURY4().invoke('show').click({force: true})
    //cy.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).should('be.visible')


    // Type of accident

    birs_commonpage.BIRS_TYPESOFACCIDENT1().click({force: true}).invoke('show').wait(4000)
    cy.waitUntil(()=> birs_commonpage.BIRS_TYPESOFACCIDENT2()).should('exist', {setTimeout: 60000}).invoke('show')
    birs_commonpage.BIRS_TYPESOFACCIDENT3().should('exist').and('contain','Slip').invoke('show').click({force: true})
    birs_commonpage.BIRS_TYPESOFACCIDENT4().invoke('show').click({force:true,multiple: true})
    //cy.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).should('be.visible')


    // AGENCY OF INJURY

    birs_commonpage.BIRS_AGENCYOFINJURY1().click({force:true}).wait(4000)
    cy.waitUntil(()=> birs_commonpage.BIRS_AGENCYOFINJURY2()).should('exist', {setTimeout: 60000}).invoke('show')
    birs_commonpage.BIRS_AGENCYOFINJURY3().should('exist').and('contain','Power').invoke('show').click({force:true})
    birs_commonpage.BIRS_AGENCYOFINJURY4().invoke('show').click({force:true})
    //cy.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).should('be.visible')


    //Save
    birs_commonpage.BIRS_SAVEINJURYDETAILS().invoke('show').click({force: true})
    birs_commonpage.BIRS_SAVEINJURYDETAILSALERT().should('exist') //.should('contain.text','Injury details successfully saved.')



})

And ('I enter Ignition Information',()=> {

    // Ignition_tab

    birs_commonpage.BIRS_SELECTBRIGADETYPE().click({force: true}) 
    birs_commonpage.BIRS_IGNITIONINFO().click({force: true}).waitForLoadingSpinner()


     //point of origin
    birs_commonpage.BIRS_POINTOFORIGIN1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_POINTOFORIGIN2()).should('exist')
    birs_commonpage.BIRS_POINTOFORIGIN3().should('contain.text','Other Location').click({multiple:true ,force: true})
    birs_commonpage.BIRS_POINTOFORIGIN4().should('exist').and('contain','Area of fire origin').click({multiple:true ,force: true})
    birs_commonpage.BIRS_POINTOFORIGIN5().click({multiple:true ,force: true})

    //Activity
    birs_commonpage.BIRS_ACTIVITY1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_ACTIVITY2()).should('exist')   
    birs_commonpage.BIRS_ACTIVITY3().should('exist').and('contain','Activity in ignition area undetermined').click({multiple:true ,force: true})
    birs_commonpage.BIRS_ACTIVITY4().click({multiple:true ,force: true})

    //Form of heat
    birs_commonpage.BIRS_FORMOFHEAT1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_FORMOFHEAT2()).should('exist') 
    birs_commonpage.BIRS_FORMOFHEAT3().should('exist').should('contain','Other').click({multiple:true ,force: true})
    birs_commonpage.BIRS_FORMOFHEAT4().click({multiple:true ,force: true})
    birs_commonpage.BIRS_FORMOFHEAT5().click({multiple:true ,force: true})

    //Eqipment involved
    birs_commonpage.BIRS_EQUIPMENTINVOLVED1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_EQUIPMENTINVOLVED2()).should('exist')  
    birs_commonpage.BIRS_EQUIPMENTINVOLVED3().should('exist').should('contain','Undetermined').click({multiple:true ,force: true})
    birs_commonpage.BIRS_EQUIPMENTINVOLVED4().should('exist').and('contain','Equipment involved in ignition undetermined').click({multiple:true ,force: true})
    birs_commonpage.BIRS_EQUIPMENTINVOLVED5().click({multiple:true ,force: true})


    //type of material
   birs_commonpage.BIRS_TYPEOFMATERIAL1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_TYPEOFMATERIAL2()).should('exist') 
   birs_commonpage.BIRS_TYPEOFMATERIAL3().should('exist').and('contain','Undetermined').click({multiple:true ,force: true})
   birs_commonpage.BIRS_TYPEOFMATERIAL4().should('exist').and('contain','Type of material undetermined').click({multiple:true ,force: true})
   birs_commonpage.BIRS_TYPEOFMATERIAL5().should('exist').click({multiple:true ,force: true})


    //Form of material
    birs_commonpage.BIRS_FORMOFMATERIALS1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_FORMOFMATERIALS2()).should('exist') 
    birs_commonpage.BIRS_FORMOFMATERIALS3().should('exist').and('contain','Other').click({multiple:true ,force: true})
    birs_commonpage.BIRS_FORMOFMATERIALS4().should('exist').and('contain','Multiple form of material ignited').click({multiple:true ,force: true})
    birs_commonpage.BIRS_FORMOFMATERIALS5().should('exist').click({multiple:true ,force: true})

    // Ignition factor
    birs_commonpage.BIRS_IGNITIONFACTORS1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_IGNITIONFACTORS2()).should('exist')
    birs_commonpage.BIRS_IGNITIONFACTORS3().should('exist').and('contain','Other ignition factor').click({multiple:true ,force: true})
    birs_commonpage.BIRS_IGNITIONFACTORS4().should('exist').and('contain','Other ignition factor').click({multiple:true ,force: true})
    birs_commonpage.BIRS_IGNITIONFACTORS5().click({multiple:true ,force: true})


    birs_commonpage.BIRS_SAVEIGNITION().click({multiple:true ,force: true})

})

And ('I enter Fire fighting details',()=> {

    birs_commonpage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birs_commonpage.BIRS_FIREFIGHTING().click({force: true}).wait(2000)

    birs_commonpage.BIRS_SAVEFIREFIGHTING().click({multiple: true ,force:true}).wait(2000)

})

And ('I enter injury details',()=> {
    birs_commonpage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birs_commonpage.BIRS_INJURYDETAILS().click({force: true}).waitForLoadingSpinner()    
    birs_commonpage.BIRS_SELECTEDINJURYPERSON().click({force: true}).wait(4000)
    cy.waitUntil(()=>birs_commonpage.BIRS_INJURYDETAILSMODAL().should('be.visible'))
//Injury treatment result
    birs_commonpage.BIRS_INJURYTREATMENTRESULT1().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_INJURYTREATMENTRESULT2()).should('exist')
    //cy.waitUntil(()=>birspage.BIRS_INJURYTREATMENTRESULT2().should('be.visible'))
    birs_commonpage.BIRS_INJURYTREATMENTRESULT3().click({force: true})
    birs_commonpage.BIRS_INJURYTREATMENTRESULT4().click({force: true}).wait(2000)
    //cy.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).should('be.visible')
//Part of Body
    birs_commonpage.BIRS_PARTOFBODY1().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_PARTOFBODY2()).should('exist')
    //cy.waitUntil(()=>birspage.BIRS_PARTOFBODY2().should('be.visible'))
    birs_commonpage.BIRS_PARTOFBODY3().click({force: true})
    cy.waitUntil(()=>birs_commonpage.BIRS_PARTOFBODY4().should('exist').and('contain.text','Shoulder'))
    birs_commonpage.BIRS_PARTOFBODY4().click({force: true})
    birs_commonpage.BIRS_PARTOFBODY5().click({force: true})
    birs_commonpage.BIRS_PARTOFBODY6().click({force: true}).wait(2000)
    //cy.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).invoke('show').should('be.visible')
//Nature of Injury
    birs_commonpage.BIRS_NATUREOFINJURY1().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_NATUREOFINJURY2()).should('exist')
    //cy.waitUntil(()=>birspage.BIRS_NATUREOFINJURY2().invoke('show').should('be.visible'))
    birs_commonpage.BIRS_NATUREOFINJURY3().click({force: true})
    birs_commonpage.BIRS_NATUREOFINJURY4().click({force: true}).wait(2000)
    //cy.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).should('be.visible')
//Type of accident
    birs_commonpage.BIRS_TYPESOFACCIDENT1().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_TYPESOFACCIDENT2()).should('exist')
    //cy.waitUntil(()=>birspage.BIRS_TYPESOFACCIDENT2().invoke('show').should('be.visible'))
    birs_commonpage.BIRS_TYPESOFACCIDENT3().click({force: true})
    birs_commonpage.BIRS_TYPESOFACCIDENT4().click({force: true}).wait(2000)
    //y.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).invoke('show').should('be.visible')
//Agency of Injury
    birs_commonpage.BIRS_AGENCYOFINJURY1().click({force: true}).wait(6000).waitUntil(()=> birs_commonpage.BIRS_AGENCYOFINJURY2()).should('exist')
    //cy.waitUntil(()=>birspage.BIRS_AGENCYOFINJURY2().invoke('show').should('be.visible'))
    birs_commonpage.BIRS_AGENCYOFINJURY3().click({force: true})
    birs_commonpage.BIRS_AGENCYOFINJURY4().click({force: true}).wait(2000)
    //cy.waitUntil(()=>birspage.BIRS_INJURYDETAILSMODAL()).invoke('show').should('be.visible')
// Comments
    birs_commonpage.BIRS_INJURYCOMMENT().type("This is a test injury",{force: true})    
// Save Injury Details
    birs_commonpage.BIRS_SAVEINJURYDETAILS().click({force: true})
    birs_commonpage.BIRS_SAVEINJURYDETAILSALERT().should('be.visible').and('contain',' Injury details successfully saved.')
// Return Injury List
    birs_commonpage.BIRS_RETURNINJURYLIST().click({force: true})

})

And ('I validate and save',()=>{

    //validate and save (Error Assert)

    birs_commonpage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birs_commonpage.BIRS_VALIDATEANDSAVE().click({force: true}).waitForLoadingSpinner()

    birs_commonpage.BIRS_VALIDATEANDSAVEBTTN().click({multiple: true ,force:true})
    cy.waitForLoadingSpinner()
    birs_commonpage.BIRS_VALIDATEANDSAVEALERT().should('be.visible')

   
    


    //complete primary brigade
    birs_commonpage.BIRS_SELECTBRIGADETYPE().click({force: true})

    birs_commonpage.BIRS_PRIMARYBRIGADE().click({force: true}).waitForLoadingSpinner()

    birs_commonpage.BIRS_COMPLETEPRIMARYBRIGADE().click({multiple: true ,force:true})
    birs_commonpage.BIRS_PRIMARYBRIGADE_SAVEALERT().should('be.visible')

    
    //complete support brigade

    birs_commonpage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birs_commonpage.BIRS_SUPPORTBRIGADE().click({force: true}).waitForLoadingSpinner()

    birs_commonpage.BIRS_OPENSUPPORTBRIGADENAME().click({force: true})
    birs_commonpage.BIRS_COMPLETESUPPORTBRIGADE().click({force: true})
    birs_commonpage.BIRS_SAVESUPPORTBRIGADEALERT().should('be.visible')



    //validate and save 
    birs_commonpage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birs_commonpage.BIRS_VALIDATEANDSAVE().click({force: true}).waitForLoadingSpinner()

    birs_commonpage.BIRS_VALIDATEANDSAVEBTTN().click({multiple: true ,force:true})

    birs_commonpage.BIRS_BRIGADECOMPLETECBTTN().click({force: true})
    birs_commonpage.BIRS_COMPLETEALERT().should('be.visible').and('contain',' Incident information now marked as complete.')

})



//>>>>>>>>>>> Checking brigade details Validation >>>>>>>>>>>>>>>>>>>>>>>


And ('I select Add Brigade for Primary Brigade - Error Validation',()=> {
        //SELECT ADD BRIGADE
        birs_commonpage.BIRS_ADDPRIMARYBRIGADE().click({force: true}).waitForLoadingSpinner().wait(4000)
    
        //cy.waitUntil(()=> birspage.BIRS_ADDPRIMARYBOX().should('be.visible'))
        
        //TYPE BRIGADE NAME
        birs_commonpage.BIRS_PRIMARYBRIGADENAME1().invoke('show')
                                           .type('Hornsby FC',{force: true})
        cy.wait(2000)

        cy.waitUntil(()=>birs_commonpage.BIRS_PRIMARYBRIGADENAME2().should('exist'))
                                                            .click({force:true})
        
    
        // BRIGADE REPORTNO
        const BIRS_REPORTNO = `BR${Math.floor(Math.random() * 1000)}`
        birs_commonpage.BIRS_PRIMARYREPORTNO().type(BIRS_REPORTNO,{force: true}) 
    
        //BRIGADE ADVISED TIME
        //const MOBILE_date = dayjs().subtract(80,'hour').format('DD/MM/YYYY HH:mm');
        //birspage.BIRS_PRIMARYMOBILEDATE().type(MOBILE_date,{force: true})
    
    
        
        //cy.get('div[id="addEditPrimaryBrigadeModal"] div[name="advisedDate"] button[ng-click="showMobiscroll()"]').click({force: true})
        //cy.get('body > div.ios7.dw-bubble > div > div.dw.dwbg.dw-ltr.dw-bubble-top > div.dwwr > div.dwcc > div:nth-child(2) > div > div:nth-child(2) > div > a.dwb-e.dwwb.dwwbp.mbsc-ic.mbsc-ic-arrow-down5').click({force: true})
        //cy.get('body > div.ios7.dw-bubble > div > div.dw.dwbg.dw-ltr.dw-bubble-top > div.dwwr > div.dwbc > span.dwbw.dwb-s > a').click({force: true})
        
        //SAVE BRIGADEINFO
        birs_commonpage.BIRS_PRIMARYBRIGADEBOX().click({force: true}).wait(2000)

})

And ('I Validate primary brigade Errors',()=> {

    //Validate Responded value
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEBTTN().click({force: true})
    cy.wait(2000)
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT0().should('be.visible').invoke('text').and('contain','responded value must be selected')

    //SELECT RESPONDED/
    birs_commonpage.BIRS_SELECTRESPONDEN().select("1",{force:true})

    //Add primary crew
    birs_commonpage.BIRS_ADDPRIMARYCREWBUTTON().scrollIntoView().focus().click({force: true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_ADDCREWMODAL()).should('exist')
    
    birs_commonpage.BIRS_CREWSEARCHBTTN().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW1().check({force: true})
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW2().check({force: true})
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW3().check({force: true})
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW4().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREW_SAVEBTTN().click({force: true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_SELECTEDCREWDETAILSBOX()).should('be.visible')

    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEBTTN().click({force: true})
    cy.wait(2000)
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT1().should('be.visible').invoke('text').and('contain','driver details must be added.')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT2().should('be.visible').invoke('text').and('contain','crew leader details must be added.')        

    birs_commonpage.BIRS_SELECTEDCREWDETAILS1().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREWDETAILS2().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREWDETAILS3().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREWDETAILS4().check({force: true})

    //equal time validation

    const MOBILE_date5  = dayjs().subtract(22,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_PRIMARYMOBILEDATE1().clear({force: true}).type(MOBILE_date5,{force: true})

    const ONSCENE_date5  = dayjs().subtract(22,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_ONSCENEDATE().clear({force: true}).type(ONSCENE_date5,{force:true})

    const RETURN_date5  = dayjs().subtract(22,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_RETURNDATE().clear({force: true}).type(RETURN_date5 ,{force:true})

    const INSTATION_date5  = dayjs().subtract(22,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_INSTATIONDATE().clear({force: true}).type(INSTATION_date5 ,{force:true})

    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEBTTN().click({force: true})
    cy.wait(2000)
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT1().should('be.visible').invoke('text').and('contain','injury details must be added.')

    //future date validation

    const MOBILE_date3  = dayjs().add(1,'day').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_PRIMARYMOBILEDATE1().clear({force: true}).type(MOBILE_date3,{force: true})

    const ONSCENE_date3  = dayjs().add(1,'day').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_ONSCENEDATE().clear({force: true}).type(ONSCENE_date3,{force:true})

    const RETURN_date3  = dayjs().add(1,'day').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_RETURNDATE().clear({force: true}).type(RETURN_date3 ,{force:true})

    const INSTATION_date3  = dayjs().add(1,'day').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_INSTATIONDATE().clear({force: true}).type(INSTATION_date3 ,{force:true})
    
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEBTTN().click({force: true})
    cy.wait(2000)
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT1().should('be.visible').invoke('text').and('contain','brigade mobile time must be in the past')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT2().should('be.visible').invoke('text').and('contain','brigade on scene time must be in the past')        
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT3().should('be.visible').invoke('text').and('contain','brigade return time must be in the past')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT4().should('be.visible').invoke('text').and('contain','brigade in station time must be in the past')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT5().should('be.visible').invoke('text').and('contain','injury details must be added.')

    const MOBILE_date2  = dayjs().subtract(80,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_PRIMARYMOBILEDATE1().clear({force: true}).type(MOBILE_date2,{force: true})

    const ONSCENE_date2  = dayjs().subtract(82,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_ONSCENEDATE().clear({force: true}).type(ONSCENE_date2,{force:true})

    const RETURN_date2  = dayjs().subtract(84,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_RETURNDATE().clear({force: true}).type(RETURN_date2 ,{force:true})

    const INSTATION_date2  = dayjs().subtract(86,'hour').format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_INSTATIONDATE().clear({force: true}).type(INSTATION_date2 ,{force:true})

    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEBTTN().click({force: true})

    //validate and save
    cy.wait(2000)
    // these assertions randomly failed once but passed the next time. worth investigating.
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT1().should('be.visible').invoke('text').and('contain','brigade mobile time must be equal or later than the brigade advised time.')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT2().should('be.visible').invoke('text').and('contain','brigade on scene time must be equal or later than the brigade mobile time.')        
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT3().should('be.visible').invoke('text').and('contain','brigade return time must be equal or later than the brigade on scene time')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT4().should('be.visible').invoke('text').and('contain','brigade in station time must be equal or later than the brigade return time.')
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEALERT5().should('be.visible').invoke('text').and('contain','injury details must be added.')


    //Delete all details
    cy.wait(2000)
    birs_commonpage.BIRS_DELETEPRIMARY_CREW1().scrollIntoView().click({force: true}).wait(4000)
    birs_commonpage.BIRS_DELETECREW_OK().scrollIntoView().click({force: true}).wait(4000)

    birs_commonpage.BIRS_DELETEPRIMARY_CREW2().scrollIntoView().click({force: true}).wait(4000)
    birs_commonpage.BIRS_DELETECREW_OK().scrollIntoView().click({force: true}).wait(4000)

    birs_commonpage.BIRS_DELETEPRIMARY_CREW3().scrollIntoView().click({force: true}).wait(4000)
    birs_commonpage.BIRS_DELETECREW_OK().scrollIntoView().click({force: true}).wait(4000)

    birs_commonpage.BIRS_DELETEPRIMARY_CREW4().scrollIntoView().click({force: true}).wait(4000)
    birs_commonpage.BIRS_DELETECREW_OK().scrollIntoView().click({force: true}).wait(4000)

    birs_commonpage.BIRS_DELETEAPPLIANCE().scrollIntoView().click({force : true}).wait(4000)
    birs_commonpage.BIRS_DELETEAPPL_OK().scrollIntoView().click({force: true}).wait(4000)

    birs_commonpage.BIRS_DELETEBRIGADE().scrollIntoView().click({force: true}).wait(4000)
    birs_commonpage.BIRS_DELETEPRIMARY_OK().scrollIntoView().click({force: true}).wait(4000)

    birs_commonpage.BIRS_ADDPRIMARYBRIGADE().scrollIntoView().should('exist')


})

                            //|<<<< UNDO BIRS >>>>|//


And ('I Click on undo complete',()=> { 

    birs_commonpage.BIRS_UNDOVALANDCOMPLETE().click({force: true})
    birs_commonpage.BIRS_UNDOVALANDCOMPLETEOK().click({force: true}).waitForLoadingSpinner()

    //UNDO SUPPORT BRIGADE 
    birs_commonpage.BIRS_SELECTBRIGADETYPE().focus().click({force: true})
    birs_commonpage.BIRS_SUPPORTBRIGADE().click({force: true}).waitForLoadingSpinner()
    
    birs_commonpage.BIRS_OPENSUPPORTBRIGADENAME().click({force: true})
    birs_commonpage.BIRS_UNDOSUPPORTBRIGADE().click({force: true})
    birs_commonpage.BIRS_UNDOSUPPORTBRIGADEOK().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_COMPLETEALERT().invoke('text').should('contain', 'Brigade now marked as incomplete.')
    
    //UNDO PRIMARY BRIGADE
    birs_commonpage.BIRS_SELECTBRIGADETYPE().focus().click({force: true})
    birs_commonpage.BIRS_PRIMARYBRIGADE().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_UNDOPRIMARYBRIGADE().click({force: true})
    birs_commonpage.BIRS_UNDOPRIMARYBRIGADEOK().waitForLoadingSpinner()

    
    //CLEAR BIRS 

    birs_commonpage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birs_commonpage.BIRS_VALIDATEANDSAVE().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_CLEARBIRS().click({force: true})
    birs_commonpage.BIRS_CLEARBIRSOK().click({force: true})
    birs_commonpage.BIRS_COMPLETEALERT().invoke('text', 'All brigade reporting information deleted')
    
    //CHECK PRIMARY BRIGADE CONTAINS NO DATA
    birs_commonpage.BIRS_SELECTBRIGADETYPE().focus().click({force: true})
    birs_commonpage.BIRS_PRIMARYBRIGADE().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_PRIMARYBRIGADE_VALSAVEBTTN().should('not.be.visible')


})




//\\ ICONSUP-T514 (1.0) Validate user is able to Generate BIRS Outstanding report



And ('I open knowledge',()=>{

    s44page.KNOWLEDGE_TAB().click({force: true})

})
And ('I expand Reports',()=> {
 birs_commonpage.BIRS_REPORTSTAB().click({force:true})
})


And ('I click on Joint Agency',()=> {
    birs_commonpage.BIRS_JOINAGENCY().click({force: true})
})

And ('I click on Birs Outstanding Report',()=>{
    // cy.wait(100)
    cy.waitUntil(()=>birs_commonpage.BIRS_OUTSTANDINGREP(),{timeout: 40000}).should('be.visible').click({force:true})
})

And ('I Validate three fields and search for the results',()=>{

    //FROM DATE
    const fromdate_ = dayjs().subtract(5,'month').format('DD/MM/YYYY HH:mm');
    cy.waitUntil(()=>birs_commonpage.BIRS_FROMDATE(),{timeout: 40000}).should('be.visible').type(fromdate_,{force: true})

    //TO DATE 
    const todate_ =  dayjs().format('DD/MM/YYYY HH:mm');
    birs_commonpage.BIRS_TODATE().should('be.visible').type(todate_,{force: true})

    // Council
    birs_commonpage.BIRS_COUNCIL().should('be.visible')
    .select("0060",{force: true})

    //Search
    birs_commonpage.BIRS_SEARCHOUTSTNDNG().click({force:true}).waitForLoadingSpinner()

})

And ('I Search for the Incident {string}',(keyword)=>{

    birs_commonpage.BIRS_SEARCHFIELD().type(keyword,{force:true})
    cy.wait(4000)
})


And ('I export the Result to verify Twelve Fields with the data',()=> {

    times(2, () => {
        birs_commonpage.BIRS_INCIDENTCONSORTING().click({force: true})      
        })
        

    //RESULT TABLE VALUES


    birs_commonpage.BIRS_TABLEINFO().should('exist').then(($count)=>{

        TABLEINFO = $count.text()

        console.log(TABLEINFO)
        ROWCOUNT = TABLEINFO.trim().split(" ")
        ROWCOUNT1 = ROWCOUNT[5]
        console.log(ROWCOUNT1)
    

    })


    birs_commonpage.BIRS_EXPSTARTDATE().should('exist').then(($exp1)=>{
        
        let a : any
        a =  $exp1.text()
        EXPSTARTDATE = dayjs(a).format()
        console.log(EXPSTARTDATE)
        })
    
    
        birs_commonpage.BIRS_EXPLGA().should('exist').then(($exp2)=>{
    
            EXPLGA = $exp2.text()
        })
    
        birs_commonpage.BIRS_EXPINCREF().should('exist').then(($exp3)=>{
    
            EXPINCREF = $exp3.text()
            EXPINCREF1 = EXPINCREF.trim()
            cy.log(EXPINCREF1)
        })
    
        cy.waitUntil(()=>birs_commonpage.BIRS_EXP000REF().should('exist'))
        
        birs_commonpage.BIRS_EXP000REF().then(($exp4)=>{
            EXP000REF = $exp4.text()
        })
        
        birs_commonpage.BIRS_EXPINCNAME().should('exist').then(($exp5)=>{
    
            EXPINCNAME = $exp5.text()
            EXPINCNAME1 =EXPINCNAME.replace('>', '&gt;')
            cy.log(EXPINCNAME1)
    
        })
    
        birs_commonpage.BIRS_EXPINCLOC().should('exist').then(($exp6)=>{
    
            EXPINCLOC = $exp6.text()
        })
    
        birs_commonpage.BIRS_EXPINCCON().should('exist').then(($exp7)=>{
    
            EXPINCCON = $exp7.text()
        })
    
        birs_commonpage.BIRS_EXPINCTYPE().should('exist').then(($exp8)=>{
    
            EXPINCTYPE = $exp8.text()
        })
    
        birs_commonpage.BIRS_EXPVOLREP().should('exist').then(($exp9)=>{
    
            EXPVOLREP = $exp9.text()
        })
    
        birs_commonpage.BIRS_EXPPRIMARYBRIG().should('exist').then(($exp10)=>{
    
            EXPPRIMARYBRIG = $exp10.text()
        })
        
        birs_commonpage.BIRS_EXPSUPPORTBRIG().should('exist').then(($exp11)=>{
    
            EXPSUPPORTBRIG = $exp11.text()
        })
        
        birs_commonpage.BIRS_EXPREPCOMPLETED().should('exist').then(($exp12)=>{
    
            EXPREPCOMPLETED = $exp12.text()
        })
    
      birs_commonpage.BIRS_SELECTRECORDS().click({force:true}).wait(5000)

      birs_commonpage.BIRS_EXPRESULTSBTTN().click({force:true})
      .wait(5000)

    
      //Validate excel
      cy.parseXlsx('cypress/downloads/Birs Outstanding Report.csv').then(
        jsonData => {
            
            let datacount = jsonData[0].data
            let datacount1 = datacount.length-1
            console.log(datacount1)

            expect(parseInt(ROWCOUNT1)).to.equal(datacount1)

            let Headers = jsonData[0].data[0]
            console.log( jsonData)

            expect(Headers).to.contain('Start Date')
            expect(Headers).to.contain('LGA')
            expect(Headers).to.contain('Incident Ref')
            expect(Headers).to.contain('OOO Ref')
            expect(Headers).to.contain('Incident Name')
            expect(Headers).to.contain('Incident Location')
            expect(Headers).to.contain('Incident Controller')
            expect(Headers).to.contain('Incident Type')
            expect(Headers).to.contain('Brigade Volunteer Reports')
            expect(Headers).to.contain('Primary Brigade')
            expect(Headers).to.contain('Support Brigade(s)')
            expect(Headers).to.contain('Brigade Report Completed')

            let expectedrow = jsonData[0].data[1]
            console.log(jsonData)
            
            console.log(expectedrow[0])
            console.log(expectedrow)
            let start_date_data = dayjs(expectedrow[0]).format()
            console.log(start_date_data)

            expect(start_date_data).to.eq(EXPSTARTDATE)
            expect(expectedrow[1]).to.contain(EXPLGA)
            expect(expectedrow[2]).to.equal((EXPINCREF))

            if(expectedrow[3]==null){
                expect(expectedrow[3]).to.be.null
            }
            else expect(expectedrow[3]).to.contain(EXP000REF.trim())
            expect(expectedrow[4]).to.contain(EXPINCNAME1)
            expect(expectedrow[5]).to.contain(EXPINCLOC.trim())
            expect(expectedrow[6]).to.contain(EXPINCCON.trim())
            expect(expectedrow[7]).to.contain(EXPINCTYPE.trim())
            expect(expectedrow[8]).to.be.null
            expect(expectedrow[9]).to.be.null
            expect(expectedrow[10]).to.be.null
            expect(expectedrow[11]).to.contain(EXPREPCOMPLETED.trim())
          
            

        }
    )
    })

// Scenario: ICONSUP-T638 Validate Search results and export have correct columns displayed as per requirements

Given('I go to Joint Agency page',()=>{
  //login using ntlm
  cy.loginToICONNoVisit();
  birsJointAgencyPage.VISIT_JOINT_AGENCY_PAGE()

})

And('I see "Birs Incident Response Report" is displayed under "BIRS Reports" and click on it',()=>{
    birsJointAgencyPage.BIRS_INCIDENT_RESPONSE_REPORT().should('be.visible').click()

})


And('I can see five filter fields',()=>{
    // checking this first cause this element may be populated using a api request
    // so letting it resolve should give us enough time for other elements to load fully
    birsJointAgencyPage.BIRS_REGION_SELECTOR().as('region')
    .invoke('text').should('not.be.empty')
    //checking the rest
    birsJointAgencyPage.BIRS_INCIDENT_REPORT_FROMDATE().should('be.visible').as('fromDate')
    birsJointAgencyPage.BIRS_INCIDENT_REPORT_TODATE().should('be.visible').as('toDate')
    birsJointAgencyPage.BIRS_ZONE_SELECTOR().should('be.visible').as('zone').as('zone')
    birsJointAgencyPage.BIRS_DISTRICT_SELECTOR().should('be.visible').as('district')
    

})





And('I fill in the form with the following details',(dataTable)=>{
// To make this step maintainable/generalized in the future I have it take a datatable parameters from the feature file
// the code below iterates over the datatable rows and uses the 'fieldname' to identify the input label and 'value' field to enter the input
    dataTable.hashes().forEach((elem: any) =>{
        switch(elem['fieldName']) {
            case 'fromDate':
                cy.get('@fromDate').clear().then(($el)=>{
                    const el = $el
                    const fromdate_ = dayjs().subtract(parseInt(elem['value']),'day').format('DD/MM/YYYY HH:mm');
                    el.val(fromdate_)
                })
              break;

            case 'toDate':
                cy.get('@toDate').clear().then(($el)=>{
                    const el = $el
                    const todate_ = dayjs().subtract(parseInt(elem['value']),'day').format('DD/MM/YYYY HH:mm');
                    el.val(todate_)
                })
              break;
          }
    })
 
})

And('I click find records',()=>{
    birsJointAgencyPage.BIRS_FIND_RECORDS_BUTTON().click()
})

And('I see Export Results button is displayed',()=>{
    cy.waitForLoadingSpinner()
    birsJointAgencyPage.BIRS_TABLE_HEADER_ROW().should('be.visible')

    times(2, () => {
        birs_commonpage.BIRS_INCIDENTCONSORTING().click({force: true})      
        })
    
    cy.wait(3000)

    //RESULT TABLE VALUES


    birsJointAgencyPage.BIRS_TABLEINFO().should('exist').then(($count)=>{

        TABLEINFO = $count.text()

        console.log(TABLEINFO)
        ROWCOUNT = TABLEINFO.trim().split(" ")
        ROWCOUNT1 = ROWCOUNT[5]
        console.log(ROWCOUNT1)
    

    })


    birsJointAgencyPage.BIRS_EXP_INCIDENT_DATE().should('exist').then(($exp1)=>{
        
        let a : any
        a =  $exp1.text()
        EXP_INCIDENT_DATE = a
        console.log(EXP_INCIDENT_DATE)
        })


    birsJointAgencyPage.BIRS_EXP_LGA().should('exist').then(($exp2)=>{

        EXP_LGA = $exp2.text()
    })

    birsJointAgencyPage.BIRS_EXP_REF().should('exist').then(($exp3)=>{

        EXP_REF = $exp3.text().trim()
    })

    birsJointAgencyPage.BIRS_EXP_REGION().should('exist').then(($exp4)=>{

        EXP_REGION = $exp4.text()
    })
    
    birsJointAgencyPage.BIRS_EXP_ZONE().should('exist').then(($exp5)=>{

        EXP_ZONE = $exp5.text().trim()

    })

    birsJointAgencyPage.BIRS_EXP_DISTRICT().should('exist').then(($exp6)=>{

        EXP_DISTRICT = $exp6.text()
    })

    birsJointAgencyPage.BIRS_EXP_INCIDENT_TYPE().should('exist').then(($exp7)=>{

        EXP_INCIDENT_TYPE = $exp7.text()
    })

    birsJointAgencyPage.BIRS_EXP_BRIGADE_NAME().should('exist').then(($exp8)=>{

        EXP_BRIGADE_NAME = $exp8.text()
    })

    birsJointAgencyPage.BIRS_EXP_APPLIANCE_USED().should('exist').then(($exp9)=>{

        EXP_APPLIANCE_USED = $exp9.text()
    })

    birsJointAgencyPage.BIRS_EXP_PRIMARY_SUPPORT().should('exist').then(($exp10)=>{

        EXP_PRIMARY_SUPPORT = $exp10.text()
    })
    
    birsJointAgencyPage.BIRS_EXP_RESPONSE_TIME().should('exist').then(($exp11)=>{

        EXP_RESPONSE_TIME = $exp11.text()
    })
    

    birsJointAgencyPage.BIRS_EXPRESULTSBTTN().as('exportButton').should('be.visible')
})

When('I Click on "Export Results" button', ()=>{
    
    cy.waitForLoadingSpinner()
    birsJointAgencyPage.BIRS_TABLE_HEADER_ROW().should('be.visible')

    cy.get('@exportButton').click()
})

Then('I see the CSV file has the 11 fields with the data',()=>{
    
    cy.wait(5000)
    cy.parseXlsx('cypress/downloads/Birs Incident Response Report.csv').then(
        jsonData => {
            
            let datacount = jsonData[0].data
            let datacount1 = datacount.length-1


            let Headers = jsonData[0].data[0]


            expect(Headers).to.contain('Region')
            expect(Headers).to.contain('Zone')
            expect(Headers).to.contain('District')
            expect(Headers).to.contain('LGA')
            expect(Headers).to.contain('Reference')
            expect(Headers).to.contain('Incident Date')
            expect(Headers).to.contain('Incident Type')
            expect(Headers).to.contain('Brigade Name')
            expect(Headers).to.contain('Appliance Used')
            expect(Headers).to.contain('Response Time (HH:mm:ss)')
            expect(Headers).to.contain('Primary / Support Brigade')


            let expectedrow = jsonData[0].data[1]
            console.log(jsonData)
            
            console.log(expectedrow[0])
            console.log(expectedrow)


            expect(expectedrow[0]).to.contain(EXP_REGION.trim())
            expect(expectedrow[1]).to.contain(EXP_ZONE.trim())
            expect(expectedrow[2]).to.contain(EXP_DISTRICT.trim())
            expect(expectedrow[3]).to.contain(EXP_LGA.trim())
            expect(expectedrow[4]).to.equal((EXP_REF))
            expect(expectedrow[5]).to.contain(EXP_INCIDENT_DATE)
            expect(expectedrow[6]).to.contain(EXP_INCIDENT_TYPE.trim())
            expect(expectedrow[7]).to.contain(EXP_BRIGADE_NAME.trim())
            expect(expectedrow[8]).to.contain(EXP_APPLIANCE_USED)
            expect(expectedrow[9]).to.contain(EXP_RESPONSE_TIME)
            expect(expectedrow[10]).to.contain(EXP_PRIMARY_SUPPORT)
        }
    )
})

And('I expand operations tab', ()=>{
    dashboard
    .OPERATIONS()
    .should("be.visible")
    .click();
})

And(`I select the 'Current Incident Search' option`, ()=>{
    
    dashboard
    .CURRENT_INCIDENT_SEARCH()
    .should("be.visible")
    .click();
})

When(`I click on 'Search Brigade Reports' button on 'Brigade Report Search' page`, ()=>{
    incidentSearchPage.SEARCH_BRIGADE_REPORTS_BUTTON().should('be.visible').click()
})

Then(`I am taken to the 'Brigade Report Search' page`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_LABEL().should('be.visible')
})



// Feature
// ICONSUP-T561 (1.0) 
// Validate "Volunteer Report Submitted" filter is correctly displaying as per selected radio button


Given(`I open the 'Brigade Report Search' page`,()=>{

//login using credentials
// secureLogon.logon(Cypress.env("ICON_USERNAME"), Cypress.env("ICON_PASSWORD"));

//login using ntlm
cy.loginToICONNoVisit();

brigadeReportSearchPage.VISIT_BRIGADE_REPORT_SEARCH_PAGE()
brigadeReportSearchPage.LGA_DROPDOWN().invoke('text').should('not.be.empty')

})

And(`I see the 'Volunteer Report Submitted' label`, ()=>{
    brigadeReportSearchPage.VOLUNTEER_REPORT_SUBMITTED_LABEL().should('be.visible')
})

And(`I see 'Brigade Report' label below 'Volunteer Report Submitted' label`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_LABEL().as('brigadeReportLabelElement').should('be.visible')
    .then(($e:any)=>{
        cy.wrap($e['selector']).as('brigadeReportLabelSelector')        
    })
// checking to see if volunteerReportSubmitted is above brigadeReportlabel in dom tree
    cy.get('@brigadeReportLabelElement')
    .then(($e)=>{
        brigadeReportSearchPage.BRIGADE_REPORT_LABEL()
        .parents('.row')
        .prevAll()
        .find('#VolunteerReportSubmitted > .control-label').should('exist')
    })
})

// this step uses a generalized function defined in BrigadeReportSearchPage to assert that the radio div has the expected inputs
// if the inputs dont match the values in the array arguement, the function returns a false which fails the assertion here
And(`I see 'Volunteer Report Submitted' label has options 'All', 'Yes', 'No'`, ()=>{
    brigadeReportSearchPage.VOLUNTEER_REPORT_SUBMITTED_OPTIONS().children().then(($el)=>{
        cy.wrap(brigadeReportSearchPage.ASSERT_RADIO_INPUT_VALUES($el, ['All','Yes','No'])).should('be.true')
    })
})

When(`I select 'All' for 'Volunteer Report Submitted' and 'All' for 'Brigade Report' and click 'Search' button`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_ALL_OPTION().check()
    brigadeReportSearchPage.VOL_REP_SUBMITTED_ALL_OPTION().check()

    brigadeReportSearchPage.SEARCH_BUTTON().click()
    cy.waitForLoadingSpinner()

//   cy.get('#search_wrapper',{timeout:10000}).should('be.visible')
})

Then(`I should receive incidents with brigade-report-status-incomplete class`,()=>{
    cy.get('[class="brigade-report-status-incomplete"]').should('exist')
    brigadeReportSearchPage.INCIDENT_NUMBERS().first().invoke('text').as('all_incomplete')
})


Then(`I should receive incidents with brigade-report-status-complete class`,()=>{
    cy.get('[class="brigade-report-status-complete"]').should('exist')
    brigadeReportSearchPage.INCIDENT_NUMBERS().first().invoke('text').as('all_complete')
})

Then(`I should receive incidents from the previous two scenarios`,()=>{
    cy.get('@all_incomplete').then((ref:any)=>{
        
        const referenceNo = ref
        brigadeReportSearchPage.SEARCH_BAR().clear().type(referenceNo).then(()=>
        {
        brigadeReportSearchPage.FILTERED_INCIDENT().should('include.text', referenceNo)
    
    })
})

    cy.get('@all_complete').then((ref:any)=>{
        const referenceNo = ref
        brigadeReportSearchPage.SEARCH_BAR().clear().type(referenceNo).then(()=>
        {
        brigadeReportSearchPage.FILTERED_INCIDENT().should('include.text', referenceNo)
        })
    })
})


Then(`I should receive incidents with brigade-report-status-incomplete class and no volunteer report`,()=>{
    cy.get('[class="brigade-report-status-incomplete"]').should('exist')
    brigadeReportSearchPage.INCIDENT_NUMBERS().first().invoke('text').as('no_incomplete')

    brigadeReportSearchPage.INCIDENT_REPORTS_EXPAND_BUTTON().first().click().then(()=>{
         brigadeReportSearchPage.CLICKED_INCIDENT().contains('Vol.').should('not.exist')
    })

})


Then(`I should receive incidents with brigade-report-status-complete class and no volunteer report`,()=>{
    cy.get('[class="brigade-report-status-complete"]').should('exist')
    brigadeReportSearchPage.INCIDENT_NUMBERS().first().invoke('text').as('no_complete')

    brigadeReportSearchPage.INCIDENT_REPORTS_EXPAND_BUTTON().first().click().then(()=>{
        brigadeReportSearchPage.CLICKED_INCIDENT().contains('Vol.').should('not.exist')
    })

})


Then(`I should receive incidents from the previous two 'No Volunteer Report' scenarios`,()=>{
    cy.get('@no_incomplete').then((ref:any)=>{
        const referenceNo = ref
        brigadeReportSearchPage.SEARCH_BAR().clear().type(referenceNo).then(()=>
        {
        brigadeReportSearchPage.FILTERED_INCIDENT().should('include.text', referenceNo)
    
    })
})
    cy.get('@no_complete').then((ref:any)=>{
        const referenceNo = ref
        brigadeReportSearchPage.SEARCH_BAR().clear().type(referenceNo).then(()=>
        {
        brigadeReportSearchPage.FILTERED_INCIDENT().should('include.text', referenceNo)
        })
    })
})

Then(`I should receive incidents with brigade-report-status-incomplete class and with volunteer report`,()=>{
    cy.get('[class="brigade-report-status-incomplete"]').should('exist')
    brigadeReportSearchPage.INCIDENT_NUMBERS().first().invoke('text').as('yes_incomplete')

    brigadeReportSearchPage.INCIDENT_REPORTS_EXPAND_BUTTON().first().click().then(()=>{
        brigadeReportSearchPage.CLICKED_INCIDENT().contains('Vol.').should('exist')
    })

})


Then(`I should receive incidents with brigade-report-status-complete class and with volunteer report`,()=>{
    cy.get('[class="brigade-report-status-complete"]').should('exist')
    brigadeReportSearchPage.INCIDENT_NUMBERS().first().invoke('text').as('yes_complete')

    brigadeReportSearchPage.INCIDENT_REPORTS_EXPAND_BUTTON().first().click().then(()=>{
        brigadeReportSearchPage.CLICKED_INCIDENT().contains('Vol.').should('exist')
    })

})


Then(`I should receive incidents from the previous two 'Yes Volunteer Report' scenarios`,()=>{
    cy.get('@yes_incomplete').then((ref:any)=>{
        const referenceNo = ref
        brigadeReportSearchPage.SEARCH_BAR().clear().type(referenceNo).then(()=>
        brigadeReportSearchPage.FILTERED_INCIDENT().should('include.text', referenceNo))
    
    })
})
/*
    cy.get('@yes_complete').then((ref:any)=>{
        const referenceNo = ref
        brigadeReportSearchPage.SEARCH_BAR().clear().type(referenceNo).then(()=>
        {
        brigadeReportSearchPage.FILTERED_INCIDENT().should('include.text', referenceNo)
    })
})

*/

Then('I should receive incidents in the results with', (dataTable)=>{
    dataTable.hashes().forEach((elem: any) => {
        brigadeReportSearchPage.SEARCH_BAR().clear().type(elem.referenceNo).then(()=>
        {
        brigadeReportSearchPage.FILTERED_INCIDENT().should('include.text', elem.referenceNo)
        })
    })
    
})

When(`I select 'All' for 'Volunteer Report Submitted' and 'Complete' for 'Brigade Report' and click 'Search' button`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_COMPLETE_OPTION().check()
    brigadeReportSearchPage.VOL_REP_SUBMITTED_ALL_OPTION().check()

    brigadeReportSearchPage.SEARCH_BUTTON().click()
    cy.waitForLoadingSpinner()
    cy.get('#search_wrapper', { timeout: 10000}).should('be.visible')
})

When(`I select 'All' for 'Volunteer Report Submitted' and 'Incomplete' for 'Brigade Report' and click 'Search' button`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_INCOMPLETE_OPTION().check()
    brigadeReportSearchPage.VOL_REP_SUBMITTED_ALL_OPTION().check()
    
    brigadeReportSearchPage.SEARCH_BUTTON().click()
    cy.waitForLoadingSpinner()
    cy.get('#search_wrapper', { timeout: 10000}).should('be.visible')
})

When(`I select 'Yes' for 'Volunteer Report Submitted' and 'Complete' for 'Brigade Report' and click 'Search' button`, ()=>{
    
    brigadeReportSearchPage.BRIGADE_REPORT_COMPLETE_OPTION().check()
    brigadeReportSearchPage.VOL_REP_SUBMITTED_YES_OPTION().check()

    brigadeReportSearchPage.SEARCH_BUTTON().click()
    cy.waitForLoadingSpinner()
    cy.get('#lnkBtnSearch', { timeout: 10000}).should('be.visible')
    })

When(`I select 'Yes' for 'Volunteer Report Submitted' and 'Incomplete' for 'Brigade Report' and click 'Search' button`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_INCOMPLETE_OPTION().check()
    brigadeReportSearchPage.VOL_REP_SUBMITTED_YES_OPTION().check()

    brigadeReportSearchPage.SEARCH_BUTTON().click()
    cy.waitForLoadingSpinner()
    cy.get('#search_wrapper', { timeout: 10000}).should('be.visible')
})

When(`I select 'Yes' for 'Volunteer Report Submitted' and 'All' for 'Brigade Report' and click 'Search' button`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_ALL_OPTION().check()
    brigadeReportSearchPage.VOL_REP_SUBMITTED_YES_OPTION().check()

    brigadeReportSearchPage.SEARCH_BUTTON().click()
    cy.waitForLoadingSpinner()
    cy.get('#search_wrapper', { timeout: 10000}).should('be.visible')
})

When(`I select 'No' for 'Volunteer Report Submitted' and 'Complete' for 'Brigade Report' and click 'Search' button`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_COMPLETE_OPTION().check()
    brigadeReportSearchPage.VOL_REP_SUBMITTED_NO_OPTION().check()

    brigadeReportSearchPage.SEARCH_BUTTON().click()
    cy.waitForLoadingSpinner()
    cy.get('#search_wrapper', { timeout: 10000}).should('be.visible')
})

When(`I select 'No' for 'Volunteer Report Submitted' and 'All' for 'Brigade Report' and click 'Search' button`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_ALL_OPTION().check()
    brigadeReportSearchPage.VOL_REP_SUBMITTED_NO_OPTION().check()

    brigadeReportSearchPage.SEARCH_BUTTON().click()
    cy.waitForLoadingSpinner()
    cy.get('#search_wrapper', { timeout: 10000}).should('be.visible')
})

When(`I select 'No' for 'Volunteer Report Submitted' and 'Incomplete' for 'Brigade Report' and click 'Search' button`,()=>{
    brigadeReportSearchPage.BRIGADE_REPORT_INCOMPLETE_OPTION().check()
    brigadeReportSearchPage.VOL_REP_SUBMITTED_NO_OPTION().check()

    brigadeReportSearchPage.SEARCH_BUTTON().click()
    cy.waitForLoadingSpinner()
    cy.get('#search_wrapper', { timeout: 10000}).should('be.visible')
})

Then('I search {string}', (keyword)=>{ 
    birs_commonpage.SER_SEL_LGA().select(keyword)
    birs_commonpage.SEARCH().click()
    birs_commonpage.LINK_INC_FIRST().click()
    })

And(`I click on Brigade Report`,()=>{
    birs_commonpage.BTN_LINK_BRIGREP().click()    
}) 

And(`I add crew details`,()=>{
    birs_commonpage.BIRS_ADDPRIMARYCREWBUTTON().scrollIntoView().focus().click({force: true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_ADDCREWMODAL()).should('exist')   
    birs_commonpage.BIRS_CREWSEARCHBTTN().click({force: true}).waitForLoadingSpinner()
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW1().check({force: true})
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW2().check({force: true})
    birs_commonpage.BIRS_SELECTEDPRIMARYCREW3().check({force: true})
    //birspage.BIRS_SELECTEDPRIMARYCREW4().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREW_SAVEBTTN().click({force: true}).waitForLoadingSpinner().waitUntil(()=> birs_commonpage.BIRS_SELECTEDCREWDETAILSBOX()).should('exist')
    birs_commonpage.BIRS_SELECTEDCREWDETAILS1().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREWDETAILS2().check({force: true})
    birs_commonpage.BIRS_SELECTEDCREWDETAILS3().check({force: true})  
}) 
  
