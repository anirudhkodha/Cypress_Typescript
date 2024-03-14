import { trim } from "lodash";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import RART from "../pages/rartPage";

class rart {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    rart = new RART()

    navigate_rart_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.RART_TAB().click({force: true, timeout: 180000});      
    } 

    verify_rart_page = () => {

        this.rart.LGA_DD().should('be.visible')
        this.rart.REPORTS_BTN().should('be.visible')
        this.rart.NEWSTANDUP_BTN().should('be.visible')        
    }

    verify_RARTTable_Columns = () => {
        this.rart.RART_TABLE_COLS().then(items=>{
            cy.wrap(items[1]).contains('Reference')
            cy.wrap(items[2]).contains(/(Name)/)
            cy.wrap(items[3]).contains(/(Request Date)/)
            cy.wrap(items[4]).contains(/(Status)/)
            cy.wrap(items[5]).contains(/(Description)/)
            cy.wrap(items[6]).contains(/(Incidents)/)
            cy.wrap(items[7]).contains(/(LGA)/)
            cy.wrap(items[8]).contains(/(Departure Date)/)
            
        })
    }

    validate_first_row_containsDATA=() =>{
        this.rart.TAB_FIRST_ROW().then(items=>{
            cy.wrap(items[0]).find('a').contains(/^RARTD \d+/)
            cy.wrap(items[1]).contains(/\w+/)
            //cy.wrap(items[2]).contains(/(2[0-3]|[01][0-9]):[0-5][0-9] (0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4}/)
            cy.wrap(items[3]).contains(/\w+/)
            })
    }
}
export default rart;