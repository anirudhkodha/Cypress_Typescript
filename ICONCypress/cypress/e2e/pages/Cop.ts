class Cop{
    SHOW_LOCATION_SEARCH_BUTTON = () => cy.get('#showLocationSearchButton')
    LOCATION_SEARCH_TEXT_FIELD = () => cy.get('#txtLocation')
    EXECUTE_LOCATION_SEARCH_BUTTON = () => cy.get('#imgLocation')
    SHOW_INCIDENT_SEARCH_BUTTON = () => cy.get('#showIncidentSearchButton')
    INCIDENT_SEARCH_TEXT_FIELD = () => cy.get('#searchIncidentTextBox')
    FIND_INCIDENT_IN_MAP_BY_NAME = (name:any) => cy.get('#IncidentSearch_layer').contains(name)
}
export default Cop