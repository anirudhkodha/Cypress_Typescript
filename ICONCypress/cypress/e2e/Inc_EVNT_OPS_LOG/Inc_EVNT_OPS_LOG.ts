import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import inc_evntopsLog_domain from "../domains/inc_evntOpsLog";
import Dashboard from "../pages/Dashboard";


const ieol = new inc_evntopsLog_domain()
const dashboard= new Dashboard() 



And('I can see dashbaord', () => {
    dashboard.CURRENT_INCIDENTS().should('exist')    

})



Then ('I select incident event ops log in knowledge tab',()=>{

    ieol.navigate_IEOL_page()

})

And ('I verify logs are displayed',()=>{

    ieol.Verify_IEOL_COLS()
    ieol.validate_first_row_containsDATA()

})