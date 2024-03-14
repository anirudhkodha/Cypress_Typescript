import { And } from "cypress-cucumber-preprocessor/steps/index";
import INCIDENTLOCATORS from "../pages/Incidentlocators";


class alert{

    incidentlocators = new INCIDENTLOCATORS()

    verify_Alert_Modal_Win=()=>{
        this.incidentlocators.ALERTLEVETBOX_SR().contains(/(Incident Alert Level)/)
        //this.incidentlocators.ALERT_TOOLTIP().contains(/(A Bushfire alert level (or No Threat) is mandatory for a fire incident. When determining alert level use local and current weather information.)/)
        this.incidentlocators.ALERT_TAB_COLS().then(items=>{
            cy.wrap(items[1]).contains(/(2 hrs)/)
            cy.wrap(items[2]).contains(/(2-6 hrs)/)
            cy.wrap(items[3]).contains(/(6-24 hrs)/)
            cy.wrap(items[4]).contains(/(24)\W\s(hrs)/)
        })
        this.fetch_Row_header()
        this.incidentlocators.ALERT_TAB_ROWS().then(items=>{

            cy.wrap(items[0]).find('td').should('have.length',5)
            cy.wrap(items[0]).find('td:nth-child(2)>input').eq(0).should('have.value', 'EW')
            cy.wrap(items[0]).find('td:nth-child(3)>input').eq(0).should('have.value', 'EW')
            cy.wrap(items[0]).find('td:nth-child(4)>input').eq(0).should('have.value', 'WA')
            cy.wrap(items[0]).find('td:nth-child(5)>input').eq(0).should('have.value', 'A')
            
            cy.wrap(items[1]).find('td').should('have.length',5)
            cy.wrap(items[1]).find('td:nth-child(2)>input').eq(0).should('have.value', 'EW')
            cy.wrap(items[1]).find('td:nth-child(3)>input').eq(0).should('have.value', 'EW')
            cy.wrap(items[1]).find('td:nth-child(4)>input').eq(0).should('have.value', 'WA')
            cy.wrap(items[1]).find('td:nth-child(5)>input').eq(0).should('have.value', 'A')

            cy.wrap(items[2]).find('td').should('have.length',5)
            cy.wrap(items[2]).find('td:nth-child(2)>input').eq(0).should('have.value', 'WA')
            cy.wrap(items[2]).find('td:nth-child(3)>input').eq(0).should('have.value', 'WA')
            cy.wrap(items[2]).find('td:nth-child(4)>input').eq(0).should('have.value', 'A')
            cy.wrap(items[2]).find('td:nth-child(5)>input').eq(0).should('have.value', 'A')

            cy.wrap(items[3]).find('td').should('have.length',5)
            cy.wrap(items[3]).find('td:nth-child(2)>input').eq(0).should('have.value', 'WA')
            cy.wrap(items[3]).find('td:nth-child(3)>input').eq(0).should('have.value', 'A')
            cy.wrap(items[3]).find('td:nth-child(4)>input').eq(0).should('have.value', 'A')
            cy.wrap(items[3]).find('td:nth-child(5)>input').eq(0).should('have.value', 'A')

            cy.wrap(items[4]).find('td').should('have.length',5)
            cy.wrap(items[4]).find('td:nth-child(2)>input').eq(0).should('have.value', 'A')
            cy.wrap(items[4]).find('td:nth-child(3)>input').eq(0).should('have.value', 'A')
            cy.wrap(items[4]).find('td:nth-child(4)>input').eq(0).should('have.value', 'A')
            cy.wrap(items[4]).find('td:nth-child(5)>input').eq(0).should('have.value', 'A')
        })
        this.verify_Alert_BTNS_notVISIBLE()

    }

    fetch_Row_header =()=>{        
        this.incidentlocators.ALERT_TAB_ROWS().find('td>strong').then(items=>{
            cy.wrap(items).should('have.length',5)
            cy.wrap(items[0]).contains(/(Catastrophic)/)
            cy.wrap(items[1]).contains(/(Extreme)/)
            cy.wrap(items[2]).contains(/(High)/)
            cy.wrap(items[3]).contains(/(Moderate)/)
            cy.wrap(items[4]).contains(/(No Rating)/)
            
        })

    }

    verify_WA_BTNS =()=>{
        this.incidentlocators.ALERT_WA_BTN().eq(0).should('be.visible')
        this.incidentlocators.ALERT_WA_BTN().eq(1).should('be.visible')
        this.incidentlocators.ALERT_EW_BTN().eq(0).should('not.be.visible')
        this.incidentlocators.ALERT_EW_BTN().eq(1).should('not.be.visible')
        this.incidentlocators.ALERT_A_BTN().eq(0).should('not.be.visible')
        this.incidentlocators.ALERT_A_BTN().eq(1).should('not.be.visible')
    }

    verify_EW_BTNS =()=>{
        this.incidentlocators.ALERT_WA_BTN().eq(0).should('not.be.visible')
        this.incidentlocators.ALERT_WA_BTN().eq(1).should('not.be.visible')
        this.incidentlocators.ALERT_EW_BTN().eq(0).should('be.visible')
        this.incidentlocators.ALERT_EW_BTN().eq(1).should('be.visible')
        this.incidentlocators.ALERT_A_BTN().eq(0).should('not.be.visible')
        this.incidentlocators.ALERT_A_BTN().eq(1).should('not.be.visible')
    }

    verify_A_BTNS =()=>{
        this.incidentlocators.ALERT_WA_BTN().eq(0).should('not.be.visible')
        this.incidentlocators.ALERT_WA_BTN().eq(1).should('not.be.visible')
        this.incidentlocators.ALERT_EW_BTN().eq(0).should('not.be.visible')
        this.incidentlocators.ALERT_EW_BTN().eq(1).should('not.be.visible')
        this.incidentlocators.ALERT_A_BTN().eq(0).should('be.visible')
        this.incidentlocators.ALERT_A_BTN().eq(1).should('be.visible')
    }

    verify_Alert_BTNS_notVISIBLE =()=>{
        this.incidentlocators.ALERT_WA_BTN().eq(0).should('not.be.visible')
        this.incidentlocators.ALERT_WA_BTN().eq(1).should('not.be.visible')
        this.incidentlocators.ALERT_EW_BTN().eq(0).should('not.be.visible')
        this.incidentlocators.ALERT_EW_BTN().eq(1).should('not.be.visible')
        this.incidentlocators.ALERT_A_BTN().eq(0).should('not.be.visible')
        this.incidentlocators.ALERT_A_BTN().eq(1).should('not.be.visible')
    }

    verify_WA_BTNS_DISABLED =()=>{
        this.incidentlocators.ALERT_WA_BTN().eq(0).should('be.disabled')
        this.incidentlocators.ALERT_WA_BTN().eq(1).should('be.disabled')
    }

    verify_Set_AlertLevel =()=>{
        this.incidentlocators.SELECTED_ALERTLEVEL()
        .invoke('val')
        .then((text1) => {
            this.incidentlocators.ALERT_LEVEL_LABEL()
            .invoke('text')
            .should((text2) => {
                expect(text1).to.eq(text2)
         })
     })
        //this.incidentlocators.ALERT_LEVEL_LABEL().contains('WA')
    }

    regrade_AlertLevel =()=>{
        this.incidentlocators.ALERT_REGRADE_LABEL().find('label').contains('EW')
        .and('be.visible') 
        this.incidentlocators.ALERT_REGRADE_RESN().type('Test alert regrade')       
    }

    verify_Regrade_AlertLevel_notVisible =()=>{
        this.incidentlocators.ALERT_REGRADE_LABEL().should('not.be.visible') 
        this.incidentlocators.ALERT_REGRADE_RESN().should('not.be.visible')       
    }

    click_upgrade_EW =()=>{
        this.incidentlocators.ALERT_WA_BTN().eq(0).click()   
    }

    verify_alertLVL_TXT=()=>{
        this.incidentlocators.VERIFY_ALERTLEVLTXT().eq(0).contains('Selected Alert Level: EW')
        this.incidentlocators.VERIFY_ALERTLEVLTXT().eq(1).contains('[WA]') 
        this.incidentlocators.VERIFY_ALERTLEVLTXT().eq(2).contains(' Change Reason: Test alert regrade')    
    }

}
export default alert;