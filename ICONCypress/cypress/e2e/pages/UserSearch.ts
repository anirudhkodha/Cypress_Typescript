class UserSearch {
    USER_AGENCY = () => cy.get('#AgencyId')
    PAGINATE = () => cy.get('#tblUsers_paginate')
    PAGE_NO = (page_no:number) => cy.get(`#tblUsers_paginate > ul > li:nth-child(${page_no+2}) > a`)
    testuser = 'Grahamw1'
    SEARCH_KEYWORD = () => cy.get('#tblUsers_filter > label > input[type=search]')
    SEARCH_EMAIL = () => cy.get('#email')
    RESULT_SUMMARY = () => cy.get('#tblUsers_info')
    LOADING_SPINNER = () => cy.get('#loadingOverlay[style*="none"]')
    ADMIN_SELECTEDTESTUSER = ()=> cy.get('#tblUsers > tbody > tr > td.sorting_1 > a')
    //ADMIN_LGAMODULETAB = ()=> cy.get('.control-group > [href="/Admin/Security/ModulesAndRoles/GrahamW1/"]')
    ADMIN_LGAMODULETAB = ()=> cy.get('#article > form > div > div > div > a').contains('Go To LGAs, Modules and Roles')
    btn_Search=()=>cy.get('#lnkBtnSearch')    
    ADMIN_LGACHECKBOX1 = ()=> cy.get('#tblermissions > tbody>tr:nth-child(1) > td:nth-child(5) > input:nth-child(1)')
    ADMIN_LGACHECKBOX2 = ()=> cy.get('#tblermissions > tbody>tr:nth-child(2) > td:nth-child(5) > input:nth-child(1)')
    ADMIN_ALL_LGA_ADMIN_CHECKBOXES = () => cy.get('tr > .LgaAdmin > #row_IsLGAAdmin')
    ADMIN_LGA_ADMIN_MAIN_CHECKBOX = () => cy.get('#LgaAdmin')
    ADMIN_SITREPVIEW_MAIN_CHECKBOX = () => cy.get('#SitRepView')
    ADMIN_MENUTAB = ()=> cy.get('#mnuSystem')
    ADMIN_ROLESAVE = ()=> cy.get('#btnSave[value="Save Changes"]')
    ADMIN_SAVESUCCESS = ()=> cy.get('#divMessage > pre')
    ADMIN_GENERALROLE = ()=> cy.get('#article > form > div.control-group.condenced > div:nth-child(1) > div > a:nth-child(5)')
    ADMIN_OCSCCHECKBTTN = ()=> cy.get('#OcscAdmin[class="form-control"]')
    ADMIN_OCSCSAVEBTTN = ()=> cy.get('#btnSaveGeneralModulesAndRoles[class="btn pull-right"]')
    ADMIN_OCSCSAVESUCCESS = ()=> cy.get ('#divMessage > pre')
    ADMIN_SITRVIEWERCHECKBOX = ()=> cy.get('#SitRepView')
    ADMIN_SITRVIEWERCHECKBOX1 = () => cy.get('#tblermissions > tbody>tr:nth-child(1) > td:nth-child(6) > input:nth-child(1)')
    ADMIN_SITRVIEWERCHECKBOX2 = () => cy.get('#tblermissions > tbody>tr:nth-child(2) > td:nth-child(6) > input:nth-child(1)')
    ADMIN_SITRVIEWERCHECKBOX3 = () => cy.get('#tblermissions > tbody>tr:nth-child(3) > td:nth-child(6) > input:nth-child(1)')
    ADMIN_SITRVIEWERCHECKBOX4 = () => cy.get('#tblermissions > tbody>tr:nth-child(4) > td:nth-child(6) > input:nth-child(1)')
    ADMIN_SITRVIEWERCHECKBOX5 = () => cy.get('#tblermissions > tbody>tr:nth-child(11) > td:nth-child(6) > input:nth-child(1)')
    ADMIN_USERTAB = ()=> cy.get('#mnuSystem > li:nth-child(1) > a')
    ADMIN_AGENCYID = ()=> cy.get('#AgencyId')



    waitForLoadingSpinner() {
        cy.waitUntil(() => this.LOADING_SPINNER(), {
            timeout: 15000
        })
    }
}
export default UserSearch