import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import DOCTRINE from "../pages/doctrinePage";
import { find } from "lodash";

class doctrine {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    doctrine = new DOCTRINE()

    navigate_doctrine_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.DOCTRINE_TAB().click({force: true, timeout: 180000});      
    } 

    verify_doctrine_page = () => {

        this.doctrine.ADDNEW_BTN().should('exist')   
    }

    add_newDoc = () => {
        this.doctrine.ADDNEW_BTN().click()
        this.doctrine.ADDNEW_MODAL_WIN().should('be.visible')
        this.doctrine.ADDNEW_NAME().type('Automation Test Doctrine', {force: true})
        this.doctrine.ADDNEW_DESC().type('Automation Test Doctrine Description', {force: true})
        cy.get('input[type=file]').selectFile('cypress/testFiles/test.txt', {force: true})
        this.doctrine.ADDNEW_SAVE_BTN().click().waitForLoadingSpinner()
    }

    edit_Doctrine_added = () => {
        this.doctrine.DOCTRINE_TAB_ROWS().last().find('td:nth-child(1)').contains('Automation Test Doctrine')
        let doc = this.doctrine.DOCTRINE_TAB_ROWS().last()
        doc.find('td>a[class="edit-document"]').click()
        this.doctrine.EDIT_MODAL_WIN().should('be.visible')
        this.doctrine.ADDNEW_SAVE_BTN().click().waitForLoadingSpinner()
        }
    
    del_Doctrine_added = () => {
        this.doctrine.DOCTRINE_TAB_ROWS().last().find('td:nth-child(1)').contains('Automation Test Doctrine')
        let doc = this.doctrine.DOCTRINE_TAB_ROWS().last()
        doc.find('td>a[class="delete-document"]').click()
        this.doctrine.DEL_OK_BTN().click()
        doc.should('not.exist')
        }
    
    

    verify_LogTable_Columns = () => {
        this.doctrine.DOCTRINE_TABLE_COLS().then(items=>{
            cy.wrap(items[0]).contains(/(Name)/)
            cy.wrap(items[1]).contains(/(Description)/)
            cy.wrap(items[2]).contains(/(Type)/)
            cy.wrap(items[3]).contains(/(Size)/)
            cy.wrap(items[4]).contains(/(Uploaded By)/)
            cy.wrap(items[5]).contains(/(Uploaded Date)/)
        })
    }
}
export default doctrine;