import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import dayjs from "dayjs";
import { times } from 'lodash';
import { truncate } from "lodash";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";
import BRSVOL from "../pages/BRSVOLlocators";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Operations from "../pages/Operations&fiu";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";



const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const birspage = new BIRS_COMMONPAGES()
const brsvol = new BRSVOL()

let incident_no = '22030256282'
let incident_start = '18/12/2021 05:52'
let rfs_call = '18/12/2021 15:52'

Given ('I open BRS for volunteers page',()=>{
    cy.loginToBRS()


})
And ('I assert for page title',()=> {

    cy.title().should('eq', 'BIRS for Volunteers')  

})
// And ('I will search for current incidents',()=> {

//     brsvol.VOL_INCSRCHBTTN().click({force: true})
//     brsvol.VOL_INCSRCH().type(incident_no, {force: true}).wait(10000)

// })

And ('I Select the incident and Copy the important details', ()=> {

    cy.waitUntil(()=>brsvol.VOL_INCOPEN().first(),{timeout: 60000}).click({force: true})
    brsvol.VOL_ADDNEWRPRT().click({force: true})
    brsvol.VOL_ADDBTTN().click({force: true}).invoke('show')
    brsvol.VOL_SELECTBRIGADE1().invoke('show').type('Albury{enter}')
    brsvol.VOL_SELECTBRIGADE2().invoke('show').click({force: true})
    brsvol.VOL_SELECT().click({force:true}).wait(10000)

})

And ('I put Brigade Info',()=> {
    
    brsvol.VOL_ADVISEDTIME1().click({multiple:true,force:true}).invoke('show')
    cy.wait(2000)
    brsvol.VOL_TIME2().invoke('show').click({force:true})
    brsvol.VOL_TIME3().invoke('show').click({force:true})
    cy.wait(4000)
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

})

And ('I Select appliances and put details',()=> {

    brsvol.VOL_ADDBTTN().click({force: true}).wait(6000)
    brsvol.VOL_SELECTEDAPPLIANCE().click({force:true}).wait(6000)
    
    //Appliance Details


    //Mobile Time
    brsvol.VOL_PRIMARYMOBILETIME1().click({force: true, multiple: true}).invoke('show')
    cy.wait(2000)
    brsvol.VOL_TIME2().invoke('show').click({force:true, multiple: true})
    brsvol.VOL_TIME3().invoke('show').click({force:true, multiple: true})

    //ONSCENE Time
    brsvol.VOL_PRIMARYONSCENETIME1().click({force:true, multiple: true}).invoke('show')
    cy.wait(2000)
    brsvol.VOL_PRIMARYONSCENETIME2().invoke('show').click({force:true, multiple: true})
    brsvol.VOL_TIME3().invoke('show').click({force:true, multiple: true})



    //Returning Time
    brsvol.VOL_PRIMARYRETURNINGTIME1().click({force:true, multiple: true}).invoke('show')
    cy.wait(2000)
    brsvol.VOL_PRIMARYRETURNINGTIME2().invoke('show').click({force:true, multiple: true})
    brsvol.VOL_TIME3().invoke('show').click({force:true, multiple: true})

    
    //In-Station Time
    brsvol.VOL_PRIMARYINSTATIONTIME1().click({force:true, multiple: true}).invoke('show')
    cy.wait(2000)
    brsvol.VOL_PRIMARYINSTATIONTIME2().invoke('show').click({force:true, multiple: true})
    brsvol.VOL_TIME3().invoke('show').click({force:true, multiple: true})

    //Next Page
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

    //Auxilary Details

    //Incident Respond

    brsvol.VOL_CHECKRESPOND().click({force:true})

    //Cylinder Used

    brsvol.VOL_CHECKCYLINDERS1().click({force:true})
    times(3,()=>{

        brsvol.VOL_CHECKCYLINDERS2().click({force:true})
    })

    //Foam used

    brsvol.VOL_CHECKFOAM1().click({force:true})
    times(3,()=>{

        brsvol.VOL_CHECKFOAM2().click({force:true})
    })
    times(5,()=>{

        brsvol.VOL_CHECKFOAM3().click({force:true})
    })


    //Next Page
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

})

And ('I Select Primary Crew Members and Role',()=>{

    //Select Crew
    brsvol.VOL_PRIMARYCREW1().click({force:true})
    brsvol.VOL_PRIMARYCREW2().click({force:true})
    brsvol.VOL_PRIMARYCREW3().click({force:true})
    brsvol.VOL_PRIMARYCREW4().click({force:true})

    //Next Page
    brsvol.VOL_NEXTPAGE().click({force: true})
    brsvol.VOL_NEXTPAGE().click({force: true})

    //BA OPERATOR

    brsvol.VOL_CHECKCREW1().click({force:true})
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)


    //Crew Leader

    brsvol.VOL_CHECKCREW2().click({force: true})
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

    //Drivers 

    brsvol.VOL_CHECKCREW3().click({force: true})

    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

    //Crew IN Private Vehicle
    brsvol.VOL_PRIMARYCREW1().click({force:true})
    brsvol.VOL_PRIMARYCREW2().click({force:true})
    brsvol.VOL_PRIMARYCREW3().click({force:true})

    brsvol.VOL_NEXTPAGE().click({force: true})
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

    //BA IN PRIVATE VEHICLE

    brsvol.VOL_CHECKCREW1().click({force:true})
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

    //AT Station crew member 

    brsvol.VOL_PRIMARYCREW1().click({force:true})
    brsvol.VOL_PRIMARYCREW2().click({force:true})

    brsvol.VOL_NEXTPAGE().click({force: true})
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)



})


And ('I Select Type of Call',()=>{

    brsvol.VOL_INCCATEGORY1().click({force: true})

    cy.waitUntil(()=>brsvol.VOL_INCCATEGORY2(),{timeout: 60000}).click({force: true})

    brsvol.VOL_INCTYPE().click({force: true})
    cy.waitUntil(()=>brsvol.VOL_INCCATEGORY2(),{timeout: 60000}).click({force: true})

    brsvol.VOL_INCSUBTYPE().click({force: true})
    cy.waitUntil(()=>brsvol.VOL_INCCATEGORY2(),{timeout: 60000}).click({force: true})

    //Next Page
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)


})

And ('I Select Action Taken',()=> {

    brsvol.VOL_INCCATEGORY1().click({force: true})
    cy.waitUntil(()=>brsvol.VOL_INCCATEGORY2(),{timeout: 60000}).click({force: true})

    brsvol.VOL_SECONDARYACTION().click({force:true})
    cy.waitUntil(()=>brsvol.VOL_INCCATEGORY2(),{timeout: 60000}).click({force: true})

    //Next Page
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)


})

And ('I Select from Problems Encountered',()=> {

        brsvol.VOL_INCCATEGORY1().click({force: true})
        cy.waitUntil(()=>brsvol.VOL_INCCATEGORY2(),{timeout: 60000}).click({force: true})

        brsvol.VOL_PROBLEMTYPE().click({force: true}).type('{enter}',{force: true})

        //Next Page
        brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

    })


And ('I Write Report Comments',()=> {

    brsvol.VOL_REPORTCOMMENTS().type('Automation Test Only _ Brs Integration',{force:true})

    //Next Page
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

    //Next Page
    brsvol.VOL_NEXTPAGE().click({force: true}).wait(2000)

})


And ('I Submit Report',()=> {

    brsvol.VOL_SUBMITREPORT1().click({force:true})
    brsvol.VOL_SUBMITREPORT2().click({force:true})

    brsvol.VOL_SUBMITREPORT().click({force:true})

    cy.waitUntil(()=> brsvol.VOL_SUBMITSUCCESS(),{timeout: 60000}).invoke('text').should('contain','Success!')

    cy.waitUntil(()=> brsvol.VOL_LOGOFF(),{timeout: 60000}).click({force: true})

    cy.ntlmReset()
    cy.clearCookies()
    cy.loginToICON()
})

And ('I Search for the incident into ICON',()=> {
    
    //Operations Tab
    operations.OPERATIONS_TAB().should('be.visible').click({force: true})
  
    //Incidents Dropdown
    incidentlocators.INCIDENT_TAB().click({force: true})

    //Search Brigade Tab
    brsvol.VOL_SEARCHBRIDAGETAB().click({force:true})

    //Type INCIDENT And Search

    brsvol.VOL_INCREF().clear().type(incident_no,{force: true})
    brsvol.VOL_SEARCHBTTN().first().scrollIntoView().click({force: true}).waitForLoadingSpinner()
    brsvol.VOL_INCNO().first().scrollIntoView().click({force:true}).waitForLoadingSpinner()

    
})

And ('I Import Brigade',()=> {

    birspage.BIRS_SELECTBRIGADETYPE().should('exist')

    //SELECT PRIMARY
    brsvol.VOL_SELECTBRIGADETYPE().focus().scrollIntoView().click({force:true})

    //SELECT IMPORT BTTN
    cy.waitForLoadingSpinner()
    brsvol.VOL_IMPORTBTTN().click({force:true})
    .waitForLoadingSpinner()


    // brsvol.VOL_IMPORTMSSG().invoke('text').and('contain', 'Albury City FCC Volunteer Report has been successfully imported.')


})

And ('I Validate and Complete Report',()=> {

    //Select Primary
    birspage.BIRS_SELECTBRIGADETYPE().scrollIntoView().focus().click({force: true})
    birspage.BIRS_PRIMARYBRIGADE().click({force: true}).waitForLoadingSpinner()
    
    //VAlidate And Save And Complete
    birspage.BIRS_PRIMARYBRIGADE_VALSAVEBTTN().scrollIntoView().click({force: true}).waitForLoadingSpinner()
    birspage.BIRS_PRIMARYBRIGADE_SAVEALERT().scrollIntoView().should('be.visible').contains('Appliance and crew details successfully validated and saved.')
    birspage.BIRS_COMPLETEPRIMARYBRIGADE().scrollIntoView().click({multiple: true ,force:true}).waitForLoadingSpinner()

    //Complete Error 
    birspage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birspage.BIRS_VALIDATEANDSAVE().click({force: true}).waitForLoadingSpinner()

    birspage.BIRS_VALIDATEANDSAVEBTTN().click({multiple: true ,force:true})
    cy.waitForLoadingSpinner()
    birspage.BIRS_VALIDATEANDSAVEALERT().should('be.visible')



})

And ('I enter Ignition Information',()=> {

    // Ignition_tab

    birspage.BIRS_SELECTBRIGADETYPE().click({force: true}) 
    birspage.BIRS_IGNITIONINFO().click({force: true}).waitForLoadingSpinner()


     //point of origin
    birspage.BIRS_POINTOFORIGIN1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birspage.BIRS_POINTOFORIGIN2()).should('exist')
    birspage.BIRS_POINTOFORIGIN3().should('contain.text','Other Location').click({multiple:true ,force: true})
    birspage.BIRS_POINTOFORIGIN4().should('exist').and('contain','Area of fire origin').click({multiple:true ,force: true})
    birspage.BIRS_POINTOFORIGIN5().click({multiple:true ,force: true})

    //Activity
    birspage.BIRS_ACTIVITY1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birspage.BIRS_ACTIVITY2()).should('exist')   
    birspage.BIRS_ACTIVITY3().should('exist').and('contain','Activity in ignition area undetermined').click({multiple:true ,force: true})
    birspage.BIRS_ACTIVITY4().click({multiple:true ,force: true})

    //Form of heat
    birspage.BIRS_FORMOFHEAT1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birspage.BIRS_FORMOFHEAT2()).should('exist') 
    birspage.BIRS_FORMOFHEAT3().should('exist').should('contain','Other').click({multiple:true ,force: true})
    birspage.BIRS_FORMOFHEAT4().click({multiple:true ,force: true})
    birspage.BIRS_FORMOFHEAT5().click({multiple:true ,force: true})

    //Eqipment involved
    birspage.BIRS_EQUIPMENTINVOLVED1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birspage.BIRS_EQUIPMENTINVOLVED2()).should('exist')  
    birspage.BIRS_EQUIPMENTINVOLVED3().should('exist').should('contain','Undetermined').click({multiple:true ,force: true})
    birspage.BIRS_EQUIPMENTINVOLVED4().should('exist').and('contain','Equipment involved in ignition undetermined').click({multiple:true ,force: true})
    birspage.BIRS_EQUIPMENTINVOLVED5().click({multiple:true ,force: true})


    //type of material
   birspage.BIRS_TYPEOFMATERIAL1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birspage.BIRS_TYPEOFMATERIAL2()).should('exist') 
   birspage.BIRS_TYPEOFMATERIAL3().should('exist').and('contain','Undetermined').click({multiple:true ,force: true})
   birspage.BIRS_TYPEOFMATERIAL4().should('exist').and('contain','Type of material undetermined').click({multiple:true ,force: true})
   birspage.BIRS_TYPEOFMATERIAL5().should('exist').click({multiple:true ,force: true})


    //Form of material
    birspage.BIRS_FORMOFMATERIALS1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birspage.BIRS_FORMOFMATERIALS2()).should('exist') 
    birspage.BIRS_FORMOFMATERIALS3().should('exist').and('contain','Other').click({multiple:true ,force: true})
    birspage.BIRS_FORMOFMATERIALS4().should('exist').and('contain','Multiple form of material ignited').click({multiple:true ,force: true})
    birspage.BIRS_FORMOFMATERIALS5().should('exist').click({multiple:true ,force: true})

    // Ignition factor
    birspage.BIRS_IGNITIONFACTORS1().scrollIntoView().click({force: true}).wait(6000).waitUntil(()=> birspage.BIRS_IGNITIONFACTORS2()).should('exist')
    birspage.BIRS_IGNITIONFACTORS3().should('exist').and('contain','Other ignition factor').click({multiple:true ,force: true})
    birspage.BIRS_IGNITIONFACTORS4().should('exist').and('contain','Other ignition factor').click({multiple:true ,force: true})
    birspage.BIRS_IGNITIONFACTORS5().click({multiple:true ,force: true})

    birspage.BIRS_SAVEIGNITION().click({multiple:true ,force: true})

})




And ('I enter Fire fighting details',()=> {

    birspage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birspage.BIRS_FIREFIGHTING().click({force: true}).wait(2000)

    birspage.BIRS_SAVEFIREFIGHTING().click({multiple: true ,force:true}).wait(2000)

})

And ('I complete Report',()=> {

    birspage.BIRS_SELECTBRIGADETYPE().click({force: true})
    birspage.BIRS_VALIDATEANDSAVE().click({force: true}).waitForLoadingSpinner()

    birspage.BIRS_BRIGADECOMPLETECBTTN().click({force: true})
    birspage.BIRS_COMPLETEALERT().should('be.visible').and('contain',' Incident information now marked as complete.')

    //Undo Conplete
    birspage.BIRS_UNDOVALANDCOMPLETE().click({force: true})
    cy.wait(4000)
    birspage.BIRS_UNDOVALANDCOMPLETEOK().click({force: true}).waitForLoadingSpinner()
    birspage.BIRS_COMPLETEALERT().should('be.visible').and('contain',' Incident information now marked as incomplete.')

    //Clear Bir
    brsvol.VOL_CLEARBIR().click({force: true})
    cy.wait(4000)
    brsvol.VOL_CLEARBIROK().click({force: true}).waitForLoadingSpinner()

    birspage.BIRS_COMPLETEALERT().should('be.visible').and('contain',' All brigade reporting information deleted')

     //CHECK PRIMARY BRIGADE CONTAINS NO DATA
     birspage.BIRS_SELECTBRIGADETYPE().focus().click({force: true})
     birspage.BIRS_PRIMARYBRIGADE().click({force: true}).waitForLoadingSpinner()
     birspage.BIRS_PRIMARYBRIGADE_VALSAVEBTTN().should('not.be.visible')
 
})
