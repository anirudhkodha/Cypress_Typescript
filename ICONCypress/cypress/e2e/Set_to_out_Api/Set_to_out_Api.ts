import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import dayjs from "dayjs";
import INCIDENTLOCATORS from "../pages/Incidentlocators"
import Operations from "../pages/Operations&fiu";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import EscadIconDataDisplay from '../pages/EscadIconDataDisplay'
import TOKEN from "../pages/AccessToken";


const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const escadIconDataDisplay = new EscadIconDataDisplay()
const export_access_token = new TOKEN()


let link_incID =''
let triplezero_ref  = ''
let stopmessage_ISO : any
let accesstoken     = ''
let inc_number = ''


// When ('I expand operations tab',()=> {
// operations.OPERATIONS_TAB().should('be.visible').click()

// })


// And ('I expand Incidents',()=>{
//     eventlocators.INCIDENT_TAB().click()

// })

And ('I open Create bushfire Shell',()=> {

    incidentlocators.INCCREATE_BUSHFIRESHELL1().click({force: true, timeout: 120000})
})


And ('I write Incident name to incident creation -settoout',()=> {
     
    incidentlocators.INC_NAME_BUSH().type('Automation_test_Bushfire_shell-settoout',{force: true})

})
And ('I enter LGA on create full incident page -settoout', ()=> {

   incidentlocators.INC_LGA().select('0060')
})

And ('I enter Start Date Time to incident creation -settoout',()=> {
        const start_date_time = dayjs().subtract(1,'hour').format('DD/MM/YYYY HH:mm');
        incidentlocators.INC_STARTDATETIME_().type(start_date_time,{force: true})
})


And ('I select the type of the fire to incident creation -settoout',()=> {

    incidentlocators.INC_BUSHFIRETYPE_TAB().click({force: true})
    incidentlocators.INC_BUSHFIRETYPE().click({force: true})

})

And ('I type firesize to incident creation -settoout',()=> {
    incidentlocators.INC_FIRESIZETAB_BUSH().click({force: true})
    const area_size = `${Math.floor(Math.random() * 8)+1}`
    incidentlocators.INC_FIRESIZE_BUSH().clear().type(area_size,{force: true})
})

And ('I enter tenure to incident creation -settoout',()=>{


   incidentlocators.INC_TENURE_TAB_().type('Council{enter}')

   //  incidentlocators.INC_TENURE_TAB_BUSH().click({force: true})
   //  incidentlocators.INC_TENURE_BUSH().invoke('show').click({force: true})
    incidentlocators.INC_STATUS_BUSH1().click({force: true})
})

And ('I select Incident Status to incident creation -settoout',()=> {

    incidentlocators.INC_STATUS().select('1')
})

And ('I select responsible agency to incident creation -settoout',()=> {

    incidentlocators.INC_RESPONSIBLE_AGENCY_().select('6',{force: true})
})

And ('I select Incident owner to incident creation -settoout',()=> {

    incidentlocators.INC_OWNER_().select('6')
})

And ('I select suspected cause to incident creation -settoout',()=> {

    incidentlocators.INC_SUSPECTED_CAUSE_().select('11')

})

And ('I enter set alert level to incident creation -settoout',()=>{

    incidentlocators.INC_ALERT_LVL_BUSH1().click({force: true})
    incidentlocators.INC_ALERT_LVL_BUSH2().should('exist')
    incidentlocators.INC_ALERT_LVL_BUSH3().click({force: true})
    incidentlocators.INC_ALERT_LVL_BUSH4().click({force: true})

})

And ('I enter location to incident creation - bushfireshell -settoout',()=> {

    incidentlocators.INC_LOCATION_BUSH1().type('Albury',{force: true})
    incidentlocators.INC_LOCATION_BUSH2().click({force: true}).wait(4000).click({force: true})
})


And ('I enter 000 Reference to incident creation -settoout',()=> {
    const Triple0_ref = `000-${Math.floor(Math.random() * 1000000000)}`
    incidentlocators.INC_000REF_BUSH().type(Triple0_ref, {force: true})
})


And ('I enter heading direction to incidentcreation -settoout',()=> {

    incidentlocators.INC_DIRECTION_BUSH().type('Heading West, Keep away from westside',{force: true})
})

And ('I enter resources to incident creation -settoout',()=> {
    const resouces_bushfireshell = `${Math.floor(Math.random() * 8)+1}`;
   incidentlocators.INC_RESOURCES_BUSH().clear({force: true}).type(resouces_bushfireshell,{force: true})

})



And ('I Save the incident creation form -settoout',()=> {

    incidentlocators.INC_SAVE_().click({force:true,timeout: 180000}).waitUntil(()=>incidentlocators.INCIDENTDETAILS().should('exist',{setTimeout: 180000}))  // Can take 1.7 minutes to return on cold start

   })

And ('I Assert with the Authorised SitRep -settoout', ()=> {
   incidentlocators.INC_ASSERT_BUSH1().should('contain.text','(SR) Authorised')
   

})

And ('I click on add SitRep -settoout',()=> {

   incidentlocators.INCIDENT_ADDSITREP().prev().contains('Add SitRep').click({force: true})

})



And ('I can verify report date as current -settoout' ,()=> {
   const currentreporttime = dayjs().subtract(15,'minute').format('DD/MM/YYYY HH:mm');
   incidentlocators.CURRENT_REPORT_TIME_SR().should('exist').type(currentreporttime,{force:true})

})


And ('I type Incident controller -settoout',()=> {
   incidentlocators.INC_INCCONTROLLER_ADDSR_SETTOOUT().click({force: true}).waitForLoadingSpinner()
   incidentlocators.INCCONTROLLER_SRE().type('TeamC',{force: true})

})

And ('I Authorise SitRep -settoout', ()=> {

   incidentlocators.INC_AUTHORISE_SRE().click( {force: true,timeout: 60000})
   incidentlocators.INC_AUTHORISE_SRE_VERIFY1().should('exist').should('contain','Notifiable Incident*')
   incidentlocators.INC_AUTHORISE_SRE_VERIFY2().should('exist').should('contain','Request Fire Investigation')
   incidentlocators.INC_AUTHORISE_SRE_VERIFY3().should('exist').should('contain','Include Intel')
   incidentlocators.INC_BTN_AUTHORISE_SRE().scrollIntoView().click({force: true})
   incidentlocators.INC_SRE_USERNAME()
   incidentlocators.INC_SRE_PASSWORD()
   incidentlocators.INC_CREDENTIALSOK().click({force:true})
})


And ('I verify that Sitrep is Authorised -settoout',()=>{

   incidentlocators.INC_SITREP_SUCCESS().should('contain.text','Success!')
   incidentlocators.INC_CLOSE_SITREPE1().click({force: true})  // Close the SitRep window
   incidentlocators.INC_HEADERINCDETAILS().click({force: true})
   incidentlocators.INC_ASSERT_FULLINC_SRE().should('contain.text','(SR) Authorised')
})


And ('I edit Incident and set to out -settoout',()=> {

   incidentlocators.INC_SETTOOUT_ICON().should('be.visible').click({force: true}).waitForLoadingSpinner()
   incidentlocators.INC_EDITINCIDENT_SETTOOUT().should('exist').click({force: true})

   const RFSreceivedcall = dayjs().subtract(45,'minute').format('DD/MM/YYYY HH:mm');
   incidentlocators.AGENCY_CALL_RECEIVED_DATE_TIME().scrollIntoView().type(RFSreceivedcall, {force: true})

   let Stopmessaging = dayjs().subtract(5,'minute').format('DD/MM/YYYY HH:mm');
   console.log(Stopmessaging)
   incidentlocators.INC_STOPMESSAGE_DATE().scrollIntoView().type(Stopmessaging , {force: true})
   stopmessage_ISO  = dayjs(Stopmessaging).format('YYYY-MM-DD HH:mm:ss.SSS');
   console.log(stopmessage_ISO)

   incidentlocators.INC_SAVE_EDITINCIDENT().click({force: true,timeout: 120000})

    // Get INCIDENT local ID and 000REF 
    cy.url({log : true}).then(($A)=>{

    let linkcomponents = $A.split('/')
    link_incID = linkcomponents[linkcomponents.length-1]
    console.log(link_incID)
   
    })  
    
    incidentlocators.INCIDENTDETAILS().click({force: true})

    incidentlocators.INC_COPYNUMBER().then(($text)=> {
         inc_number = $text.text()
         console.log(inc_number)
       })

    incidentlocators.INC_000REFCOPY().then(($num)=>{

        triplezero_ref = $num.text()
        console.log(triplezero_ref)
    })


//    incidentlocators.INC_SETTOOUT_ICON().should('be.visible').click({force: true})
//    cy.waitUntil(()=>incidentlocators.INC_SETTOOUT_CONFIRMBOX(),{timeout: 30000}).should('have.css','display','block')
//    incidentlocators.INC_SETTOUT_YES().click({force: true})

})



Given ('I create access token',()=> {



    // ACCESS TOKEN
    export_access_token.EXPORT_ACCESSS_TOKEN().then((res: { body: { access_token: any; }; })=>{
    
    cy.log(JSON.stringify(res))
    
    accesstoken = res.body.access_token
    cy.log(accesstoken)
    
    //cy.wait(5000)
    
    })
    


})


And ('I set to out the incident API',()=> {

    
    cy.request({

    method  : 'POST',
    url     : `https://incidents.${Cypress.env('ENVIRONMENT')}.rfs.nsw.gov.au/api/v1/incidents/setincidentout`,
    headers : {
        'Content-Type'      :   'application/json',
        'Accept'            :   'application/json',
        'Authorization'     :   'Bearer ' + accesstoken
    },

    body    : {

        "incident_ref": inc_number.toString(),
        "triple_zero_ref": "",
        "incident_number_local": "",
        "stop_message_date": ""

    }

    }).then((res2)=>{


        cy.log(JSON.stringify(res2))
        expect(res2.body.is_success).to.true


    })




})



And ('I check the the incident in ICON webpage',()=> {

    cy.visit(`https://icon.uat.rfs.nsw.gov.au/FireIncident/FireIncident/Review/`+link_incID)

    incidentlocators.INCIDENTDETAILS().click({force: true})
    incidentlocators.INC_ASSERT_CALLOUT2().should('contain.text', 'Out')


})
