import { when } from "cypress/types/jquery";
import { title } from "process";
import { escape, stringify } from "querystring";
import INC_COMMONLOCATORS from "./incident_common_pages";
import assert from "assert";


const common_locators = new INC_COMMONLOCATORS();


class Operations{
    TOPMENUS = ()=> cy.get('ul[class="nav"] > li').as('breadcrumbs')

    OPEN_MENU_ = (menuString: string , submenu_item: string ) => {
        const [menu, subMenu] =  menuString.split(' > ');

        this.TOPMENUS()

        cy.get('@breadcrumbs').should(($breadcrumbs) => {
            
            expect($breadcrumbs).to.contain(`${menu}`)
        })


        cy.get('@breadcrumbs').contains(`${menu}`).click({force:true})
        
        

        cy.get('ul[class="nav"] > li[class="dropdown open"] > ul[class="dropdown-menu"]').as('menu_dropdown_list').then(($sub_menu) => {
            
            expect($sub_menu).to.contain(subMenu)
            
        })

        cy.get('@menu_dropdown_list').contains(subMenu).focus().click({force: true})

 
        if (submenu_item) { 

            cy.get(`ul[class="nav"] > li[class="dropdown open"] > ul[class="dropdown-menu"] > li > ul[class="dropdown-menu"] > li`).as('submenu_dropdown_list').then(($submenu_dropdown_list) => {
                
                
                cy.log (submenu_item)
                expect($submenu_dropdown_list).to.contain(`${submenu_item}`)
                cy.get('@submenu_dropdown_list').contains(`${submenu_item}`).click({force: true})

            })


        }
     
        else{

            cy.log('NO SUBMENU DROPDOWN')
        }
        
    }

    VALIDATE_LANDING_FROM_TOPMENU = (validatepage: string)=> {
    


        common_locators.PAGE_HEADER().contains(validatepage)
                     


    }


//*******************************************************************************************************************************************
//--------------------------------------------FIU LOCATORS-----------------------------------------------
//*******************************************************************************************************************************************

    OPERATIONS_TAB = ()=> cy.get(':nth-child(1) > :nth-child(1) > .dropdown-toggle > .caret')

    FIU_TAB = ()=> cy.get('#mnuOperation > li > a[href="/FIU/FIU"]')
    FIU_STATUSBOARD = ()=> cy.title().should('eq','FIU Status Board')
    DIALOGUE_INVESTIGATOR = () =>   cy.contains('Investigator')
    RECORD_INVESTIGATOR = () => cy.get('tbody > :nth-child(1) > :nth-child(1) > a')
    FIU_SUMMARY = ()=>  cy.title().should('eq','FIU Summary')
    EDIT_INVESTIGATION = ()=>  cy.get('#article > div.page-header.clearfix > div.pull-right > a')
    TYPE_WILDFIRE = ()=>     cy.get('#SelectedInvestigationType')
    NO_RESOURCES = ()=>     cy.get('#spActionName')
    SAVE_BUTTON = ()=>     cy.get('#btnSave')
    ASSIGNED_BY = ()=>     cy.get(':nth-child(3) > .control-group > .dl-horizontal > :nth-child(3)')
    WARRANTED_BUTTON = ()=>     cy.get('#settoNotWarranted')
    SELECTED_WARRANTED_REASON = ()=> cy.get('#SelectedReason')
    SAVE_WARRANTED_REASON = ()=>     cy.get('#saveReasonNotWarranted')
    VERIFY_ACTION_FIELD = ()=>  cy.get('#spActionName').should('contain.text','Lack of evidence scene destroyed')
    VERIFY_ASSIGNED_BY = ()=>    cy.contains('Assigned By')

    // Download Excel and CSV

    FIU_SEARCHSTATUSBOARD = ()=> cy.get('#article > div.page-header.clearfix > div.pull-right > a:nth-child(1)', { timeout: 60000})
    FIU_INCIDENTSTARTDATE = ()=> cy.get('[name="IncidentStartDateTime"]')
    FIU_SEARCHBTTN = ()=> cy.get('#searchForm > div > div.pull-right > button:nth-child(1)')
    FIU_EXPORTCSV = ()=> cy.get('div[class="dataTables_wrapper form-inline no-footer"]> div.dt-buttons > a.dt-button.buttons-csv.buttons-html5')
    FIU_EXPORTEXCEL = ()=> cy.get('div[class="dataTables_wrapper form-inline no-footer"] > div.dt-buttons > a.dt-button.buttons-excel.buttons-html5')
    FIU_INCREFERENCENO = ()=> cy.get('#ReferenceNumber')
    FIU_INCIDENT = ()=> cy.get('tbody>tr>td:nth-child(1)>a')
    FIU_ALLOCATEINVSBTTN = ()=> cy.get('#AllocateInvestigator')
    FIU_INVSESGITORNAMESRCH = ()=> cy.get('#txtFilterName')
    FIU_INVSSRCHBTTN = ()=> cy.get('#btnSearchInvestigator')
    FIU_ALLOCATEBTTNCNFRM = ()=> cy.get('#btnSaveChangesAllocateInvestigator')
    FIU_INVSTGTRNAMEASSERT = ()=> cy.get('#spInvestigatorName')

    // FIU_COPYINVSNAME = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(7)')
    // FIU_COPYACTIONDATE = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(6)')    
    // FIU_COPYACTION = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(5)')
    // INC_COPYNAME = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(2)')
    // INC_COPYDATE = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(4)')
    // INC_COPYLGA = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(3)')

    FIU_COPYINVSNAME = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(8)')
    FIU_COPYACTIONDATE = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(7)')    
    FIU_COPYACTION = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(6)')
    INC_COPYNAME = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(2)')
    INC_COPYDATE = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(5)')
    INC_COPYLGA = ()=> cy.get('div[class="dataTables_scroll"]>div[class="dataTables_scrollBody"]>table>tbody>tr>td:nth-child(3)')

    //CREATING FIU REPORT
    FIU_ADDREPORTVER = ()=> cy.get('#addFIUReport')
    FIU_INVESTIGATIONDETAILS = ()=> cy.get('#investigationdetails > div.accordion-heading > a')
    FIU_INCIDENTLOCATION = ()=> cy.get('#IncidentLocation')
    FIU_FIRETAB = ()=> cy.get('#frmFIUReport > ul > li:nth-child(2) > a')
    FIU_WILDFIREDETAILSMENU = ()=> cy.get('#firedetails > div:nth-child(1) > a')
    FIU_DAMAGEINFOMENU = ()=> cy.get('#firedetails > div:nth-child(3) > a')
    FIU_POTENTIALCAUSES = ()=> cy.get('#firedetails > div:nth-child(5) > a')
    FIU_WEATHERDATAMENU = ()=> cy.get('#firedetails > div:nth-child(7) > a')
    FIU_WEATHERDATETIME = ()=> cy.get('input[name="WeatherViewModel.WeatherDataDateTime"]')
    FIU_WEATHERSTATIONNAME = ()=> cy.get('#WeatherViewModel_WeatherDataWeatherStation')
    FIU_SAVEWEATHERDATA = ()=> cy.get('#btnSaveItemEntry')
    FIU_WTHRDATEASSERT = ()=> cy.get('#tblWeather > tbody > tr > td:nth-child(2)')
    FIU_WTHRSTATIONASSERT = ()=> cy.get('#tblWeather > tbody > tr > td:nth-child(3)')
    FIU_INVESTIGATORSTAB = ()=> cy.get('#frmFIUReport > ul > li:nth-child(3) > a')
    FIU_SELECTCONTACTTYPE = ()=> cy.get('#selectContactType')
    FIU_SEARCHCONTACT = ()=> cy.get('.investigator > [data-component="contact-display"] > .btn-toolbar > .searchForContact')
    FIU_INPUTFIRSTNAME = ()=> cy.get('#contactModelBody>form>div>div>div:nth-child(1)>input')
    FIU_CONTACTMODALMOREBTTN = ()=> cy.get('#contactModelBody>form>div>div:nth-child(2)>a') 
    FIU_AGENCYSELECTED = ()=> cy.get('#contactModelBody>form>div>div:nth-child(3)>div>div:nth-child(2)>div>select')
    FIU_BTTNSEARCHFORCONTACT = ()=> cy.get('#contactModelBody>form>div>div:nth-child(4)>button')
   
    FIU_REPORTCOMMENTS = ()=> cy.get('#Investigator_Comments')
    FIU_SAVEINVESTIGATORREPORT = ()=> cy.get('#investigator-form > div.btn-toolbar.clearfix > button:nth-child(1)')
    FIU_CANVASSINGTAB = ()=> cy.get ('#frmFIUReport > ul > li:nth-child(4) > a')
    FIU_AGENCYMENU = ()=> cy.get('#canvassingreport > div:nth-child(1) > a')
    FIU_SEARCHCONTACTCANVAS = ()=> cy.get('.agency-canvas > [data-component="contact-display"] > .btn-toolbar > .searchForContact')
    FIU_BTTNUSE = ()=> cy.get('#contactModelBody>#tableDiv>table>tbody>tr:nth-child(1)>td:nth-child(5)>button')
    FIU_AGENCYCANVASCOMMENTS = ()=> cy.get('textarea[name="AgencyCanvasReport.ContactComments"]')
    FIU_CANVASSEDBY = ()=> cy.get('#AgencyCanvasReport_CanvassedBy')
    FIU_CANVASDATETIME = ()=> cy.get('input[name="AgencyCanvasReport.CanvasDateTime"]')
    FIU_INITIALIGNITIONAREA = ()=> cy.get('#AgencyCanvasReport_InitialStageAreaOfOriginCrew')
    FIU_PHOTOSVIDEOTAKEN = ()=> cy.get('#AgencyCanvasReport_PhotosVideosTaken')
    FIU_SAVECANVASREPORT = ()=> cy.get('#agency-canvas-form > div.btn-toolbar.clearfix > button:nth-child(1)')
    //FIU_CANVASTABLEDATA = ['Warid','Islam','RFS']
    FIU_CANVASTABLECLLM1 = ()=> cy.get('div>table[id="agency-canvas-table"]>tbody>tr>td:nth-child(2)')
    FIU_CANVASTABLECLLM2 = ()=> cy.get('div>table[id="agency-canvas-table"]>tbody>tr>td:nth-child(3)')
    FIU_CANVASTABLECLLM3 = ()=> cy.get('div>table[id="agency-canvas-table"]>tbody>tr>td:nth-child(4)')

    FIU_PUBLICTAB = ()=> cy.get('#canvassingreport > div:nth-child(3) > a')
    FIU_PUBLICSEARCHFORCONTACT =()=>cy.get('.public-canvas > [data-component="contact-display"] > .btn-toolbar > .searchForContact')
    FIU_BTNSEARCHFORCONTACTPUBLIC = () => cy.get('#search-button')
    FIU_CANVASBYPUBLIC = ()=> cy.get('#PublicCanvasReport_CanvassedBy')
    FIU_CANVASTIMEPUBLIC = ()=> cy.get('input[name="PublicCanvasReport.CanvasDateTime"]')
    FIU_PHOTOSTAKENPUBLIC = ()=> cy.get('#PublicCanvasReport_PhotosVideosTaken')
    FIU_CANVASTABLEPUBLIC1 = ()=> cy.get('div>table[id="public-canvas-table"]>tbody>tr>td:nth-child(2)')
    FIU_CANVASTABLEPUBLIC2 = ()=> cy.get('div>table[id="public-canvas-table"]>tbody>tr>td:nth-child(3)')
    FIU_CANVASTABLEPUBLIC3 = ()=> cy.get('div>table[id="public-canvas-table"]>tbody>tr>td:nth-child(4)')
    FIU_SAVEPUBLICCANVAS = ()=> cy.get('#public-canvas-form > div.btn-toolbar.clearfix > button:nth-child(1)')
   
    //Attachments Tab 
    FIU_ATTACHMENTSTAB = ()=> cy.get('#frmFIUReport > ul > li:nth-child(5) > a')
   

    //Photographer Menu 

    FIU_PHOTOGARHERSMENU = ()=> cy.get('#attachmentlog > div:nth-child(1) > a')
    FIU_PHOTOGRAPHER_SEARCH_FOR_CONTACT=()=>cy.get('.photographers > [data-component="contact-display"] > .btn-toolbar > .searchForContact')
    FIU_SEARCH_PHOTOGRAPHER = ()=> cy.get('#photographer-form > div:nth-child(2) > div.btn-toolbar > button.btn.searchForContact')
    FIU_SAVEPHOTOGRAPHER = ()=> cy.get('#photographer-form > div.btn-toolbar.clearfix > button:nth-child(1)')

    //Upload Menu
    FIU_UPLOADMENU = ()=> cy.get('#attachmentlog > div:nth-child(3) > a')
    FIU_UPLOADFILES = ()=> cy.get('#upload-file-button')
    FIU_ATTACHMENTSTABLE1 = ()=> cy.get('#attachments-table > tbody > tr > td:nth-child(6)')
    FIU_ATTACHMENTSTABLE2 = ()=> cy.get('#attachments-table > tbody > tr > td:nth-child(7)')
    FIU_ATTACHMENTSTABLE3 = ()=> cy.get('#attachments-table > tbody > tr > td:nth-child(8)')

    FIU_CLOSEUPLOAD = ()=> cy.get('#file-upload-modal > div.modal-footer > button')
    FIU_ATTACHTABLE = ()=> cy.get('#attachments-table')
    FIU_EDITATTACHTABLE= ()=> cy.get('#attachments-table > tbody > tr > td:nth-child(2) > button')
    FIU_ATTACHREFERENCE = ()=> cy.get('#Reference[name="Reference"]')
    FIU_ATTCHDESCRIPTION = ()=> cy.get('#Description[name="Description"]')
    FIU_ATTACHITEMTTYPE = ()=> cy.get('#TypeId[name="TypeId"]')
    FIU_SAVEATTACHTABLE = ()=> cy.get('#edit-attachment-form > div.modal-footer > button.btn.btn-primary')

    


    FIU_MAPMENU = ()=> cy.get('#attachmentlog > div:nth-child(5) > a')

    //FINDINGS MENU 

    FIU_FINDINGTAB = ()=> cy.get('#frmFIUReport > ul > li:nth-child(6) > a')
    FIU_SUMMARYMENU = ()=> cy.get('#summaryoffindings > div.accordion-heading > a')
    FIU_FINDINGSSUMMARY = ()=> cy.get('#SummaryOfFindings')
    FIU_AFINOTES = ()=> cy.get('#AFINotes')

    //SAVE ENTIRE REPORT
    // FIU_SAVEENTIRE = ()=> cy.get('input[id="btnSave"][value="Save Entire Report"]')
    FIU_SAVEENTIRE = ()=> cy.get('#btnSave')

    FIU_BACKTOMAINSUMMARY = ()=> cy.get('#header > div > div.navbar-subnav > div > ul > li:nth-child(2) > a')

    //SUBMIT REPORT 

    FIU_SUBMITREPORT = ()=> cy.get('#reportList > tbody > tr > td:nth-child(2) > a[class="btn submit-report"]')

    FIU_REPORTSUBMITTED = ()=> cy.get('#reportList > tbody > tr > td:nth-child(1) > a')
    FIU_SUBMITYES = ()=> cy.get('div.jconfirm-buttons > button.btn.btn-info')

    FIU_VIEWREPORT = ()=> cy.get('#reportList > tbody > tr > td:nth-child(2)> a')

    //Review Report

    FIU_REVIEWREPORT = ()=> cy.get('#article > div.page-header.clearfix > div.pull-right > a:nth-child(2)')
    FIU_ACCEPTREPORT = ()=> cy.get('#btnAcceptReport')
    FIU_CHECKERNOTES = ()=> cy.get('#Notes')
    FIU_REPORTAPPROVED = ()=> cy.get('#article > div.alert.alert-success > strong')
}
export default Operations
