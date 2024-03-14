/// <reference types="cypress" />


import { Given, When, And, Then, Before,  } from "cypress-cucumber-preprocessor/steps";
import { times, values } from 'lodash';
import dayjs from "dayjs";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Operations from "../pages/Operations&fiu";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import Cop from "../pages/Cop";
import ALERTLVL_DOM from "../domains/alertLevel";
import iall_DOM from "../domains/incidentAlertLevelList"
import knowledge from "../pages/knowledge";
import inc from "../domains/incidents";
import INC_COMMONLOCATORS  from "../pages/incident_common_pages";
import {getSharedContext_FullIncident, getSharedContext_ShellIncident} from "../pages/context";
import assert from "assert";


const inc_commonlocators = new INC_COMMONLOCATORS();
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

let jsonData_Full: any
let jsonData_Shell: any


//****************************************************************************************/
//                       STEP : : ****Create FULL-Incident****
//----------------------------------------------------------------------------------------/
And("I enter {string} {string} {string} {string} {string} {string} {string} {string} {string} {string} {string}",(inc_name, LGA, incident_loc, sensitive, master, RART, Triple0_ref, reason_noTriple0_ref,  local_inc_id, triple0_RCVDCall, Rfs_RCVDCall ) =>{


    assert(Cypress.currentTest.title.includes('Full Incident'), 'This is not a Full Incident')

    jsonData_Full = getSharedContext_FullIncident('jsonData_fulltype')
    cy.log(jsonData_Full)


    //ENTER INCIDENT NAME
    inc_name = inc_name.length == 0 ? jsonData_Full.inc_name : inc_name;
    cy.log(inc_name)
    inc_commonlocators.INPUT_INCIDENT_NAME(inc_name)

    // ENTER LGA
    cy.log(LGA)
    LGA = LGA.length == 0 ? jsonData_Full.LGA : LGA;
    inc_commonlocators.INPUT_LGA(LGA)

    // Address
    cy.log(incident_loc)
    incident_loc = incident_loc.length == 0  ? jsonData_Full.incident_loc : incident_loc;
    inc_commonlocators.LOCATION_INPUT(incident_loc)


    //SCROLL TO NEXT SEC
    inc_commonlocators.SCROLL_INCIDENT_INFORMATION_SECTION()

    //SENSITIVE ADDRESS    
    cy.log(sensitive)
    sensitive = sensitive.length == 0  ? jsonData_Full.sensitive : sensitive;
    inc_commonlocators.SENSITIVE_ADDRESS_INFORMATION(sensitive)

    //MASTER
    cy.log(master)

    master = master.length == 0  ? jsonData_Full.master : master;
    inc_commonlocators.MASTER_INCIDENT(master)

    //RART
    cy.log(RART)

    RART = RART.length == 0  ? jsonData_Full.RART : RART;
    inc_commonlocators.RART_DEPLOYED(RART)
 
    // //LOCAL INC ID
    cy.log(local_inc_id)

    local_inc_id = local_inc_id.length == 0  ? jsonData_Full.local_inc_id : local_inc_id;
    inc_commonlocators.INC_LOCAL_NUMBER(local_inc_id)

    //TRIPLE0 REF
    cy.log(Triple0_ref)
    Triple0_ref = Triple0_ref.length == 0  ? jsonData_Full.Triple0_ref : Triple0_ref;
    inc_commonlocators.INC_TRIPLE0_NUMBER(Triple0_ref)
    reason_noTriple0_ref = reason_noTriple0_ref.length == 0  ? jsonData_Full.reason_noTriple0_ref : reason_noTriple0_ref;
    inc_commonlocators.INC_REASON_NO_TRIPLE0(reason_noTriple0_ref)

    //TRIPLE0 CALL RCVD
    cy.log(triple0_RCVDCall)

    triple0_RCVDCall = triple0_RCVDCall.length == 0  ? jsonData_Full.triple0_RCVDCall : triple0_RCVDCall;
    inc_commonlocators.TRIPLEZERO_NUMBER_CALLRCVD(triple0_RCVDCall)

    //RFS RCVD CALL
    cy.log(Rfs_RCVDCall)

    Rfs_RCVDCall = Rfs_RCVDCall.length == 0  ? jsonData_Full.Rfs_RCVDCall : Rfs_RCVDCall;
    inc_commonlocators.RFS_AGENCY_CALLRCVD(Rfs_RCVDCall)


})



//****************************************************************************************/
//                      STEP : : ****Create BushFire Shell Incident****
//----------------------------------------------------------------------------------------/
And("I enter {string}{string}{string}{string}{string}{string}{string}{string}{string}{string}{string}{string}{string}{string}", (inc_name,LGA ,start_time, class_fire, big, tenure_list , inc_status , agency, owner, cause, incident_loc, heading, master, potential_threat) => {
    
    
    assert(Cypress.currentTest.title.includes('Create Bushfire Shell Incident'))

    jsonData_Shell = getSharedContext_ShellIncident('jsonData_shelltype');
    inc_name = inc_name.length == 0  ? jsonData_Shell.inc_name : inc_name;
    LGA = LGA.length == 0  ? jsonData_Shell.LGA : LGA;
    start_time = start_time.length == 0  ? jsonData_Shell.start_time : start_time
    // type_value = type_value.length == 0  ? jsonData_Bushfire.type_value : type_value;
    class_fire = class_fire.length == 0 ? jsonData_Shell.class_fire : class_fire
    big = big.length == 0 ? jsonData_Shell.big : big
    tenure_list = tenure_list.length == 0 ? jsonData_Shell.tenure_list: tenure_list
    inc_status = inc_status.length == 0 ? jsonData_Shell.inc_status: inc_status
    agency = agency.length == 0 ? jsonData_Shell.agency : agency
    owner = owner.length == 0 ?  jsonData_Shell.owner : owner
    cause = cause.length == 0 ?  jsonData_Shell.cause : cause
    incident_loc = incident_loc.length == 0 ? jsonData_Shell.incident_loc: incident_loc
    master = master.length == 0 ?  jsonData_Shell.master : master
    heading = heading.length == 0 ?  jsonData_Shell.heading : heading
    potential_threat = potential_threat.length == 0 ?  jsonData_Shell.threat : potential_threat


    //ENTER INCIDENT 
    cy.log(inc_name)
    inc_commonlocators.INPUT_INCIDENT_NAME(inc_name)

    // ENTER LGA
    cy.log(LGA)
    inc_commonlocators.INPUT_LGA(LGA)

    //START TIME
    cy.log('TIME: '+start_time)
    inc_commonlocators.INC_START_DATE(start_time)
    
    //ENTER FIRE CLASS
    inc_commonlocators.INC_SELECT_FIRE_CLASS(class_fire)

    //ENTER FIRE SIZE 

    inc_commonlocators.INC_AREA_SIZE(big)
    
    //ENTER TENURE 

    inc_commonlocators.INC_TENURE_SELECTize(tenure_list)

    //ENTER STATUS

    inc_commonlocators.INC_STATUS_(inc_status)

    //ENTER RESPOMSIVE AGENCY

    inc_commonlocators.INC_RESPONSIBLE_AGENCY(agency)
    
    //ENTER OWNER

    inc_commonlocators.INC_OWNER(owner)

    
    //ENTER SUSPECTED CAUSE

    inc_commonlocators.INC_CAUSE_SUSPECT(cause)

    //ENTER LOCATION

    inc_commonlocators.LOCATION_INPUT(incident_loc)

    //Enter master

    inc_commonlocators.MASTER_INCIDENT(master)


    //ENTER HEDAING 

    inc_commonlocators.INC_DIRECTION(heading)

    //PROPERTY THREAT

    inc_commonlocators.INC_PROPERTY_IN_THREAT(potential_threat)


})



//****************************************************************************************/
//                       STEP : : ****Create OTHER Shell Incident****
//----------------------------------------------------------------------------------------/


And("I enter {string}{string}{string}{string}{string}{string}{string}{string}{string}{string}{string}{string}", (inc_name,LGA , start_time, tenure_list , inc_status , agency, owner, cause, incident_loc, heading, master, potential_threat) => {
    

    assert(Cypress.currentTest.title.includes('Create Other Shell Incident'), 'This is not a Other Shell Incident')

    jsonData_Shell = getSharedContext_ShellIncident('jsonData_shelltype');

    cy.log('jsonData_Shell IS_MASTER : ' +jsonData_Shell.master)
    inc_name = inc_name.length == 0  ? jsonData_Shell.inc_name : inc_name;
    LGA = LGA.length == 0  ? jsonData_Shell.LGA : LGA;
    start_time = start_time.length == 0  ? jsonData_Shell.start_time : start_time
    // type_value = type_value.length == 0  ? jsonData_Bushfire.type_value : type_value;
    // class_fire = class_fire.length == 0 ? jsonData_Shell.class_fire : class_fire
    // big = big.length == 0 ? jsonData_Shell.big : big
    tenure_list = tenure_list.length == 0 ? jsonData_Shell.tenure_list: tenure_list
    inc_status = inc_status.length == 0 ? jsonData_Shell.inc_status: inc_status
    agency = agency.length == 0 ? jsonData_Shell.agency : agency
    owner = owner.length == 0 ?  jsonData_Shell.owner : owner
    cause = cause.length == 0 ?  jsonData_Shell.cause : cause
    incident_loc = incident_loc.length == 0 ? jsonData_Shell.incident_loc: incident_loc
    master = master.length == 0 ? master: jsonData_Shell.master
    cy.log('IS_MASTER :' +master)
    heading = heading.length == 0 ?  jsonData_Shell.heading : heading
    potential_threat = potential_threat.length == 0 ?  jsonData_Shell.threat : potential_threat


    //ENTER INCIDENT 
    cy.log(inc_name)
    inc_commonlocators.INPUT_INCIDENT_NAME(inc_name)

    // ENTER LGA
    cy.log(LGA)
    inc_commonlocators.INPUT_LGA(LGA)

    //START TIME
    cy.log('TIME: '+start_time)
    inc_commonlocators.INC_START_DATE(start_time)
    


    //ENTER FIRE SIZE 

    // inc_commonlocators.INC_AREA_SIZE(big)
    
    //ENTER TENURE 

    inc_commonlocators.INC_TENURE_SELECTize(tenure_list)

    //ENTER STATUS

    inc_commonlocators.INC_STATUS_(inc_status)

    //ENTER RESPOMSIVE AGENCY

    inc_commonlocators.INC_RESPONSIBLE_AGENCY(agency)
    
    //ENTER OWNER

    inc_commonlocators.INC_OWNER(owner)

    
    //ENTER SUSPECTED CAUSE

    inc_commonlocators.INC_CAUSE_SUSPECT(cause)

    //ENTER LOCATION

    inc_commonlocators.LOCATION_INPUT(incident_loc)

    //Enter master
    cy.log('IS_MASTER :' +master)
    inc_commonlocators.MASTER_INCIDENT(master)


    // //ENTER HEDAING 

    // inc_commonlocators.INC_DIRECTION(heading)

    //PROPERTY THREAT

    inc_commonlocators.INC_PROPERTY_IN_THREAT(potential_threat)


})

//*****************************************************************************************/
/*                      TO SELECT : : ****INCIDENT_SET_ALERT****                          */
//*****************************************************************************************/

And("I select the {string} from {string} and input the number {string}", (alert_value: string, alert_rating: string, alert_name: string) => {

    jsonData_Shell = getSharedContext_ShellIncident('jsonData_shelltype');
    cy.log(jsonData_Shell.alert_level.name)

    alert_value =  alert_value.length == 0 ?  jsonData_Shell.alert_level.value : alert_value
        
    alert_name = alert_name.length == 0 ?  jsonData_Shell.alert_level.name : alert_name

    alert_rating = jsonData_Shell.alert_level.alert_rating 

    cy.log(alert_value, alert_name)
    
    inc_commonlocators.INCIDENT_SET_ALERT(alert_value, alert_rating, alert_name)

});

//*****************************************************************************************/
/*                      TO SELECT : : ****RESOURCRES_LIST****                             */
//*****************************************************************************************/



And("I input the {string} for {string} on the section {string}",(value, name, section) =>{

    jsonData_Shell = getSharedContext_ShellIncident('jsonData_shelltype');

    if(section == "Resources"){
        name = name.length == 0 ? jsonData_Shell.resources.name : name
        value = jsonData_Shell.resources.value
    

        inc_commonlocators.INC_RESOURCRES_LIST(value, name)
    }
})


//*****************************************************************************************/
/*                       TO SELECT : : ****INC TYPE****                                   */
//----------------------------------------------------------------------------------------/

And("I select the type {string} and input the value {string}",(inc_type , type_value ) => {


    if ((`${Cypress.currentTest.title}`).includes('Create Full Incident[Bushfire type]')){
        jsonData_Full = getSharedContext_FullIncident('jsonData_fulltype');
        cy.log(jsonData_Full.inc_type[0])
        inc_type = inc_type.length == 0 ? jsonData_Full.inc_type[0]: inc_type;
        type_value = type_value.length == 0 ? jsonData_Full.type_value.Bushfire: type_value
        cy.log(inc_type)
        cy.log(type_value)
        inc_commonlocators.INCIDENT_BUSHFIRE_TYPE(`${inc_type}`, `${type_value}`)

    }


    if ((`${Cypress.currentTest.title}`).includes('Create Full Incident[Other type]')){
        jsonData_Full = getSharedContext_FullIncident('jsonData_fulltype');
        
        inc_type = inc_type.length == 0 ? jsonData_Full.inc_type[1]: inc_type;
        type_value = type_value.length == 0 ? jsonData_Full.type_value.Other: type_value
        cy.log(inc_type)
        cy.log(type_value)
        inc_commonlocators.FULL_INCIDENT_NONFIRE_AND_OTHERTYPE(`${inc_type}`, `${type_value}`)

    }


    if ((`${Cypress.currentTest.title}`).includes('Create Full Incident[Non-fire type]')){
        jsonData_Full = getSharedContext_FullIncident('jsonData_fulltype');
        inc_type = inc_type.length == 0 ? jsonData_Full.inc_type[2]: inc_type;
        type_value = type_value.length == 0 ? jsonData_Full.type_value.Non: type_value
        cy.log(inc_type)
        cy.log(type_value)
        inc_commonlocators.FULL_INCIDENT_NONFIRE_AND_OTHERTYPE(`${inc_type}`, `${type_value}`)

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
            inc_commonlocators.SHELL_INCIDENT_NONFIRE_AND_OTHERTYPE(`${inc_type}`, `${type_value}`)
            cy.GetLabelby_Select('Non-Fire Incident', `${type_value}`)
            
        }
    
        
    }

})


Then('I should find {string} is populated', (results_label) => {

        inc_commonlocators.GET_INC_PRORPERTY_DETAILS_(results_label)

})
    
