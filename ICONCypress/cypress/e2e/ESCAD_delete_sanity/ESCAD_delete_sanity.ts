import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import dayjs from "dayjs";
import INCIDENTLOCATORS from "../pages/Incidentlocators"
import Operations from "../pages/Operations&fiu";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import EscadIconDataDisplay from '../pages/EscadIconDataDisplay'


const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const escadIconDataDisplay = new EscadIconDataDisplay()

//var escad_inc_arr: string[] =  [] 


Given('I open ICON {string} webpage',(Number)=>{
    cy.loginToICONNoVisit()
    cy.visit(`https://icon.dev.rfs.nsw.gov.au/FireIncident/FireIncident/Review/`+Number, {failOnStatusCode: false})


})

And('I click Edit incident and Delete it',()=> {

    incidentlocators.INC_EDITINCTONONBUSH().click({force: true})
    
    incidentlocators.INC_DELETEBTTN().click({force: true}).waitForLoadingSpinner()
    incidentlocators.INC_DELETEOK().click({force: true})
    incidentlocators.INC_DELETERSNALERT().invoke('text').should('contain','The DeleteReason field is required.')
    incidentlocators.INC_DELETEREASON().type('Automation Test Only', {force: true})
    incidentlocators.INC_DELETEOK().click({force: true})
    
    const delsuccessalert = 'Success!'
    incidentlocators.INC_DELETESUCCESS().then(($el)=>{  
        const success_text = $el.text()
        expect(success_text).to.contain(delsuccessalert)

    })
    
})

// })
// When ('I expand operations tab',()=> {
//     operations.OPERATIONS_TAB().should('be.visible').click({force:true})

//     // escadIconDataDisplay.ESCAD_INCIDENTSTAB().click({force: true})

//     // cy.get('tbody > tr td:nth-child(1)').each((el)=>{

//     // escad_inc_arr.push(el.text())

//     // })

//     //     console.log(escad_inc_arr)

// })

// And ('I select Advanced incident search',()=> {

//     incidentlocators.ADVANCE_INCIDENTSEARCH().click({force: true})
    
// })

// And ('I search for the {string}',(keyword)=>{

//     incidentlocators.INC_ADVANCESEARCH_REF().type('')


// })
