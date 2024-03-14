/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

import dayjs from "dayjs";
import INCIDENTLOCATORS from "./Incidentlocators"
import { any, each } from "cypress/types/bluebird";
import {getSharedContext_FullIncident, getSharedContext_IncidentResults, getSharedContext_ShellIncident, setSharedContext_FullIncident, setSharedContext_IncidentResults} from "../pages/context";

const incidentlocators = new INCIDENTLOCATORS();

let Universal_Id: string
let jsonData_Full : any
let jsonData_Shell: any
let jsonData_Result: any



//************************************************************************************************ 
/*
                    THIS IS COMMON LOCATOR PAGE AND FUNVTIONS

                                                                                                 */
//*************************************************************************************************                                 
    


class INC_COMMONLOCATORS{


    //*************************************************************************************************//
    /******************INCIDENT CREATE AND OTHER INCIDENT SEARCH AND RELATED FUNCTIONS*****************/
    //************************************************************************************************//                                
    
    PAGE_HEADER = ()=> cy.get(' h1')

    INC_NONFIRE_TYPE = ()=>  cy.get('#nonfiretype')

    INC_OTHERFIRE_TYPE = ()=> cy.get('#otherfiretype')

    INCIDENT_INFORMATION_HEADER = ()=> cy.get('div h2').contains('Incident Information')

    TOGGLE_SENSITIVE_ADDRESS = ()=> cy.contains('Sensitive Address Information')

    TOGGLE_MASTER_INC = () => cy.get('#IsMaster')

    TOGGLE_RART =  () => cy.get('#RespondedByRapidResponseTeams')

    TRIPLE0_NUMBER = ()=> cy.get('#TripleOReferenceNumber')

    REASON_NO_TRIPLE0REF = () => cy.get('#Reason') 

    TRIPLE0_CALL_RECEIVED =() => cy.get('[name= "TripleOCallReceiveDateTime"]')

    AGENCY_CALL_RECEIVED = ()=> cy.get('[name="RFSReceivedDateTime"]')

    INCIDENT_LOCATION = ()=> cy.get('#MapViewModel_Address_FormattedAddress')
    
    ZOOMBUTTON_INC_MAP = ()=> cy.get('input[value="Zoom to"][type="button"]')
    
    INCIDENT_NAME = ()=> cy.get('#IncidentName')

    INC_LGA = ()=> cy.get('#SelectedLga')
    
    INC_SAVE_ = ()=> cy.get('[type = "submit"]')


    INCIDENTDETAILS = ()=> cy.get('[href="#incidentSummary"]').as('incidentdetails_toogle')
    

    INCIDENT_ALERTINFO_ONCREATE = ()=> cy.get('.alert.alert-info')
    

    SITREP_ROWS_ONTABLE = ()=> cy.get ('#sitReps > tbody > tr > td:nth-child(2)')

    INCIDENT_REFERENCE_NO = ()=> cy.get('dd a[href]')
    
    INCIDENT_UNIVERSAL_ID = () =>  cy.get('div.span4.incident-summary > div > div > dl > dd:nth-child(16)')

    INC_ALERT_BTTN = ()=>   cy.get('#btnShowAlert')
 
    INC_ALERT_MODAL = () => cy.get('#alertModal > div.modal-body')
 
    INC_ALERT_BTTN_OK = ()=>   cy.get('#btnAlertLevelMatrixOk')

    INC_ALERTVALUE_SELECTED_ON_MODAL = () => cy.get('label#lblAlertLevel')

    SUCCESS_ALERT = ()=> cy.get('.alert.alert-success');







    // PARAMS_TO_USE = ((params: any[]) => {
        

    //     params.forEach((paramValue:any, index, jsonData: any ) => {
    //         paramValue = params[index+1]
    //         paramValue = paramValue !== undefined ? paramValue : jsonData[paramValue]
        
            

    //     return paramValue })

    // })


    
    INPUT_INCIDENT_NAME = (inc_name:string)=> {

        // const Generate_Random_for_NameSpace = `${Math.floor(Math.random()* 98)+1}-${dayjs().format('DD/MM/YYYY')}`
        this.INCIDENT_NAME().as('nameSPACE')
        cy.get('@nameSPACE').type(`${inc_name}`)
    
    }
 
    INPUT_LGA = (LGA: string)=> {

        this.INC_LGA().as('localGOVT')
        cy.get('@localGOVT').select(LGA)
    }

    
    SHELL_INC_TYPE_FIELD_ = (inc_type: string) => {
        cy.get(`select[id = "Selected${inc_type}FireIncidentType"]`).should('have.attr','name', `Selected${inc_type}FireIncidentType`)
        .as('SELECT_OTHER_OR_NON_FIRE')
    } 


    FULL_INC_TYPE_FIELD_ = (inc_type: string) => {
        cy.get(`select[id = "${inc_type.toLowerCase()}firetype"]`).should('have.attr','name', `Selected${inc_type}FireIncidentType`)
        .as('SELECT_OTHER_OR_NON_FIRE')
    }
    
    BUSHFIRE_LABEL_SHELL = (inc_type: string )=> {

        cy.get('h2').then(($textValue) => {

            const RESULTS = $textValue.text()
            const ARRAY_ = RESULTS.split(" ") 
            inc_type = ARRAY_[0].toLowerCase().replace("b", "B")
            cy.log("INC_TYPE: "+`${inc_type}`)

        }) 

    }

    BUSHFIRE_LABEL = (inc_type: string )=> {

        cy.get('label[for="SelectedBushFireTypes"]').should('contain.text', `${inc_type}`)
    }

    OTHER_FIRE_LABEL = (inc_type: string) => {


        cy.get(`label[for=Selected${inc_type}FireIncidentType]`).should('contain.text', `${inc_type}`)

    }
    
    
    Non_FIRE_LABEL = (inc_type: string) => {
       
       
        cy.get(`label[for=Selected${inc_type}FireIncidentType]`).should('contain.text', `${inc_type}`)

    }



 


    LOCATION_INPUT = (incident_loc: string) => {

        
        //CHECK THE ALERT MUST BE VISIBLE AND IN THE ALERT STAGE
        cy.get('.alert.alert-error').contains('Incident Location has not been set.').then(() => {
            cy.log('ERROR ALERT VISIBLE')
        })


        //INPUT THE INCIDENT LOCATION
        this.INCIDENT_LOCATION().as('location_address')
        cy.get('@location_address').type(`${incident_loc}`,{force: true}).wait(5000)
    
        this.ZOOMBUTTON_INC_MAP().click({force: true})

        cy.get('.alert.alert-success').should(($alertsuccess) =>  {
                
            expect($alertsuccess).to.include.text('Location Set')
        })
    

    }
    
    INCIDENT_BUSHFIRE_TYPE = (inc_type:string, type_value:string) =>{

        this.BUSHFIRE_LABEL(inc_type)


        cy.GetLabelby_SelectizeInput(inc_type, type_value)
    
    }


    INCIDENT_BUSHFIRE_SHELL = (inc_type: string, type_value: string) => {

        this.BUSHFIRE_LABEL_SHELL(inc_type)
        const labelBushfire_value = type_value.replace(/_(?=[A-Za-z0-9])/g, ' ')
        const Array_Bushfire_Values: string[] = labelBushfire_value.split(' ')
        const labelname = 'What type of fire is it'

        if (Array_Bushfire_Values.length > 1)  {

            for (let i = 0; i < Array_Bushfire_Values.length ;  i++) {

                cy.GetLabelby_SelectizeInput(labelname, Array_Bushfire_Values[i])

            }
        
        }
        else {

            cy.GetLabelby_SelectizeInput(labelname, Array_Bushfire_Values)

        }




    }


    INC_TENURE_SELECTize =  (tenure_list: string)=> {

        const labelTenure_value = tenure_list.replace(/_(?=[A-Za-z0-9])/g, ' ')
    
        const Array_Tenure_Values: string[] = labelTenure_value.split(' ')
        const labelname = 'What tenure(s) is it on'

        if (Array_Tenure_Values.length > 1)  {

            for (let i = 0; i < Array_Tenure_Values.length ;  i++) {

                cy.GetLabelby_SelectizeInput(labelname, Array_Tenure_Values[i])

            }
        
        }
        else {

            cy.GetLabelby_SelectizeInput(labelname, Array_Tenure_Values)

        }


        

    }

    
    FULL_INCIDENT_NONFIRE_AND_OTHERTYPE = (inc_type: string, type_value: string)=>  {
        
        cy.get(`label[for=Selected${inc_type}FireIncidentType]`).should('contain.text', `${inc_type}`)

        this.FULL_INC_TYPE_FIELD_(inc_type)

        cy.get('@SELECT_OTHER_OR_NON_FIRE').select(`${type_value}`)
        cy.log(`selected Type: ${inc_type}`)
            
    }    


    SHELL_INCIDENT_NONFIRE_AND_OTHERTYPE = (inc_type: string, type_value: string)=>  {
        
        cy.get(`label[for=Selected${inc_type}FireIncidentType]`).should('contain.text', `${inc_type}`)

        this.SHELL_INC_TYPE_FIELD_(inc_type)

        cy.get('@SELECT_OTHER_OR_NON_FIRE').select(`${type_value}`)
        cy.log(`selected Type: ${inc_type}`)
            
    }    



    SCROLL_INCIDENT_INFORMATION_SECTION = () => {

        this.INCIDENT_INFORMATION_HEADER().scrollIntoView()

    }
            


    SENSITIVE_ADDRESS_INFORMATION = (sensitive: String) => {    
        this.TOGGLE_SENSITIVE_ADDRESS()
        cy.get('.switch-animate > label[for="SensitiveAddressInformation"]')
        .as('sensitiveCheckbox')
        .should('exist')
        .within(($checkbox)=> { 
            
            if(sensitive =='YES'){

                cy.wrap($checkbox).click({force:true})
                .waitUntil(() => cy.get('@sensitiveCheckbox').parent().should('exist').and('have.attr', 'class' ,'switch-on switch-animate'))
            }
            
            else if(sensitive =='NO'){
                cy.get('@sensitiveCheckbox').parent().should('exist').and('have.class', 'switch-animate switch-off')
            }
            
        })         
    
    

    }   


    MASTER_INCIDENT = (master: string) => {


        this.TOGGLE_MASTER_INC()

        cy.get('.switch-animate > label[for="IsMaster"]').scrollIntoView()
        .as('masterincident')
        .should('exist')
        .within(($checkbox)=> { 
            
            if(master =='YES'){

                cy.wrap($checkbox).click({force:true})
                .waitUntil(() => cy.get('@masterincident').parent().should('exist').and('have.attr', 'class', 'switch-on switch-animate'))
            }
            
            else if(master =='NO'){
                cy.get('@masterincident').parent().should('exist').and('have.attr', 'class','switch-animate switch-off')
            }

        
            
        })
    
    }

    RART_DEPLOYED = (RART: string) => {
        this.TOGGLE_RART()
        cy.get('.switch-animate > label[for="RespondedByRapidResponseTeams"]')
        .as('RART_DEP')
        .should('exist')
        .within(($checkbox)=> { 
            
            if(RART==='YES'){

                cy.wrap($checkbox).click({force:true})
                .waitUntil(() => cy.get('@RART_DEP').parent().should('exist').and('have.attr', 'class', 'switch-on switch-animate'))
            }
            
            else if(RART==='NO'){
                cy.get('@RART_DEP').parent().should('exist').and('have.attr', 'class', 'switch-animate switch-off')
            }
            
        })


    }

    INC_LOCAL_NUMBER = (local_inc_id: string )=> {

        //****************************************************************************
        // if Examples USERBASED DATA WANTS A RANDOM VALUE
        // local_inc_id = `${Math.floor(Math.random() * 100000000)}`
        //****************************************************************************

        incidentlocators.LOCALINC_NUMBER().type(`${local_inc_id}` ,{force: true}).as('localno_inc')
        

    }

    INC_TRIPLE0_NUMBER = (Triple0_ref: string)=>{
    
        //****************************************************************************
        // if Examples USERBASED DATA WANTS A RANDOM VALUE
        //triple0_ref = `000-${Math.floor(Math.random() *999998555)+1}`
        //****************************************************************************
        
        
        this.TRIPLE0_NUMBER().type(`${Triple0_ref}`, {force: true}).as('triple_0number')

    
    }

    INC_REASON_NO_TRIPLE0 = (reason_noTriple0_ref: string) => {


        this.REASON_NO_TRIPLE0REF().then(($TEXT) => {
            const triple_0number = $TEXT.text();

            
            if (triple_0number.length > 0) {
                cy.log('NO REASON TO BE NOTED')     
            }
            else{

                this.REASON_NO_TRIPLE0REF().type(`${reason_noTriple0_ref}`,{force:true})
            }
        })

        
    }

    TRIPLEZERO_NUMBER_CALLRCVD =  (triple0_RCVDCall: string) => {


        incidentlocators.TRIPLE0_CALL_RECEIVED().as('triple0calltime').scrollIntoView().within(($000ReceivedDateTimeField)=>{

            // ****************************************************************************
            // if Examples USERBASED DATA WANTS A RANDOM VALUE
            let triple0_calltime  = dayjs().format(triple0_RCVDCall);
            // ****************************************************************************

            cy.wrap($000ReceivedDateTimeField).should('be.empty').type(`${triple0_calltime}`,{force:true})
        
        })    

        
    

    }   

    RFS_AGENCY_CALLRCVD = (Rfs_RCVDCall: string) => {


        incidentlocators.AGENCY_CALL_RECEIVED().as('rfscalltime').scrollIntoView().within(($agencyReceivedDateTimeField)=>{
            
            //****************************************************************************
            // if Examples:::USERBASED DATA WANTS A RANDOM VALUE
            let Rfs_calltime  = dayjs().format(Rfs_RCVDCall)
            //****************************************************************************


            cy.wrap($agencyReceivedDateTimeField).should('be.empty').type(`${Rfs_calltime}`,{force:true})            
            
            return Rfs_calltime

            
        })    

    }


    INC_AREA_SIZE = (big: string) => {
        //****************************************************************************
        // if Examples:::USERBASED DATA WANTS A RANDOM VALUE
        // const area_size = `${Math.floor(Math.random() * 8)+1}` 
        //****************************************************************************

        incidentlocators.INC_FIRESIZE_BUSH().as('firesize').clear()
        cy.get('@firesize').type(`${big}`,{force: true})

    }


    INCIDENT_SET_ALERT = (alert_value:string , alert_rating:string , alert_name: string ) => {
       
        this.INC_ALERT_BTTN().as('set_alert_bttn').scrollIntoView()
        cy.get('@set_alert_bttn').click()
        
        this.INC_ALERT_MODAL().as('alert_modal_box').should('be.visible')

         
        
        cy.get(`[value= ${alert_value}][name=${alert_name}]`).as('selected_alert')

        cy.get('@selected_alert').parent().siblings().first().contains(alert_rating)
        cy.get('@selected_alert').click()

        this.INC_ALERT_BTTN_OK().click()
        
        this.SUCCESS_ALERT().contains('Selected Alert Level: '+ alert_value )
    }



    INC_START_DATE = (start_time:string )=> {

        //****************************************************************************       
        // if Examples:::USERBASED DATA WANTS A RANDOM VALUE
        // const start_date_time = dayjs().sbtract(50,'minute').format('DD/MM/YYYY HH:mm');u
        //****************************************************************************

        incidentlocators.INC_STARTDATETIME_().type(`${start_time}`,{force: true})


        return  start_time
    }

    INC_DIRECTION = (heading: string)=> {


        incidentlocators.INC_DIRECTION_BUSH().type(`${heading}`,{force: true})

    }



    
    INC_STATUS_= (inc_status:string)=> {

        incidentlocators.INC_STATUS().as('incidentstatus')
        cy.get('@incidentstatus').select(`${inc_status}`)
        
        return inc_status
    }


    INC_RESPONSIBLE_AGENCY = (agency: string) => {


        incidentlocators.INC_RESPONSIBLE_AGENCY_().select( `${agency}` ,{force: true})



    }

    INC_PROPERTY_IN_THREAT = (potential_threat: string) => {

        //DEFAULT TO YES
        incidentlocators.INC_PROPERTY_THREAT().within(($threat) => {


            const value = $threat.text()
            expect(value).to.include(potential_threat)

   

        })


    }

    
    INC_OWNER = (owner: string) => {


        //DEFAULT TO NSW
        incidentlocators.INC_OWNER_().within(($ownervalue) => {
         

            const ownervalue = $ownervalue.text()

            expect(ownervalue).to.include(owner)
        
        })


    }



    INC_CAUSE_SUSPECT = (cause: string) => {

        incidentlocators.INC_SUSPECTED_CAUSE_().select( `${cause}` ,{force: true})

        return cause    
    }   


    INC_SELECT_FIRE_CLASS = (class_fire:string)=> {

    cy.scrollTo('top')
    incidentlocators.FIRE_CLASS_SR().focus().as('fireclass')
    cy.get('@fireclass').select(`${class_fire}`, {force:true})
    

   }


    INC_isResourcesTablel_Visible = () => {

        incidentlocators.RESOURCES_ROWS().should('be.visible')
        incidentlocators.RESOURCES_COLS().should('be.visible') 

    }


    
    INC_RESOURCRES_LIST =(value: string , name: string)=> {


        this.INC_isResourcesTablel_Visible()
        cy.get(`[name = "ResourceViewModel.${name}"]`).as('resoucesname.resourcetype')
        cy.get ('@resoucesname.resourcetype').clear()
                                             .type(`${value}`)
         
    
    
    }


    INCIDENT_SAVE=(value: string)=> {

        this.INC_SAVE_().contains(value).as('SaveButton')

        cy.waitUntil(()=>cy.get('@SaveButton')).focus().dblclick({force: true})



    }


    INCIDENT_DETAILS_TOOGLE = (value: string)=> {

        this.INCIDENTDETAILS().should('exist').contains(`${value}`)

        cy.get('@incidentdetails_toogle').click({force :true})


    }
    FULL_PAGE_SCREENSHOT = (pagename: string)=> {
        pagename = `${Cypress.currentTest.title}:${pagename}`


        cy.screenshot('SCREENSHOT: '+pagename, {capture: 'fullPage'})

    }

    



    MESSAGES_ASSERTION_ = (mssg: string)=> {

        
         
        this.INCIDENT_ALERTINFO_ONCREATE().as('alert_message').should('be.visible').contains(`${mssg}`)


    }   

    FULL_INC_SITREP_STATUS_ONTABLE = () => {

        this.SITREP_ROWS_ONTABLE().contains('(SR) Draft (Going)')

    }



    GET_FULL_INCIDENT_SHAREDDATA = (results_label: string) => {



    }


    GET_INC_PRORPERTY_DETAILS_  = (results_label: string) => {

        this.INCIDENT_UNIVERSAL_ID().then(($text) => {
            Universal_Id = $text.text() 

            if (Universal_Id.length == 0){
                cy.wait(10000)
                cy.reload()
                cy.get('@incidentdetails_toogle').click({force :true})
                this.INCIDENT_UNIVERSAL_ID().then(($text : any) => {
                    Universal_Id = $text.text()
                    if (Universal_Id.length > 0){

                        cy.log(Universal_Id)
                    }
                
                })
            }

        })
        // const fileName = Cypress.currentTest.title.replace(/\(example #\d+\)/,'').trimEnd()
        
        const fileName = Cypress.currentTest.title
        const filepath = `cypress/fixtures/Incident_results/${fileName.trim()}.json`

        let Arrayoflabels: string[] = results_label.includes(',') ? results_label.trim().split(',') : [results_label.trim()];
        console.log(Arrayoflabels);
        
    
        
        let modfd_Arrayof_labels = Arrayoflabels.map((label) => {
            label = label.replace(/_(?=[A-Za-z0-9])/g, ' ');
            return label.trim();
        });

        let Values: string[] = [];

      
        cy.wrap(modfd_Arrayof_labels).each((label) => {
            cy.get('dt').contains(label.toString()).next().then(($textarea) => {
                const Value_of_each_label = $textarea.text().trim();
                Values.push(Value_of_each_label);
            });
        }).then(() => {
            // Creating the final result object
            console.log(Values)
            let resultObject: { [key: string]: string } = {};
        
            modfd_Arrayof_labels.map((label, index) => {
                resultObject[label] = Values[index];
            });
        
            // Writing the result object to a JSON file
            const jsonString: string = JSON.stringify(resultObject, null, 2);
        
            cy.writeFile(filepath, jsonString).then(() => {
                cy.log(`JSON string has been written to ${filepath}`);
            });
        
            cy.readFile(filepath).then((data) => {
                cy.log(data)

                if (fileName.includes('Full Incident') ) {
                    jsonData_Full = getSharedContext_FullIncident('jsonData_fulltype')
                    data.LGA = jsonData_Full.LGA
                    data.Rfs_RCVDCall = jsonData_Full.Rfs_RCVDCall
                    data.triple0_RCVDCall = jsonData_Full.triple0_RCVDCall

                   
                    cy.writeFile(filepath, JSON.stringify(data))

                }

                else if (fileName.includes('Shell Incident') ){

                    jsonData_Shell = getSharedContext_ShellIncident('jsonData_shelltype')
                    data.LGA = jsonData_Shell.LGA
                    data.start_time = jsonData_Shell.start_time

                    cy.writeFile(filepath, JSON.stringify(data))
 
                }
                
            })


        });

        return cy.readFile(filepath).then((data) => {
            cy.log(data)
    
            jsonData_Result = data
            cy.log('JSON DATA: '+jsonData_Result)
            setSharedContext_IncidentResults('jsonData_resultstype', jsonData_Result);
            cy.log('Context shared: '+jsonData_Result)
        })


    }

}

//     COPY_INCIDENT_DETAILS = (name: string) => {

//         if (name == 'Reference No.' || name == 'Universal Id' || name == 'Name') {
            
//             if (cy.contains(`${name}`)) {

//                 cy.log('LABELS ARE VISIBLE')
//             }
//             else{
                
//                 cy.get('@incidentdetails_toogle').click({force :true})

//             }
//             const fileName = Cypress.currentTest.title.replace(/\(example #\d+\)/, '').trim()
//             // const dateTime = dayjs().format('HH.mm')
//             const filepath = `cypress/fixtures/results/${fileName}.json`

//             let IncidentReference = ''
//             this.INCIDENT_REFERENCE_NO().then(($text) => {

//                 IncidentReference = $text.text();
//                 cy.log(IncidentReference)
//                 cy.writeFile( filepath, JSON.stringify({Reference: IncidentReference}));            


//             })
        

//             this.INCIDENT_UNIVERSAL_ID().then(($text) => {
//                 Universal_Id = $text.text()

//                 if (Universal_Id.length == 0){
//                     cy.wait(10000)
//                     cy.reload()
//                     cy.get('@incidentdetails_toogle').click({force :true})
//                     this.INCIDENT_UNIVERSAL_ID().then(($text) => {
//                         Universal_Id = $text.text()
                        

//                         cy.readFile(filepath).then((data) => {
//                             data.Universal_Id = Universal_Id
//                             cy.writeFile(filepath, JSON.stringify(data))
//                     })
                          
//                     })

                    
//                 }    
                
            
//                 else{
//                     cy.readFile(filepath).then((data) => {
//                         data.UniversalId = Universal_Id
//                         cy.writeFile(filepath, JSON.stringify(data))
//                     })                
//                 }
            
//             })
            
            
            
//             cy.get('dt').contains('Name').next().as('INCIDENTname')
//             cy.get('@INCIDENTname').within(($textarea) => {
                
//                 INCIDENT_NAME = $textarea.text()
//                 cy.log('Incident_name: ' + INCIDENT_NAME)
//                 cy.readFile(filepath).then((data) => {
//                     data.Incident_Name = INCIDENT_NAME
//                     cy.writeFile(filepath, JSON.stringify(data))
//                 })
            
            
//             })

            
//             }
//         ]

//         \\\\    
        
        



//         \\\\\\\\\\\\\\\\\\\\\\\


//         }    
        
//     }        


    
export default INC_COMMONLOCATORS