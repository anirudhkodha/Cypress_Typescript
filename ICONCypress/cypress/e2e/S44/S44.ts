import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import { readyException } from "cypress/types/jquery";
import dayjs from "dayjs";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Operations from "../pages/Operations&fiu";
import S44PAGE from "../pages/S44Page";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import JOINTOPVIEW_DOM from "..//domains/jointOpView"
import incident_domain from "../domains/incidents";


const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const inc_dom = new incident_domain()
const s44page = new S44PAGE()
const jointOpView = new JOINTOPVIEW_DOM()
let declare_date = dayjs().format('DD/MM/YYYY HH:mm');
let declare_date1 = dayjs().format('D/MM/YYYY h:mm:00 A');

let inc_add = ''
let inc_name = ''



And('I can see dashbaord', () => {
    dashboard.CURRENT_INCIDENTS().should('exist')    

})



And ('I open knowledge',()=>{

    s44page.KNOWLEDGE_TAB().click({force: true})

})
And ('I select joint operations overview',()=> {

    s44page.JOINT_OPERATIONS_OVERVIEW().click({force: true})
})
And ('I click on Section44 list',()=> {
    s44page.S44_SECTION44_LIST().click({force: true})

})
And ('I click Add new S44',()=> {

    s44page.S44_ADD_NEWS44().click({force: true})
})

And ('I fill up mandatory fields',()=> {

    s44page.S44_REFERENCEAGENCY().select('Rural Fire Service',{force: true})
    const S44Referenceno = `S44-${Math.floor(Math.random() * 998)+1}`
    s44page.S44_REFERENCE_MAX().type(S44Referenceno,{force: true})
    s44page.S44_NAME().type('S44 Automation Test > create',{force: true})
    s44page.S44_DESTINATIONAREA().type('Albury',{force: true})
    s44page.S44_REGION()
    s44page.S44_LGA().select("0060")
    s44page.S44_DECLAREDATE().type(declare_date, {force:true})
    cy.log(declare_date)
    cy.log(declare_date1)
    s44page.S44_REVOKEDATE()


})
And ('I click on next',()=> {

    s44page.S44_NXTBTTN_GNRLINFO().click({force:true})

})
And ('I click on Select incidents',()=> {
    s44page.S44_ATTACHINCIDENTS().click({force:true})
    cy.waitForLoadingSpinner()
})
And ('I Select any incident from list',()=> {
    s44page.S44_INCIDENTSELECT_CHECKBOX1().check({force:true}).should('be.checked')
    s44page.S44_INCIDENTSELECT_CHECKBOX2().check({force:true}).should('be.checked')
    

})
And ('I click on Done',()=> {

    s44page.S44_SELECTINCIDENT_DONE().scrollIntoView().click({force:true}).wait(5000)
})
And ('I click on Next',()=> {

    s44page.S44_INCIDENTNAME().then(($txt)=>{

        inc_name = $txt.text() 
   })
   s44page.S44_INCIDENTADD().invoke('text').then(($add)=>{

        inc_add = $add.replace(inc_name, '').trim()
   })

    s44page.S44_ATTACHEDINCIDENT_NEXT().click({force:true})

    cy.waitUntil(()=> s44page.S44_WAITUNTILATTACHINC(),{timeout: 120000})

})
And ('I click on Create',()=> {

    s44page.S44_ASSERTINCNAME().should('be.visible').invoke('text').and('contain', inc_name)

    s44page.S44_CREATEBTTN().click({force:true}).wait(2000)
})



And ('I verify the name for S44',()=> {

    s44page.S44_VERIFYONPAGE().scrollIntoView().should('be.visible').and('contain','S44 Automation Test')
    s44page.S44_VERIFYONPAGE2().should('be.visible').and('contain','2')
    s44page.S44_VERIFYONPAGE3().should('be.visible').and('contain',Cypress.env('ICON_USERNAME'))
    s44page.S44_VERIFYONPAGE4().should('be.visible').and('contain', declare_date)


})

And ('I update and Attach Documents',()=>{

    s44page.S44_SECTION44NAME().click({force:true})
    s44page.S44_NXTBTTN_GNRLINFO().click({force:true})

    s44page.S44_INCIDENTNAME().then(($txt)=>{

         inc_name = $txt.text() 
    })

    s44page.S44_ATTACHEDINCIDENT_NEXT().click()
    cy.waitUntil(()=> s44page.S44_WAITUNTILATTACHINC(),{timeout: 120000})


    //Attach documnets
    s44page.S44_ATTACHDOCUMENTS().click({force:true})
    s44page.S44_ATTACHDOCUMENTS2().check({force:true})
    const filepath = 'attachment/AutomationAttach.docx'
    incidentlocators.INC_ADDFILES().attachFile(filepath)
    incidentlocators.INC_UPLOADDESCRIPTION().type('Automation test only',{force: true})
    incidentlocators.INC_STARTUPLOAD().click({force: true})
    incidentlocators.INC_UPLOADCLOSE().click({force: true}).waitForLoadingSpinner()
   
    //s44page.S44_CREATEBTTN().click({force: true})
    const update_datetime = dayjs().format('DD/MM/YYYY HH:mm');
    cy.log(update_datetime)

    s44page.S44_VERIFYONPAGE().scrollIntoView().should('be.visible').and('contain','S44 Automation Test')
    s44page.S44_VERIFYONPAGE2().should('be.visible').and('contain','2')
    s44page.S44_VERIFYONPAGE3().should('be.visible').and('contain',Cypress.env('ICON_USERNAME'))
    s44page.S44_VERIFYONPAGE4().should('be.visible').and('contain', declare_date)
    
    //s44page.S44_VERIFYONPAGE5().should('be.visible').and('contain', update_datetime)
    
})

And ('I view S44',()=> {

    // I EXPAND OPERATIONS TAB
    // operations.OPERATIONS_TAB().should('be.visible').click({force: true})
    
    //Click on INCIDENT IST
    incidentlocators.INCIDENT_LISTTABUSER().click({force: true})
    incidentlocators.INCIDENT_EVENT_LIST_ALERT().should('be.visible').and('contain','Incident and Event List')
    // incidentlocators.INC_SEARCHBYNAME().type(inc_name)
    incidentlocators.LOC_SEARCH().type(inc_add)
    incidentlocators.INCIDENT_SEARCH1().click({force: true})

    //S44 View button
    incidentlocators.INC_EDITINCTONONBUSH().click({force: true})
    incidentlocators.INC_SEC44BTTN().click({force: true})

    //Assert S44 view page

    s44page.S44_ASSERTVIEW1().should('be.visible').then(($decdate1)=>{


        let dec = $decdate1.text()
        expect(dec.trim()).to.contain(declare_date1)
    })
    s44page.S44_ASSERTVIEW2().should('be.visible').and('contain','S44 Automation Test')
    s44page.S44_ASSERTVIEW3().should('be.visible').and('contain','Rural Fire Service')

})



And ('I Revoke the Incident',()=> {

    //Back to S44 list
    s44page.KNOWLEDGE_TAB().click({force: true})
    s44page.JOINT_OPERATIONS_OVERVIEW().click({force: true})
    s44page.S44_SECTION44_LIST().click({force: true})
    s44page.S44_SECTION44NAME().click({force:true})



    //Update the Name and Verify
    s44page.S44_NAME().clear().type('S44 Automation Test- Revoke',{force: true})
    s44page.S44_ATTACHEDINCIDENT_NEXT().click({force:true})
    s44page.S44_ATTACHEDINCIDENT_NEXT().click({force:true})
    s44page.S44_CREATEBTTN().click({force:true})
    s44page.S44_VERIFYONPAGE().should('be.visible').and('contain','S44 Automation Test- Revoke')





    //Revoke the Incident

    s44page.S44_SECTION44NAME().click({force:true})

    const RevokeDATE =  dayjs().format('DD/MM/YYYY HH:mm')
    s44page.S44_REVOKEDATE().type(RevokeDATE,{force: true})



})

And ('I click on update',()=> {

    s44page.S44_CREATEBTTN().click({force: true})
})

///>>>>>>>>>>>>>>REVOKE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


And ('I fill up mandatory fields -Revoke',()=> {

    s44page.S44_REFERENCEAGENCY().select("6")
    const S44Referenceno = `S44-${Math.floor(Math.random() * 998)+1}`
    s44page.S44_REFERENCE_MAX().type(S44Referenceno,{force: true})
    s44page.S44_NAME().type('S44 Automation Test- Revoke',{force: true})
    s44page.S44_DESTINATIONAREA().type('Albury',{force: true})
    s44page.S44_REGION()
    s44page.S44_LGA().select("0060", {force: true})
    const DeclareDATE =  dayjs().subtract(2,'hour').format('DD/MM/YYYY HH:mm')
    s44page.S44_DECLAREDATE()
    s44page.S44_REVOKEDATE()


})


And ('I verify the name for S44 -Revoke',()=> {

    s44page.S44_VERIFYONPAGE().should('be.visible').and('contain','S44 Automation Test- Revoke')


})



And ('I Click on the latest S44',()=> {

    s44page.S44_SECTION44NAME().click({force:true})

})




And ('I put revoke date&time',()=> {

    const RevokeDATE =  dayjs().format('DD/MM/YYYY HH:mm')
    s44page.S44_REVOKEDATE().type(RevokeDATE,{force: true})
})



And ('I verify the name is not visible for S44 -Revoke',()=> {

    s44page.S44_VERIFYONPAGE().should('be.visible').and('not.contain.text','S44 Automation Test- Revoke   ')

})

//>>>>>>>>>>updates>>>>>>>>>>>>

Then ('I select 10 records to display in s44 section',()=> {
    jointOpView.records_per_page_s44(10)
})

And ('I search for {string} in S44 section search',(keyword)=> {
    jointOpView.search_s44(keyword)
   
})

Then ('I verify all entries include {string}',(keyword)=> {
    jointOpView.verify_s44_search(keyword)
})

Then ('I hide s44 section',()=> {
    jointOpView.showhide_s44_sec()
})

Then ('I verify region section',()=> {
    jointOpView.verify_region_sec()
})

And ('I verify expand all button displays related incidents tables',()=> {
    jointOpView.click_ExpandALL()
    jointOpView.verify_Reg_Inc_TAB_Visible()  
})

Then ('I verify incident summary tables',()=> {
    jointOpView.verify_INC_SUM_COLS()
})

And ('I search for {string} in incident summary section search',(keyword)=> {
    jointOpView.search_INC_SUM(keyword)
})
Then ('I verify all entries include {string} in incident summary table',(keyword)=> {
    jointOpView.verify_INC_SUM_search(keyword)
})