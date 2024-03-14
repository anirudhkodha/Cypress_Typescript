import { trim } from "lodash";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import knowledge from "../pages/knowledge";
import s44_page from "..//pages/S44Page"
import FDRlocators from "../pages/FDRlocators";

class activitySum_domain {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    incSum = new knowledge()
    s44 = new s44_page()
    fdrlocators = new FDRlocators()
    
    verify_ICON_SUM_Page = ()=>{
        cy.url().should('not.include','Errors')
        this.incSum.activity_summary_heading().should('contain.text','ICON Activity Summary')
        this.incSum.activity_table().should('be.visible')
        this.incSum.alert_table().should('be.visible')
        this.incSum.region_table().should('be.visible')
        this.incSum.resource_table().should('be.visible')
        this.verify_ACT_TAB_COLS()
        this.verify_REG_TAB_COLS()
        this.verify_RES_TAB_COLS()
        cy.screenshot('ActivitySumPage')
    }

    verify_s44Count_match_s44list_activitySum = () =>{
        this.s44.S44_SEC44LIST_S44COUNT()
        .invoke('text')
        .then((text1)=>{
            cy.go(-2)
            this.incSum.S44_COUNT()
            .invoke('text')
            .should((text2)=>{
                expect(parseInt(text1.slice(24,27))).eql(parseInt(text2.slice(10,13)))
            })        
         }) 
    } 

    verify_TOBANCount_match_FDR_activitySum = () =>{        
        this.fdrlocators.FDR_ALL_TOBANTODAY_BTNS().then($btns=>{
            //check if element exists or not
            if(!($btns.find('label:nth-child(2)[class="btn btn-toban ng-pristine ng-valid active btn-danger"]').length)){
                cy.go(-1)
                this.incSum.TOBAN_COUNT().contains('There are no fire weather districts with declared TOBANs.')
            }
            else{
                this.fdrlocators.FDR_ALL_TOBANTODAY_BTNS()
                .find('label:nth-child(2)[class="btn btn-toban ng-pristine ng-valid active btn-danger"]')
                .then((items) => {                   
                    let len = items.length        
                    cy.go(-1)
                    this.incSum.TOBAN_COUNT()
                    .invoke('text')
                    .should((text2)=>{
                        if(len == 1){
                            expect(len).eql(parseInt(text2.slice(9,10)))
                        }
                        else{
                            expect(len).eql(parseInt(text2.slice(10,12)))
                        }
                    })
                })
            }
        })    
    } 
    
    verify_ACT_TAB_COLS = () => {
        this.incSum.ACT_TAB_COL().then(items=>{
            cy.wrap(items).should('have.length',5)
            cy.wrap(items[0]).contains(/(Activity Type)/)
            cy.wrap(items[1]).contains(/(Total)/)
            cy.wrap(items[2]).contains(/(Total B)\/(G)\/(S)/)
            cy.wrap(items[3]).contains(/(Total Other Fire)/)
            cy.wrap(items[4]).contains(/(Total Other)/)
        })
    }

    verify_REG_TAB_COLS = () => {
        this.incSum.REG_TAB_COL().then(items=>{
            cy.wrap(items).should('have.length',5)
            cy.wrap(items[0]).contains(/(Region)/)
            cy.wrap(items[1]).contains(/(Going)/)
            cy.wrap(items[2]).contains(/(Being Controlled)/)
            cy.wrap(items[3]).contains(/(Contained)/)
            cy.wrap(items[4]).contains(/(Patrol)/)
        })
    }

    verify_RES_TAB_COLS = () => {
        this.incSum.RES_TAB_COL().then(items=>{
            cy.wrap(items).should('have.length',2)
            cy.wrap(items[0]).contains(/(Resource Type)/)
            cy.wrap(items[1]).contains(/(Total)/)
        })
    }

}
export default activitySum_domain;