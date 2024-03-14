import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import OPERATINSLOG_MESSAGE_INTELLIST from "../pages/OperationsLog_Message_IntelList_Page";

class operationsLog_Message_IntelList {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    operationsLog_message_intelList = new OPERATINSLOG_MESSAGE_INTELLIST()

    navigate_operationLog_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.OPERATIONSLOG_TAB().click({force: true, timeout: 180000});      
    } 

    verify_operationsLog_Message_IntelList_page = () => {

        this.operationsLog_message_intelList.AD_NEWLOG_BTN().should('be.visible')
        this.operationsLog_message_intelList.AD_SEARCH_REPORT_BTN().should('be.visible')
        this.operationsLog_message_intelList.LOG_SEARCH_DD().should('be.visible')
        this.operationsLog_message_intelList.LOG_TABLE().should('be.visible')        
    }

    verify_LogTable_Columns = () => {
        this.operationsLog_message_intelList.THEAD_COLS().then(items=>{
            cy.wrap(items[0]).contains('Reference')
            cy.wrap(items[1]).contains('Subject')
            cy.wrap(items[2]).contains('Created')
            cy.wrap(items[3]).contains('Last Update')
            cy.wrap(items[4]).contains('Type')
            cy.wrap(items[5]).contains('Status')
            cy.wrap(items[6]).contains('Completed')
            cy.wrap(items[7]).contains('Priority')
            cy.wrap(items[8]).contains('Expiry')
        })
    }

    select_search_2days=()=>{
        this.operationsLog_message_intelList.SEARCH_SELRCTOR().select(2).waitForLoadingSpinner()
    }

    validate_first_row_containsDATA=() =>{
        this.operationsLog_message_intelList.TAB_FIRST_ROW().then(items=>{
            cy.wrap(items[0]).find('a').contains(/\d{14}/)
            cy.wrap(items[1]).contains(/\w+/)
            cy.wrap(items[2]).contains(/(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4} (2[0-3]|[01][0-9]):[0-5][0-9]/)
            cy.wrap(items[3]).contains(/(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4} (2[0-3]|[01][0-9]):[0-5][0-9]/)
            cy.wrap(items[4]).contains(/\w+/)
            cy.wrap(items[5]).contains(/\w+/)
            cy.wrap(items[6]).contains(/\w+/)
            cy.wrap(items[7]).find('span').contains(/\w+/)
            })
        }
    
}
export default operationsLog_Message_IntelList;