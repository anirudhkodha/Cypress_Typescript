import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { defineStep } from "cypress-cucumber-preprocessor/steps";
import INCIDENTLOCATORS from "../pages/Incidentlocators"; 
import INC_COMMONLOCATORS from "../pages/incident_common_pages";
import {setSharedContext_FullIncident, getSharedContext_FullIncident,setSharedContext_ShellIncident, getSharedContext_ShellIncident, setSharedContext_IncidentResults } from "../pages/context";
import IncidentSearchPage from "../pages/IncidentSearchPage";
import Operations from "../pages/Operations&fiu";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";
import GRNlocators from "../pages/GRNlocators";
import { List, findKey } from "lodash";
import { SrvRecord } from "dns";
import { any } from "cypress/types/bluebird";


let jsonData_Full: any
let jsonData_Shell: any
let jsonData_Result: any
let filterList: string
let filterValues: string
let filterList_Array: string[]
let filterValues_Array: string[]
let result_DataArray : string







const incidentlocators = new INCIDENTLOCATORS()
const incidentsearchpage = new IncidentSearchPage()
const birs_commonpage = new BIRS_COMMONPAGES()
const operations = new Operations()
const grnlocators = new GRNlocators()
const inc_commonlocators = new INC_COMMONLOCATORS();

Given ('I open ICON webpage - user',()=>{
  cy.loginToICONuser()
})

    
And('I can see the page header {string}',(validatepage)=> {

  operations.VALIDATE_LANDING_FROM_TOPMENU(validatepage)
  

})

defineStep('I take a pic of the page {string}', (pagename) => {
  
  inc_commonlocators.FULL_PAGE_SCREENSHOT(pagename)

})

defineStep('I click {string}', (value: string) => {

  if(value == "Save" || value == "save") {   

    inc_commonlocators.INCIDENT_SAVE(value)

  }

  else if(value == "Incident Details" ) {

    inc_commonlocators.INCIDENT_DETAILS_TOOGLE(value)

  }

  else if (value == "Brigade Reporting" || value == "Edit Incident"){

    birs_commonpage.BUTTON_FROM_TOPMENU(value)


  } 

  else if(value == "Search Historical") {

    grnlocators.TAP_SEARCH_HISTORICAL(value)

  }


  else if(value == "Update") {

    grnlocators.TAP_GRNUPDATE(value)
  }

  else if(value == "href") {

    incidentsearchpage.CLICK_REFERENCE_ON_TABLE(value)
  }

  else if(value == "Search") {

    incidentsearchpage.CLICK_SEARCH(value)
  }

})

Then('I should find validate mssg {string}', (mssg: string) => {

  if (mssg == 'Info! No SitRep Authorised' || mssg =='This incident is under investigation by the FIU' ) {
         
    inc_commonlocators.MESSAGES_ASSERTION_(mssg);

  }

  else if (mssg == "Showing 1 to 10 of 1,000 entries"){

    cy.GetMSSGby_Role(mssg);
  }




})



// defineStep("I enter {string} from {string}", (incident_no, incident_result ) => { 

//    cy.readFile(incident_result).then((data) => {

//     jsonData_Result = JSON.parse(data);
//     cy.log('DATA READ:'+jsonData_Result)
//     setSharedContext('jsonData', jsonData_Result);
//     cy.log('Context shared')
    

//   });

//   jsonData_Result = getSharedContext('jsonData');
//   filterList = filterList.length == 0  ? jsonData_Result.IncidentReference : filterList;
//   cy.log(incident_no)
  




// })


Then("within {string}, I should find the attribute {string} with {string} value", (placeHolder, nameField, incident_no) => {

  incidentsearchpage.CHECK_INCIDENT_DETAILS_TOOGLE(placeHolder, nameField, incident_no)
   

}) 





And('if I have the test data for {string}', (test_data_is_for) => {

  cy.log('CHECKING IF DATA IS FOUND')

  if(test_data_is_for == 'Shell INCIDENT'){

    if (Cypress.env('DATA') == 'json') {

        cy.log('Start CREATE')
        cy.SetupShellData()
        cy.log('Finish create')
        return cy.fixture('Incident_generated/createshellincident.json').then((jsonData_shelltype) => {
                if (jsonData_shelltype == null) {
                    cy.log('No data found')
                }
                jsonData_Shell = jsonData_shelltype;
                cy.log('DATA READ:'+jsonData_Shell)
                setSharedContext_ShellIncident('jsonData_shelltype', jsonData_Shell);
                cy.log('Context shared')
    
        });
    
    }
      
      

  }

  if (test_data_is_for == 'Full Incident') {
             
    
    if (Cypress.env('DATA') == 'json') {

      cy.log('Start CREATE')
      cy.SetupFullIncidentData()
      cy.log('Finish create')
      return cy.fixture('Incident_generated/createfullincident.json').then((jsonData_fulltype) => {
        if (jsonData_fulltype == null) {
            cy.log('No data found')
        }
        jsonData_Full = jsonData_fulltype
        cy.log('DATA READ:' +jsonData_Full)
        setSharedContext_FullIncident('jsonData_fulltype', jsonData_Full);
        cy.log('Context shared')


      });

    }

  }


  if (test_data_is_for == 'Bushfire type') {

      const filePath = 'cypress/fixtures/Incident_results/Create Full Incident[Bushfire type] (example #1).json'
            
      cy.readFile(filePath).then(($jsonData_resultstype) => {

        jsonData_Result = $jsonData_resultstype;
        setSharedContext_IncidentResults('jsonData_resultstype', jsonData_Result);
        cy.log('DATA READ:'+jsonData_Result)
    
        cy.log(jsonData_Result["Reference No."])
        cy.log('Context shared') 

      }),
      (() => {
    
        // File doesn't exist
        cy.exec('npm run cy:run:spec2').then(() => {
          cy.log('The file was created');

          return cy.readFile('cypress/fixtures/Incident_results/Create Full Incident[Bushfire type] (example #1).json').then((jsonData_resultstype) => {

            jsonData_Result = jsonData_resultstype;
            setSharedContext_IncidentResults('jsonData_resultstype', jsonData_Result);
            cy.log('DATA READ:'+jsonData_Result)
        
            cy.log(jsonData_Result["Reference No."])
            cy.log('Context shared') 
          })
        
        })
      })

    }  

  })


   

  
  // if (test_data_is_for = 'Edit Incident Other Shell') {b

  //   if (Cypress.env('DATA') == 'json' ) {e

      
  //     return cy.readFile('cypress/fixtures/results/.json').then((data) => {
      
 
        

  //     })

  //   }
  // }





    





  //****************************************************************************************/
//                       STEP : : ****Create FULL-Incident****
//----------------------------------------------------------------------------------------/
// And("I enter {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}",(inc_name, LGA, incident_loc, sensitive, master, RART, Triple0_ref, reason_noTriple0_ref,  local_inc_id, triple0_RCVDCall, Rfs_RCVDCall ) =>{


    

//     jsonData_Full = getSharedContext('jsonData_Full');

//     //ENTER INCIDENT NAME
//     cy.log(inc_name)
//     inc_name = inc_name.length == 0  ? jsonData_Full.inc_name : inc_name;
//     inc_commonlocators.INPUT_INCIDENT_NAME(inc_name)

//     // ENTER LGA
//     LGA = LGA.length == 0  ? jsonData_Full.LGA : LGA;
//     cy.log(LGA)
//     inc_commonlocators.INPUT_LGA(LGA)

//     // Address
//     incident_loc = incident_loc.length == 0  ? jsonData_Full.incident_loc : incident_loc;
//     cy.log(incident_loc)
//     inc_commonlocators.LOCATION_INPUT(incident_loc)


//     //SCROLL TO NEXT SEC
//     inc_commonlocators.SCROLL_INCIDENT_INFORMATION_SECTION()

//     //SENSITIVE ADDRESS
//     sensitive = sensitive.length == 0  ? jsonData_Full.sensitive : sensitive;
//     cy.log(sensitive)
//     inc_commonlocators.SENSITIVE_ADDRESS_INFORMATION(sensitive)

//     //MASTER
//     master = master.length == 0  ? jsonData_Full.master : master;
//     cy.log(master)
//     inc_commonlocators.MASTER_INCIDENT(master)

//     //RART
//     RART = RART.length == 0  ? jsonData_Full.RART : RART;
//     cy.log(RART)
//     inc_commonlocators.RART_DEPLOYED(RART)
 
//     // //LOCAL INC ID
//     local_inc_id = local_inc_id.length == 0  ? jsonData_Full.local_inc_id : local_inc_id;
//     cy.log(local_inc_id)
//     inc_commonlocators.INC_LOCAL_NUMBER(local_inc_id)

//     //TRIPLE0 REF
//     cy.log(Triple0_ref)
//     Triple0_ref = Triple0_ref.length == 0  ? jsonData_Full.Triple0_ref : Triple0_ref;
//     inc_commonlocators.INC_TRIPLE0_NUMBER(Triple0_ref)
//     reason_noTriple0_ref = reason_noTriple0_ref.length == 0  ? jsonData_Full.reason_noTriple0_ref : reason_noTriple0_ref;
//     inc_commonlocators.INC_REASON_NO_TRIPLE0(reason_noTriple0_ref)

//     //TRIPLE0 CALL RCVD
//     triple0_RCVDCall = triple0_RCVDCall.length == 0  ? jsonData_Full.triple0_RCVDCall : triple0_RCVDCall;
//     cy.log(triple0_RCVDCall)
//     inc_commonlocators.TRIPLEZERO_NUMBER_CALLRCVD(triple0_RCVDCall)

//     //RFS RCVD CALL
//     Rfs_RCVDCall = Rfs_RCVDCall.length == 0  ? jsonData_Full.Rfs_RCVDCall : Rfs_RCVDCall;
//     cy.log(Rfs_RCVDCall)
//     inc_commonlocators.RFS_AGENCY_CALLRCVD(Rfs_RCVDCall)


// })


//*****************************************************************************************/
/*                       TO SELECT : : ****INC TYPE****                                   */
//----------------------------------------------------------------------------------------/

And("I select the type {string} and input the value {string}",(inc_type , type_value ) => {


    if ((`${Cypress.currentTest.title}`).includes('Create Full incident[Bushfire type]')){
        jsonData_Full = getSharedContext_FullIncident('jsonData_fulltype');
        cy.log(jsonData_Full.inc_type[0])
        inc_type = inc_type.length == 0 ? jsonData_Full.inc_type[0]: inc_type;
        type_value = type_value.length == 0 ? jsonData_Full.type_value.Bushfire: type_value
        cy.log(inc_type)
        cy.log(type_value)
        inc_commonlocators.INCIDENT_BUSHFIRE_TYPE(`${inc_type}`, `${type_value}`)
    };


  if ((`${Cypress.currentTest.title}`).includes('Create Full incident[Other type]')){
      jsonData_Full = getSharedContext_FullIncident('jsonData_fulltype');
      inc_type = inc_type.length == 0 ? jsonData_Full.inc_type[1]: inc_type;
      type_value = type_value.length == 0 ? jsonData_Full.type_value.Other: type_value
      cy.log(inc_type)
      cy.log(type_value)
      inc_commonlocators.FULL_INCIDENT_NONFIRE_AND_OTHERTYPE(`${inc_type}`, `${type_value}`)

  }


  if ((`${Cypress.currentTest.title}`).includes('Create Full incident[Non-fire type]')){
      jsonData_Full = getSharedContext_FullIncident('jsonData_fulltype');
      inc_type = inc_type.length == 0 ? jsonData_Full.inc_type[2]: inc_type;
      type_value = type_value.length == 0 ? jsonData_Full.type_value.Non: type_value
      cy.log(inc_type)
      cy.log(type_value)
      inc_commonlocators.FULL_INCIDENT_NONFIRE_AND_OTHERTYPE(`${inc_type} `, `${type_value}`)

  }



  if ((`${Cypress.currentTest.title}`).includes('Create Bushfire Shell Incident')){
      jsonData_Shell = getSharedContext_ShellIncident('jsonData_shelltype');
      cy.log(jsonData_Shell.inc_type[0])
      inc_type = inc_type.length == 0 ? jsonData_Shell.inc_type[0]: inc_type;
      type_value = type_value.length == 0 ? jsonData_Shell.type_value.Bushfire: type_value
      cy.log(inc_type)
      cy.log(type_value)
      inc_commonlocators.INCIDENT_BUSHFIRE_SHELL(`${inc_type}`, `${type_value}`)

  }


  
  if ((`${Cypress.currentTest.title}`).includes(`Create Other Shell Incident`)){
    jsonData_Shell = getSharedContext_ShellIncident('jsonData_shelltype');
   
    let inc_type_ = [] = [jsonData_Shell.inc_type[ 1 ], jsonData_Shell.inc_type[ 2 ]]
    let RANDOM_inc_type = inc_type_[Math.floor(Math.random()* inc_type_.length)]                                                                                                                                                                                                                                           

    inc_type = inc_type.length == 0 ? RANDOM_inc_type : inc_type;
    cy.log(inc_type)


    if (inc_type = "Other"){

        type_value = type_value.length == 0 ? jsonData_Shell.type_value.Other: type_value
        cy.GetLabelby_Select('Other Fire Incident', `${type_value}`)
    
    }
    else if (inc_type = "Non") {
        type_value = type_value.length == 0 ? jsonData_Shell.type_value.Non: type_value
        cy.GetLabelby_Select('Non-Fire Incident', `${type_value}`)
        
    }
  }

    
})

Then('I should find validate mssg {string}', (mssg: string) => { 

  if (mssg.includes('showing entries')) {
      
      cy.GetMSSGby_Role(mssg);
  }

  
})


Then('I should find {string} is populated', (results_label) => {



  if ((`${Cypress.currentTest.title}`).includes('Shell Incident')){

    results_label = results_label.length == 0  ? jsonData_Shell.results_label : results_label;

    inc_commonlocators.GET_INC_PRORPERTY_DETAILS_(results_label)


  }
  else if ((`${Cypress.currentTest.title}`).includes('Full Incident')){ 

    results_label = results_label.length == 0  ? jsonData_Full.results_label : results_label;
    inc_commonlocators.GET_INC_PRORPERTY_DETAILS_(results_label)


  }

  
})




// When('the filter list is {string}', () => {




   
// });

// Then('the filter values are', (filterValuesString: string) => {
//   filterValues = JSON.parse(filterValuesString);

//   filterList.forEach((filter) => {
//     const filterName = filter.trim();
//     const values = filterValues[filterName];

//     if (values && values.length === 2) {
//       const [value1, value2] = values;
//       cy.log(`Filter: ${filterName}, Values: ${value1} and ${value2}`);
//     } 
//   });
// });