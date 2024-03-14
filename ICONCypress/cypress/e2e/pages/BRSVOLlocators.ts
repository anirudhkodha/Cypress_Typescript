class BRSVOL {

VOL_INCSRCHBTTN = ()=> cy.get('#BrsHomePageActions > md-list > button > span')
VOL_INCSRCH = ()=> cy.get('input[ng-model="searchText"]')
VOL_INCOPEN = ()=> cy.get('#incidents > div > md-list > md-list-item > div > div.md-list-item-inner > div > div > button')
VOL_ADDNEWRPRT = ()=> cy.get('body > div.app > div > div > div > div > div > div > md-card > md-card-actions > button')
VOL_SELECT = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > md-card:nth-child(2) > md-card-title > div > button') 
VOL_ADVISEDTIME1 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div > div > div > div > div:nth-child(3) > div > label.flex-40')
VOL_TIME2 = ()=> cy.get('div[class="mbsc-sc-whl-w mbsc-dt-whl-h mbsc-comp"] > div.mbsc-sc-whl > div.mbsc-sc-whl-c > div > div:nth-child(42)')
VOL_TIME3 = ()=> cy.get('body > div.mbsc-fr.mbsc-material.mbsc-fr-center.mbsc-dt.mbsc-sc.mbsc-no-touch > div.mbsc-fr-persp > div.mbsc-fr-scroll > div > div.mbsc-fr-w > div.mbsc-fr-btn-cont > div.mbsc-fr-btn-w.mbsc-fr-btn-s > div')
VOL_NEXTPAGE = ()=> cy.get('body > div.app > div.navbar.navbar-app.navbar-absolute-bottom > div.btn-group.pull-right > div > div > a')
VOL_ADDBTTN = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > button')
VOL_SELECTBRIGADE1 = ()=> cy.get('body > div.modal.fade.in > div > div > div.modal-body.section.section-wide.section-condensed > input')
VOL_SELECTBRIGADE2 = ()=> cy.get('body > div.modal.fade.in > div > div > div.modal-body.section.section-wide.section-condensed > div > div > a:nth-child(2)')
VOL_SELECTEDAPPLIANCE = ()=> cy.get('body > div.app > div.app-body > div > div > div:nth-child(2) > div > div > md-card:nth-child(2) > md-card-title > div > button')

VOL_PRIMARYMOBILETIME1 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > form > div:nth-child(3) > div > label.flex-40')
VOL_PRIMARYONSCENETIME1 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > form > div:nth-child(5) > div > label.flex-40')
VOL_PRIMARYRETURNINGTIME1 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > form > div:nth-child(7) > div > label.flex-40')
VOL_PRIMARYINSTATIONTIME1 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > form > div:nth-child(9) > div > label.flex-40')

VOL_PRIMARYONSCENETIME2 = ()=> cy.get('div[class="mbsc-sc-whl-w mbsc-dt-whl-h mbsc-comp"] > div.mbsc-sc-whl > div.mbsc-sc-whl-c > div > div:nth-child(43)')
VOL_PRIMARYRETURNINGTIME2 = ()=> cy.get('div[class="mbsc-sc-whl-w mbsc-dt-whl-h mbsc-comp"] > div.mbsc-sc-whl > div.mbsc-sc-whl-c > div > div:nth-child(44)')
VOL_PRIMARYINSTATIONTIME2 = ()=> cy.get('div[class="mbsc-sc-whl-w mbsc-dt-whl-h mbsc-comp"] > div.mbsc-sc-whl > div.mbsc-sc-whl-c > div > div:nth-child(45)')

VOL_CHECKRESPOND = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div.layout-column > md-checkbox:nth-child(1)')

VOL_CHECKCYLINDERS1 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div.layout-column > md-checkbox:nth-child(3)')
VOL_CHECKCYLINDERS2 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div.layout-column > section > div > div.pull-right.input-group.flex > button:nth-child(3)')


VOL_CHECKFOAM1 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div.layout-column > md-checkbox:nth-child(5)')
VOL_CHECKFOAM2 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div.layout-column > section:nth-child(6) > div:nth-child(2) > div.pull-right.input-group.flex-55 > button:nth-child(3)')
VOL_CHECKFOAM3 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div.layout-column > section:nth-child(6) > div:nth-child(3) > div.pull-right.input-group.flex-55 > button:nth-child(3)')

//Cew Members

VOL_PRIMARYCREW1 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > md-list > div:nth-child(1) > md-checkbox')
VOL_PRIMARYCREW2 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > md-list > div:nth-child(2) > md-checkbox')
VOL_PRIMARYCREW3 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > md-list > div:nth-child(3) > md-checkbox')
VOL_PRIMARYCREW4 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > md-list > div:nth-child(4) > md-checkbox')

//VOL Crew Role

VOL_CHECKCREW1 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div > div:nth-child(2) > md-checkbox')
VOL_CHECKCREW2 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div > div:nth-child(2) > md-checkbox')
VOL_CHECKCREW3 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div > div:nth-child(2) > md-checkbox')
VOL_CHECKCREW4 = ()=> cy.get('body > div.app > div.app-body > div > div > div > div > div > div > div > div:nth-child(2) > md-checkbox')

//Type Of Call

VOL_INCCATEGORY1 = ()=> cy.get('div[class="scrollable-content section section-wide section-condensed"] md-select[ng-model="selectedDivision"]')
VOL_INCTYPE = ()=> cy.get('div[class="scrollable-content section section-wide section-condensed"] md-select[ng-model="selectedSubDivision"]')
VOL_INCSUBTYPE = ()=> cy.get('div[class="scrollable-content section section-wide section-condensed"] md-select[ng-model="report.type_of_call"]')

VOL_INCCATEGORY2 = ()=> cy.get('[class="md-select-menu-container md-active md-clickable"] >md-select-menu>md-content>md-option:nth-child(2)')

//Action Taken

VOL_SECONDARYACTION = ()=> cy.get('div[class="scrollable-content section section-wide section-condensed"] md-select[ng-model="report.action_taken"]')

//Problems Encountered

VOL_PROBLEMTYPE = ()=> cy.get('div[class="scrollable-content section section-wide section-condensed"] md-select[ng-model="report.problems_encountered"]')

//Reports Comment

VOL_REPORTCOMMENTS = ()=> cy.get('#reportComments')

//Submit Report 
VOL_SUBMITREPORT1 =()=> cy.get('form[name="submitForm"] > md-checkbox:nth-child(1)')
VOL_SUBMITREPORT2 =()=> cy.get('form[name="submitForm"] > md-checkbox:nth-child(2)')

VOL_SUBMITREPORT = ()=> cy.get('form[name="submitForm"] button[class="md-raised md-primary md-button md-ink-ripple flex"]')

VOL_SUBMITSUCCESS = ()=> cy.get('body > div.app > div > div > div > div > div > div > div > div > h3')

VOL_LOGOFF = ()=> cy.get('md-list[role="list"] > md-list-item:nth-child(5)')

//SEARCH BRIGADE

VOL_SEARCHBRIDAGETAB = ()=> cy.get('#mnuOperation > li.dropdown-submenu.visible-desktop > ul > li:nth-child(7) > a')
VOL_INCREF = ()=> cy.get('#txtBxIncidentRef')
VOL_SEARCHBTTN = ()=> cy.get('#lnkBtnSearch')
VOL_INCNO = ()=> cy.get('#search > tbody > tr > td:nth-child(2) > a')

//IMPORT BRIGADE

VOL_SELECTBRIGADETYPE = ()=> cy.get('#vol-reports > tbody:last-of-type > tr:nth-child(1) > td:nth-child(6) > input ')
VOL_IMPORTBTTN = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(2) > div > div > div > div > button')
// VOL_IMPORTMSSG = ()=> cy.get('#scrollTo > div.shift-report-right > div:nth-child(2) > div > div > div > div.ng-scope > label')

VOL_CLEARBIR = ()=> cy.get('#lnkBtnClearBIR')
VOL_CLEARBIROK = ()=> cy.get('#confirmClearBIR > div > div > div > button:nth-child(1)')

}
export default BRSVOL