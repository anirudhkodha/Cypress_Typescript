import Dashboard from "../pages/Dashboard";
import knowledge from "../pages/knowledge";
import Inc_EvntOpsLogPage from "../pages/Inc_EventOpsLogPage";

class inc_evntopsLog_domain {

    dashboard= new Dashboard()    
    Knowledge = new knowledge()
    IEOL = new Inc_EvntOpsLogPage()
        
    navigate_IEOL_page = () =>{
        this.Knowledge.KNOWLEDGE_TAB().click({force: true})
        this.Knowledge.INC_EVNT_OPS_LOG_PAGE().click({force: true})
    }  

    Verify_IEOL_COLS = () => {
        this.IEOL.INC_OPSLOG_TAB_COLS().then(items=>{
            cy.wrap(items[0]).contains(/(Incident)\/(OpsLog)/)
            cy.wrap(items[1]).contains(/(LGA)/)
            cy.wrap(items[2]).contains(/(Region)/)
            cy.wrap(items[3]).contains(/(Subject)/)
            cy.wrap(items[4]).contains(/(Reliability)/)
            cy.wrap(items[5]).contains(/(Type)/)
            cy.wrap(items[6]).contains(/(Saved)/)
            cy.wrap(items[7]).contains(/(Information)/)
            
        })
    }

    validate_first_row_containsDATA=() =>{
        this.IEOL.INTELOPSLOG_TAB_ROW().then(items=>{
            cy.wrap(items[0]).contains(/\w+/)
            cy.wrap(items[2]).contains(/\w+/)
            cy.wrap(items[5]).contains(/\w+/)
            cy.wrap(items[6]).contains(/(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/[0-9]{4} (2[0-3]|[01][0-9]):[0-5][0-9]/)
            cy.wrap(items[7]).contains(/\w+/)
            })
    }

    


}
export default inc_evntopsLog_domain;