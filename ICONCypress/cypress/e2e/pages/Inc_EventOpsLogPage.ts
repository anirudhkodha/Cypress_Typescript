///<reference types="cypress-xpath" />
class Inc_EvntOpsLogPage{

    INC_OPSLOG_TAB_COLS =() => cy.get(`.dataTables_scrollHeadInner>table>thead>tr>th`)  //8 columns
    INTELOPSLOG_TAB =() => cy.get(`#intelOpsLogTable`)
    INTELOPSLOG_TAB_ROW =() => cy.get(`#intelOpsLogTable>tbody>tr:nth-child(1)>td`)
}

export default Inc_EvntOpsLogPage