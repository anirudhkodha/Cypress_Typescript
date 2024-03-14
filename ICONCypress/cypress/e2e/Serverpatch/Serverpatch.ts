import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import { times } from 'lodash';
import dayjs from "dayjs";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Operations from "../pages/Operations&fiu";
import S44PAGE from "../pages/S44Page";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import { data } from "cypress/types/jquery";
import EscadIconDataDisplay from '../pages/EscadIconDataDisplay'
import Mfulocators from "../pages/Mfupage";
import FDRlocators from "../pages/FDRlocators";
import { TIMEOUT } from "dns";
import { setTimeout } from "timers";


const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const birspage = new BIRS_COMMONPAGES()
const s44page = new S44PAGE()
const escadIconDataDisplay = new EscadIconDataDisplay()
const mfulocators = new Mfulocators()
const fdrlocators = new FDRlocators()





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
let loc_address = ''



Given ('I open ICON page',()=> {
    cy.loginToICON()

  
})
And ('I can see dashboard',()=> {
    
    dashboard.CURRENT_INCIDENTS().should('exist')   

    cy.screenshot("ICON")
})

And ('I click on Joint Agency',()=> {
    birspage.BIRS_JOINAGENCY().click({force: true})
})

And ('I click on Birs Outstanding Report',()=>{
    birspage.BIRS_OUTSTANDINGREP().click({force:true})
})

Then ('I verify with MAP VIEW AREAS',()=> {

    cy.get('#map').should('be.visible')
    cy.waitUntil(()=> cy.get ('#map')).focus().should('be.visible')
    cy.get('#map').should('have.css', 'background-color', 'rgb(221, 221, 221)')
    cy.get('#map').should('have.attr','style').and('contain', 'position: relative; height:')
   
    cy.get('.leaflet-control-zoom-in').click() .wait(20000)

   
    cy.screenshot('ICON LANDING PAGE')
    
})

//||>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Then ('I verify Operations - Incident Listing',()=>{

    // operations.OPERATIONS_TAB().should('be.visible').click()
    cy.get('#mnuOperation > li:nth-child(9) > a').should('exist').click({force: true})
    cy.get('#article > div.page-header > h1').should('contain.text','Incident and Event List')
    cy.get('#DataTables_Table_0 > tbody > tr:nth-child(1) > td:nth-child(5) > a').click({force: true})
    cy.get('#article > div.page-header > h1').should('contain.text', 'Incident').wait(4000)

    cy.screenshot('Incidentlisting')
})

//||>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


And ('I expand Knowledge > Incidents and ops log',()=> {

    cy.get('#nav > ul:nth-child(1) > li:nth-child(2) > a').click({force: true})
    cy.get('#mnuKnowledge > li:nth-child(4) > a').click({force: true}).wait(4000)
    
    
})

Then ('I verify with Incident and ops page and select a log',()=> {
    
    cy.get('#report > div:nth-child(1) > div.pull-left > h4').should('be.visible').should('contain.text','Incident Event Log and OpsLog List')
    cy.get('#intelOpsLogTable > tbody > tr:nth-child(1) > td.clickableRow').click({force:true}).waitForLoadingSpinner()
})

//||>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


Given ('I open COP page',()=> {
    cy.loginToCOP().wait(50000)

    
    cy.get('#showAdditionalDataButton').click({force:true}).wait(6000)

    cy.screenshot('COP01')
    
    cy.get('#showAdditionalDataButton').click({force:true}).wait(4000)
    


})

And ('I verify Map Areas',()=> {

    cy.get('#mapDiv_gc').should('have.attr','style').and('contain','touch-action: none; will-change: transform; overflow: visible; position: absolute;').wait(4000)
})

And ('I Verify Map coordinates tab',()=>{

    cy.get('#hideCoordinatesButton').click({force:true}).wait(4000)
    cy.get('#coordinateDiv[class="coordinateContainer showCoordinateContainer"]').should('be.visible').wait(4000)

    
    cy.screenshot("COP02")
})

And ('I verify different layers on the Map',()=> {

    cy.get('#mapDiv_zoom_slider > div.esriSimpleSliderIncrementButton').click({force: true}).wait(6000)
    cy.get('#mapDiv_zoom_slider > div.esriSimpleSliderIncrementButton').click({force: true}).wait(6000)
    cy.get('#showLocationSearchButton[title="Location Search"]').click({force:true}).wait(2000)
    cy.get('#txtLocation[tooltip="Zoom to location"]').should('be.visible').click({force:true}).type('153.50, -32.17').wait(6000)
    cy.get('#imgLocation[class="menuIcon"]').click({force:true}).wait(4000)
    cy.get('#mapDiv_zoom_slider > div.esriSimpleSliderIncrementButton').click({force: true}).wait(6000)
    cy.get('#mapDiv_zoom_slider > div.esriSimpleSliderIncrementButton').click({force: true}).wait(6000)



    cy.screenshot('COP03')

})

Then ('Verify AlertStatus page is properly displayed',()=> {
    cy.visit('https://cop.uat.rfs.nsw.gov.au/cop_portal/dAlertStatusUI.html')
    cy.get('#alertMap1Div_gc').should('be.visible')
    cy.get('#alertMap2Div_gc').should('be.visible')
    cy.get('#alertMap3Div_gc').should('be.visible')
    cy.get('#alertMap4Div_gc').should('be.visible')
    cy.screenshot('AlertStatusPage')

})


//||>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


Given ('I open BRS for volunteers page',()=> {

    cy.loginToBRS().wait(10000)

})

And ('I assert for page title',()=> {

    cy.title().should('eq', 'BIRS for Volunteers')  

    cy.screenshot('BRS for VOLUNTEERS01')
})

And ('I will search for current incidents on BRSVOL',()=> {

    // cy.get('#BrsHomePageActions > md-list > button > span').click({force: true})
    cy.contains('Show Current Incidents').click({force: true})
    cy.screenshot('BRS for VOLUNTEERS02')
})


And ('I land into current incidents page',() =>{

    // cy.get('body > div.app > md-toolbar > div.form-group.text-center.flex-80 > span').should('be.visible').and('contain.text','Incidents')
    cy.get('input[ng-model="searchText"]').type('000{enter}',{force: true})
    cy.get('#incidents > div > md-list > md-list-item:nth-child(1) > div > button', {timeout: 60000}).click({force: true})
    cy.contains('Add New Report').click({force: true})

    cy.screenshot('BIRS FOR VOLUNTEERS03')
})










//||>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Given ('I open ONERFS webpage',()=> {

    cy.visit('https://one.rfs.nsw.gov.au', { failOnStatusCode: false })
    cy.loginToONERFS().wait(5000)
    
    

    cy.get('input[name="username"]').type(Cypress.env('ONE_RFS_USERNAME'))

    cy.get('input[name="password"]').type(Cypress.env('ONE_RFS_PASSWORD'))

    cy.get('button[type="submit"]').contains('Log In').click({force  : true})



})

And ('I can see For Staff Dropdown',()=> {

    cy.get('#site-topnav > div > div.p-nav__container > ul > li:nth-child(1) > a').should('be.visible').and('contain.text', 'For Staff')
    
    cy.get('#site-topnav > div > div.p-nav__container > ul > li:nth-child(1) > a').focus().invoke('show')
    cy.screenshot('ONE RFS01')
})

And ('I can see FOR VOLUNTEERS Dropdown',()=> {

    cy.get('#site-topnav > div > div.p-nav__container > ul > li:nth-child(2) > a').should('be.visible').and('contain.text', 'For Volunteers')

    cy.get('#site-topnav > div > div.p-nav__container > ul > li:nth-child(2) > a').invoke('show')
    
    cy.screenshot('ONE RFS02')
})

Then ('I verify quick links',()=> {

    cy.get('#home-sidebar__my-business-tools > div > ul > li:nth-child(1) > a').focus()
                                        .should('be.visible').and('contain','Library')
    cy.screenshot('ONE RFS03')

})

//_________________________CREATE INCIDENT____________>>>>>>>>


And ('I can select Create Full Incident', ()=> {

    
    incidentlocators.CREATE_FULL_INCIDENT_TAB().click({force: true})
})

And ('I enter  indidentname in the field on create full incident page',()=> {

    incidentlocators.INCIDENT_NAME().type('Full_incident Automation_test_Bushfire_type')

})

And ('I enter LGA on create full incident page', ()=> {

    incidentlocators.INC_LGA().select('0060') // Default '0060'
})

And ('I enter incident location on create full incident page',()=>{

    loc_address = '260 WATERLOO RD, WOODSTOCK'
    incidentlocators.INCIDENT_LOCATION().type(loc_address,{force: true}).wait(4000).type('{downArrow}').type('{enter}')
    incidentlocators.INC_LOCATION_BUSH2().click({force: true})    

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

    incidentlocators.AGENCY_CALL_RECEIVED().scrollIntoView().type(eventstartdate, {force: true})

})

And ('I validate fire type requirement message on create full incident page',()=>{

  
})


And ('I select bushfire types on create full incident page',()=> {
   incidentlocators.BUSHFIRE_TYPE_TAB().click({force: true})
   incidentlocators.SELECTED_BUSHFIRETYPE_FOREST().click({force: true})
   cy.screenshot('CREATE INCIDENT01')
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

   cy.screenshot('CREATE INCIDENT02')

})

And ('I click on Edit SitRep for full incident summary page',()=> {
    incidentlocators.EDIT_SITREP_BTTN().click({force: true})
    


})

And ('I verify create Sitrep page for full incident and assert alerts',()=>{
    cy.get('h1').contains('Edit SitRep')
    
    //Assert Alerts
    incidentlocators.INC_AUTHORISE_SRE().click( {force: true,timeout: 120000})
    
    //let sitrep_alerts = ['Start Date is required.','At least one current tenure is required.','Current threat is required.','Alert level is required.','Incident Controller is required.','Lead Agency is required.']

   /* incidentlocators.INC_SITREPALERTS().invoke('text').and('contain', sitrep_alerts[0])
                                                    .and('contain', sitrep_alerts[1])
                                                    .and('contain', sitrep_alerts[2])
                                                    .and('contain', sitrep_alerts[3])
                                                    .and('contain', sitrep_alerts[4])
                                                    .and('contain', sitrep_alerts[5])*/
    
    cy.screenshot('CREATE INCIDENT03')

})

And ('I can verify report date as current' ,()=> {
    const currentreporttime = dayjs().subtract(5,'minute').format('DD/MM/YYYY HH:mm');
    incidentlocators.CURRENT_REPORT_TIME_SR().should('be.visible').type(currentreporttime,{force: true})

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

And ('I Set Alert Level',()=>{

    //incidentlocators.ACTION_TAB_SR().click({force: true}).waitForLoadingSpinner()
    //incidentlocators.ALERTLEVEL_REQTEXT().should('contain.text','Current Alert Level is required.')
    //incidentlocators.SETALERTBTTN_SR().should('be.visible').click({force: true})
    incidentlocators.ALERTLEVETBOX_SR().should('exist').should('contain.text','Incident Alert Level')
    incidentlocators.SELECTED_ALERTLEVEL() // Select A
   // incidentlocators.SETALERTOK_SR().click({force: true})
    //incidentlocators.VERIFY_ALERTLEVLTXT().should('contain.text','Selected Alert Level: WA')
})

And ('I select Incident Controller',()=>{
    incidentlocators.INCCONTROLLER_SRE_TAB().click({force: true}).waitForLoadingSpinner()   //Expand Command/control/comms
    incidentlocators.INCCONTROLLER_SRE().type('TeamC', {force: true})

})

And ('I select Lead Agency',()=> {

    incidentlocators.INCLEAD_AGENCY_SRE().select("6",{force: true})
})

And ('I Authorise SitRep', ()=> {


    cy.screenshot('CREATE INCIDENT04')
    
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

    cy.screenshot('CREATE INCIDENT05')

    incidentlocators.INC_CLOSE_SITREPE1().click()  // Close the SitRep window
    incidentlocators.INC_HEADERINCDETAILS().click({force:true})
    incidentlocators.INC_ASSERT_FULLINC_SRE().should('be.visible').and('contain','(SR) Authorised')

    cy.screenshot('CREATE INCIDENT06')


})

//__________BIRS SEARCH VALIDATION________________>>>>>>>>>>>>>>>



And ('I open knowledge',()=>{

    s44page.KNOWLEDGE_TAB().click({force: true})

})
And ('I expand Reports',()=> {
    birspage.BIRS_REPORTSTAB().click({force:true})

    cy.screenshot('BIRS VALIDATION01')

})


And ('I click on Join Agency',()=> {
    birspage.BIRS_JOINAGENCY().click({force: true})
    birspage.BIRS_OUTSTANDINGREP().click({force:true})
})


And ('I Validate three fields and search for the results',()=>{

    //FROM DATE
    const fromdate_ = dayjs().subtract(3,'month').format('DD/MM/YYYY HH:mm');
    cy.waitUntil(()=>birspage.BIRS_FROMDATE(),{timeout: 40000}).should('be.visible').type(fromdate_,{force: true})

    //TO DATE 
    const todate_ =  dayjs().format('DD/MM/YYYY HH:mm');
    birspage.BIRS_TODATE().should('be.visible').type(todate_,{force: true})

    // Council
    birspage.BIRS_COUNCIL().should('be.visible')
    .select("0060",{force: true})

    cy.screenshot('BIRS VALIDATION02')


    //Search
    birspage.BIRS_SEARCHOUTSTNDNG().click({force:true}).waitForLoadingSpinner()

})

And ('I Search for the Incident {string}',(keyword)=>{

    birspage.BIRS_SEARCHFIELD().type(keyword,{force:true})
    cy.wait(4000)
})


And ('I export the Result to verify Twelve Fields with the data',()=> {

    
    times(2, () => {
        birspage.BIRS_INCIDENTCONSORTING().click({force: true})      
        })
        
    cy.screenshot('BIRS VALIDATION03')

    //RESULT TABLE VALUES


    birspage.BIRS_TABLEINFO().should('exist').then(($count)=>{

        TABLEINFO = $count.text()

        console.log(TABLEINFO)
        ROWCOUNT = TABLEINFO.trim().split(" ")
        ROWCOUNT1 = ROWCOUNT[5]
        cy.log(ROWCOUNT1)


    })


    birspage.BIRS_EXPSTARTDATE().should('exist').then(($exp1)=>{
        
        let a : any
        a =  $exp1.text()
        EXPSTARTDATE = dayjs(a).format()
        cy.log(EXPSTARTDATE)
        })
    
    
        birspage.BIRS_EXPLGA().should('exist').then(($exp2)=>{
    
            EXPLGA = $exp2.text()
        })
    
        birspage.BIRS_EXPINCREF().should('exist').then(($exp3)=>{
    
            EXPINCREF = $exp3.text()
            EXPINCREF1 = EXPINCREF.trim()
            cy.log(EXPINCREF1)
        })
    
        birspage.BIRS_EXP000REF().should('exist').then(($exp4)=>{
    
            EXP000REF = $exp4.text()
        })
        
        birspage.BIRS_EXPINCNAME().should('exist').then(($exp5)=>{
    
            EXPINCNAME = $exp5.text()
            EXPINCNAME1 =EXPINCNAME.trim()
            cy.log(EXPINCNAME1)
    
        })
    
        birspage.BIRS_EXPINCLOC().should('exist').then(($exp6)=>{
    
            EXPINCLOC = $exp6.text()
        })
    
        birspage.BIRS_EXPINCCON().should('exist').then(($exp7)=>{
    
            EXPINCCON = $exp7.text()
        })
    
        birspage.BIRS_EXPINCTYPE().should('exist').then(($exp8)=>{
    
            EXPINCTYPE = $exp8.text()
        })
    
        birspage.BIRS_EXPVOLREP().should('exist').then(($exp9)=>{
    
            EXPVOLREP = $exp9.text()
        })
    
        birspage.BIRS_EXPPRIMARYBRIG().should('exist').then(($exp10)=>{
    
            EXPPRIMARYBRIG = $exp10.text()
        })
        
        birspage.BIRS_EXPSUPPORTBRIG().should('exist').then(($exp11)=>{
    
            EXPSUPPORTBRIG = $exp11.text()
        })
        
        birspage.BIRS_EXPREPCOMPLETED().should('exist').then(($exp12)=>{
    
            EXPREPCOMPLETED = $exp12.text()
        })
    
    

      birspage.BIRS_EXPRESULTSBTTN().click({force:true})
      .wait(5000)

    
    //   //Validate excel
    //   cy.parseXlsx('cypress/downloads/Birs Outstanding Report.csv').then(
    //     jsonData => {
            
    //         let datacount = jsonData[0].data
    //         let datacount1 = datacount.length-1
    //         console.log(datacount1)

    //         expect(parseInt(ROWCOUNT1)).to.equal(datacount1)

    //         let Headers = jsonData[0].data[0]
    //         console.log( jsonData)

    //         expect(Headers).to.contain('Start Date')
    //         expect(Headers).to.contain('LGA')
    //         expect(Headers).to.contain('Incident Ref')
    //         expect(Headers).to.contain('OOO Ref')
    //         expect(Headers).to.contain('Incident Name')
    //         expect(Headers).to.contain('Incident Location')
    //         expect(Headers).to.contain('Incident Controller')
    //         expect(Headers).to.contain('Incident Type')
    //         expect(Headers).to.contain('Brigade Volunteer Reports')
    //         expect(Headers).to.contain('Primary Brigade')
    //         expect(Headers).to.contain('Support Brigade(s)')
    //         expect(Headers).to.contain('Brigade Report Completed')

    //         cy.screenshot('BIRS VALIDATION04')


    //         let expectedrow = jsonData[0].data[1]
    //         console.log(jsonData)
            
    //         console.log(expectedrow[0])
    //         console.log(expectedrow)
    //         let start_date_data = dayjs(expectedrow[0]).format()
    //         console.log(start_date_data)

    //         expect(start_date_data).to.eq(EXPSTARTDATE)
    //         expect(expectedrow[1]).to.contain(EXPLGA)
    //         //expect(expectedrow[2]).to.equal(EXPINCREF)
            
    //          if(expectedrow[2]==null){
    //             expect(expectedrow[2]).to.be.null
    //         }
    //         else {
    //             expect(expectedrow[2]).to.equal((EXPINCREF)) 
    //         }
           

    //         //expect(expectedrow[3]).to.contain(EXP000REF)
            
    //         if(expectedrow[3]==null){
    //             expect(expectedrow[3]).to.be.null
    //         }
    //         else {
    //             expect(expectedrow[3]).to.contain(EXP000REF.trim())
    //         }
            

    //         expect(expectedrow[4]).to.contain(EXPINCNAME1)
    //         expect(expectedrow[5]).to.contain(EXPINCLOC.trim())
    //         expect(expectedrow[6]).to.contain(EXPINCCON.trim())
    //         expect(expectedrow[7]).to.contain(EXPINCTYPE.trim())
    //         expect(expectedrow[8]).to.be.null
    //         expect(expectedrow[9]).to.be.null
    //         expect(expectedrow[10]).to.be.null
    //         expect(expectedrow[11]).to.contain(EXPREPCOMPLETED.trim())
            
            cy.screenshot('BIRS VALIDATION05')

            

        
    



})

      

//____________VIEW INCIDENTS____________>>>>>>>>>>





And ('I select Current incident search',()=> {

    incidentlocators.CURRENT_INCIDENT_SEARCH().click({force : true})
 
})
 
 
And ('I can see Incident list',()=> {
    
    cy.screenshot('VIEW INCIDENTS 01')    
    incidentlocators.SEARCH_BTTN().click({force: true})
 
 
})
 
And ('I verified one of the incidents',()=> {


    cy.screenshot('VIEW INCIDENTS 02')    

    incidentlocators.INCIDENT_EVENT_LIST_ALERT().should('be.visible').and('contain','Incident and Event List')
    cy.waitForLoadingSpinner()
    cy.waitUntil(()=> incidentlocators.INCIDENT_SEARCH1(),{timeout: 180000}).click({force: true})
    incidentlocators.INCIDENT_SEARCH2().should('be.visible').and('contain','Incident Details')
 
    cy.screenshot('VIEW INCIDENTS 03')    

})

//________Admin can search user and validate number of same users>>>>>>>>>>  

Given('I have opened web application', () => {
    cy.loginToICON()
})

When('I expand Admin menu', () => {
    dashboard.ADMIN_MENU_ICON().click()

})
And('I expand Administration menu', () => {
    dashboard.ADMINISTRATION_MENU().should('exist').invoke('show')

    cy.screenshot('ADMIN MENU VALIDATION01')

})
And('I Select User Management link', () => {
    dashboard.ICON_USER_MANAGEMENT_MENU().click({force: true})
    cy.waitForLoadingSpinner()
})
Then('I Verify User Search Page controls', () => {
    
    userSearch.USER_AGENCY().should('be.visible')
    userSearch.RESULT_SUMMARY().should('contain.text', 'Showing 1 to 10 of')

    cy.screenshot('ADMIN MENU VALIDATION02')

})
And('I can look for {string}', (keyword) => {
    userSearch.SEARCH_KEYWORD().click()
    userSearch.SEARCH_KEYWORD().type(keyword,{force: true})
})
And('I verify total numbers of users', () => {
    userSearch.RESULT_SUMMARY().should('contain.text', '(')
    userSearch.RESULT_SUMMARY().should('contain.text', 'Showing 1 to 10 of')

    cy.screenshot('ADMIN MENU VALIDATION03')


})


//_________ BR-ADMIN-11 ESCAD ICON Data Display >>>>>>>>>>>



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
    cy.screenshot('ADMIN MENU VALIDATION04')

})
When('the user searches by incident start from past 3 months', () => {
    // Enter incident start from date from 3 months ago
    const incidentStartFromDate = dayjs().subtract(3, 'month').format('DD/MM/YYYY HH:mm');
    escadIconDataDisplay.INCIDENT_START_FROM().type(incidentStartFromDate,{force: true})

    cy.screenshot('ADMIN MENU VALIDATION05')

    // Click Search button to perform search
    escadIconDataDisplay.SEARCH_BUTTON().click()
})
Then('incident search results are displayed', () => {
    // Check if the results summary shows some results
    escadIconDataDisplay.RESULT_SUMMARY().should('contain.text', 'Showing 1 to')

    cy.screenshot('ADMIN MENU VALIDATION06')

})


//_______PUBLIC FEEDS >>>>>>>>>>>>>>>>>



When ('I open Public Information Tab',()=>{
    mfulocators.PUBLIC_INFORMATION_TAB().click()

})

And ('I select Fire Danger Rating',()=> {
    fdrlocators.FDR_TAB().click({force : true})

})


And ('I make changes in FDR ratings for tomorrow and today',()=> {

    fdrlocators.FDR_TODAY1().select("HIGH", {force: true})

    fdrlocators.FDR_TOMORROW1().select("HIGH", {force: true})

    fdrlocators.FDR_TOBANTODAY_YES1().click({force: true})

    fdrlocators.FDR_TOBANTOMMOROW1().click({force: true})



})



And ('I Save the details', ()=> { 

    cy.screenshot('PUBLIC FEEDS VALIDATION01')

    fdrlocators.FDR_SAVEBTTN().click({force: true})
    cy.waitForLoadingSpinner()
    fdrlocators.FDR_ALERTSUCCESS().should('exist').and('contain','Success')
    fdrlocators.FDR_ALERTSUCCESSNOTE().should('exist').and('contain',('The Fire Danger and TOBAN feeds were successfully generated and will be published to the Public Website and IVR.'))
    fdrlocators.FDR_ALERTSUCCESSCLOSE().click({multiple:true , force: true})

    cy.screenshot('PUBLIC FEEDS VALIDATION02')

})


And ('I open XML file',()=> {



    cy.readFile('\\\\wildfire\\hiav\\feeds\\UAT\\feedspublicdata\\fdrToban.xml').then(
    XMLDATA => {
    var domParser = new DOMParser();
    var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
    

    console.log(xmlDocument);
    
    var district = xmlDocument.getElementsByTagName("District");
    var Name = xmlDocument.getElementsByTagName("Name")[0].childNodes[0].nodeValue;
    var RegionNumber = xmlDocument.getElementsByTagName("RegionNumber")[0].childNodes[0].nodeValue;
    var Councils = xmlDocument.getElementsByTagName("Councils")[0].childNodes[0].nodeValue;
    var DangerLevelToday = xmlDocument.getElementsByTagName("DangerLevelToday")[0].childNodes[0].nodeValue;
    var DangerLevelTomorrow = xmlDocument.getElementsByTagName("DangerLevelTomorrow")[0].childNodes[0].nodeValue;
    var FireBanToday = xmlDocument.getElementsByTagName("FireBanToday")[0].childNodes[0].nodeValue;
    var FireBanTomorrow = xmlDocument.getElementsByTagName("FireBanTomorrow")[0].childNodes[0].nodeValue;
    
    
    expect(Name).to.contain('Far North Coast')
    expect(RegionNumber).to.contain('1')
    expect(Councils).to.contain('Ballina; Byron; Clarence Valley; Kyogle; Lismore; Richmond Valley; Tweed')
    expect(DangerLevelToday).to.contain('HIGH')
    expect(DangerLevelTomorrow).to.contain('HIGH')
    expect(FireBanToday).to.contain('Yes')
    expect(FireBanTomorrow).to.contain('Yes')

    cy.screenshot('PUBLIC FEEDS VALIDATION03')


    cy.readFile('\\\\wildfire\\hiav\\feeds\\UAT\\feedspublicdata\\region1.xml').then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
    
        console.log(xmlDocument);

        expect(Name).to.contain('Far North Coast')
        expect(RegionNumber).to.contain('1')
        expect(Councils).to.contain('Ballina; Byron; Clarence Valley; Kyogle; Lismore; Richmond Valley; Tweed')
        expect(DangerLevelToday).to.contain('HIGH')
        expect(DangerLevelTomorrow).to.contain('HIGH')
        expect(FireBanToday).to.contain('Yes')
        expect(FireBanTomorrow).to.contain('Yes')

        cy.screenshot('PUBLIC FEEDS VALIDATION04')


        })
    })
    
    
})




And ('I make FDR back to normal',()=> {

    fdrlocators.FDR_TODAY1().select('None', {force: true})
    fdrlocators.FDR_TOMORROW1().select('None', {force: true})

    fdrlocators.FDR_TOBANTODAY_NO1().click({force: true})
    fdrlocators.FDR_TOBANTOMORROW_NO1().click({force: true})

    //SAVE FDR
    fdrlocators.FDR_SAVEBTTN().click({force: true})
    cy.waitForLoadingSpinner()
    fdrlocators.FDR_ALERTSUCCESS().should('exist').and('contain','Success')
    fdrlocators.FDR_ALERTSUCCESSNOTE().should('exist').and('contain',('The Fire Danger and TOBAN feeds were successfully generated and will be published to the Public Website and IVR.'))
    fdrlocators.FDR_ALERTSUCCESSCLOSE().click({multiple:true , force: true})

    cy.screenshot('PUBLIC FEEDS VALIDATION05')


    //READ PUF
    cy.readFile('\\\\wildfire\\hiav\\feeds\\UAT\\feedspublicdata\\fdrToban.xml').then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
        
        console.log(xmlDocument);
        
        var district = xmlDocument.getElementsByTagName("District");
        var Name = xmlDocument.getElementsByTagName("Name")[0].childNodes[0].nodeValue;
        var RegionNumber = xmlDocument.getElementsByTagName("RegionNumber")[0].childNodes[0].nodeValue;
        var Councils = xmlDocument.getElementsByTagName("Councils")[0].childNodes[0].nodeValue;
        var DangerLevelToday = xmlDocument.getElementsByTagName("DangerLevelToday")[0].childNodes[0].nodeValue;
        var DangerLevelTomorrow = xmlDocument.getElementsByTagName("DangerLevelTomorrow")[0].childNodes[0].nodeValue;
        var FireBanToday = xmlDocument.getElementsByTagName("FireBanToday")[0].childNodes[0].nodeValue;
        var FireBanTomorrow = xmlDocument.getElementsByTagName("FireBanTomorrow")[0].childNodes[0].nodeValue;
                
        expect(Name).to.contain('Far North Coast')
        expect(RegionNumber).to.contain('1')
        expect(Councils).to.contain('Ballina; Byron; Clarence Valley; Kyogle; Lismore; Richmond Valley; Tweed')
        expect(DangerLevelToday).to.contain('None')
        expect(DangerLevelTomorrow).to.contain('None')
        expect(FireBanToday).to.contain('No')
        expect(FireBanTomorrow).to.contain('No')

        cy.screenshot('PUBLIC FEEDS VALIDATION06')


        cy.readFile('\\\\wildfire\\hiav\\feeds\\UAT\\feedspublicdata\\region1.xml').then(
            XMLDATA => {
            var domParser = new DOMParser();
            var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
            
            console.log(xmlDocument);

            expect(Name).to.contain('Far North Coast')
            expect(RegionNumber).to.contain('1')
            expect(Councils).to.contain('Ballina; Byron; Clarence Valley; Kyogle; Lismore; Richmond Valley; Tweed')
            expect(DangerLevelToday).to.contain('None')
            expect(DangerLevelTomorrow).to.contain('None')
            expect(FireBanToday).to.contain('No')
            expect(FireBanTomorrow).to.contain('No')
    
        cy.screenshot('PUBLIC FEEDS VALIDATION07')

        
            })
    })
})

/*#####################FDR Updated######################*/
  //>>>>>>>>>>>>>>>>>>>>>Updated FDR with 8 columns>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

  And ('I make changes in FDR ratings for top5 District',()=> {
    fdrlocators.FDR_TODAY1().select('MODERATE', {force: true})
    fdrlocators.FDR_TODAY2().select('None', {force: true})
    fdrlocators.FDR_TODAY3().select('None', {force: true})
    fdrlocators.FDR_TODAY4().select('None', {force: true})
    fdrlocators.FDR_TODAY5().select('None',{force: true})

    fdrlocators.FDR_TODAYplus1_1().select('None', {force: true})
    fdrlocators.FDR_TODAYplus1_2().select('HIGH', {force: true})
    fdrlocators.FDR_TODAYplus1_3().select('None', {force: true})
    fdrlocators.FDR_TODAYplus1_4().select('None', {force: true})
    fdrlocators.FDR_TODAYplus1_5().select('None',{force: true})

    fdrlocators.FDR_TODAYplus2_1().select('None', {force: true})
    fdrlocators.FDR_TODAYplus2_2().select('None', {force: true})
    fdrlocators.FDR_TODAYplus2_3().select('EXTREME', {force: true})
    fdrlocators.FDR_TODAYplus2_4().select('None', {force: true})
    fdrlocators.FDR_TODAYplus2_5().select('None',{force: true})

    fdrlocators.FDR_TODAYplus3_1().select('None', {force: true})
    fdrlocators.FDR_TODAYplus3_2().select('None', {force: true})
    fdrlocators.FDR_TODAYplus3_3().select('None', {force: true})
    fdrlocators.FDR_TODAYplus3_4().select('CATASTROPHIC', {force: true})
    fdrlocators.FDR_TODAYplus3_5().select('None',{force: true})



})

And ('I update TOBANs for top 5 district',()=> {
    fdrlocators.FDR_TOBANTODAY_NO1().click({force: true})
   
    fdrlocators.FDR_TOBANTODAYplus1_2().click({force: true})

    fdrlocators.FDR_TOBANTODAYplus2_3().click({force: true})      
    
    fdrlocators.FDR_TOBANTODAYplus3_4().click({force: true})
    fdrlocators.FDR_TOBANTODAYplus3_5().click({force: true})
})

Then ('I verify the details are saved',()=> {
    cy.reload()

    fdrlocators.FDR_TODAY1().should('be.visible').and('have.attr','class','fdr-MODERATE')
    fdrlocators.FDR_TODAY2().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAY3().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAY4().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAY5().should('be.visible').and('have.attr','class','fdr-None')

    fdrlocators.FDR_TODAYplus1_1().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus1_2().should('be.visible').and('have.attr','class','fdr-HIGH')
    fdrlocators.FDR_TODAYplus1_3().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus1_4().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus1_5().should('be.visible').and('have.attr','class','fdr-None')

    fdrlocators.FDR_TODAYplus2_1().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus2_2().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus2_3().should('be.visible').and('have.attr','class','fdr-EXTREME')
    fdrlocators.FDR_TODAYplus2_4().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus2_5().should('be.visible').and('have.attr','class','fdr-None')

    fdrlocators.FDR_TODAYplus3_1().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus3_2().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus3_3().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus3_4().should('be.visible').and('have.attr','class','fdr-CATASTROPHIC')
    fdrlocators.FDR_TODAYplus3_5().should('be.visible').and('have.attr','class','fdr-None')

    fdrlocators.FDR_TOBANTODAY_NO1().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTODAYplus1_2().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTODAYplus2_3().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTODAYplus3_4().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTODAYplus3_5().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')

})


And ('I set FDR TOBAN to normal',()=> { 

     fdrlocators.FDR_ALL_TOBANTODAY_BTNS().each(($el, index, $list) => {                   
                cy.wrap($el).contains('No').click({force:true})              
      })
      

      fdrlocators.FDR_ALL_TOBANTODAYplus1_BTNS().each(($el, index, $list) => {
        cy.wrap($el).contains('No').click({force:true})
      })

      fdrlocators.FDR_ALL_TOBANTODAYplus2_BTNS().each(($el, index, $list) => {            
        cy.wrap($el).contains('No').click({force:true})
      })

      fdrlocators.FDR_ALL_TOBANTODAYplus3_BTNS().each(($el, index, $list) => {
        cy.wrap($el).contains('No').click({force:true})
      })
})


    And ('I set FDR selectors back to normal',()=> {

    fdrlocators.FDR_None_opt().each(($el, index, $list) => {
        
        cy.wrap($el).select('No change to BOM data',  {force: true})
    })
        fdrlocators.FDR_Moderate_opt().each(($el, index, $list) => {
            cy.wrap($el).select('No change to BOM data',  {force: true})
    })

    fdrlocators.FDR_High_opt().each(($el, index, $list) => {            
        cy.wrap($el).select('No change to BOM data',  {force: true})
    })
    fdrlocators.FDR_Extreme_opt().each(($el, index, $list) => {
        cy.wrap($el).select('No change to BOM data',  {force: true})
    })
    fdrlocators.FDR_Catastrophic_opt().each(($el, index, $list) => {
        cy.wrap($el).select('No change to BOM data',  {force: true})
    })

})



And ('I Save the details', ()=> { 

fdrlocators.FDR_SAVEBTTN().click({force: true})
cy.waitForLoadingSpinner()
fdrlocators.FDR_ALERTSUCCESS().should('exist').and('contain','Success')
fdrlocators.FDR_ALERTSUCCESSNOTE().should('exist').and('contain',('The Fire Danger and TOBAN feeds were successfully generated and will be published to the Public Website and IVR.'))
fdrlocators.FDR_ALERTSUCCESSCLOSE().click({multiple:true , force: true})
})

Then('I reset the TOBAN for first 5 districts', ()=>{

fdrlocators.FDR_ALL_TOBANTODAY_BTNS().then(items=>{
    for(let i=0; i<5; i++)
    cy.wrap(items[i]).contains('No').click({force:true})
})
fdrlocators.FDR_ALL_TOBANTODAYplus1_BTNS().then(items=>{
    for(let i=0; i<5; i++)
    cy.wrap(items[i]).contains('No').click({force:true})
})    
fdrlocators.FDR_ALL_TOBANTODAYplus2_BTNS().then(items=>{
for(let i=0; i<5; i++)
cy.wrap(items[i]).contains('No').click({force:true})
})
fdrlocators.FDR_ALL_TOBANTODAYplus3_BTNS().then(items=>{
for(let i=0; i<5; i++)
cy.wrap(items[i]).contains('No').click({force:true})
})


})

//>>>>>>>>>Fire Weather

Given ('I open fire weather page',()=> {
    cy.loginToFireWeather()
    cy.screenshot('fireWeather') 
})
And ('I verify the page is displayed', ()=> { 

    cy.get('h4').each(($el, index, $list) => {
    cy.wrap($el).should('be.visible')
    })
})


