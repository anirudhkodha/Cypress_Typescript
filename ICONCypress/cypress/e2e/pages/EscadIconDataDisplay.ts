class EscadIconDataDisplay {
    INCIDENT_START_FROM = () => cy.get('[name="From"]')
    SEARCH_BUTTON = () => cy.get('#btnSearch')
    RESULT_SUMMARY = () => cy.get('#tblIncidents_info')
    ESCAD_SEARCHFIELD = ()=> cy.get('#code')
    ESCAD_INCONTABLE = ()=> cy.get('#tblIncidents > tbody > tr > td:nth-child(1) > a')
    ESCAD_SEARCHTABLE = ()=> cy.get('#tblIncidents > tbody')
    ESCAD_DATADETAILS = ()=> cy.get('#article > div')
    ESCAD_NOMEDIA_COMMENT = ()=> cy.get('[class="nowrap"] > div:nth-child(12)')
    ESCAD_FIRU_ASSIGNED = ()=> cy.get('[class="nowrap"] > div:nth-child(13)')
    ESCAD_INCIDENTSTAB = ()=> cy.get('#mnuOperation > li:nth-child(13) > a')
    ESCAD_INCIDENTID_TYPE = ()=> cy.get('thead > tr.filters > th:nth-child(1) > input')
    ESCAD_DATADETAILSPENDING = ()=> cy.get('#sitRepTable > tbody')
    ESCAD_INCONTABLE1 = ()=> cy.get('tbody > tr > td.sorting_1')
    ESCAD_PENDINGPAGEDETAILS = ()=> cy.get('div.row-fluid')
    ESCAD_AUTHORISESIT = ()=> cy.get ('#btnAuthorize')

    ESCAD_ICONCREATETIME = ()=> cy.get('#article > div > div:nth-child(1) > div:nth-child(4)')
    
    
    // ESCAD ICON DATA DISPLAY DETAILS
    
    ESCAD_ICONDISPLAY_TABLEREF = ()=> cy.get('tbody > tr > td:first-of-type > a')
    ESCAD_ICONDATADISPLAY_000 = ()=> cy.get(' div.nowrap > div:nth-child(1) > div:nth-child(2) > label') 
    
    //ESCAD PENDING INCIDENT DETAILS

    ESCAD_PENDINGINC_REPORTDATE_ONTABLE = ()=> cy.get('tbody > tr > td:nth-child(3)')


}
export default EscadIconDataDisplay