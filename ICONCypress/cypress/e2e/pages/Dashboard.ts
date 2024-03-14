class Dashboard {
    
    CURRENT_INCIDENTS = () => cy.get('#myControl_CI')
    
    ADMIN_MENU_ICON = () => cy.get('i.icon-question-sign')
    ADMINISTRATION_MENU = () => cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > a')
    ICON_USER_MANAGEMENT_MENU = () => cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(1) > a')
    ESCAD_ICON_DATA_DISPLAY_MENU = () => cy.get('#mnuSystem > li.dropdown-submenu.visible-desktop > ul > li:nth-child(6) > a')

  // get the operations dropdown from menubar
    OPERATIONS = () =>
    cy.get(":nth-child(1) > :nth-child(1) > .dropdown-toggle > .caret");

    //get the 'Rart' div from operations dropdown
    // ask if this selector is okay
    RART_OPTION = () => cy.get(":nth-child(16) > a");

    //get the 'Current Incident Search' option from operations menu dropdown
    CURRENT_INCIDENT_SEARCH = () =>cy.get(`#mnuOperation > :nth-child(10) > a`)


}
export default Dashboard