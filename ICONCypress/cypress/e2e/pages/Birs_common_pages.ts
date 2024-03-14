// Fixed BIRS support locators from "div.container:nth-child(5)" to "div.container:nth-child(6)" after a supposed change in sprint5 on 30/01/23 
class BIRS_COMMONPAGES {

    // BRIGADE_REPORTING = ()=> cy.get('[class="pull-right"]').contains('Berigade Report');
    
    BIRS_DROPDOWN = ()=>  cy.get('button[data-toggle="dropdown"]')
    
    BIRS_SELECT_DROPDOWN = () => cy.get('button[data-toggle="dropdown"] > li > a')
    BIRS_SELECTBRIGADETYPE = ()=>  cy.get('#scrollTo > .dropdown > .dropdown-toggle')
    BIRS_SELECTVALIDATE = ()=> cy.get('#scrollTo > div.dropdown.open > ul > li:nth-child(11) > a')
    BIRS_VALIDATEBTN = ()=> cy.get('[ng-click="saveComments()"]')
    BIRS_PRIMARYBRIGADE = ()=> cy.get('#scrollTo > div.dropdown.open > ul > li:nth-child(3) > a')
    BIRS_ADDPRIMARYBRIGADE = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div.form-inline > button:nth-child(2)')
    BIRS_ADDPRIMARYBOX = ()=> cy.get('div[id="addEditPrimaryBrigadeModal"] input[ng-id="brigadeName"][ng-id="brigadeName"][class="ng-scope ng-pristine ng-valid"]')
    BIRS_PRIMARYBRIGADENAME1 = ()=> cy.get('div[id="addEditPrimaryBrigadeModal"] input[ng-id="brigadeName"][ng-id="brigadeName"][class="ng-scope ng-pristine ng-valid"]')
    BIRS_PRIMARYBRIGADENAME2 = ()=> cy.get('#addEditPrimaryBrigadeModal > form > div > div > div.form-horizontal.modal-body > div > div > div:nth-child(2) > div > ul > li > a > strong')
    BIRS_PRIMARYREPORTNO = ()=> cy.get('#addEditPrimaryBrigadeModal > form > div > div > div.form-horizontal.modal-body > div > div > div:nth-child(3) > div > input')
    BIRS_PRIMARYMOBILEDATE = ()=> cy.get('div[id="addEditPrimaryBrigadeModal"] [name="advisedDate"] input:nth-child(1)')
    BIRS_PRIMARYMOBILEDATE1 = ()=> cy.get('div[ng-repeat="item in incident.BrigadeDeployed.BrigadeDataItems"]:nth-child(1) div[name="mobileDate"] input:nth-child(1)')

    BIRS_PRIMARYBRIGADEBOX = ()=> cy.get('div[id="addEditPrimaryBrigadeModal"] [ng-click="savePrimaryBrigadeDetails()"]')
    BIRS_PRIMARYADDAPPLIANCEBTTN = ()=> cy.get('[ng-click="showAddApplianceModal()"]')
    BIRS_SELECTEDAPPLIANCE = ()=> cy.get('#addPrimaryBrigadeApplianceModal > form > div.form-horizontal.modal-body > table > tbody > tr:nth-child(1) > td:nth-child(3) > input')
    BIRS_SAVEAPPLIANCE = ()=>  cy.get('div[id="addPrimaryBrigadeApplianceModal"] [ng-click="addSelectedAppliances()"][ng-show="AppliancesFound"]')
    BIRS_CLOSEAPPLIANCEBOX = ()=> cy.get('div[id="addPrimaryBrigadeApplianceModal"] div[class="modal-footer"] button[ng-click="cancelSelectedAppliances()"]')
    BIRS_DATEINPUTBOX = ()=>  cy.get('.shift-report-right')
    BIRS_ONSCENEDATE = ()=>  cy.get('div[ng-repeat="item in incident.BrigadeDeployed.BrigadeDataItems"]:nth-child(1) div[name="onSceneDate"] input:nth-child(1)')
    BIRS_RETURNDATE = ()=> cy.get('div[ng-repeat="item in incident.BrigadeDeployed.BrigadeDataItems"]:nth-child(1) div[name="returnDate"] input:nth-child(1)')
    BIRS_INSTATIONDATE = ()=> cy.get('div[ng-repeat="item in incident.BrigadeDeployed.BrigadeDataItems"]:nth-child(1) div[name="inStationDate"] input:nth-child(1)')
    BIRS_ADDFOAMUSED1 = ()=> cy.get('#ddlFoamUsed')
    BIRS_ADDFOAMUSED2 = ()=>  cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div > input')
    BIRS_ADDFOAMUSED3 = ()=>cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div > input')
    BIRS_SELECTRESPONDEN = ()=>  cy.get(':nth-child(1) > [ng-show="item.GroupType==1"] > :nth-child(4) > :nth-child(1) > .control-group > .input-mini')
    BIRS_ADDPRIMARYCREWBUTTON = ()=>  cy.get(':nth-child(1) > [ng-show="item.GroupType==1"] > :nth-child(5) > :nth-child(4) > .btn-primary')
    BIRS_ADDCREWMODAL = ()=>  cy.get('#addPrimaryBrigadeCrewModal')
    BIRS_CREWSEARCHBTTN = ()=> cy.get('#addPrimaryBrigadeCrewModal > form > div.form-horizontal.modal-body > div:nth-child(2) > div > div:nth-child(3) > button')
    BIRS_SELECTEDPRIMARYCREW1 = ()=> cy.get('tbody > :nth-child(1) > :nth-child(1) > .ng-pristine') 
    BIRS_SELECTEDPRIMARYCREW2 = ()=> cy.get('tbody > :nth-child(2) > :nth-child(1) > .ng-pristine')
    BIRS_SELECTEDPRIMARYCREW3 = ()=> cy.get('tbody > :nth-child(3) > :nth-child(1) > .ng-pristine')
    BIRS_SELECTEDPRIMARYCREW4 = ()=> cy.get('tbody > :nth-child(4) > :nth-child(1) > .ng-pristine')
    BIRS_SELECTEDCREW_SAVEBTTN = ()=> cy.get('#btnSelectCrew_')
    BIRS_SELECTEDCREWDETAILSBOX = ()=> cy.get('[ng-show="incident.BrigadeDeployed.BrigadeDataItems"] > :nth-child(1) > :nth-child(3)')
    BIRS_SELECTEDCREWDETAILS1 = ()=>  cy.get(':nth-child(1) > [ng-show="item.OtherGroupingName.HasCrewLeader"] > .ng-pristine')
    BIRS_SELECTEDCREWDETAILS2 = ()=> cy.get(':nth-child(2) > [ng-show="item.OtherGroupingName.HasDriver"] > .ng-valid')
    BIRS_SELECTEDCREWDETAILS3 = ()=>   cy.get(':nth-child(3) > [ng-show="item.OtherGroupingName.HasBreathingApparatusUsed"] > .ng-pristine')
    BIRS_SELECTEDCREWDETAILS4 = ()=>cy.get(':nth-child(4) > [ng-show="item.OtherGroupingName.HasInjury"] > .ng-pristine')
    BIRS_CHK_SELECTEDCREW_INJURY = ()=>cy.get(':nth-child(1) > [ng-show="item.OtherGroupingName.HasInjury"] > .ng-pristine') 
    BIRS_ADDRESPONDED_INVEHICLEBTTN = ()=>  cy.get(':nth-child(2) > [ng-hide="item.GroupType==1"] > :nth-child(2) > .btn')
    BIRS_INVEHICLE_SELECTEDCREWBOX = ()=> cy.get('[ng-show="incident.BrigadeDeployed.BrigadeDataItems"] > :nth-child(2) > :nth-child(3)')
    BIRS_INVEHICLE_SELECTEDCREWDETAILS = ()=> cy.get(':nth-child(2) > :nth-child(3) > .span7 > .table > tbody > :nth-child(1) > [ng-show="item.OtherGroupingName.HasBreathingApparatusUsed"] > .ng-pristine')
    BIRS_INSTATIONCREW_BTTN = ()=>  cy.get(':nth-child(3) > [ng-hide="item.GroupType==1"] > :nth-child(2) > .btn')
    BIRS_INSTATION_SELECTEDCREWBOX = ()=> cy.get('[ng-show="incident.BrigadeDeployed.BrigadeDataItems"] > :nth-child(3) > :nth-child(3)')
    BIRS_SAVEPRIMARYBRIGADEDETAILS = ()=> cy.get('[ng-click="savePrimaryBrigade()"]')
    BIRS_PRIMARYBRIGADE_SAVEALERT = ()=>  cy.get('#pAlertHeading')
    BIRS_PRIMARYBRIGADE_VALSAVEBTTN = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(6) > div:nth-child(3) > button:nth-child(2)')
    BIRS_PRIMARYBRIGADE_VALSAVEALERTBOX = ()=> cy.get('#divAlert')
    BIRS_PRIMARYBRIGADE_VALSAVEALERT0 = ()=> cy.get('#divAlert > ul > li')
    BIRS_PRIMARYBRIGADE_VALSAVEALERT =()=> cy.get('#divAlert > ul > li:nth-child(2)')
    BIRS_PRIMARYBRIGADE_VALSAVEALERT1 = ()=> cy.get('#divAlert > ul > li:nth-child(1)') 
    BIRS_PRIMARYBRIGADE_VALSAVEALERT11 = ()=> cy.get('#divAlert > ul > li:nth-child(1)') 
    BIRS_PRIMARYBRIGADE_VALSAVEALERT2 = ()=> cy.get('#divAlert > ul > li:nth-child(2)')
    BIRS_PRIMARYBRIGADE_VALSAVEALERT22 = ()=> cy.get('#divAlert > ul > li:nth-child(2)')
    BIRS_PRIMARYBRIGADE_VALSAVEALERT3 = ()=> cy.get('#divAlert > ul > li:nth-child(3)')
    BIRS_PRIMARYBRIGADE_VALSAVEALERT4 = ()=> cy.get('#divAlert > ul > li:nth-child(4)')
    BIRS_PRIMARYBRIGADE_VALSAVEALERT5 = ()=> cy.get('#divAlert > ul > li:nth-child(5)')



    //Delete all details

    BIRS_DELETEPRIMARY_CREW1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div > table > tbody > tr:nth-child(4) > td:nth-child(7) > button')
    BIRS_DELETEPRIMARY_CREW2 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div > table > tbody > tr:nth-child(3) > td:nth-child(7) > button')
    BIRS_DELETEPRIMARY_CREW3 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > button')
    BIRS_DELETEPRIMARY_CREW4 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > button')
    BIRS_DELETECREW_OK = ()=> cy.get('#confirmDeleteCrewModal > div > div > div > button:nth-child(1)')
    BIRS_DELETEAPPLIANCE = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > button.btn.btn-small.ng-scope')
    BIRS_DELETEAPPL_OK= ()=> cy.get(' #confirmDeleteApplianceModal > div > div > div > button:nth-child(1)')
    BIRS_DELETEBRIGADE = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(3) > button:nth-child(4)')
    BIRS_DELETEPRIMARY_OK = ()=> cy.get('#confirmDeleteBrigadeModal > div > div > div > button:nth-child(1)')
    //>>>>>>>>>>SUPPORTBRIGADE>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    
    BIRS_SUPPORTBRIGADE = ()=> cy.get('#scrollTo > div.dropdown.open > ul > li:nth-child(4) > a')
    BIRS_ADDSUPPORTBRIGADE = ()=> cy.get('#lnkBtnAddSupportBrigade')
    BIRS_ADDSUPPORTBRIGADEBOX = ()=> cy.get('#supportBrigadeDialog > form > div > div > div.form-horizontal.modal-body > div > div > div:nth-child(3) > div > input')
    BIRS_SUPPORTBRIGADENAME1 = ()=> cy.get('#supportBrigadeDialog > form > div > div > div.form-horizontal.modal-body > div > div > div:nth-child(3) > div > input')
    BIRS_SUPPORTBRIGADENAME2 = ()=> cy.get('#supportBrigadeDialog > form > div > div > div.form-horizontal.modal-body > div > div > div:nth-child(3) > div > ul > li > a')
    BIRS_SUPPORTBRIGADENO = ()=> cy.get('#supportBrigadeDialog > form > div > div > div.form-horizontal.modal-body > div > div > div:nth-child(4) > div > input')
    BIRS_SUPPORTMOBILEDATE = ()=> cy.get('div[id="supportBrigadeDialog"] div[name="advisedDate"] input:nth-child(1)')
    BIRS_SAVESUPPORTBRIGADEBOX = ()=> cy.get('div[id="supportBrigadeDialog"] [class="modal-footer"] [ng-click="saveSupportBrigadeDetails()"]')
    BIRS_OPENSUPPORTBRIGADENAME = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(5) > div > div:nth-child(1) > table > tbody > tr > td:nth-child(1) > a')
    BIRS_ADDSUPPORTAPPLIANCE = ()=> cy.get('#lnkBtnAddAppliance')
    BIRS_SELECTEDSUPPORTAPPLIANCE = ()=> cy.get('#applianceDialog > div.modal-body > table > tbody > tr:nth-child(1) > td:nth-child(3) > input')
    BIRS_SAVESUPPORTADDAPLIANCE = ()=> cy.get('#lnkBtnAddSelectedAppliances')
    BIRS_CLOSESUPPORTADDAPPLIANCE = ()=> cy.get('#lnkbtnApplianceSelectCancel')
    BIRS_SUPPORTMOBILEDATE1 = ()=> cy.get('div[ng-repeat="item in selectedSupportBrigade.BrigadeDataItems"]:nth-child(1) div[name="mobileDate"] input:nth-child(1)')
    BIRS_SUPPORTONSCENEDATE = ()=> cy.get('div[ng-repeat="item in selectedSupportBrigade.BrigadeDataItems"]:nth-child(1) div[name="onSceneDate"] input:nth-child(1)')
    BIRS_SUPPORTRETURNDATE= ()=> cy.get('div[ng-repeat="item in selectedSupportBrigade.BrigadeDataItems"]:nth-child(1) div[name="returnDate"] input:nth-child(1)')
    BIRS_SUPPORTINSTATIONDATE = ()=>cy.get('div[ng-repeat="item in selectedSupportBrigade.BrigadeDataItems"]:nth-child(1) div[name="inStationDate"] input:nth-child(1)')
    BIRS_SUPPORTRESPOND = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(5) > div > div:nth-child(5) > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div > select')
    BIRS_SUPPORTFOAMUSED1 = ()=> cy.get('[ng-show="selectedSupportBrigade.BrigadeDataItems"] > :nth-child(1) > [ng-show="item.GroupType==1"] > :nth-child(5) > :nth-child(1) > .control-group > #ddlFoamUsed')
    BIRS_SUPPORTFOAMUSED2 = ()=> cy.get(':nth-child(1) > [ng-show="item.GroupType==1"] > :nth-child(5) > :nth-child(2) > .control-group > #supportBrigadeNumDrumsClassA')
    BIRS_SUPPORTFOAMUSED3 = ()=> cy.get(':nth-child(1) > [ng-show="item.GroupType==1"] > :nth-child(5) > :nth-child(3) > .control-group > #supportBrigadeNumDrumsClassB')


    BIRS_ADDSUPPORTCREW = ()=> cy.get('div[ng-repeat="item in selectedSupportBrigade.BrigadeDataItems"]:nth-child(1)  [class="row-fluid form-inline"]:nth-child(5) button[id="lnkBtnAddCrew"]')
    BIRS_ADDSUPPORTCREWBOX = ()=> cy.get('#supportCrewDialog')
    BIRS_SUPPORTCREWSEARCHBTTN = ()=> cy.get('#btnSearchCrew')
    BIRS_SELECTEDSUPPORTCREW1 = ()=> cy.get('#supportCrewDialog > form > div > div > div.modal-body > div:nth-child(2) > table > tbody > tr:nth-child(1) > td:nth-child(1) > input')
    BIRS_SELECTEDSUPPORTCREW2 = ()=> cy.get('#supportCrewDialog > form > div > div > div.modal-body > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(1) > input')
    BIRS_SELECTEDSUPPORTCREW3 = ()=> cy.get('#supportCrewDialog > form > div > div > div.modal-body > div:nth-child(2) > table > tbody > tr:nth-child(3) > td:nth-child(1) > input')
    BIRS_SAVESELECTEDSUPPORTCREW = ()=> cy.get('div[id="supportCrewDialog"] #btnSelectCrew')
    BIRS_SELECTEDSUPPORTCREWDETAILSBOX = ()=>  cy.get('#scrollTo > div.shift-report-right > div:nth-child(5) > div > div:nth-child(5) > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3)')
    BIRS_SELECTEDSUPPORTCREWDETAILS1 = ()=> cy.get('#grdVwBrigadeCrew > tbody > tr:nth-child(1) > td:nth-child(3) > input')
    BIRS_SELECTEDSUPPORTCREWDETAILS2 = ()=> cy.get('#grdVwBrigadeCrew > tbody > tr:nth-child(2) > td:nth-child(4) > input')
    BIRS_SELECTEDSUPPORTCREWDETAILS3 = ()=> cy.get('#grdVwBrigadeCrew > tbody > tr:nth-child(3) > td:nth-child(5) > input')
    BIRS_ADDINVEHICLE_SUPPORTCREW = ()=>  cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(5) div.ng-scope:nth-child(2) div:nth-child(2) div.ng-scope:nth-child(2) div.row-fluid:nth-child(2) div.span6:nth-child(2) > button.btn.btn-primary.btn-small')
    BIRS_INVEHICLESSUPPORTCREWDETAILSBOX = ()=>  cy.get('#scrollTo > div.shift-report-right > div:nth-child(5) > div > div:nth-child(5) > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3)')
    BIRS_INVEHICLESSUPPORTCREWDETAILS = ()=>  cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(5) div.ng-scope:nth-child(2) div.ng-scope:nth-child(2) div.row-fluid:nth-child(3) div.span7.offset2 table.table.table-striped.table-condensed tbody:nth-child(2) tr.ng-scope:nth-child(1) td:nth-child(5) > input.ng-pristine.ng-valid')
    BIRS_ADDINSTATION_SUPPORTCREW = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(5) div.ng-scope:nth-child(2) div:nth-child(2) div.ng-scope:nth-child(3) div.row-fluid:nth-child(2) div.span6:nth-child(2) > button.btn.btn-primary.btn-small')
    BIRS_INSTATIONSUPPORTCREWDETAILSBOX = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(5) > div > div:nth-child(5) > div > div > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(3)')
    BIRS_SAVESUPPORTBRIGADE = ()=> cy.get('#divSave > button:nth-child(1)')
    BIRS_SAVESUPPORTBRIGADEALERT = ()=> cy.get('#pAlertHeading')
    
    ///>>>>>>>>>>>>> INJURY DETAILS >>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    BIRS_INJURYDETAILS = ()=> cy.get('#scrollTo > div.dropdown.open > ul > li:nth-child(5) > a')
    BIRS_CHKBOX_INJURYDETADDED = ()=> cy.get('input[ng-model="injury.InjuryDetailsAdded"]')
    BIRS_INJURYDETAILSTITLE = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > h3')
    BIRS_SELECTEDINJURYPERSON = ()=>  cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > div > div:nth-child(1) > table > tbody > tr > td:nth-child(2) > a')
    BIRS_INJURYDETAILSMODAL = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > div > div.form-horizontal')
    BIRS_INJURYTREATMENTMODAL = ()=> cy.get('#InjuryTreatmentResult')
    BIRS_INJURYTREATMENTRESULT1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > div > div.form-horizontal > div:nth-child(2) > div > a.btn.btn-small.btn-primary')
    BIRS_INJURYTREATMENTRESULT2 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) > div.modal-body')
    BIRS_INJURYTREATMENTRESULT3 = ()=>cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div.modal-body div:nth-child(1) table.table.table-striped.table-hover.table-condensed.ng-scope tbody:nth-child(2) tr.ng-scope:nth-child(2) > td.ng-binding:nth-child(2)')
    BIRS_INJURYTREATMENTRESULT4 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) div.modal-footer > button.btn.btn-primary:nth-child(1)')
    BIRS_PARTOFBODY1 =()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > div > div.form-horizontal > div:nth-child(3) > div > a.btn.btn-small.btn-primary')
    BIRS_PARTOFBODY2 =()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) > div.modal-body')
    BIRS_PARTOFBODY3 =()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div.modal-body div:nth-child(1) table.table.table-striped.table-hover.table-condensed.ng-scope tbody:nth-child(2) tr.ng-scope:nth-child(2) > td.ng-binding')
    BIRS_PARTOFBODY4 =()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div.modal-body div:nth-child(1) table.table.table-striped.table-hover.table-condensed.ng-scope:nth-child(2) tbody:nth-child(2) tr.ng-scope:nth-child(4) > td.ng-binding:nth-child(2)')
    BIRS_PARTOFBODY5 =()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) div.modal-footer > button.btn.btn-primary:nth-child(1)')
    BIRS_PARTOFBODY6 =()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > div > div.form-horizontal > div:nth-child(4) > div > div:nth-child(1) > input')
    BIRS_NATUREOFINJURY1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > div > div.form-horizontal > div:nth-child(5) > div > a.btn.btn-small.btn-primary')
    BIRS_NATUREOFINJURY2 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) > div.modal-body')
    BIRS_NATUREOFINJURY3 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div.modal-body div:nth-child(1) table.table.table-striped.table-hover.table-condensed.ng-scope tbody:nth-child(2) tr.ng-scope:nth-child(3) > td.ng-binding:nth-child(2)')
    BIRS_NATUREOFINJURY4 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) div.modal-footer > button.btn.btn-primary:nth-child(1)')
    BIRS_TYPESOFACCIDENT1 = ()=>  cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > div > div.form-horizontal > div:nth-child(6) > div > a.btn.btn-small.btn-primary')
    BIRS_TYPESOFACCIDENT2 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) > div.modal-body')
    BIRS_TYPESOFACCIDENT3 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div.modal-body div:nth-child(1) table.table.table-striped.table-hover.table-condensed.ng-scope tbody:nth-child(2) tr.ng-scope:nth-child(1) > td.ng-binding:nth-child(2)')
    BIRS_TYPESOFACCIDENT4 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) div.modal-footer > button.btn.btn-primary:nth-child(1)')
    BIRS_AGENCYOFINJURY1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > div > div.form-horizontal > div:nth-child(7) > div > a.btn.btn-small.btn-primary')
    BIRS_AGENCYOFINJURY2 = ()=>cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) > div.modal-body')
    BIRS_AGENCYOFINJURY3 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div.modal-body div:nth-child(1) table.table.table-striped.table-hover.table-condensed.ng-scope tbody:nth-child(2) tr.ng-scope:nth-child(1) > td.ng-binding:nth-child(2)')
    BIRS_AGENCYOFINJURY4 = ()=> cy.get('div.container:nth-child(6) div.ng-scope div.ng-scope div.row-fluid.ng-scope div.row-fluid:nth-child(2) div.shift-report-right div.ng-scope:nth-child(6) div.form-inline.ng-scope div.form-horizontal:nth-child(3) div.ng-scope:nth-child(10) div.modal.fade.ng-scope.in div:nth-child(1) div:nth-child(1) div.modal-footer > button.btn.btn-primary:nth-child(1)')
    BIRS_INJURYCOMMENT = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(6) > div > div.form-horizontal > div:nth-child(8) > div >textarea')    
    BIRS_SAVEINJURYDETAILS = ()=>   cy.get('button[id="lnkBtnSave"][ng-click="saveInjuryDetails()"]')
    BIRS_SAVEINJURYDETAILSALERT = ()=>  cy.get('#pAlertHeading')
    BIRS_RETURNINJURYLIST = ()=> cy.get('button[ng-click="returnToInjuryList()"]')
    
    
    
    ///>>>>>>>>>>>>>>>>>>>> IGNITIONINFORMATION>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    
    BIRS_IGNITIONINFO = ()=> cy.get('#scrollTo > div.dropdown.open > ul > li:nth-child(7) > a')
    BIRS_POINTOFORIGIN1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(8) > div > div:nth-child(1) > div > a.btn.btn-small.btn-primary')
    BIRS_POINTOFORIGIN2 = ()=> cy.get('#AreaOfOrigin > div > div > div.modal-body')
    BIRS_POINTOFORIGIN3 = ()=> cy.get('#AreaOfOrigin > div > div > div.modal-body > div > table > tbody > tr:nth-child(10) > td')
    BIRS_POINTOFORIGIN4 = ()=> cy.get('#AreaOfOrigin > div > div > div.modal-body > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2)')
    BIRS_POINTOFORIGIN5 = ()=>  cy.get('#AreaOfOrigin > div > div > div.modal-footer > button.btn.btn-primary')
    BIRS_ACTIVITY1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(8) > div > div:nth-child(2) > div > a.btn.btn-small.btn-primary')
    BIRS_ACTIVITY2= ()=>  cy.get('#ActivityInIgnitionArea > div > div > div.modal-body')
    BIRS_ACTIVITY3 = ()=> cy.get('#ActivityInIgnitionArea > div > div > div.modal-body > div > table > tbody > tr:nth-child(1) > td:nth-child(2)')
    BIRS_ACTIVITY4 = ()=> cy.get('#ActivityInIgnitionArea > div > div > div.modal-footer > button.btn.btn-primary')
    BIRS_FORMOFHEAT1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(8) > div > div:nth-child(3) > div > a.btn.btn-small.btn-primary')
    BIRS_FORMOFHEAT2 = ()=> cy.get('#FormOfHeatOfIgnition > div > div > div.modal-body')
    BIRS_FORMOFHEAT3 = ()=> cy.get('#FormOfHeatOfIgnition > div > div > div.modal-body > div > table > tbody > tr:nth-child(10) > td')
    BIRS_FORMOFHEAT4 = ()=>cy.get('#FormOfHeatOfIgnition > div > div > div.modal-body > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2)')
    BIRS_FORMOFHEAT5 = ()=> cy.get('#FormOfHeatOfIgnition > div > div > div.modal-footer > button.btn.btn-primary')
    BIRS_EQUIPMENTINVOLVED1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(8) > div > div:nth-child(4) > div > a.btn.btn-small.btn-primary')
    BIRS_EQUIPMENTINVOLVED2 = ()=> cy.get('#EquipmentInvolvedInIgnition > div > div > div.modal-body')
    BIRS_EQUIPMENTINVOLVED3 = ()=>  cy.get('#EquipmentInvolvedInIgnition > div > div > div.modal-body > div > table > tbody > tr:nth-child(1) > td')
    BIRS_EQUIPMENTINVOLVED4 = ()=> cy.get('#EquipmentInvolvedInIgnition > div > div > div.modal-body > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2)')
    BIRS_EQUIPMENTINVOLVED5 = ()=> cy.get('#EquipmentInvolvedInIgnition > div > div > div.modal-footer > button.btn.btn-primary')
    BIRS_TYPEOFMATERIAL1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(8) > div > div:nth-child(5) > div > a.btn.btn-small.btn-primary')
    BIRS_TYPEOFMATERIAL2 = ()=> cy.get('#TypeOfMaterialIgnitedFirst > div > div > div.modal-body')
    BIRS_TYPEOFMATERIAL3 = ()=>  cy.get('#TypeOfMaterialIgnitedFirst > div > div > div.modal-body > div > table > tbody > tr:nth-child(1) > td')
    BIRS_TYPEOFMATERIAL4 = ()=> cy.get('#TypeOfMaterialIgnitedFirst > div > div > div.modal-body > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2)')
    BIRS_TYPEOFMATERIAL5 = ()=> cy.get('#TypeOfMaterialIgnitedFirst > div > div > div.modal-footer > button.btn.btn-primary')
    BIRS_FORMOFMATERIALS1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(8) > div > div:nth-child(6) > div > a.btn.btn-small.btn-primary')
    BIRS_FORMOFMATERIALS2 = ()=> cy.get('#FormOfMaterialIgnitedFirst > div > div > div.modal-body')
    BIRS_FORMOFMATERIALS3 = ()=> cy.get('#FormOfMaterialIgnitedFirst > div > div > div.modal-body > div > table > tbody > tr:nth-child(10) > td')
    BIRS_FORMOFMATERIALS4 = ()=> cy.get('#FormOfMaterialIgnitedFirst > div > div > div.modal-body > div > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(2)')
    BIRS_FORMOFMATERIALS5 = ()=> cy.get('#FormOfMaterialIgnitedFirst > div > div > div.modal-footer > button.btn.btn-primary')
    BIRS_IGNITIONFACTORS1 = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(8) > div > div:nth-child(7) > div > a.btn.btn-small.btn-primary')
    BIRS_IGNITIONFACTORS2 = ()=>cy.get('#IgnitionFactor > div > div > div.modal-body')
    BIRS_IGNITIONFACTORS3 = ()=>    cy.get('#IgnitionFactor > div > div > div.modal-body > div > table > tbody > tr:nth-child(10) > td')
    BIRS_IGNITIONFACTORS4 = ()=>cy.get('#IgnitionFactor > div > div > div.modal-body > div > table:nth-child(2) > tbody > tr:nth-child(1) > td:nth-child(2)')
    BIRS_IGNITIONFACTORS5 = ()=> cy.get('#IgnitionFactor > div > div > div.modal-footer > button.btn.btn-primary')
    BIRS_SAVEIGNITION = ()=> cy.get('[id="divFooter"] button[id="lnkBtnSave"]')
    
    //>>>>>>>>>>>>FIREFIGHTING>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    BIRS_FIREFIGHTING = ()=> cy.get('#scrollTo > div.dropdown.open > ul > li:nth-child(8) > a')
    BIRS_SAVEFIREFIGHTING = ()=> cy.get('#btnSaveFireFighting')
    
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>validate and save (Error Assert)>>>>>>>>>>
    
    BIRS_VALIDATEANDSAVE = ()=> cy.get('#scrollTo > div.dropdown.open > ul > li:last-of-type> a')
    BIRS_VALIDATEANDSAVEBTTN = ()=> cy.get('[ng-click="saveComments()"]#lnkBtnSave')
    BIRS_VALIDATEANDSAVEALERT = ()=> cy.get('#divAlert')
    
    
    //complete primary brigade
    BIRS_COMPLETEPRIMARYBRIGADE = ()=> cy.get('[ng-show="incident.BrigadeDeployed.IsCompleteVisible"]')
    
    //COMPLETE SUPPORT BRIGADE
    
    BIRS_COMPLETESUPPORTBRIGADE = ()=> cy.get('[ng-show="selectedSupportBrigade.IsCompleteVisible"]')
    
    //COMPLETEREPOTING
    
    BIRS_BRIGADECOMPLETECBTTN = ()=> cy.get('#lnkBtnComplete[ng-click="completeIncident()"]')
    BIRS_COMPLETEALERT = ()=> cy.get('#pAlertHeading')
    
    //General locators 
    BIRS_SHOWPRETAB = ()=>  cy.get('#scrollTo > div.dropdown > button:nth-child(1)')
    BIRS_VALIDATEFOOTER = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(12) > div > div > div.modal-footer')

    /*Undo Complete*/
    
    BIRS_UNDOVALANDCOMPLETE = ()=> cy.get('#lnkBtnUndoComplete')
    BIRS_UNDOVALANDCOMPLETEOK = ()=> cy.get('#confirmUndoCompleteIncident > div > div > div > button:nth-child(1)')
    
    BIRS_UNDOSUPPORTBRIGADE = ()=> cy.get('#divSave > button:nth-child(4)')
    BIRS_UNDOSUPPORTBRIGADEOK = ()=> cy.get('#confirmSupportUndoComplete > div > div > div > button:nth-child(1)')
    

    BIRS_UNDOPRIMARYBRIGADE = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(4) > div > div:nth-child(5) > div:nth-child(3) > button:nth-child(4)')
    BIRS_UNDOPRIMARYBRIGADEOK = () => cy.get('#confirmUndoCompleteModal > div > div > div > button:nth-child(1)')
    
    BIRS_CLEARBIRS = ()=> cy.get('#lnkBtnClearBIR')
    BIRS_CLEARBIRSOK = ()=> cy.get('#confirmClearBIR > div > div > div > button:nth-child(1)')



//\\ ICONSUP-T514 (1.0) Validate user is able to Generate BIRS Outstanding report

    //validate search fields
    BIRS_REPORTSTAB = ()=> cy.get('#mnuKnowledge > li.dropdown-submenu.visible-desktop > a')
    BIRS_JOINAGENCY = ()=> cy.get('#mnuKnowledge > li.dropdown-submenu.visible-desktop > ul > li:nth-child(1) > a')
    BIRS_OUTSTANDINGREP = ()=> cy.get('#collapseTwo > div > ul > li:nth-child(3) > a')
    BIRS_FROMDATE = ()=> cy.get('input[name="FromDate"]')
    BIRS_TODATE = ()=> cy.get('input[name="ToDate"]')
    BIRS_COUNCIL = ()=>  cy.get('#councilSelector')
    BIRS_SEARCHOUTSTNDNG = ()=> cy.get('#submitReport_BirsOutstanding')
    BIRS_SEARCHFIELD = ()=> cy.get('#resultTable_filter > label > input[type=search]')

    //validate Result fields

    BIRS_TABLEINFO = ()=> cy.get('#resultTable_info')
    BIRS_INCIDENTCONSORTING = ()=> cy.get('#resultTable_wrapper > div.dataTables_scroll > div.dataTables_scrollHead > div > table > thead > tr > th:nth-child(7)') 
    BIRS_EXPSTARTDATE = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(1)')
    BIRS_EXPLGA = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(2)')
    BIRS_EXPINCREF = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(3)')
    BIRS_EXP000REF = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(4)')
    BIRS_EXPINCNAME = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(5)') 
    BIRS_EXPINCLOC = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(6)')
    BIRS_EXPINCCON = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(7)')
    BIRS_EXPINCTYPE = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(8)')
    BIRS_EXPVOLREP = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(9)')
    BIRS_EXPPRIMARYBRIG = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(10)')
    BIRS_EXPSUPPORTBRIG = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(11)')
    BIRS_EXPREPCOMPLETED = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(12)')
    BIRS_SELECTRECORDS =()=>cy.get('#resultTable_length > label > select > option:nth-child(1)')
    BIRS_EXPRESULTSBTTN = ()=> cy.get('#btnExport')

    //current search

    SER_SEL_LGA = ()=> cy.get('#selectedLGA') 
    SEARCH = ()=>cy.get('#search')
    LINK_INC_FIRST = ()=>cy.get('tbody>tr:nth-child(1)>td:nth-child(5)>a')
    BTN_LINK_BRIGREP = ()=>cy.get('div.well.clearfix:nth-child(3) div.pull-right > a.btn:nth-child(7)')






//*************************************************************************************************//
/*                       *****************PAGE FUNCTIONS****************                          */
//************************************************************************************************//       


    BUTTON_FROM_TOPMENU = (value: string)=> {
        
        cy.contains(value).click({force:true})

    
    }



    TAP_BRIGADE_DROPDOWN = ()=> { 

        this.BIRS_DROPDOWN().click({force:true})

    }

    SELECT_BIRS_DROPDOWN = (value: string) => {

        this.BIRS_SELECT_DROPDOWN().contains(value).click({force:true})

    }



    

}

    export default BIRS_COMMONPAGES