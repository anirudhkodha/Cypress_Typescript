import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import INCIDENTSEARCHLOCATORS from "../pages/IncidentSearchPage";
import INCIDENTS_DOM from "../domains/incidents"
import ADV_INC_SEARCH_DOM from "../domains/advIncidentSearch"

class currentIncidentSearch_domain {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    incidentsearchlocators = new INCIDENTSEARCHLOCATORS()
    incidents_dom = new INCIDENTS_DOM()
    adv_inc_search_dom = new ADV_INC_SEARCH_DOM()

    navigate_currentIncidentSearch_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.CURRENT_INCIDENT_SEARCH().click({force: true, timeout: 180000});      
    } 

    verify_currentIncidentSearch_page = () => {

        this.incidentsearchlocators.CREATE_BUTTON().should('be.visible')
        this.incidentsearchlocators.MERGE_INCIDENTS_BUTTON().should('be.visible')
        this.incidentsearchlocators.SEARCH_BRIGADE_REPORTS_BUTTON().should('be.visible')
        this.incidentsearchlocators.SEARCH_INCIDENT_FORM().should('be.visible')
        this.incidentsearchlocators.LGA_DROPDOWN().should('be.visible')
        this.incidentsearchlocators.DTZ_DROPDOWN().should('be.visible')

        this.incidentsearchlocators.TYPE_DD().should('be.visible')
        this.incidentsearchlocators.REF_NO().should('be.visible')
        this.incidentsearchlocators.TZERO_REF_NO().should('be.visible')
        this.incidentsearchlocators.INC_EVNT_NAME().should('be.visible')
        this.incidentsearchlocators.DATE_FRM().should('be.visible')
        this.incidentsearchlocators.DATE_UNTL().should('be.visible')
        this.incidentsearchlocators.INC_NO_LOCAL().should('be.visible')

        this.incidentsearchlocators.ADV_SEARCH_BTN().should('be.visible')
        this.incidentsearchlocators.SEARCH_BTN().should('be.visible')
        cy.screenshot("CurrentIncidentSearch");
    }

    click_Create =() =>{
        this.incidentsearchlocators.CREATE_BUTTON().click()
    }

    select_Create_Options = (incident: any)=>{

        switch(incident) { 
            case 'full_Incident': { 
               //statements;
               this.incidentsearchlocators.CREATE_FULL_INC().click()
               this.incidents_dom.verify_createFullIncident_page() 
               break; 
            } 
            case 'bush_Shell': { 
               //statements; 
               this.incidentsearchlocators.CREATE_BUSH_SHELL().click()
               this.incidents_dom.verify_createBushShell_page()
               break; 
            } 
            case 'other_Shell': { 
                //statements; 
                this.incidentsearchlocators.CREATE_OTHER_SHELL().click()
                this.incidents_dom.verify_createOtherShell_page()
                break; 
             } 
             case 'event': { 
                //statements; 
                this.incidentsearchlocators.CREATE_EVENT().click()
                this.incidents_dom.verify_createEvent_page()
                break; 
             }              
            default: { 
               //statements; 
               this.incidentsearchlocators.CREATE_CALLOUT().click()
               this.incidents_dom.verify_createCallOut_page()
               break; 
            } 
         } 

    }

    click_MergeINC =() =>{
        this.incidentsearchlocators.MERGE_INCIDENTS_BUTTON().click()
        this.incidents_dom.verify_mergeIncidents_page()
    }

    click_SEARCH_BRIGADE_REP =() =>{
        this.incidentsearchlocators.SEARCH_BRIGADE_REPORTS_BUTTON().click()
        this.incidents_dom.verify_brigadeReportSearch_page()
    }

    click_ADV_SEARCH =() =>{
        this.incidentsearchlocators.ADV_SEARCH_BTN().click()
        this.adv_inc_search_dom.verify_advIncidentSearch_page()
    }


}
export default currentIncidentSearch_domain;