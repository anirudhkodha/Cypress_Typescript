import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import dayjs from "dayjs";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import FDRlocators from "../pages/FDRlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import knowledge from "../pages/knowledge";
import Mfulocators from "../pages/Mfupage";
import Operations from "../pages/Operations&fiu";
import S44PAGE from "../pages/S44Page";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import activitySum from "../domains/activitySum";
import s44_domain from "../domains/s44";
import fdr_domain from "../domains/fdr";


const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const birspage = new BIRS_COMMONPAGES()
const s44page = new S44PAGE()
const mfulocators = new Mfulocators()
const fdrlocators = new FDRlocators()
const knowledgeLoc = new knowledge()
const activitysum = new activitySum()
const S44_DOM = new s44_domain()
const fdr_DOM = new fdr_domain()
Given ('I open ICON webpage',()=> {

    cy.loginToICON()
})

And ('I can see dashbaord',()=> {
    dashboard.CURRENT_INCIDENTS().should('exist')

})

And('I expand Knowledge',() =>{
    knowledgeLoc.KNOWLEDGE_TAB().click()
})

And ('I Open ICON activity summary',()=>{
    knowledgeLoc.ICON_activity_summary().click()

})

Then ('I verify the page is displayed',()=>{
    activitysum.verify_ICON_SUM_Page()
})

Then ('I validate the s44 count matches the count on s44 list page',()=>{
    S44_DOM.navigate_S44_list()     
    activitysum.verify_s44Count_match_s44list_activitySum()
})

And ('I validate the TOBAN count matches the count on FDR page',()=>{
    fdr_DOM.navigate_fdr()     
    activitysum.verify_TOBANCount_match_FDR_activitySum()
})