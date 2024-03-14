
class OperationsLog_Message_IntelList_Page{

    AD_NEWLOG_BTN =() => cy.get(`[href="/JAR/OpsLog/NewOpsLog"]`)
    AD_SEARCH_REPORT_BTN =() => cy.get(`[href="/JAR/Knowledge/Reports?Name=OperationsLog"]`)

    LOG_SEARCH_DD =() => cy.get(`#daysPriorSelector`)
    
    LOG_TABLE =() => cy.get(`table[id="opsLogTable"]`)
    
    THEAD_COLS =() => cy.get(`div[class="dataTables_scrollHeadInner"]>table>thead>tr:nth-child(1)>th`) //9 columns
    SEARCH_SELRCTOR=()=> cy.get('#daysPriorSelector')
    TAB_FIRST_ROW =() => cy.get(`#opsLogTable>tbody>tr:nth-child(1)>td`)
    
}

export default OperationsLog_Message_IntelList_Page