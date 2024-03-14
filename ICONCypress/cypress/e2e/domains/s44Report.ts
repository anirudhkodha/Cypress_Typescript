import { trim } from "lodash";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import knowledge from "../pages/knowledge";
import S44ReportPage from "../pages/S44ReportPage";

class s44Report_domain {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    Knowledge = new knowledge()
    s44Rep = new S44ReportPage()
        
    navigate_S44_Report = () =>{
        this.Knowledge.KNOWLEDGE_TAB().click({force: true})
        this.Knowledge.S44_REPORT_PAGE().click({force: true})
    }  

    click_RunRep=()=>{
        this.s44Rep.RUN_REP_BTN().should('be.visible').click()
    }

    verify_report_isVisible=()=>{
        this.s44Rep.REPORT_IFRAME().should('be.visible')
        .its('0.contentDocument.body').should('be.visible')
    }

    verify_report_isInvisible=()=>{
        this.s44Rep.REPORT_IFRAME().should('not.be.visible')
    }


}
export default s44Report_domain;