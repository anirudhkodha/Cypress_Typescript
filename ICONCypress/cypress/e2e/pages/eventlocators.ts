import { TimeoutError } from "cypress/types/bluebird"

class Eventlocators{

VISIT_CREATE_NEW_EVENT_PAGE = () => cy.visit(`https://${Cypress.env('ICON_HOST_URL')}${'/FireIncident/FireIncident/NewEvent'}`,{failOnStatusCode: false}) 
CREATE_EVENT_TAB = ()=> cy.get('#mnuOperation > li:nth-child(5) > a',{timeout:20000})
INCIDENT_NAME = ()=> cy.get('#IncidentName').should('be.visible')
LGA_NAME = ()=> cy.get('#SelectedLga')
START_DATE = ()=> cy.get('[name="StartDateTime"]')
EVENT_TYPE = ()=> cy.get('#SelectedEventType')
FIRE_SIZE = ()=> cy.get('#FireSize')
TENURE_NAME = ()=>  cy.get('[class="selectize-input items not-full has-options"]') 
SELECTED_TENURE_NAME = ()=> cy.get('#wizardForm > div:nth-child(1) > div:nth-child(8) > div > div > div.selectize-dropdown.multi.plugin-remove_button > div > div:nth-child(6)')
AGENCY_RESPONSIBLE_TAB = ()=> cy.contains('Which Agency is responsible?')
SELECTED_AGENCY = ()=> cy.get('#SelectedLeadAgency')
SELECTED_INCIDENT_OWNER = ()=> cy.get('#SelectedIncidentOwner')
INCIDENT_LOCATION = ()=> cy.get('#MapViewModel_Address_FormattedAddress')
SELECT_INCIDENT_LOCATION = ()=> cy.get('.controls > [type="button"]')
SAVE_EVENT = ()=> cy.get('#save')
TOOGLE_INCIDENTDETAILS= ()=> cy.get('a[href="#incidentSummary"]',{timeout: 180000})
STATUS = ()=> cy.get(':nth-child(1) > .control-group > .controls > .dl-horizontal > :nth-child(4)')
SR_AUTHORISED = ()=> cy.get('.odd > :nth-child(2)')
MAP_BOX = () => cy.get('#map')

//>>>>>>>>Event Errors>>>>>>>>>>>>>>>
EVNT_NAME_ERROR = () => cy.get('#IncidentName-error')
EVNT_LGA_ERROR = () => cy.get('#SelectedLga-error')
EVNT_TYPE_ERROR = () => cy.get('#SelectedEventType-error')
EVNT_TENURE_ERROR = () => cy.get('#wizardForm>div>div:nth-child(8)>div>span.help-inline.error.field-validation-error')
EVNT_RESPAGENCY_ERR = () => cy.get ('#SelectedLeadAgency-error')
EVNT_LOCATION_ERROR = () => cy.get('#MapViewModel_Address_FormattedAddress-error')
EVNT_STARTDATE_ERR = () => cy.get ('span[class="field-validation-error help-inline error"]>span').eq(2)


} export default Eventlocators