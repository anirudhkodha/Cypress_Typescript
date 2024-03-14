class AdvincidentSearchPage{

    REFERENCE =() => cy.get(`#Reference`)
    HECTARES_BURNT_DD =() => cy.get(`#SelectedTenureBurntArea`)
    TENURE_DIV =() => cy.get(`#SelectedTenures`)

    STATUS_TAB =() => cy.get(`[href="#stateChannels"]`)
    INCIDENT_TYPES_TAB =() => cy.get(`[href="#technicalChannels"]`)
    OTHER_TAB =() => cy.get(`[href="#esoChannels"]`)

    SEARCH_BTN =() => cy.get(`button[type="submit"]`)

    //>>>>>Status Tab
    CHKBOXES =() => cy.get('input[type="checkbox"]')
    NOTIFY_ALL_RADIO =() => cy.get('#notifiableAll')
    NOTIFY_SEL_RADIO =() => cy.get('#notifiable')
    NOTIFY_NOT_RADIO =() => cy.get('#nonNotifiable')

    //>>>>Other
    INC_ALL_RADIO =() => cy.get('#optionAll')
    INC_AUTHMAP_RADIO =() => cy.get('#optionFilterMapped')
    INC_NOAUTHMAP_RADIO =() => cy.get('#optionFilterNotMapped')


}

export default AdvincidentSearchPage