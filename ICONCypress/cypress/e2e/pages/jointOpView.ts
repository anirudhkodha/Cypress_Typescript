/// <reference types="cypress-xpath" />
class jointOpViewPage{

    PAGE_HEADING =() => cy.get(`h2`)

    SEC44_LIST_BTN =() => cy.get(`[href="/JAR/Section44"]`) 
    
   

    SEARCH=() => cy.get(`input[type="search"]`) //select 1 of 2 in the script

    FILTER_AGENCY_RES_DD=() => cy.get(`.dropdownList.span6`)
    RECORDS_PAGE_DD=() => cy.get(`select[name="incidentsSummaryTable_length"]`)
    //S44 Section
    S44_BTN=() => cy.get(`#S44Button`)
    S44_TABLE_COLS =() => cy.get(`#s44Table_wrapper>div:nth-child(2)>div>div>table>thead>tr>th`) //6columns
    S44_TABLE_ROWS_INC =() => cy.get(`#s44Table>tbody>tr[role="row"]`) //no. of rows may vary based on search criteria
    S44_TABLE_ROWS_S44REF =() => cy.get(`#s44Table>tbody>tr[class="dtrg-group dtrg-start dtrg-level-0"]`) //no. of rows may vary based on search criteria
    S44_TABLE_ROWS_INCOUNT =() => cy.get(`#s44Table>tbody>tr[class="dtrg-group dtrg-end dtrg-level-0"]`) //no. of rows may vary based on search criteria
    S44_TABLE_NO_ROWS_DD =() => cy.get(`select[name="s44Table_length"]`)
    tst=()=>cy.get('#s44Table>tbody>tr:nth-child(2)')

    //Region Section
    REGION_BTN=() => cy.get(`#RegionButton`)
    REGION_COLS=() => cy.get(`h5`)// 8 regions
    REGION_GOING=() => cy.get(`.going.accordion-heading`)
    REGION_BCONTROLED=() => cy.get(`.being-controlled.accordion-heading`)
    REGION_CONTAINED=() => cy.get(`.contained.accordion-heading`)
    REGION_PATROL=() => cy.get(`.patrol.accordion-heading`)
    REGION_OUT=() => cy.get(`.out.accordion-heading`)
    REGION_EXPAND_BTN=() => cy.get('#expandAllButton')
    REGION_INC_TABLES=() => cy.get('.table.big-screen.big-screen-striped.dataTable.containers')

    //Incident summary
    INC_SUM_TABLE_NO_ROWS_DD =() => cy.get(`select[name="incidentsSummaryTable_length"]`)
    INC_SUM_TABLE_COLS =() => cy.get(`#incidentsSummaryTable_wrapper>div:nth-child(2)>div>div>table>thead>tr>th`) //10columns
    INC_SUM_TABLE_ROWS_INC =() => cy.get(`#incidentsSummaryTable>tbody>tr[role="row"]`) //no. of rows may vary based on search criteria
}

export default jointOpViewPage