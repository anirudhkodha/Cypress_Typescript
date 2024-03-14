/// <reference types="cypress-xpath" />
//IALL-->Incident Alert Level List
class incidentAlertLevelListPage{

    IALL_HEAD =() => cy.get(`h4`)

    IALL_FULLSCRN =() => cy.get(`[href="/JAR/Knowledge/AlertLevel?ScreenType=BigScreen"]`)
    IALL_NSW =() => cy.get(`[href="/JAR/Knowledge/AlertLevel?AgencyType=NSW"]`)
    IALL_ACT =() => cy.get(`[href="/JAR/Knowledge/AlertLevel?AgencyType=ACT"]`)
    IALL_BOTH =() => cy.get(`[href="/JAR/Knowledge/AlertLevel?AgencyType=Both"]`)
   
    IALL_TABLE_COLS =() => cy.get(`div[class="dataTables_scrollHeadInner"]>table>thead>tr>th`) //12columns

    IALL_SEARCHBOX =() => cy.get(`#incidentAlertTable_filter>label>input`)
    IALL_TAB_FIRST_ROW =() => cy.get('tbody>tr:nth-child(1)>td')    
}

export default incidentAlertLevelListPage