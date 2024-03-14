import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import ADVINCIDENTLOCATORS from "../pages/AdvIncidentSearchPage";

class advIncidentSearch_domain {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    advIncidentsearchlocators = new ADVINCIDENTLOCATORS()

    navigate_advIncidentSearch_page = () => {

        this.incidentlocators.INCIDENT_TAB().click();
        this.incidentlocators.ADVANCE_INCIDENTSEARCH().click({force: true, timeout: 180000});      
    } 

    verify_advIncidentSearch_page = () => {

        this.advIncidentsearchlocators.REFERENCE().should('be.visible')
        this.advIncidentsearchlocators.HECTARES_BURNT_DD().should('be.visible')
        this.advIncidentsearchlocators.TENURE_DIV().should('exist')
        this.advIncidentsearchlocators.STATUS_TAB().should('be.visible')
        this.advIncidentsearchlocators.INCIDENT_TYPES_TAB().should('be.visible')
        this.advIncidentsearchlocators.CHKBOXES().then(items=>{
            cy.wrap(items[0]).should('be.visible')
            cy.wrap(items[1]).should('be.visible')        
        })
        this.advIncidentsearchlocators.NOTIFY_ALL_RADIO().should('be.visible')
        this.advIncidentsearchlocators.NOTIFY_SEL_RADIO().should('be.visible')
        this.advIncidentsearchlocators.NOTIFY_NOT_RADIO().should('be.visible')
        this.advIncidentsearchlocators.OTHER_TAB().should('be.visible').click()
        this.advIncidentsearchlocators.INC_ALL_RADIO().should('be.visible')
        this.advIncidentsearchlocators.INC_AUTHMAP_RADIO().should('be.visible')
        this.advIncidentsearchlocators.INC_NOAUTHMAP_RADIO().should('be.visible')        
        this.advIncidentsearchlocators.SEARCH_BTN().should('be.visible')
        cy.screenshot("CurrentIncidentSearch");
    }
}
export default advIncidentSearch_domain;