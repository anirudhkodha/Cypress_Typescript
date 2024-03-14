import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import dayjs from "dayjs";
import INCIDENTLOCATORS from "../pages/Incidentlocators"
import Operations from "../pages/Operations&fiu";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import EscadIconDataDisplay from '../pages/EscadIconDataDisplay';
import ICONLandingPage from '../pages/ICONLandingPage';
import TOKEN from "../pages/AccessToken";
import toObject from 'dayjs/plugin/toObject';
import timezone from "dayjs/plugin/timezone";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { ExpChain } from "lodash";
import { timeStamp } from "console";






const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const escadIconDataDisplay = new EscadIconDataDisplay()
const iconLandingPage = new ICONLandingPage()
const export_access_token = new TOKEN()


let triplezero_ref  = ''
let accesstoken     = ''
let incident_ref    = ''
let ESCAD_report_time1 : any
let ESCAD_report_time  : any
let inc_create : any

let creation_time       = dayjs().subtract(3,'day').format('YYYY-MM-DD HH:mm:ss.SSS');
let closed_time         = dayjs().subtract(3,'day').format('YYYY-MM-DD HH:mm:ss.SSS');
let call_received       = dayjs().subtract(2,'day').format('YYYY-MM-DD HH:mm:ss.SSS');
ESCAD_report_time       = dayjs().format('D/MM/YYYY H:mm:00 A');
let incident_id         = `000-${Math.floor(Math.random() *99998)+1}`
let inc_start_date      = dayjs().subtract(3,'day').format('DD/MM/YYYY HH:mm:ss A')
inc_create              = dayjs().format()
let inc_close_date      = dayjs().subtract(3,'day').format('DD/MM/YYYY HH:mm:ss A')
let call_received_date  = dayjs().subtract(2,'day').format('DD/MM/YYYY HH:mm:ss A');
let call_received_date1 = dayjs().subtract(2,'day').format('DD/MM/YYYY H:mm:ss A');
let escadID = '000-'+Math.round((new Date()).getTime() / 1000)
let ts = Date.now()

let link_incID : any
let escad_table_data = [triplezero_ref, inc_start_date, inc_create, call_received_date, 'I','Fraser Street','Westmead','Nsw','GRASS FIRE',inc_close_date, 'False','True','Upper Hunter','A12',ESCAD_report_time, call_received_date1]
let incident_details = [incident_ref,'Fraser Street, Westmead','Grass','Going','Upper Hunter']


Given ('I create access token',function(){

export_access_token.EXPORT_ACCESSS_TOKEN().then((res: { body: { access_token: any; }; }) =>{

cy.log(JSON.stringify(res))

accesstoken = res.body.access_token
cy.log(accesstoken)

cy.wait(5000)


})


And ('I create ESCADE incident - II',()=> {
/*
cy.request({

        method              : 'POST',
        url                 : `https://incidents.${Cypress.env('ENVIRONMENT')}.rfs.nsw.gov.au/api/v1/incidents/createescadincident`,
        headers             : {
                    'Content-Type'      :   "application/json",
                    'Accept'            :   "application/json",
                    'Authorization'     :   'Bearer '+accesstoken
        },

        body    : {
            "incident_id": incident_id.toString(),
            "creation_time": creation_time.toString(),
            "closed_time": closed_time.toString(),
            "incident_state": "I",
            "incident_type": "GRASS FIRE",
            "revised_incident_type": "",
            "repeat_flag": "",
            "linked_id": "",
            "call_received_time": call_received.toString(),
            "call_source": "000",
            "location": "BC",
            "longitude": 150.775625895146,
            "latitude": -32.1295449635941,
            "map_reference": "",
            "afa_id": "",
            "business": "",
            "building": "16",
            "street": "Fraser street",
            "suburb": "Westmead",
            "x_street": "string",
            "lga": "NSW",
            "post_code": "2145",
            "no_media_comment": false,
            "first_informative": "",
            "firu_assigned": true,
            "current_resources": ""
        }








}).then((res1)=>{

    cy.log(inc_start_date,inc_close_date,inc_create,call_received_date,ESCAD_report_time)
    cy.log(JSON.stringify(res1))
    console.log(JSON.stringify(res1))
    incident_ref = res1.body.result.reference
    cy.log(incident_ref)



    expect(res1.body.result).has.property('lga_name','Upper Hunter')
    expect(res1.body.result).has.property('lga_id','7620')
    expect(res1.body.result).has.property('incident_owner','6')


})

})

})

*/
cy.request({

    method              : 'PUT',
    url                 : `https://iconapi.${Cypress.env('ENVIRONMENT')}.rfs.nsw.gov.au/api/incident/escad/`+ts,
    headers             : {
                'Content-Type'      :   "application/json",
                'Accept'            :   "application/json",
                'X-Source'          :   "mdt",
                'Authorization'     :   'Bearer ' + accesstoken
    },

    body    : {
        "EscadId": escadID,
        "CreationTime": "2022-01-01T00:17:42.000Z",
        "ClosedTime": "",
        "IncidentState": "A",
        "IncidentType": "GRASS FIRE",
        "RevisedIncidentType": "",
        "RepeatFlag": "",
        "LinkedId": "",
        "CallTime": "2022-01-01T00:17:42.000Z",
        "CallSource": "000",
        "Location": "503",
        "Longitude": 150.896563,
        "Latitude": -34.425256,
        "MapRef": "UBD WG 35 P3",
        "AFAId": "",
        "Business": "Imb Arcade",
        "Building": "Afa0462955",
        "Street": "110 Crown St",
        "XStreet": "Scanlen Way",
        "Suburb": "Wollongong",
        "LGA": "Wollongong Council (NSW)",
        "PCode": "2500",
        "NoMediaComment": "0",
        "FirstInformative": "",
        "FIRUAssigned": "0",
        "CurrentResources": "RP503"
      }








}).then((res1)=>{

//cy.log(inc_start_date,inc_close_date,inc_create,call_received_date,ESCAD_report_time)
cy.log(JSON.stringify(res1))
console.log(JSON.stringify(res1))
incident_id = res1.body.incidentId
cy.log(incident_id)



expect(res1.body).has.property('escadId',escadID)
//expect(res1.body.result).has.property('lga_id','7620')
//expect(res1.body.result).has.property('incident_owner','6')


})

})

})


And ('I open ICON',()=> {

    cy.loginToICON()

})

When ('I expand operations tab',()=> {
    operations.OPERATIONS_TAB().should('be.visible').click()
    
})
    
    
And ('I expand Incidents',()=>{
    eventlocators.INCIDENT_TAB().click()

})


And ('I select Advanced incident search',()=> {

    incidentlocators.ADVANCE_INCIDENTSEARCH().click({force: true})
    
})


And ('I search for the created incident',()=> {

    incidentlocators.INC_ADVANCESEARCH_REF().type(incident_ref)

})

And ('I click Search and select the Incident',()=> {

    incidentlocators.INC_ADVANCESEARCH_BTTN().click({force: true})
    incidentlocators.INC_REFNUMBER().click({force: true})

})

And ('I Verified with all element values',()=> { 

    //let link = cy.url({log: true})

    //let url = new URL(link)

    cy.url({log : true}).then(($A)=>{

    let linkcomponents = $A.split('/')
    link_incID = linkcomponents[linkcomponents.length-1]
    cy.log(link_incID)
    
    })  
    
    
    //Assert Draft SitRep
    incidentlocators.INC_ASSERT_BUSH1().should('contain.text','(SR) Draft')

    //Assert Incident details

    let incident_details = [incident_ref,'Fraser Street, Westmead','Grass','Going','Upper Hunter']
    
    incidentlocators.INCIDENTDETAILS().click({force: true})

    incidentlocators.INC_SUMMARYDETAILS().invoke('text').should('contain',incident_details[0])
    incidentlocators.INC_SUMMARYDETAILS().invoke('text').should('contain',incident_details[1])
    incidentlocators.INC_SUMMARYDETAILS().invoke('text').should('contain',incident_details[2])
    incidentlocators.INC_SUMMARYDETAILS().invoke('text').should('contain',incident_details[3])
    incidentlocators.INC_SUMMARYDETAILS().invoke('text').should('contain',incident_details[4])

    //ASSERT ESCAD ICON DISPLAY

    incidentlocators.INC_000REFCOPY().then(($num)=>{
        let i = ''
        i = $num.text() 
        
        triplezero_ref = i.trim()
    })



})


When ('I expand Admin menu',()=> {

    dashboard.ADMIN_MENU_ICON().click()

})

And ('I expand Administration menu',()=>{
    dashboard.ADMINISTRATION_MENU().should('exist').invoke('show')

})

And ('I click on ESCAD-Icon data display', ()=> {

     // Click on the Escad-Icon Data Display menu
     dashboard.ESCAD_ICON_DATA_DISPLAY_MENU().click({force: true})

     // Wait for loading spinner
     cy.waitForLoadingSpinner()

})
And ('I search for the incident and click on the incident',()=> {

    escadIconDataDisplay.ESCAD_SEARCHFIELD().should('exist')
    escadIconDataDisplay.SEARCH_BUTTON().should('exist')
    escadIconDataDisplay.ESCAD_SEARCHFIELD().clear().type(triplezero_ref)
    escadIconDataDisplay.SEARCH_BUTTON().click({force: true}).waitForLoadingSpinner()

    
})

And ('I assert for incident details on ESCAD ICON DATA DISPLAY',()=> {

    //escad_table_data = [triplezero_ref, inc_start_date, inc_create, call_received_date, 'I','Fraser Street','Westmead','Nsw','GRASS FIRE',inc_close_date, 'False','True']
    



    //Assert on table

    escadIconDataDisplay.ESCAD_ICONDISPLAY_TABLEREF().then(($a)=> {

        let Triple0_ref = $a.text()
        expect(Triple0_ref).to.contain(triplezero_ref)
    })


    escadIconDataDisplay.ESCAD_SEARCHTABLE().invoke('text').should('contain', escad_table_data[1] )
    escadIconDataDisplay.ESCAD_SEARCHTABLE().invoke('text').should('contain', escad_table_data[9] )
    escadIconDataDisplay.ESCAD_SEARCHTABLE().invoke('text').should('contain', escad_table_data[4] )
    escadIconDataDisplay.ESCAD_SEARCHTABLE().invoke('text').should('contain', escad_table_data[5] )
    escadIconDataDisplay.ESCAD_SEARCHTABLE().invoke('text').should('contain', escad_table_data[6] )
    escadIconDataDisplay.ESCAD_SEARCHTABLE().invoke('text').should('contain', escad_table_data[7] )

    //Click on the Incident
    escadIconDataDisplay.ESCAD_INCONTABLE().click({force: true})
    cy.waitForLoadingSpinner()

    //Validate ESCADE ICON DATA DISPLAY

    escadIconDataDisplay.ESCAD_ICONDATADISPLAY_000().invoke('text').and('contain', triplezero_ref )

    escadIconDataDisplay.ESCAD_DATADETAILS().invoke('text').should('contain', escad_table_data[0])
    escadIconDataDisplay.ESCAD_DATADETAILS().invoke('text').should('contain', escad_table_data[1])
    escadIconDataDisplay.ESCAD_DATADETAILS().invoke('text').should('contain', escad_table_data[3])
    escadIconDataDisplay.ESCAD_DATADETAILS().invoke('text').should('contain', escad_table_data[4])
    escadIconDataDisplay.ESCAD_DATADETAILS().invoke('text').should('contain', escad_table_data[5])
    escadIconDataDisplay.ESCAD_DATADETAILS().invoke('text').should('contain', escad_table_data[6])
    escadIconDataDisplay.ESCAD_DATADETAILS().invoke('text').should('contain', escad_table_data[7])
    escadIconDataDisplay.ESCAD_DATADETAILS().invoke('text').should('contain', escad_table_data[8])
    escadIconDataDisplay.ESCAD_NOMEDIA_COMMENT().invoke('text').should('contain', escad_table_data[10])
    escadIconDataDisplay.ESCAD_FIRU_ASSIGNED().invoke('text').should('contain', escad_table_data[11])
    
    escadIconDataDisplay.ESCAD_ICONCREATETIME().then(($escadCreatedate)=> {

        let a : any
        a = $escadCreatedate.text()
        console.log(a)
        let b = a.slice(0,19)
        
        console.log(b)
        
        dayjs.extend(customParseFormat)
        ESCAD_report_time1 = dayjs(b, 'DD/MM/YYYY HH:mm:ss')

        let c = dayjs(new Date(inc_create))

        console.log(ESCAD_report_time1 , c)


        let difftime =   ESCAD_report_time1.diff(c,'second')
        console.log(difftime)

        expect(difftime).to.gte(0)
    })
    

})


And ('I Authorise pending Incident',()=> {

    //Expand Operations Tab 

    operations.OPERATIONS_TAB().should('be.visible').click({force: true})

    //Click on Escad incidents

    escadIconDataDisplay.ESCAD_INCIDENTSTAB().click({force: true})
    
    //Write Incident ID 

    escadIconDataDisplay.ESCAD_INCIDENTID_TYPE().type(link_incID)

    //Validate Pending Details

    /*escadIconDataDisplay.ESCAD_PENDINGINC_REPORTDATE_ONTABLE().then(($a)=>{
        let reportdate = $a.text()
        
       
        expect(reportdate).to.contain(ESCAD_report_time)   })*/

    escadIconDataDisplay.ESCAD_DATADETAILSPENDING()
                                                .should('contain', link_incID)
                                                .should('contain', escad_table_data[5])
                                                .should('contain', escad_table_data[12])
                                                .should('contain', escad_table_data[13])
    
    //click on the incident                                               
    escadIconDataDisplay.ESCAD_INCONTABLE1().click({force: true})
    //validating result

    let a = inc_start_date.slice(0,16)

    cy.waitUntil(()=>escadIconDataDisplay.ESCAD_PENDINGPAGEDETAILS())
                                                .should('contain',incident_ref)
                                                .should('contain',escad_table_data[5])
                                                //.should('contain',escad_table_data[2])
                                                //.should('contain',escad_table_data[16])
                                                .should('contain',triplezero_ref)
                                                .should('contain',incident_details[3])
                                                .should('contain',escad_table_data[6])
                                                .should('contain',incident_details[4])

    escadIconDataDisplay.ESCAD_AUTHORISESIT().click({force: true}).waitForLoadingSpinner()

    cy.waitUntil(()=>incidentlocators.INC_IAPAUTHORISESUCCESS(),{timeout: 60000}).invoke('text').should('contain','Success!')                                       
})

And ('I Enter LGA name {string}', (keyword)=>{
    iconLandingPage.DD_LGA().type(keyword+'{enter}')
})

Then ('I find and click ESCAD pending incident created',()=>{
    cy.get('leaflet-marker-icon.incident.severity-advice-icon.incID-'+incident_id).click()
    iconLandingPage.BTN_AuthorizeInc().should('have.attr', 'href', 'https://icon.uat.rfs.nsw.gov.au/Incidents/SitReps/Details/'+incident_id ).click()
})