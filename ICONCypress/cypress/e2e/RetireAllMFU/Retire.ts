import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import Mfulocators from "../pages/Mfupage";

const mfulocators = new Mfulocators()
const list = []

Given('I navigate to MFU page',()=>{
    cy.loginToICON()
    cy.visit(`https://${Cypress.env('ICON_HOST_URL')}${'/PublicInformation/MajorFireUpdates'}`)
})


Then(`I retire all updates from feed table`,()=>{
    mfulocators.ONLY_MINE_CHECKBOX().uncheck().waitForLoadingSpinner()
    mfulocators.MFU_FEED_UPDATES_TABLE_DATA_ROWS().as('tableRows')
    

    cy.get('@tableRows').each(($el, index, $list) => {
          
        // using the onclick urls for each table row to navigate to the correct MFU and retire/reissue it
          const loc = $el.html(".attr('onclick')").slice()[1]

          cy.visit(`https://${Cypress.env('ICON_HOST_URL')}${loc}`).waitForLoadingSpinner()
          mfulocators.RETIRE_BTN().click().waitForLoadingSpinner()
          mfulocators.RETIRE_UPDATE_POPUP_BTN().click().waitForLoadingSpinner()

        })
    
})

