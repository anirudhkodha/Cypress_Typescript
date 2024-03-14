import { trim } from "lodash";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import s44page from "../pages/S44Page";

class s44_domain {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    s44 = new s44page()
        
    navigate_S44_list = () =>{
        this.s44.KNOWLEDGE_TAB().click({force: true})
        this.s44.JOINT_OPERATIONS_OVERVIEW().click({force: true})
        this.s44.S44_SECTION44_LIST().click({force: true})
    }  


}
export default s44_domain;