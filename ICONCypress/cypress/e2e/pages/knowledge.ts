class knowledge{

    KNOWLEDGE_TAB = ()=> cy.get('div#nav > ul:nth-child(1) > li:nth-child(2) > a')

    //*******************Activity Summary*************************** */
    ICON_activity_summary = () => cy.get('#nav > ul:nth-child(1) > li.dropdown.open > ul > li:nth-child(2) > a')
    activity_summary_heading = () => cy.get('div#article > h2')
    activity_table = () => cy.get('table#activityTable')
    resource_table = () => cy.get('table#resourceTable')
    region_table = () => cy.get('table#regionTable')
    alert_table = () => cy.get('table#alertTable')

    ACT_TAB_COL = () => cy.get('#activityTable>thead>tr>th')
    RES_TAB_COL = () => cy.get('#resourceTable>thead>tr>th') 
    REG_TAB_COL = () => cy.get('#regionTable>thead>tr>th')


    S44_COUNT = () => cy.get('em').eq(1)
    TOBAN_COUNT = () => cy.get('em').eq(2) 

    //*******************Incident Alert Level List*************************** */
    incident_alert_list = () => cy.get('#nav > ul:nth-child(1) > li.dropdown.open > ul > li:nth-child(3) > a')
    incident_alert_heading = () => cy.get('div#report > div > div > h4')
    incident_alert_table = () => cy.get('table#incidentAlertTable')

    //*******************Reports*************************** */
    S44_REPORT_PAGE = () => cy.get('#nav > ul:nth-child(1) > li.dropdown.open > ul > li:nth-child(5)>ul>li:nth-child(4)>a')

    //*******************Incident Event Log and OpsLog*************************** */
    INC_EVNT_OPS_LOG_PAGE = () => cy.get('#nav > ul:nth-child(1) > li.dropdown.open > ul > li:nth-child(4)>a')

}

export default knowledge