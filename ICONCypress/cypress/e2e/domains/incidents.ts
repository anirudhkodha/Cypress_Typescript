import { And } from "cypress-cucumber-preprocessor/steps/index";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";

class incident_domain {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()

    navigate_createFullIncident_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.CREATE_FULL_INCIDENT_TAB().click({force: true, timeout: 180000});      
    } 

    verify_createFullIncident_page = () => {

        this.incidentlocators.CREATEFULLINC_NAME().should('be.visible');
        this.incidentlocators.INC_LGA().should('be.visible')
        this.incidentlocators.CREATEFULLINC_MAPLOC().should('be.visible')
        this.incidentlocators.MAP_BOX().should('be.visible')
        this.incidentlocators.AGENCY_CALL_RECEIVED_DATE_TIME().should('be.visible')
        this.incidentlocators.BUSHFIRE_TYPE_TAB().should('be.visible')
        this.incidentlocators.INC_OTHERFIRE_TYPE().should('be.visible')
        this.incidentlocators.INC_FIRE_TYPE_CALLOUT().should('be.visible')
        cy.screenshot("CreateFullIncident");
    }

    save_fullIncident = () => {
        this.incidentlocators.SAVE_BTTN_FULLINC().click()
    }

    validate_mandatoryFields_errorOut_fullIncident = () => {

        this.incidentlocators.CREATEFULLINC_NAME().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_NAME_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Name is required.')
        this.incidentlocators.INC_LGA().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_LGA_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('LGA is required.')
        this.incidentlocators.CREATEFULLINC_MAPLOC().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_LOCATION_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Incident Location is required.')
        this.incidentlocators.AGENCY_CALL_RECEIVED_DATE_TIME().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.AGENCY_RCV_DATE_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('RFS Received Date Time is required.')
        this.incidentlocators.FIRE_TYPE_VALIDATION_MSSG().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('At least one incident type is required.')
    }

    navigate_createBushShell_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.INCCREATE_BUSHFIRESHELL1().click({force: true, timeout: 180000});      
    }

    verify_createBushShell_page = () => {

        this.incidentlocators.INC_NAME_BUSH().should('be.visible');
        this.incidentlocators.INC_LGA_BUSH().should('be.visible');
        this.incidentlocators.INCCREATE_BUSHFIRESHELL2().should('be.visible');
        this.incidentlocators.INC_STARTDATETIME_().should('be.visible')
        this.incidentlocators.INC_BUSHFIRETYPE_TAB().should('be.visible').click()
        this.incidentlocators.INC_BUSHFIRETYPE().should('be.visible')
        this.incidentlocators.INC_FIRESIZE_BUSH().should('be.visible')
        this.incidentlocators.INC_TENURE_TAB_().should('be.visible')
        this.incidentlocators.INC_RESPONSIBLE_AGENCY_().should('be.visible')        
        this.incidentlocators.INC_SUSPECTED_CAUSE_().should('be.visible')
        this.incidentlocators.INC_ALERT_LVL_BUSH1().should('be.visible')
        this.incidentlocators.INC_LOCATION_BUSH1().should('be.visible')
        this.incidentlocators.INC_DIRECTION_BUSH().should('be.visible')//threat current
        this.incidentlocators.INC_PROPERTY_THREAT().should('be.visible')
        this.verify_Resources_Table()        
        cy.screenshot("CreateBushShellIncident");
    }

    save_bushShell = () => {
        this.incidentlocators.SAVE_BTTN_FULLINC().click()
    }

    validate_mandatoryFields_errorOut_bushShell = () => {

        this.incidentlocators.INC_NAME_BUSH().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_NAME_ERROR().should('be.visible')
        .contains('Name is required.')
        .and('have.css', 'color', 'rgb(185, 74, 72)')        
        this.incidentlocators.INC_LGA_BUSH().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_LGA_ERROR().should('be.visible')
        .contains('LGA is required.')
        .and('have.css', 'color', 'rgb(185, 74, 72)')        
        this.incidentlocators.INC_STARTDATETIME_().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_STARTDATE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Start Date Time is required.')
        this.incidentlocators.INC_FIRESIZE_BUSH().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_FIRESIZE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('A positive number less than 1,000,000 is required.')
        this.incidentlocators.BUSH_FIRETYPE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('At least one incident type is required.')
        this.incidentlocators.BUSH_FIRETENURE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('At least one tenure is required.')
        this.incidentlocators.INC_RESPONSIBLE_AGENCY_().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_RESPAGENCY_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Responsible agency is required.')
        this.incidentlocators.INC_SUSPECTED_CAUSE_().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_SUSPCAUSE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Suspected Cause is required.')
        this.incidentlocators.BUSH_ALERTLVL_ERR().find('span').should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Current Alert Level is required.')
        this.incidentlocators.CREATEFULLINC_MAPLOC().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_LOCATION_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Incident Location is required.')
        this.incidentlocators.INC_CURRENT_THREAT().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_CURRENTTHREAT_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Current Threat is required.')
    }

    navigate_createOtherShell_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.INC_OtherShell_TAB().click({force: true, timeout: 180000});      
    }

    verify_createOtherShell_page = () => {

        this.incidentlocators.INC_NAME_BUSH().should('be.visible');
        this.incidentlocators.INC_LGA_BUSH().should('be.visible');
        this.incidentlocators.INCCREATE_BUSHFIRESHELL2().should('be.visible');
        this.incidentlocators.INC_STARTDATETIME_().should('be.visible')
        this.incidentlocators.INC_OTHER_TENURE_TAB().should('be.visible')
        this.incidentlocators.INC_RESPONSIBLE_AGENCY_().should('be.visible')  
        this.incidentlocators.INC_LOCATION_BUSH1().should('be.visible')
        this.incidentlocators.INC_PROPERTY_THREAT().should('be.visible')
        this.verify_Resources_Table()
        cy.screenshot("CreateOtherShellIncident");
    }    

    validate_mandatoryFields_errorOut_otherShell = () => {

        this.incidentlocators.INC_NAME_BUSH().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_NAME_ERROR().should('be.visible')
        .contains('Name is required.')
        .and('have.css', 'color', 'rgb(185, 74, 72)')        
        this.incidentlocators.INC_LGA_BUSH().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_LGA_ERROR().should('be.visible')
        .contains('LGA is required.')
        .and('have.css', 'color', 'rgb(185, 74, 72)')        
        this.incidentlocators.INC_STARTDATETIME_().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_STARTDATE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Start Date Time is required.')        
        this.incidentlocators.OTHER_FIRETENURE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('At least one Tenure is required.')
        this.incidentlocators.INC_RESPONSIBLE_AGENCY_().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_RESPAGENCY_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Responsible agency is required.')        
        this.incidentlocators.CREATEFULLINC_MAPLOC().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_LOCATION_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Incident Location is required.')       
    }

    navigate_createEvent_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.eventlocators.CREATE_EVENT_TAB().click({force: true, timeout: 180000});      
    }

    verify_createEvent_page = () => {

        this.eventlocators.INCIDENT_NAME().should('be.visible');
        this.eventlocators.LGA_NAME().should('be.visible');
        this.eventlocators.START_DATE().should('be.visible');
        this.eventlocators.EVENT_TYPE().should('be.visible');
        this.eventlocators.SELECTED_AGENCY().should('be.visible');
        this.eventlocators.TENURE_NAME().should('be.visible');
        this.eventlocators.INCIDENT_LOCATION().should('be.visible');
        this.eventlocators.MAP_BOX().should('be.visible');
        cy.screenshot("CreateEvent");
    }

    validate_mandatoryFields_errorOut_event = () => {
        this.eventlocators.INCIDENT_NAME().click()
        this.eventlocators.INCIDENT_NAME().should('have.css', 'border-color', 'rgb(149, 59, 57)')
        this.eventlocators.EVNT_NAME_ERROR().should('be.visible')
        .contains('Name is required.')
        .and('have.css', 'color', 'rgb(185, 74, 72)')        
        this.eventlocators.LGA_NAME().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.eventlocators.EVNT_LGA_ERROR().should('be.visible')
        .contains('LGA is required.')
        .and('have.css', 'color', 'rgb(185, 74, 72)')        
        this.eventlocators.START_DATE().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.eventlocators.EVNT_STARTDATE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Start Date Time is required.')  
        this.eventlocators.EVENT_TYPE().should('have.css', 'border-color', 'rgb(185, 74, 72)')      
        this.eventlocators.EVNT_TYPE_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Event Type is required.')
        this.eventlocators.SELECTED_AGENCY().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.eventlocators.EVNT_RESPAGENCY_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Responsible agency is required.')    
        this.eventlocators.EVNT_TENURE_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('At least one Tenure is required.')       
        this.eventlocators.INCIDENT_LOCATION().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.eventlocators.EVNT_LOCATION_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Incident Location is required.')       
    }

    navigate_createCallOut_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.INCCREATE_CALLOUT1().click({force: true, timeout: 180000}); 
    }

    verify_createCallOut_page = () => {

        this.incidentlocators.INC_NAME_CALLOUT().should('be.visible');
        this.incidentlocators.INC_LGA().should('be.visible');
        this.incidentlocators.INC_STARTDATETIME_().should('be.visible');  //Re used bush shell element      
        this.incidentlocators.INC_BUSHTYPE_CALLOUT().should('be.visible');
        this.incidentlocators.INC_OTHERFIRE_TYPE().should('be.visible');// reused other shell element
        this.incidentlocators.INC_FIRE_TYPE_CALLOUT().should('be.visible');
        this.incidentlocators.INC_TENURE_CALLOUT1().should('be.visible');
        this.incidentlocators.INC_RESPONSIBLE_AGENCY_().should('be.visible');//Re used bush shell element
        this.incidentlocators.INC_ACTIONSTAKEN_CALLOUT().should('be.visible');
        this.incidentlocators.INC_SUSPECTEDCAUSE_CALLOUT().should('be.visible');        
        this.incidentlocators.INC_LOCATION_CALLOUT1().should('be.visible');
        this.incidentlocators.INCCREATE_CALLOUT2().should('be.visible');
        this.incidentlocators.INC_RFSCALL_CALLOUT().should('be.visible');
        this.incidentlocators.INC_STOP_MESSAGE_CALLOUT().should('be.visible');
        this.incidentlocators.INC_RESOURCES_CALLOUT().should('be.visible');
        this.verify_Resources_Table()
        cy.screenshot("CallOut");
    }

    validate_mandatoryFields_errorOut_callout = () => {

        this.incidentlocators.INC_NAME_CALLOUT().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_NAME_ERROR().should('be.visible')
        .contains('Name is required.')
        .and('have.css', 'color', 'rgb(185, 74, 72)')        
        this.incidentlocators.INC_LGA().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_LGA_ERROR().should('be.visible')
        .contains('LGA is required.')
        .and('have.css', 'color', 'rgb(185, 74, 72)')        
        this.incidentlocators.INC_STARTDATETIME_().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_STARTDATE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Start Date Time is required.')  
        //this.incidentlocators.INC_FIRE_TYPE_CALLOUT().should('have.css', 'border-color', 'rgb(185, 74, 72)')      
        this.incidentlocators.CALLOUT_FIRETYPE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('At least one incident type is required.')
        this.incidentlocators.INC_TENURE_CALLOUT1().should('have.css', 'border-color', 'rgb(185, 74, 72)')      
        this.incidentlocators.CALLOUT_FIRETENURE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('At least one Tenure is required.') 
        this.incidentlocators.INC_RESPONSIBLE_AGENCY_().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_RESPAGENCY_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Responsible agency is required.')  
        this.incidentlocators.INC_ACTIONSTAKEN_CALLOUT().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.CALLOUT_ACTION_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Action is required.')
        this.incidentlocators.INC_SUSPECTEDCAUSE_CALLOUT().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.BUSH_SUSPCAUSE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Suspected Cause is required.')              
        this.incidentlocators.INC_LOCATION_CALLOUT1().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.INC_LOCATION_ERROR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Incident Location is required.')
        this.incidentlocators.INC_RFSCALL_CALLOUT().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.CALLOUT_RFSCALL_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('RFS Received Date Time is required.')
        this.incidentlocators.INC_STOP_MESSAGE_CALLOUT().should('have.css', 'border-color', 'rgb(185, 74, 72)')
        this.incidentlocators.CALLOUT_STOP_MESSAGE_ERR().should('be.visible')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
        .contains('Stop Message Date Time is required.')       
    }


    navigate_mergeIncidents_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.INC_MERGEINCIDENTSTAB().click({force: true, timeout: 180000}); 
    }

    verify_mergeIncidents_page = () => {

        this.incidentlocators.INC_SELECT_LGA().should('be.visible');        
        this.incidentlocators.INC_SELECT_LGA().select('0001')
        cy.url().should('include','SelectedLga=0001')
        this.incidentlocators.INC_INCIDENTLIST_TABLE().should('be.visible');
        this.incidentlocators.INC_INCIDENTLIST_TAB_COLS().then(items=>{
            cy.wrap(items[0]).contains('LGA').should('be.visible')
            cy.wrap(items[1]).contains('Incident/Event Name').should('be.visible')
            cy.wrap(items[2]).contains('Location').should('be.visible')
            cy.wrap(items[3]).contains('Reference').should('be.visible')
            cy.wrap(items[4]).contains('Type').should('be.visible')
            cy.wrap(items[5]).contains('Status').should('be.visible')
            cy.wrap(items[6]).contains('Lead Agency').should('be.visible')
            cy.wrap(items[7]).contains('Latest Sit/Rep').should('exist')
        })
        cy.screenshot('mergeIncidents')
        
    }

    merge_Incident = () => {
        this.incidentlocators.INC_SUBMITMERGE().click()
    }

    validate_errorOut_mergeInc = () => {

         this.incidentlocators.MERGE_ERR().should('be.visible')
        .contains('At least two incidents need to be selected for merging.')
        .and('have.css', 'color', 'rgb(185, 74, 72)')
    }

    navigate_brigadeReportSearch_page = () => {

        this.eventlocators.INCIDENT_TAB().click();
        this.incidentlocators.INC_BRIGADEREPORTTAB().click({force: true, timeout: 180000}); 
    }

    verify_brigadeReportSearch_page = () => {

        this.incidentlocators.INC_INCIDENTSEARCH().should('exist');
        this.incidentlocators.INC_SEARCH_BTN().should('exist');
        cy.screenshot("BrigadeReportsearch");
    }

    verify_Resources_Table = () =>{

        this.incidentlocators.RESOURCES_COLS().then(items=>{
            cy.wrap(items[1]).contains('RFS').should('be.visible')
            cy.wrap(items[2]).contains('FRNSW').should('be.visible')
            cy.wrap(items[3]).contains('NPWS').should('be.visible')
            cy.wrap(items[4]).contains('FCNSW').should('be.visible')
            cy.wrap(items[5]).contains('Other').should('be.visible')
            cy.wrap(items[6]).contains('ACTRFS').should('be.visible')
            cy.wrap(items[7]).contains('ACTFR').should('be.visible')
            cy.wrap(items[8]).contains('ACTPCS').should('be.visible')
            cy.wrap(items[9]).contains('Total').should('be.visible')
        })
        this.incidentlocators.RESOURCES_ROWS().then(items=>{
            cy.wrap(items[0]).find('td').contains('Field Personnel').should('be.visible')
            cy.wrap(items[1]).find('td').contains('Appliances').should('be.visible')
            cy.wrap(items[2]).find('td').contains('Heavy Plant').should('be.visible')
            cy.wrap(items[3]).find('td').contains('Other').should('be.visible')
            cy.wrap(items[4]).find('td').contains('All Aircraft').should('be.visible')
            cy.wrap(items[5]).find('td').contains('IMT').should('be.visible')
            cy.wrap(items[6]).find('td').contains('RART/RAFT').should('be.visible')
            cy.wrap(items[7]).find('td').contains('1st Responder').should('be.visible')
        })

    }

    click_addSITREP(){
        this.incidentlocators.INC_ADD_SITREP().click()
    }

    verify_INCNAME_INCDETPAGE=(name:string)=>{
        expect(this.incidentlocators.INC_NAME_HEAD().contains(name))
    }


}
export default incident_domain;