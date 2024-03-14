class BrigadeReportSearchPage{
    // https://icon.uat.rfs.nsw.gov.au/Brigade/Reporting/Search#/

    VISIT_BRIGADE_REPORT_SEARCH_PAGE = ()=>{
        cy
        .visit(`https://${Cypress.env('ICON_HOST_URL')}${'/Brigade/Reporting/Search#'}`
        ,{failOnStatusCode: false
      })
    }

    VOLUNTEER_REPORT_SUBMITTED_LABEL = () => cy.get('#VolunteerReportSubmitted > .control-label')
    VOLUNTEER_REPORT_SUBMITTED_OPTIONS = () => cy.get('#VolunteerReportSubmitted > .controls')
    
    BRIGADE_REPORT_LABEL = () => cy.get(`#divIncomplete > .control-label`)
    BRIGADE_REPORT_LABEL_OPTIONS = () => cy.get('#divIncomplete > .controls')

    // check radio input values
    ASSERT_RADIO_INPUT_VALUES=(elems: JQuery<HTMLElement>, valuesArray:Array<string>) : boolean=> {
        const inputArray = elems.map(function() {
            return this.outerText;
          }).get()
        
        let result = false;
          
        if (inputArray.length === valuesArray.length) {
            for (let i = 0; i < inputArray.length; i++) {
                console.log('')
                result = valuesArray.indexOf(inputArray[i]) !== -1;
            
                if (result === false) {
                break;
                }
            }
        }
        return result
    }

    SEARCH_BUTTON = () =>cy.get(`#lnkBtnSearch`)

    VOL_REP_SUBMITTED_ALL_OPTION = () => cy.get('#volRepSubmittedAll')
        


    VOL_REP_SUBMITTED_YES_OPTION = () =>
        cy.get('#volRepSubmittedYes')
    

    VOL_REP_SUBMITTED_NO_OPTION = () =>
        cy.get('#volRepSubmittedNo')
    

    BRIGADE_REPORT_ALL_OPTION = () => 
        cy.get('#rdBtnAll')
    

    BRIGADE_REPORT_INCOMPLETE_OPTION = () => 
        cy.get('#rdBtnIncomplete')
    

    BRIGADE_REPORT_COMPLETE_OPTION = () => 
        cy.get('#rdBtnComplete')

    LGA_DROPDOWN = () => cy.get('#ddlLga')

    SEARCH_BAR = () => cy.get('#search_filter > label > input').as('searchBar')

    FILTERED_INCIDENT = () => cy.get('.odd > :nth-child(2) > a')

    INCIDENT_RESULT_ROWS = () => cy.get('tbody>[role="row"]')

    INCIDENT_NUMBERS = () =>cy.get('tbody>[role="row"]>td>a')

    INCIDENT_REPORTS_EXPAND_BUTTON =() => cy.get('tbody>[role="row"]>.details-control')

    CLICKED_INCIDENT = () => cy.get('tbody>.shown').next()


}

export default BrigadeReportSearchPage