// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// Blockhost : "spatial.uat.rfs.nsw.gov.au"


import 'cypress-wait-until';
import "cypress-ntlm-auth/dist/commands";
import 'cypress-match-screenshot'; 
import 'cypress-file-upload';
import dayjs from "dayjs";
import { Serializer, serialize } from 'v8';
import { any } from 'cypress/types/bluebird';
import { ReadStream, write, writeFile } from "fs";
import { object } from 'check-more-types';
import { indexOf, map, sum } from 'lodash';
import { isClassElement } from 'typescript';
import * as _ from 'lodash-es';


declare global { 
    namespace Cypress {
        interface Chainable {
            loginToICON(url?: string, username?: string, password?:string): Chainable<any>
            loginToICONuser(url?: string, username?: string, password?:string): Chainable<any>
            loginToICONScriptTEST(url?: string, username?: string, password?:string): Chainable<any>
            loginToICON_withDISPATCH_perm(url?: string, username?: string, password?:string): Chainable<any>
            loginToICONNoVisit(url?: string, username?: string, password?:string):Chainable<any>
            waitForLoadingSpinner(timeout?: number): Chainable<any>
            loginToCOP(): Chainable<any>
            loginToBRS(): Chainable<any>
            matchScreenshot(): Chainable<any>
            loginToONERFS(): Chainable<any>
            loginToDISPATCH(): Chainable<any>
            lloginToRFS() : Chainable<any>
            loginToACTIV() : Chainable<any>
            loginToICON1() : Chainable<any>
            loginToICON3():  Chainable<any>
            loginToIconAutomation() : Chainable<any>
            parseXlsx(inputFile: string): Chainable<any>
            loginToFireWeather(): Chainable<any>
            SetupFullIncidentData(): Chainable<any>
            SetupSearchData(): Chainable<any>
            SetupShellData(): Chainable<any>
            BrigardeReportData(): Chainable<any>
            Mapalertfor_inputLocation(): Chainable<any>
            AdvanceSearchByLabel(labelname: any, Values: any): Chainable<any>
            GetLabelby_Input(labelname: any, Values: any): Chainable<any>
            GetMSSGby_Role(mssg: any): Chainable<any>
            Get_buttonBy_name(Value: string): Chainable<any>
            GetLabelby_Select(labelname: any, Values: any): Chainable<any>
            GetLabelby_SelectizeInput(labelname: any, Values: any): Chainable<any>
            GetLabelby_CheckBox(labelname: any, Values: any): Chainable<any>
            GetLabelby_Date(labelname: any, Value: any): Chainable<any>
            GetValue_IncidentDetails(labelname: any): Chainable<any>
            mapArrays(array_names: string[], array_values: string[]): Chainable<any>

        }
    }
}


Cypress.Commands.add('loginToICON', (url=Cypress.env('ICON_HOST_URL'), username=Cypress.env('ICON_USERNAME'), password=Cypress.env('ICON_PASSWORD')) => {
    
    
            
    cy.url().then((URL) => {
           
        if (`https://${Cypress.env('ICON_HOST_URL')}` != URL ){
        
        
            cy.ntlm([url], username, password)
            cy.visit(`https://${Cypress.env('ICON_HOST_URL')}`,{failOnStatusCode: false})

        }

       else if(`https://${url}` == URL) {

            console.log('ALREADY LOGGED INTO ICON')


        }


    })

        
})


Cypress.Commands.add('loginToICONScriptTEST', (url=Cypress.env('ICON_HOST_URL'), username=Cypress.env('ICON_USERNAME'), password=Cypress.env('ICON_PASSWORD')) => {
    
    
            
    cy.url().then((URL) => {
           
        if (`https://${Cypress.env('ICON_HOST_URL')}` != URL ){
        
        
            cy.ntlm([url], username, password)
            cy.visit(`https://${Cypress.env('ICON_HOST_URL')}`,{failOnStatusCode: false})

        }

       else if(`https://${url}` == URL) {

            console.log('ALREADY LOGGED INTO ICON')


        }


    })

        
})


Cypress.Commands.add('loginToICONuser', (url=Cypress.env('ICON_HOST_URL'), username=Cypress.env('ICON_USER'), password=Cypress.env('PASSWORD_USER')) => {
    
    
            
    cy.url().then((URL) => {
           
        if (`https://${Cypress.env('ICON_HOST_URL')}` != URL ){
        
        
            cy.ntlm([url], username, password)
            cy.visit(`https://${Cypress.env('ICON_HOST_URL')}`,{failOnStatusCode: false})

        }

       else if(`https://${url}` == URL) {

            console.log('ALREADY LOGGED INTO ICON')


        }


    })

        
})

Cypress.Commands.add('loginToICON_withDISPATCH_perm', (url=Cypress.env('ICON_HOST_URL'), username=Cypress.env('ICON_USERNAME_DISPATCH'), password=Cypress.env('ICON_PASSWORD_DISPATCH')) => {
    cy.ntlm([url], username, password)
    cy.visit(`https://${Cypress.env('ICON_HOST_URL')}`,{failOnStatusCode: false})
});

Cypress.Commands.add('loginToICONNoVisit', (url=Cypress.env('ICON_HOST_URL'), username=Cypress.env('ICON_USERNAME'), password=Cypress.env('ICON_PASSWORD')) => {
    cy.ntlm([url], username, password)
});




Cypress.Commands.add('waitForLoadingSpinner', (timeout: number = 180000) => {
    cy.get('#loadingOverlay[style*="none"]', {timeout: timeout})
});

Cypress.Commands.add('loginToCOP', () => {
    cy.ntlm([Cypress.env('COP_HOST_URL')], Cypress.env('COP_USERNAME'), Cypress.env('COP_PASSWORD'))
    cy.visit(`https://${Cypress.env('COP_HOST_URL')}`)
});

Cypress.Commands.add('loginToBRS', () => {
    cy.visit(`https://${Cypress.env('BRS_HOST_URL')}`)
    cy.get('input[ng-model="username"]').type(Cypress.env('BRS_USERNAME'))
    cy.get('input[ng-model="password"]').type(Cypress.env('BRS_PASSWORD'))
    cy.get('#BrsLoginButton > span').click({force: true}).wait(20000)


});

Cypress.Commands.add('loginToONERFS', () => {
    // cy.get('input[type="submit"][value="Access Login"][id="input_submit"]').click({force:true}).wait(3000)0
    /*cy.get("a.auth0-lock-alternative-link").then($el => {
        if ($el.is(':visible')){
            cy.wrap($el).click()
    }  */ 

    cy.get('input[value="Access Login"]').click({force:true})




    
//})
});

Cypress.Commands.add('loginToICON3', () => {
    cy.ntlm([Cypress.env('ICON_HOST_URL')], Cypress.env('ICON_USERNAME_testuser3'), Cypress.env('ICON_PASSWORD_testuser3'))
    cy.visit(`https://${Cypress.env('ICON_HOST_URL')}`,{failOnStatusCode: false})
});


Cypress.Commands.add('loginToDISPATCH', () => {
    cy.ntlm([Cypress.env('DISPATCH_HOST_URL')], Cypress.env('DISPATCH_USERNAME'), Cypress.env('DISPATCH_PASSWORD'))
    cy.visit(`https://${Cypress.env('DISPATCH_HOST_URL')}`)
});



Cypress.Commands.add('loginToACTIV', () => {
    
    cy.get('#btn-login').click({force:true})
    cy.get('#lockContainer > div > div > form > div > div > div > div > div.auth0-lock-content-body-wrapper > div:nth-child(2) > span > div > div > div > div > div > div > div > div > div.auth0-lock-input-block.auth0-lock-input-username > div > input').type(Cypress.env('ACTIVE_USERNAME'))
    cy.get('#lockContainer > div > div > form > div > div > div > div > div.auth0-lock-content-body-wrapper > div:nth-child(2) > span > div > div > div > div > div > div > div > div > div.auth0-lock-input-block.auth0-lock-input-show-password > div > div > input').type(Cypress.env('ACTIVE_PASSWORD'))
    cy.get('#lockContainer > div > div > form > div > div > div > button > span').click({force: true}).wait(5000)


});



Cypress.Commands.add('loginToIconAutomation', () => {
    cy.ntlm([Cypress.env('ICON_HOST_URL')], Cypress.env('ICON_USERNAME_auto'), Cypress.env('ICON_PASSWORD_autopass'))
    cy.visit(`https://${Cypress.env('ICON_HOST_URL')}`)
});


Cypress.Commands.add("parseXlsx", (inputFile: string) => {
    return cy.task('parseXlsx', { filePath: inputFile })

});


Cypress.Commands.add('loginToFireWeather', () => {
    cy.ntlm([Cypress.env('FIREWEATHER_HOST_URL')], Cypress.env('ICON_USERNAME'), Cypress.env('ICON_PASSWORD'))
    cy.visit(`https://${Cypress.env('FIREWEATHER_HOST_URL')}`)
});

Cypress.Commands.add("Mapalertfor_inputLocation", () => {

    cy.get('.alert.alert-success').its('span').should(($alertsuccess) =>  {
                
        expect($alertsuccess).to.include.text('Location Set')
    
    })
                                 
    let Selected_LGA = ""
    cy.get('#SelectedLga').within(($selectedValue) => {

        Selected_LGA = $selectedValue.text(); 
        console.log(Selected_LGA)
    
    })
    
    cy.get('select#SelectedLga option').its('length')
    .then((n)=> Cypress._.random(0, n - 1))
    .find('option')
    .then(($opt)=> {

        cy.get('select#SelectedLga').select($opt.text()).not(Selected_LGA)
    
    })

    cy.get('input[value="Zoom to"][type="button"]')

    
    cy.get('.alert.alert-success').its('span').should(($alertwarning) =>  {
                
        expect($alertwarning).to.include.text(`Warning: Location not in ${Selected_LGA}`)
    
    })

    cy.screenshot('CHECK MAP AND LOCATION')



});


Cypress.Commands.add('GetValue_IncidentDetails', (labelname: any) => { 
    let Value: any;
    cy.get('dt').contains(labelname).next().within(($textarea) => {
        Value = $textarea.text().trim();
    }).then(() => {
        return Value
    })
})
Cypress.Commands.add('GetLabelby_Input', (labelname: any , Values: any) => {

    cy.get('label').contains(labelname).siblings('.controls').find('input').type(Values.toString());

});

Cypress.Commands.add('GetLabelby_Select',(labelname: any , Values: any)=> {

    cy.get('label').contains(labelname).siblings('.controls').find('select').select(Values.toString())


})

Cypress.Commands.add('GetLabelby_Date',(labelname: any , Value: any)=> {

    cy.get('label').contains(labelname).siblings('.controls').find('input').type(Value.toString())


})

Cypress.Commands.add('GetMSSGby_Role', (mssg: any) => {

    cy.get('div[role="status"]').contains(mssg.toString())
});

Cypress.Commands.add('Get_buttonBy_name', (Value: string) => {


    cy.get('button').contains(Value).should('exist').as('btn')
    cy.get('@btn').click()
    cy.waitForLoadingSpinner()


})


//****************************************************************************************/
            /****BELOW WE CREATE THE CUSTOM COMMAND TO TYPE INTO SELECTIZE 
                                FIELD BY THEIR LABELS */
//************************************* ***************************************************/

Cypress.Commands.add('GetLabelby_SelectizeInput',(labelname: any , Values: any)=> {

    cy.get('label').contains(labelname).siblings('.controls').find('div.selectize-control .selectize-input').type(Values.toString()).type('{enter}')
    cy.get('body').click({force:true})                               // click outside the list



})

//****************************************************************************************/
/*  ***BELOW WE CREATE THE CUSTOM COMMAND TO CHECK INTO CHECKBPOX OR 
                    RADIO BUTTON BY THEIR LABELS */
//****************************************************************************************/

Cypress.Commands.add('GetLabelby_CheckBox',(labelname: any , Values: any)=> {

    cy.get('label').contains(labelname).siblings('.controls').find('input[type="checkbox"]').check(Values) 

});

Cypress.Commands.add('AdvanceSearchByLabel',(labelname: any , Values: any)=> {
    
    if(labelname == "Reference" || labelname == "Incident Name" || labelname == "Incident Location" || labelname == "000 Reference" || labelname == "Incident Number - Local" || labelname == "Cost Centre" ||
        labelname == "Universal Id" || labelname == "Incident Controller" || labelname =="Start Date From" || labelname == "Start Date Until"){  
 
        cy.GetLabelby_Input(labelname, Values)
    }

    if (labelname == "LGA" || labelname == "RFS/ACT Region") {

        cy.get('label').contains(labelname).siblings('.controls').find('select').select(Values.toString())

    }
    if(labelname == "Hectares Burnt"){
        const From  =  Math.floor(Math.random() *8)+1
        const To  = Math.floor(Math.random() * 91)+1

        cy.get('label').contains(labelname).siblings('.controls').find('select').select(Values.toString())
        cy.get('label').contains('From').siblings('.controls').find('input').clear().type(From.toString())
        cy.get('label').contains('To').siblings('.controls').find('input').clear().type(To.toString())

    }

    let OTHERTAB : string[] = ["NPWS Reserves", "NPWS Areas", "NPWS Branches", "Lead Agencies", "Suspected Causes" , "Specialist Resource Type Used", "Backburn Types", "HR Method Types", "Include Incidents"]


    if ( labelname == "Incident Status" || labelname == "Incident Class" || labelname == "Legal Processes" ||  labelname == "Pendings" || labelname == "Foam was used" || labelname == "Notifiability"){ 
        
        if( labelname == "Incident Status" || labelname == "Incident Class" || labelname == "Legal Processes" ) {
            
            cy.get('label').contains(labelname).siblings('.controls').find('div.selectize-control .selectize-input').type(Values.toString()).type('{enter}')
            cy.get('body').click({force:true})
        }


        else if (labelname == "Pendings"){
            
            cy.get('label').contains(labelname).siblings('.controls').find('input[type="checkbox"]').check(Values) 
            
                      
        }
        else if(labelname == "Foam was used"){

            cy.get('label').contains(labelname).siblings('.controls').find('input[type="checkbox"]').check() 
            cy.get('label').contains(labelname).parent().next().children('.controls').find(`input#option${Values.toString().replace(' ', '')}`).should('have.attr','type', 'radio').check()               
        }        


        else if (labelname == "Notifiability"){

            cy.get('label').contains(labelname).siblings('.controls').children('.checkboxRow').find('input[type="radio"]').check(Values.toString()).check(Values.toString())

        }

        

    }

    else if( labelname == "Incident Types" ){

        cy.get ('.nav.nav-tabs li').contains(labelname).click({force: true})
        cy.get('label').contains(labelname).siblings('.controls').find('div.selectize-control .selectize-input').type(Values.toString()).type('{enter}')

    }

    else if (OTHERTAB.includes(labelname)){

        
        cy.get ('.nav.nav-tabs li').contains('Other').click({force: true})
        OTHERTAB.forEach((name) => {
            labelname = name

            cy.get('label').contains(labelname).siblings('.controls').find('div.selectize-control .selectize-input').type(Values.toString()).type('{enter}')

        })   

    }




})


//****************************************************************************************/
/*  ***BELOW WE CREATE THE JSON FOR FULL INCIDENT [BUSHFIRE, OTHER & NON FIRE TYPES]***  */
//----------------------------------------------------------------------------------------/



Cypress.Commands.add("SetupFullIncidentData", () => {
    
    
    //****************************************************************************************/
    //                              ***DEFINE DATA*** 
    //----------------------------------------------------------------------------------------/
    let LGAs = ['Albury', 'Armidale', 'Parramatta']
    let Address:any = [{Albury: '25 SWIFT ST ALBURY NSW 2640' , Armidale: '86 BARNEY ST ARMIDALE NSW 2350', Parramatta: '460 Church Street Parramatta NSW 2150'}, {Albury: '523 Swift street ALBURY NSW 2640', Armidale:'84 BARNEY St ARMIDALE NSW 2350', Parramatta: '354 Church Street Parramatta NSW 2150'}]
    let INCType = ['Bushfire', 'Other', 'Non'];
    let INCType_Value: any = [
        { Bushfire: 'Bushfire', Other: 'Backyard fire', Non: 'Explosion'},
        { Bushfire: 'Grass', Other: 'Stubble burn', Non: 'Hazmat'},
        { Bushfire: 'Scrub', Other: 'Transformer fire', Non: 'AFA'}];
    
    
    let SENSITIVE = ['YES','NO']
    let INCmaster = ['YES','NO']             
    let rapid = ['YES','NO']
    //****************************************************************************************/
    //                              ***RANDOMIZED DATA*** 
    //----------------------------------------------------------------------------------------F
    let RandomLGA = LGAs[Math.floor(Math.random()*(LGAs.length))]
    console.log('LGA_TO_USE :'+RandomLGA)
    let Random_Address;
    for (let i = 0; i < Address.length; i++) {
      if (Address[i][RandomLGA]) {
        Random_Address = Address[i][RandomLGA]
        break;
      }
    }
    let Random_INCType = INCType[Cypress._.random(INCType.length-1)];
    let Random_INCType_Value = ''
    
    for (let i = 0; i < INCType_Value.length; i++) {
        if (INCType_Value[i][`${Random_INCType.replace(' ', '_')}`]) {
            Random_INCType_Value = INCType_Value[i][`${Random_INCType.replace(' ', '_')}`];
            break;
        }
    }

    let Random_INCType_Value_ = INCType_Value[Math.floor(Math.random()* INCType_Value.length)]
    console.log('Random_INCType:', Random_INCType);
    console.log('Random_INCType_Value:', Random_INCType_Value_);
    
    let All_results =["Reference", "Incident_Name", "LGA", "Incident_Status", "Input_types"]
    let Random_sensitive = SENSITIVE[Math.floor(Math.random()* SENSITIVE.length)]
    let Random_master = INCmaster[Math.floor(Math.random()* INCmaster.length)]
    let Random_rapid = rapid[Math.floor(Math.random()* rapid.length)]
    let Random_local_no = `${Math.floor(Math.random()* 999998)+1}`
    let Random_tripleZero = `000-${Math.floor(Math.random()* 999999998)+1}`
    let Random_agency_received_ = `${dayjs().subtract(10,'minute').format('DD/MM/YYYY HH:mm')}`
    let Random_triple0_received_ = `${ dayjs().subtract(30,'minute').format('DD/MM/YYYY HH:mm')}`
    let Incident_details = "Reference No."

    //****************************************************************************************/
    //                              ***CREATE JSON*** 
    //----------------------------------------------------------------------------------------}
    cy.writeFile('./cypress/fixtures/Incident_generated/createfullincident.json', {

        inc_name : ` FullIncident Automation  ${dayjs().format('DD/MM/YYYY')}`,
        LGA             : RandomLGA,  
        incident_loc    : Random_Address,
        sensitive       : Random_sensitive,
        master          : Random_master,
        RART            : Random_rapid,
        local_inc_id    : Random_local_no,
        Triple0_ref     : Random_tripleZero,
        reason_noTriple0_ref : 'N/A',
        Rfs_RCVDCall    : Random_agency_received_, 
        triple0_RCVDCall : Random_triple0_received_,
        inc_type : INCType,
        type_value : Random_INCType_Value_,
        results_label: Incident_details

 
 
    })

    

});


//****************************************************************************************/
//             ***BELOW WE CREATE THE JSON FOR "" SHELL INCIDENT***              */
//----------------------------------------------------------------------------------------/


Cypress.Commands.add("SetupShellData", () => {
    
    //****************************************************************************************/
    //                              ***DEFINE DATA*** 
    //----------------------------------------------------------------------------------------/
    let Alert_level = [{value: 'A', name: '160', alert_rating: 'No Rating'}, {value: 'WA', name: '100', alert_rating: 'Extreme'}, {value: 'EW', name: '30', alert_rating: 'Catastrophic'}]
    let Resources = [{name: 'PersonnelResources.NSWRFS', value: `${Math.floor(Math.random()* 19)+1}`}, {name: 'AirCraftResources.Other', value: `${Math.floor(Math.random()* 19)+1}`}]
    let Address: any = [{Albury: '25 SWIFT ST ALBURY NSW 2640' , Armidale: '86 BARNEY ST ARMIDALE NSW 2350', Parramatta: '460 Church Street Parramatta NSW 2150'}, {Albury: '523 Swift street ALBURY NSW 2640', Armidale:'84 BARNEY St ARMIDALE NSW 2350', Parramatta: '354 Church Street Parramatta NSW 2150'} ]
    let Reason = ['Arson', 'Suspicious', 'Undetermined']
    let fieresize = ['1', '2', '3']
    let INCType = ['Bushfire', 'Other', 'Non'];
    let INCType_Value: any = [
        { Bushfire: 'Bushfire', Other: 'Backyard fire', Non: 'Explosion'},
        { Bushfire: 'Grass', Other: 'Stubble burn', Non: 'Hazmat'},
        { Bushfire: 'Scrub', Other: 'Transformer fire', Non: 'AFA'}];    let heading = ['South', 'North', 'East', 'West']
    let inc_status_ = ['1', '2', '3', '4']
    let tenure_list = ['Council', 'National park', 'State Forests'] 
    let Fire_Class = ["Class 1", "Class 2" , "Class 3"]
    let LGAs_ = ['Albury', 'Armidale', 'Parramatta']

    
    //****************************************************************************************/
    //                              ***RANDOMIZED DATA*** 
    //----------------------------------------------------------------------------------------}
    let Random_LGA = LGAs_[Cypress._.random(LGAs_.length-1)]
    console.log('LGA_TO_USe: '+Random_LGA)
    let Random_Address;
    for (let i = 0; i < Address.length; i++) {
      if (Address[i][Random_LGA]) {
        Random_Address = Address[i][Random_LGA];
        break;
      }
    }
    let Random_INCType = INCType[Cypress._.random(INCType.length-1)];
    let Random_INCType_Value = ''
    
    for (let i = 0; i < INCType_Value.length; i++) {
        if (INCType_Value[i][`${Random_INCType.replace(' ', '_')}`]) {
            Random_INCType_Value = INCType_Value[i][`${Random_INCType.replace(' ', '_')}`];
            break;
        }
    }

    
    console.log('Address_to_use: '+Random_Address);
    let Random_INCType_Value_ = INCType_Value[Math.floor(Math.random()* INCType_Value.length)]
    console.log('Random_INCType:', Random_INCType);
    console.log('Random_INCType_Value:', Random_INCType_Value_);
    let RandomAlert = Alert_level[Math.floor(Math.random()* Alert_level.length)]
    let RandomResource = Resources[Math.floor(Math.random()* Resources.length)]
    let Random_Firesize = fieresize[Math.floor(Math.random()* fieresize.length)]
    let Random_Heading = heading[Math.floor(Math.random()* heading.length)] 
    let Random_Incident_Status_ = inc_status_[Math.floor(Math.random()* inc_status_.length)]
    let Random_TenurList = tenure_list[Math.floor(Math.random()* tenure_list.length)] 
    let Random_FireClass = Fire_Class[Cypress._.random(Fire_Class.length-1)] 
    let Random_Reason = Reason[Math.floor(Math.random()* Reason.length)] 
    let Random_tripleZero_ref =`000${Math.floor(Math.random()* 9999999998)+1}`
    let Random_start_time = `${dayjs().subtract(30,'minute').format('DD/MM/YYYY HH:mm')}`
    let Incident_details_label = "Reference NO."

    //****************************************************************************************/
    //                              ***CREATE JSON*** 
    //----------------------------------------------------------------------------------------/

    cy.writeFile('./cypress/fixtures/Incident_generated/createshellincident.json', {

   

        inc_name : `Shell Automation ${Math.floor(Math.random()* 998)+1} ${dayjs().format('DD/MM/YYYY HH:mm:ss')}`,
        LGA : Random_LGA,
        start_time : Random_start_time,
        inc_type : INCType, 
        type_value : Random_INCType_Value_,
        class_fire: Random_FireClass,
        big : Random_Firesize,
        tenure_list: Random_TenurList,
        inc_status: Random_Incident_Status_,
        agency: '6',
        owner: 'NSW',
        cause: Random_Reason,
        incident_loc : Random_Address,
        sensitive : 'NO',
        master    : 'NO',              
        alert_level: RandomAlert, 
        Triple0_ref : Random_tripleZero_ref,
        heading: Random_Heading,
        threat : 'Yes',
        resources: RandomResource,
        other_info: 'MOVE TO YOUR SAFEZONE',
        results_label : Incident_details_label

    })

})



Cypress.Commands.add("BrigardeReportData", ()=> {




})


Cypress.Commands.add("SetupSearchData", ()=> {


    let Start_Date_From = `${dayjs().subtract(60,'day').format('DD/MM/YYYY HH:mm')}`
    let Start_Date_Until = `${dayjs().subtract(62,'day').format('DD/MM/YYYY HH:mm')}`
    let Reason_for_change = "** For Automation run **"

    cy.writeFile('functionaltesting/ICONCypress/cypress/fixtures/Incident_generated/searchdata.json', {

        Start_Date_From : Start_Date_From,
        Start_Date_Until : Start_Date_Until,
        Reason_for_change : Reason_for_change

    })


})
