class BIRSJointAgencyPage{

    //\\ Scenario: ICONSUP-T638 Validate Search results and export have correct columns displayed as per requirements
    VISIT_JOINT_AGENCY_PAGE = () => cy.visit(`https://${Cypress.env('ICON_HOST_URL')}${'/JAR/Knowledge/Reports'}`
    ,{failOnStatusCode: false})
    BIRS_INCIDENT_RESPONSE_REPORT = ()=> cy.get('#collapseTwo>div>ul>li').contains('Birs Incident Response Report')
    BIRS_INCIDENT_REPORT_FROMDATE = ()=> cy.get('input[name="FromDate"]')
    BIRS_INCIDENT_REPORT_TODATE = ()=> cy.get('input[name="ToDate"]')
    BIRS_REGION_SELECTOR = () => cy.get('#regionSelector')
    BIRS_ZONE_SELECTOR = () => cy.get('#zoneSelector')
    BIRS_DISTRICT_SELECTOR = () => cy.get('#districtSelector')
    BIRS_FIND_RECORDS_BUTTON = () => cy.get('#submitReport_BirsOutstanding')
    BIRS_TABLE_HEADER_ROW = () => cy.get('[class="dataTables_scrollHeadInner"]>table>thead>tr')
    BIRS_TABLEINFO = ()=> cy.get('#resultTable_info')


        //validate Result fields

        // BIRS_TABLEINFO = ()=> cy.get('#resultTable_info')
      
        BIRS_EXP_REGION = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(1)')
        BIRS_EXP_ZONE = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(2)')
        BIRS_EXP_DISTRICT = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(3)')
        BIRS_EXP_LGA = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(4)')
        BIRS_EXP_REF = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(5)') 
        BIRS_EXP_INCIDENT_DATE = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(6)')
        BIRS_EXP_INCIDENT_TYPE = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(7)')
        BIRS_EXP_BRIGADE_NAME = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(8)')
        BIRS_EXP_APPLIANCE_USED = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(9)')
        BIRS_EXP_RESPONSE_TIME = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(10)')
        BIRS_EXP_PRIMARY_SUPPORT = ()=> cy.get('#resultTable >tbody > tr:first-of-type >  td:nth-child(11)')


    BIRS_EXPRESULTSBTTN = ()=> cy.get('#btnExport')
}

export default BIRSJointAgencyPage;