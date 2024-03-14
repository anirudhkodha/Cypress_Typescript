import { trim } from "lodash";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import FDRlocators from "../pages/FDRlocators";
import Mfulocators from "../pages/Mfupage";

class fdr_domain {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    fdr = new FDRlocators()
    mfulocators = new Mfulocators()
        
    navigate_fdr = () =>{
        this.mfulocators.PUBLIC_INFORMATION_TAB().click()
        this.fdr.FDR_TAB().click({force : true})
    }


}
export default fdr_domain;