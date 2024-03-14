/// <reference types="cypress" />


import { Given, When, And, Then, Before, defineStep,  } from "cypress-cucumber-preprocessor/steps";
import { List, every, findKey, keysIn, matchesProperty, property, propertyOf, times, toArray, values } from 'lodash';
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
import INC_COMMONLOCATORS from "../pages/incident_common_pages";
import IncidentSearchPage from "../pages/IncidentSearchPage";
import {getSharedContext_FullIncident, getSharedContext_IncidentResults } from "../pages/context";
import {setSharedContext_FullIncident} from "../pages/context";
import { keys, mapKeys } from "cypress/types/lodash";
import mappedArray from "../pages/IncidentSearchPage"
import { object } from "check-more-types";
import { all } from "cypress/types/bluebird";





const commonlocators = new INC_COMMONLOCATORS();
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
const map = new Map();
const incidentsearchpage = new IncidentSearchPage();

let jsonData_Result : any
let Array_label : string[] = []
let Array_inputs : string[] = []
let modfValue : any
let modfValue_ : any
let modfKey : any




defineStep('I search and open latest result from current incident with {string} and the {string} of the key if I have not open the incident', (filterStrings : string, filterValues : string) => {

/******************************<< MANAGING JSONDATA >>*****************************************/
/*# COLLETCTING JSONDATA FROM FIXTURES/RESULTS
/*# BASED ON INCIDENT CREATION AND THEIR TYPES
/**********************************************************************************************/


    
    jsonData_Result = getSharedContext_IncidentResults('jsonData_resultstype');
    const JsonArray_Result = Object.keys(jsonData_Result).map(key => ({ [key]: jsonData_Result[key] }));

    const JsonArray_filterStrings : string[] = JsonArray_Result.map(obj => Object.keys(obj)[0])
    const JsonArray_filterValues: string[] =JsonArray_Result.map(obj => Object.values(obj)[0])
    
    console.log(JsonArray_Result)
    console.log('LABELS FROM JSON: '+JsonArray_filterStrings)
    console.log('VALUES FROM JSON: '+JsonArray_filterValues)

/******************************<< MANAGING FilterStrings & FilterValues >>*****************************************/
    // filterStrings = filterStrings.length === 0 ? JsonArray_filterStrings.toString() : filterStrings
    // filterValues  = filterValues.length === 0 ? JsonArray_filterValues.toString() : filterValues
    console.log('LABELS ARE: '+ filterStrings)
    console.log('VALUES ARE: '+ filterValues)
    
/******************************************************************************************************************/


/*********************************<< MANAGING AND MAPPING LABELS WITH VALUES >>************************************/
    if (filterStrings.length>0 && filterValues.length>0) {
        Array_label = filterStrings.includes(',') ? filterStrings.trim().split(',') : [filterStrings.trim()];
        Array_inputs = filterStrings.includes(',') ? filterValues.trim().split(',') : [filterValues.trim()];
        console.log (Array_label, Array_inputs);
    }

        let mappedArray: {[key: string]: string }[] = Array_label.map((Array_label, index) => ({
                [Array_label]: Array_inputs[index]
        }));
        console.log(mappedArray)
    
/*******************************************************************************************************************/
    
/**************************************<< CALLING EACH LABELS WITH VALUES >>*********************************************/
   
    mappedArray.forEach((mapping) => {

        let Key = Object.keys(mapping)[0]
        let Value = mapping[Key]
        modfKey = Key.replace(/_(?=[A-Za-z0-9])/g, ' ')
        console.log('Labels are: '+modfKey)
        modfValue_ = Value.replace(/_(?=[A-Za-z0-9])/g, ' ')
        modfValue = modfValue_.split(/\/+/)
        console.log( 'Values are: '+modfValue)
        if (modfValue.length > 1) {
            
            for (var i = 0; i < modfValue.length; i++) {
                cy.AdvanceSearchByLabel(modfKey, modfValue[i])
        
            }
        }
        
        else{

            cy.AdvanceSearchByLabel(modfKey, modfValue)

        }

        cy.Get_buttonBy_name('Search')
    })


})

And('I change the mandatories {string} {string} {string} {string}',(RFS_callTime, stop_message_time, inc_type, change_reason ) => {

    




})
