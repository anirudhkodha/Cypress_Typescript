import { trim } from "lodash";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import dispatchPage from "../pages/dispatch";


class dispatch {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    Dispatch = new dispatchPage()
    

    navigate_dispatch_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        //this.incidentlocators.DISPATCH_TAB().invoke('removeAttr', 'target').click({force: true, timeout: 180000});      
    } 

    verify_dispatch_page = () => {
        /* because Cypress blocks accessing multiple super domains in a single test
        therefore, just verifying the url is correct 
        */
        this.incidentlocators.DISPATCH_TAB().should('have.attr', 'href', `https://${Cypress.env('DISPATCH_HOST_URL')}`)
        cy.loginToDISPATCH()
        this.Dispatch.APP_DIS().should('be.visible')
        this.Dispatch.CLOSEBY_STATION().should('be.visible')
        this.Dispatch.MAP().should('be.visible')
        this.Dispatch.NEIGHBORBRIGADE_BTN().should('be.visible')

       }
}
export default dispatch;
