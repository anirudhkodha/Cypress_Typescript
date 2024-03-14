import { map } from "cypress/types/jquery";
import {getSharedContext_IncidentResults, setSharedContext_IncidentResults} from "../pages/context";
import INC_COMMONLOCATORS from "./incident_common_pages";
import { List, keys } from "lodash";
import { number } from "check-more-types";

const commonlocators  = new INC_COMMONLOCATORS();
let jsonData_Result: any
let Array_label : string[] = []
let Array_inputs : string[] = []

class IncidentSearchPage{
    //https://icon.uat.rfs.nsw.gov.au/FireIncident/FireIncident

    SEARCH_BRIGADE_REPORTS_BUTTON =() => cy.get(`[href="/FireIncident/FireIncident/BrigadeReporting"]`)
    MERGE_INCIDENTS_BUTTON =() => cy.get(`a.btn.btn-primary[href="/FireIncident/FireIncident/MergeIncidents"]`)
    CREATE_BUTTON =() => cy.get(`button`).contains('Create ')

    SEARCH_INCIDENT_FORM =() => cy.get(`form[id="incidentList"]`)

    LGA_DROPDOWN =() => cy.get('#selectedLGA')
    DTZ_DROPDOWN =() => cy.get('#districtTeamZones')
    TYPE_DD =() => cy.get('#selectedType')

    ADV_SEARCH_BTN =() => cy.get('#advancedIncidentSearchUpdated')
    SEARCH_INC=() => cy.get('button[type="submit"]')

    REF_NO_INPUTFIELD =() => cy.get('#referenceNumber').as('@referenceno')
    TZERO_REF_NO =() => cy.get('#TripleOReference')
    INC_EVNT_NAME =() => cy.get('#incidentName')

    DATE_FRM =() => cy.get('#startDateFrom_input')
    DATE_UNTL =() => cy.get('#startDateUntil_input')

    INC_NO_LOCAL =() => cy.get('#incidentNumberLocal')
    

    INCIDENTDETAILS = ()=> cy.get('[href="#incidentSummary"]').as('incidentdetails_toogle')

    CREATE_FULL_INC =() => cy.get('.btn-group.open>ul>li').contains('Full Incident')
    CREATE_BUSH_SHELL =() => cy.get('.btn-group.open>ul>li').contains('Bushfire Shell Incident')
    CREATE_OTHER_SHELL =() => cy.get('.btn-group.open>ul>li').contains('Other Shell Incident')
    CREATE_EVENT =() => cy.get('.btn-group.open>ul>li').contains('Event')
    CREATE_CALLOUT =() => cy.get('.btn-group.open>ul>li').contains('Call Out')
    INCIDENT_REFERENCE_NO = ()=> cy.get('dd a[href]')



    INPUT_REF_NO = (inc_no: string) => {

       cy.get('@referenceno').type(inc_no)

    }

    CLICK_SEARCH = (value: string) => {

        cy.get('button').contains(`${value}`).click({force: true})

    }
    
    CLICK_REFERENCE_ON_TABLE = (value: string) => {


        cy.get('tbody > tr:nth-child(1) > td > a').should('have.attr', value)
        .click({force: true})
        cy.waitForLoadingSpinner()

    }

    READ_INCIDENT_RESULT_JSON = (incident_result: string) => {

        return cy.readFile(incident_result).then((data) => {

            jsonData_Result = JSON.parse(data);
            console.log('DATA READ:'+jsonData_Result)
            setSharedContext_IncidentResults('jsonData_resultstype', jsonData_Result);
            console.log('Context shared')
        
        })


    }


    CHECK_INCIDENT_DETAILS_TOOGLE = (placeHolder:string, nameField: string, incident_no: string) => {
        jsonData_Result =  getSharedContext_IncidentResults('jsonData_resultstype')


        if (placeHolder = 'Incident Details') {
            
            this.INCIDENTDETAILS().contains(placeHolder).click({force:true}).then(() =>{

                if (nameField == 'Reference No.') {
                
                    cy.contains(`${nameField}`)
                
                }

            })

            let IncidentRef_no = ''
            this.INCIDENT_REFERENCE_NO().then(($text) => {

                IncidentRef_no = $text.text();
                console.log(IncidentRef_no)
                expect(IncidentRef_no).to.deep.equal(jsonData_Result['Reference No.'])
                

            })
            
        }

    
    }



    mappedArrays = (filterStrings: string,filterValues:string )=> {


        Array_label = filterStrings.split(',');
        Array_inputs = filterValues.split(',');


        let mappedArray: { [key: string]: string }[] = Array_label.map((Array_label, index) => ({
            [Array_label]: Array_inputs[index]
        }));


        
        return mappedArray



    }

    
}

export default IncidentSearchPage