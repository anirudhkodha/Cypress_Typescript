import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import SecureLogon from '../pages/SecureLogon';
import Dashboard from '../pages/Dashboard'
import UserSearch from "../pages/UserSearch";
import Operations from "../pages/Operations&fiu";
import { contains } from "cypress/types/jquery";
import dayjs from "dayjs";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Eventlocators from "../pages/eventlocators";
import { should } from "chai";
import { OperationalError } from "cypress/types/bluebird";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";

const secureLogon = new SecureLogon()
const dashboard = new Dashboard()
const userSearch = new UserSearch()
const operations = new Operations()
const incidentlocators = new INCIDENTLOCATORS()
const eventlocators = new Eventlocators()
let inc_number = ''
let inc_name = ''
let lga_name = ''
let incident_date = ''
let investigator = ''
let action_date = ''
let action = ''
let action_date1 = ''
let incident_date1 = ''
let loc_address = ''

// BR-FIU-6.3 Edit incident details

const interceptCallAndAlias = function(
    method: string,
    url: string,
    alias: string
  ) {
    cy.intercept({
      method: method,
      url: url,
    }).as(alias);
  };





Given('I have opened web application', () => {
    cy.loginToICON()
})

// When('I expand operations tab', () => {
//     operations.OPERATIONS_TAB().should('be.visible').click()

// })

And('I select FIU operation', () => {

    interceptCallAndAlias(
        "GET",
        "/FIU/FIU",
        "FIUPage"
      );

    // click on FIU from operations
    
    operations.FIU_TAB().should('be.visible').click({force: true})
})
And('I see status board page', () => {

    cy.wait("@FIUPage")
    .its("response.statusCode")
    .should("equal", 200);

    //FIU PAGE
    operations.FIU_STATUSBOARD
})
Then('I click on Investigator column', () => {
    operations.DIALOGUE_INVESTIGATOR().click({force: true})

})
And('I click on record without Investigator', () => {
    operations.RECORD_INVESTIGATOR().click({force: true})

})
And('I can see FIU Summary page', () => {
   
    operations.FIU_SUMMARY()

})

And('I can click on Edit button', () => {
    operations.EDIT_INVESTIGATION().click({force: true}).waitForLoadingSpinner()
})

And('I can select Investigation type on Edit FIU', () => {
    operations.TYPE_WILDFIRE().select('Wildfire',{force: true})
})
And('I can save FIU', () => {
    operations.SAVE_BUTTON().click({force: true})
})

And('I can verify Assigned By', () => {
    operations.VERIFY_ASSIGNED_BY()
})


//BR-FIU-7.2  Set to Not Warranted


And ('I can click Set To Not Warranted Button', ()=> {
    operations.WARRANTED_BUTTON().should('be.visible').click()
    })
    
And ('I can select Reason', ()=> {
    
    operations.SELECTED_WARRANTED_REASON().select('Does not meet F.I. Criteria',{force: true})
    })
And ('I Save the Reason',()=>{
    
    operations.SAVE_WARRANTED_REASON().should('be.visible').click({force:true})
    
    })
    
 And ('I can verify the Action Field', ()=> {
    operations.VERIFY_ACTION_FIELD
    })


 
 
//BR-FIU-7.1  Set to No Resources

And('I can select Investigation type on Edit FIU', () => {
    operations.TYPE_WILDFIRE().select('Wildfire',{force: true})
})

And ('I click on Set to No Resources', ()=> {
    operations.NO_RESOURCES().should('be.visible').click()
})

//>>>>>>>>>> User is able to export FIU Search Result as .csv file >>>>>>>>



And('I can see dashbaord', () => {
    dashboard.CURRENT_INCIDENTS().should('exist')    
})


// When ('I expand operations tab',()=> {
// operations.OPERATIONS_TAB().should('be.visible').click()

// })


// And ('I expand Incidents',()=>{
//     eventlocators.INCIDENT_TAB().click()

// })



And ('I open Create bushfire Shell',()=> {

    incidentlocators.INCCREATE_BUSHFIRESHELL1().click({force: true, timeout: 120000})

})

And ('I write Incident name to incident creation',()=> {
    
    incidentlocators.INC_NAME_BUSH().type('AutomationTestBushShell')

})

And ('I enter LGA on create full incident page', ()=> {

    incidentlocators.INC_LGA().select('0060',{force: true})
})


And ('I enter Start Date Time to incident creation',()=> {
        const start_date_time = dayjs().subtract(50,'minute').format('DD/MM/YYYY HH:mm');
        incidentlocators.INC_STARTDATETIME_().type(start_date_time)
})


And ('I select the type of the fire to incident creation',()=> {

    incidentlocators.INC_BUSHFIRETYPE_TAB().click({force: true})
    incidentlocators.INC_BUSHFIRETYPE().click({force: true})

})

And ('I type firesize to incident creation',()=> {
    incidentlocators.INC_FIRESIZETAB_BUSH().click()
    const area_size = `${Math.floor(Math.random() * 8)+1}`
    incidentlocators.INC_FIRESIZE_BUSH().clear().type(area_size)
})

And ('I enter tenure to incident creation',()=>{
 
    incidentlocators.INC_TENURE_TAB_().type('Council{enter}')
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

    loc_address = '260 WATERLOO RD, WOODSTOCK'
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
    const resouces_bushfireshell = `${Math.floor(Math.random() *8)+1}`;
   incidentlocators.INC_RESOURCES_BUSH().clear({force: true}).type(resouces_bushfireshell,{force: true})

})



And ('I Save the incident creation form',()=> {

    incidentlocators.INC_SAVE_().click({force: true,timeout: 180000}).waitUntil(()=>incidentlocators.INCIDENTDETAILS().should('exist',{setTimeout: 180000}))
})

And ('I Assert with the Authorised SitRep, Investigation by the FIU', ()=> {
   incidentlocators.INC_ASSERT_BUSH1().should('contain.text','(SR) Authorised')
   incidentlocators.INC_ASSERT_BUSH2().contains('Info! This incident is under investigation by the FIU')
   incidentlocators.INCIDENTDETAILS().click({force: true})
   incidentlocators.INC_COPYNUMBER().then(($text)=> {
    inc_number = $text.text().trim()
   })
 
   

})




And ('I click on search board',()=> {
  operations.FIU_SEARCHSTATUSBOARD().click({force: true})

})

And ('I type incident number',()=> {
    operations.FIU_INCREFERENCENO().type(inc_number,{force: true})
    incidentlocators.INCIDENT_SEARCH().click({force: true})
    .waitForLoadingSpinner()


    
})
And ('I click search button',()=>{

    //Click on the incident
    cy.waitUntil(()=>operations.FIU_INCIDENT(),{timeout: 30000}).click({force: true})
    //click on edit envestigation
    operations.EDIT_INVESTIGATION().click({force: true})
    //set to not warranted
    operations.WARRANTED_BUTTON().scrollIntoView().should('be.visible').click({force:true})
    operations.SELECTED_WARRANTED_REASON().invoke('show')
                                          .select('Does not meet F.I. Criteria',{force: true})
    operations.SAVE_WARRANTED_REASON().click({force:true}).wait(2000)

    //Allocate investigator
    operations.FIU_ALLOCATEINVSBTTN().scrollIntoView().click({force: true})
    cy.waitUntil(()=>operations.FIU_INVSESGITORNAMESRCH(),{timeout: 60000}).invoke('show')
                                                                           .type('iconautouser 2',{force: true})
    operations.FIU_INVSSRCHBTTN().click({force: true}).waitForLoadingSpinner()
    operations.FIU_ALLOCATEBTTNCNFRM().click({force: true})
                                      .wait(2000)
    cy.waitUntil(()=>operations.FIU_INVSTGTRNAMEASSERT(),{timeout: 60000}).should('be.visible').and('contain','iconautouser 2 (iconautouser2)')
    

    //Investigation Type
    operations.TYPE_WILDFIRE().scrollIntoView().select('Wildfire',{force: true})
    //Save
    
    operations.SAVE_BUTTON().scrollIntoView().click({force: true})

   
    //Search page
    incidentlocators.INC_HEADERINCDETAILS().click({force: true})
    //Type Incident number
    operations.FIU_INCREFERENCENO().type(inc_number,{force: true})
    //Search button
    operations.FIU_SEARCHBTTN().click({force: true}).waitForLoadingSpinner()

    //Copy incident name
    operations.INC_COPYNAME().then(($name)=>{
        inc_name = $name.text()
       })
    //Copy LGA   
    operations.INC_COPYLGA().then(($Lga)=> {
        lga_name = $Lga.text()
       })
    //Copy Incident date
       operations.INC_COPYDATE().then(($date)=> {
        incident_date = $date.text()
        incident_date1 = incident_date.trim()

        console.log(incident_date1)
       })

     //Copy investigator name
     operations.FIU_COPYINVSNAME().should(($invs)=> {

     investigator = $invs.text()
     console.log(investigator)
    
    })
    // Copy Action Date
    operations.FIU_COPYACTIONDATE().should(($actdate)=>{
        action_date = $actdate.text().replace(/(\r\n|\n|\r)/gm, "")
        action_date1 = action_date.trim()
    })

    //Copy Action
    operations.FIU_COPYACTION().should(($act)=> {
        action = $act.text().replace(/(\r\n|\n|\r)/gm, "").trim()
    })

    
})
And ('I download the Excel and CSV file',()=> {

    operations.FIU_EXPORTCSV().click().wait(4000)
    operations.FIU_EXPORTEXCEL().click().wait(4000)
})


And('Validate Excel', () => {
    
    cy.parseXlsx('cypress/downloads/FIU Search.xlsx').then(
        jsonData => {
            let columnHeaders = jsonData[0].data[0]

            expect(columnHeaders).to.contain('Reference')
            expect(columnHeaders).to.contain('Incident Name')
            expect(columnHeaders).to.contain('LGA Name')
            expect(columnHeaders).to.contain('Incident Date')
            expect(columnHeaders).to.contain('FIU Action')
            expect(columnHeaders).to.contain('Action Date')
            expect(columnHeaders).to.contain('Investigator')
            expect(columnHeaders).to.contain('Report Status')
            expect(columnHeaders).to.contain('Last Report Status Change Date')
            expect(columnHeaders).to.contain('Last Report Status Change By')

            let expectedrow = jsonData[0].data[1]
            
            expect(expectedrow).to.contain(parseInt(inc_number, 10))
            expect(expectedrow[1]).to.contain(inc_name)
            expect(expectedrow[2]).to.contain(lga_name)
            expect(expectedrow[4]).to.contain(incident_date1)
            expect(expectedrow[5]).to.contain(action)
            expect(expectedrow[6]).to.contain(action_date1)
            expect(expectedrow[7]).to.contain(investigator.replace(/(\r\n|\n|\r)/gm, "").trim())

        }
    )
})

And('Validate CSV', () => {
    cy.parseXlsx('cypress/downloads/FIU Search.csv').then(
        jsonData => {
            let columnHeaders = jsonData[0].data[0]
            console.log( jsonData)
            expect(columnHeaders).to.contain('Reference')
            expect(columnHeaders).to.contain('Incident Name')
            expect(columnHeaders).to.contain('LGA Name')
            expect(columnHeaders).to.contain('Incident Date')
            expect(columnHeaders).to.contain('FIU Action')
            expect(columnHeaders).to.contain('Action Date')
            expect(columnHeaders).to.contain('Investigator')
            expect(columnHeaders).to.contain('Report Status')
            expect(columnHeaders).to.contain('Last Report Status Change Date')
            expect(columnHeaders).to.contain('Last Report Status Change By')
        }
    )

        cy.wait(4000)
})

And ('I log into Another user', ()=> {
    
    cy.ntlmReset()
    cy.clearCookies()
    cy.loginToICON3()
})

And ('I select the incident and make a report',()=> {
    cy.wait(5000)
    operations.FIU_INCIDENT().click({force: true})
    operations.FIU_ADDREPORTVER().click({force: true})

    //ADD REPORT DETAILS
    
    //Investigation Tab>>>>>>
    
    operations.FIU_INVESTIGATIONDETAILS().click({force: true})
    operations.FIU_INCIDENTLOCATION().invoke('text').should('contain','HIGHLANDS 260 WATERLOO RD, WOODSTOCK NSW 2360')
    
    //Fire Tab>>>>>>>

    operations.FIU_FIRETAB().click({force: true})
    operations.FIU_WILDFIREDETAILSMENU().focus().should('exist')
    operations.FIU_POTENTIALCAUSES().should('exist')
    operations.FIU_WEATHERDATAMENU().focus().should('exist').click({force: true})
    let current_time = dayjs().format('DD/MM/YYYY HH:mm');
    operations.FIU_WEATHERDATETIME().type(current_time, {force: true})
    operations.FIU_WEATHERSTATIONNAME().type('Sydney',{force: true})
    operations.FIU_SAVEWEATHERDATA().focus().click({force: true})
    operations.FIU_WTHRDATEASSERT().invoke('text').should('contain', current_time)
    operations.FIU_WTHRSTATIONASSERT().invoke('text').should('contain','Sydney')

    //Investigator Tab>>>>>>>>>

    operations.FIU_INVESTIGATORSTAB().focus().click({force: true}).wait(4000)
    operations.FIU_SELECTCONTACTTYPE().scrollIntoView().select("30",{force: true})
    operations.FIU_SEARCHCONTACT().focus().click({force: true})
    operations.FIU_INPUTFIRSTNAME().type('Muhammad',{force: true})
    operations.FIU_BTTNSEARCHFORCONTACT().focus().click({force:true})
    operations.FIU_BTTNUSE().scrollIntoView().focus().click({force: true})
    operations.FIU_REPORTCOMMENTS().type('Automation Test Only > FIU Report Submit',{force: true})
    operations.FIU_SAVEINVESTIGATORREPORT().scrollIntoView().click({force: true})

    
    //Canvassing Tab>>>>>>>>
    
    operations.FIU_CANVASSINGTAB().scrollIntoView().click({force: true})
    //Agency Menu

    operations.FIU_AGENCYMENU().should('exist').scrollIntoView().click({force: true}).wait(4000)
    operations.FIU_SEARCHCONTACTCANVAS().scrollIntoView().focus().click({force: true})
    operations.FIU_INPUTFIRSTNAME().type('Muhammad',{force: true})
    operations.FIU_CONTACTMODALMOREBTTN().click({force: true})
    //operations.FIU_AGENCYSELECTED().select("5", {force:true})
    operations.FIU_BTTNSEARCHFORCONTACT().click({force:true})
    operations.FIU_BTTNUSE().click({force: true})
    operations.FIU_AGENCYCANVASCOMMENTS().type('Automation Test Only > FIU Report Submit',{force: true})
    operations.FIU_CANVASSEDBY().scrollIntoView().type('iconautouser2',{force: true})
    let canvas_time =  dayjs().format('DD/MM/YYYY HH:mm');
    operations.FIU_CANVASDATETIME().type(canvas_time,{force:true})
    operations.FIU_INITIALIGNITIONAREA().select("True",{force: true})
    operations.FIU_PHOTOSVIDEOTAKEN().select("True",{force: true})
    operations.FIU_SAVECANVASREPORT().scrollIntoView().click({force: true})
    let FIU_CANVASTABLEDATA = ['Muhammad','Khan']
    cy.waitUntil(()=>operations.FIU_CANVASTABLECLLM1(),{timeout: 60000}).invoke('text').should('contain',FIU_CANVASTABLEDATA[0])
    cy.waitUntil(()=>operations.FIU_CANVASTABLECLLM2(),{timeout: 60000}).invoke('text').should('contain',FIU_CANVASTABLEDATA[1])
    //cy.waitUntil(()=>operations.FIU_CANVASTABLECLLM3(),{timeout: 60000}).invoke('text').should('contain',FIU_CANVASTABLEDATA[2])
    
    //PUBLIC Menu
    operations.FIU_PUBLICTAB().scrollIntoView().click({force: true}).wait(4000)
    operations.FIU_PUBLICSEARCHFORCONTACT().scrollIntoView().click({force: true})
    operations.FIU_INPUTFIRSTNAME().scrollIntoView().type('Muhammad',{force: true})
    operations.FIU_BTNSEARCHFORCONTACTPUBLIC().click({force:true})
    operations.FIU_BTTNUSE().scrollIntoView().click({force: true})
    cy.waitForLoadingSpinner()
    operations.FIU_CANVASBYPUBLIC().scrollIntoView().type('MuhammadK',{force:true})
    operations.FIU_CANVASTIMEPUBLIC().type(canvas_time,{force:true})
    operations.FIU_PHOTOSTAKENPUBLIC().scrollIntoView().select("True",{force: true})
    cy.wait(5000)
    operations.FIU_SAVEPUBLICCANVAS().scrollIntoView().click({force: true})
    cy.waitUntil(()=>operations.FIU_CANVASTABLEPUBLIC1(),{timeout: 60000}).invoke('text').should('contain',FIU_CANVASTABLEDATA[0])
    cy.waitUntil( ()=> operations.FIU_CANVASTABLEPUBLIC2(),{timeout: 60000}).invoke('text').should('contain',FIU_CANVASTABLEDATA[1])

    //ATTACHMENTS TAB 

    //Photographer Menu
    operations.FIU_ATTACHMENTSTAB().scrollIntoView().click({force:true}).wait(4000)

    operations.FIU_PHOTOGARHERSMENU().scrollIntoView().should('exist').click({force: true})
    operations.FIU_PHOTOGRAPHER_SEARCH_FOR_CONTACT().scrollIntoView().click({force: true})
    operations.FIU_INPUTFIRSTNAME().type('Muhammad',{force: true})
    operations.FIU_BTTNSEARCHFORCONTACT().click({force:true})
    operations.FIU_BTTNUSE().click({force: true})
    operations.FIU_SAVEPHOTOGRAPHER().scrollIntoView().click({force:true})



    //LOG AND UPLOAD MENU 

    operations.FIU_UPLOADMENU().scrollIntoView().click({force: true}).wait(4000)
    operations.FIU_UPLOADFILES().scrollIntoView().click({force: true})
    const filepath = 'attachment/AutomationAttach.docx'
    incidentlocators.INC_ADDFILES().attachFile(filepath).wait(4000)
    incidentlocators.INC_STARTUPLOAD().click({force: true}).waitForLoadingSpinner()
    operations.FIU_CLOSEUPLOAD().click({force: true}).waitForLoadingSpinner()
    cy.waitUntil(()=> operations.FIU_ATTACHTABLE(), {timeout : 60000}).should('exist')
    operations.FIU_ATTACHTABLE().should('exist')
    cy.waitUntil(()=> operations.FIU_EDITATTACHTABLE(),{timeout: 60000}).scrollIntoView().focus().click({force:true})
    operations.FIU_ATTACHREFERENCE().type(inc_number,{force:true})
    operations.FIU_ATTCHDESCRIPTION().type('Automation Test Only',{force: true})
    operations.FIU_ATTACHITEMTTYPE().select("214",{force:true})
    operations.FIU_SAVEATTACHTABLE().click({force:true})



    //FINDINGS MENU

    operations.FIU_FINDINGTAB().scrollIntoView().click({force: true}).wait(4000)
    operations.FIU_SUMMARYMENU().scrollIntoView().click({force: true})
    operations.FIU_FINDINGSSUMMARY().type('Automation Test Only > FIU Report Submit',{force: true})
    operations.FIU_AFINOTES().type('Automation Test Only > FIU Report Submit',{force: true})
    
    //SAVE ENTIRE
    operations.FIU_SAVEENTIRE().scrollIntoView().click({force: true}).waitForLoadingSpinner()
    operations.FIU_BACKTOMAINSUMMARY().click({force: true})

    //SUBMIT REPORT

    operations.FIU_SUBMITREPORT().click({force: true}).waitForLoadingSpinner()
    operations.FIU_SUBMITYES().click({force:true}).wait(4000)

    operations.FIU_REPORTSUBMITTED().invoke('text').should('contain','Version 1 Submitted')
    operations.FIU_VIEWREPORT().should('be.visible')

    //VALIDATE EXCEL AND CSV FILE AGAIN 

    //Search page
    incidentlocators.INC_HEADERINCDETAILS().click({force: true})
    //Type Incident number
    operations.FIU_INCREFERENCENO().type(inc_number,{force: true})
    //Search button
    operations.FIU_SEARCHBTTN().click({force: true}).waitForLoadingSpinner()
    //Download
    operations.FIU_EXPORTCSV().click().wait(4000)
    operations.FIU_EXPORTEXCEL().click().wait(4000)

    //Validate excel
    cy.parseXlsx('cypress/downloads/FIU Search.xlsx').then(
        jsonData => {
            let columnHeaders = jsonData[0].data[0]
            console.log( jsonData)

            expect(columnHeaders).to.contain('Reference')
            expect(columnHeaders).to.contain('Incident Name')
            expect(columnHeaders).to.contain('LGA Name')
            expect(columnHeaders).to.contain('Incident Date')
            expect(columnHeaders).to.contain('FIU Action')
            expect(columnHeaders).to.contain('Action Date')
            expect(columnHeaders).to.contain('Investigator')
            expect(columnHeaders).to.contain('Report Status')
            expect(columnHeaders).to.contain('Last Report Status Change Date')
            expect(columnHeaders).to.contain('Last Report Status Change By')

            let expectedrow = jsonData[0].data[1]
            
            expect(expectedrow).to.contain(parseInt(inc_number, 10))
            expect(expectedrow[1]).to.contain(inc_name)
            expect(expectedrow[2]).to.contain(lga_name)
            expect(expectedrow[5]).to.contain('Allocated')
            expect(expectedrow[7]).to.contain(investigator)
            expect(expectedrow[4]).to.contain(incident_date1)
            expect(expectedrow[6]).to.contain(action_date1)
            expect(expectedrow[11]).to.contain('Submitted')

        }
    )

})
And ('I open ICON webpage as testuser',()=>{

    cy.ntlmReset()
    cy.clearCookies()
    cy.loginToICON()
})


And ('I select the number and Approve the report',()=> {
   
    operations.FIU_INCIDENT().click({force: true})
    operations.FIU_REVIEWREPORT().click({force: true})
    operations.FIU_CHECKERNOTES().type('Automation Test Only',{force: true})
    operations.FIU_ACCEPTREPORT().click({force:true})
    operations.FIU_REPORTAPPROVED().invoke('text').should('contain', 'Success!')

    
    //VALIDATE EXCEL AND CSV FILE AGAIN 

    //Search page
    incidentlocators.INC_HEADERINCDETAILS().click({force: true})
    //Type Incident number
    operations.FIU_INCREFERENCENO().type(inc_number,{force: true})
    //Search button
    operations.FIU_SEARCHBTTN().click({force: true}).waitForLoadingSpinner()
    //Download
    operations.FIU_EXPORTCSV().click().wait(4000)
    operations.FIU_EXPORTEXCEL().click().wait(4000)

    //Validate excel
    cy.parseXlsx('cypress/downloads/FIU Search.xlsx').then(
        jsonData => {
            let columnHeaders = jsonData[0].data[0]
            console.log( jsonData)

            expect(columnHeaders).to.contain('Reference')
            expect(columnHeaders).to.contain('Incident Name')
            expect(columnHeaders).to.contain('LGA Name')
            expect(columnHeaders).to.contain('Incident Date')
            expect(columnHeaders).to.contain('FIU Action')
            expect(columnHeaders).to.contain('Action Date')
            expect(columnHeaders).to.contain('Investigator')
            expect(columnHeaders).to.contain('Report Status')
            expect(columnHeaders).to.contain('Last Report Status Change Date')
            expect(columnHeaders).to.contain('Last Report Status Change By')

            let expectedrow = jsonData[0].data[1]
            
            expect(expectedrow).to.contain(parseInt(inc_number, 10))
            expect(expectedrow[1]).to.contain(inc_name)
            expect(expectedrow[2]).to.contain(lga_name)
            expect(expectedrow[4]).to.contain(incident_date1)
            expect(expectedrow[5]).to.contain('Allocated')
            expect(expectedrow[6]).to.contain(action_date1)
            expect(expectedrow[7]).to.contain(investigator)
            expect(expectedrow[11]).to.contain('Reviewed')

        }
    )

})
