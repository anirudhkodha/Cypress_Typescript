import { trim } from "lodash";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import JOINTOPVIEW from "../pages/jointOpView";
import incident_domain from "../domains/incidents";
import { contains } from "cypress/types/jquery";

class jointOpView_domain {

    dashboard= new Dashboard()    
    eventlocators = new Eventlocators()
    incidentlocators = new INCIDENTLOCATORS()
    jointOpView = new JOINTOPVIEW()
    inc_dom = new incident_domain()
    
    

    showhide_s44_sec = () => {
        //page load has this section expanded initially
        this.jointOpView.S44_BTN().should('be.visible').click()              
    }

    records_per_page_s44 =(num:number) =>{
        switch(num) {
            case 10:
              this.jointOpView.S44_TABLE_NO_ROWS_DD().select(1)
              break;
            case 25:
                this.jointOpView.S44_TABLE_NO_ROWS_DD().select(2)
              break;
            case 50:
                this.jointOpView.S44_TABLE_NO_ROWS_DD().select(3)
              break;
            case 100:
                this.jointOpView.S44_TABLE_NO_ROWS_DD().select(4)
            break;  
            default:
                this.jointOpView.S44_TABLE_NO_ROWS_DD().select(0)
          }
    }

    search_s44 = (text:string)=>{
        this.jointOpView.SEARCH().eq(0).type(text)
    }

    verify_s44_search = (text:string)=>{
        this.jointOpView.tst().each(($el, index, $list) =>{
            cy.wrap($el).contains(text)
            cy.wait(10)
            
        
            
        })
    }


    verify_region_sec = () => {
        this.jointOpView.REGION_COLS().then(items=>{
            cy.wrap(items).should('have.length',8)
            cy.wrap(items[0]).contains(/(South Western)/)
            cy.wrap(items[1]).contains(/(North Western)/)
            cy.wrap(items[2]).contains(/(Western)/)
            cy.wrap(items[3]).contains(/(North Eastern)/)
            cy.wrap(items[4]).contains(/(South Eastern)/)
            cy.wrap(items[5]).contains(/(Hunter)/)
            cy.wrap(items[6]).contains(/(Greater Sydney)/)
            cy.wrap(items[7]).contains(/(ACT)/)
        })

        this.jointOpView.REGION_GOING().then(items=>{
            cy.wrap(items).should('have.length',8)
            for(let i = 0 ; i<items.length ; i++){
                cy.wrap(items[i]).should('have.css', 'background-color', 'rgb(204, 0, 0)')
                cy.wrap(items[i]).find('a').contains(/(Going)/)
            }
        })

        this.jointOpView.REGION_BCONTROLED().then(items=>{
            cy.wrap(items).should('have.length',8)
            for(let i = 0 ; i<items.length ; i++){
                cy.wrap(items[i]).should('have.css', 'background-color', 'rgb(255, 165, 0)')
                cy.wrap(items[i]).find('a').contains(/(Being controlled)/)
            }
        })

        this.jointOpView.REGION_CONTAINED().then(items=>{
            cy.wrap(items).should('have.length',8)
            for(let i = 0 ; i<items.length ; i++){
                cy.wrap(items[i]).should('have.css', 'background-color', 'rgb(255, 255, 0)')
                cy.wrap(items[i]).find('a').contains(/(Contained)/)
            }
        })

        this.jointOpView.REGION_PATROL().then(items=>{
            cy.wrap(items).should('have.length',8)
            for(let i = 0 ; i<items.length ; i++){
                cy.wrap(items[i]).should('have.css', 'background-color', 'rgb(0, 0, 153)')
                cy.wrap(items[i]).find('a').contains(/(Patrol)/)
            }
        })

        this.jointOpView.REGION_OUT().then(items=>{
            cy.wrap(items).should('have.length',8)
            for(let i = 0 ; i<items.length ; i++){
                cy.wrap(items[i]).should('have.css', 'background-color', 'rgb(0, 153, 0)')
                cy.wrap(items[i]).find('a').contains(/(Out)/)
            }
        })

    }

    click_ExpandALL=()=>{
        this.jointOpView.REGION_EXPAND_BTN().click()
        this.jointOpView.REGION_EXPAND_BTN().contains('Collapse All')
    }

    verify_Reg_Inc_TAB_Visible=()=>{
        this.jointOpView.REGION_INC_TABLES().should('be.visible')
        this.click_Inc_Reg()
        cy.go(-1)
        this.jointOpView.REGION_EXPAND_BTN().click().click()
        this.jointOpView.REGION_EXPAND_BTN().contains('Expand All')
        this.jointOpView.REGION_INC_TABLES().should('not.be.visible')
    }

    records_per_page_INC_SUM =(num:number) =>{
        switch(num) {
            case 10:
              this.jointOpView.INC_SUM_TABLE_NO_ROWS_DD().select(1)
              break;
            case 25:
                this.jointOpView.INC_SUM_TABLE_NO_ROWS_DD().select(2)
              break;
            case 50:
                this.jointOpView.INC_SUM_TABLE_NO_ROWS_DD().select(3)
              break;
            case 100:
                this.jointOpView.INC_SUM_TABLE_NO_ROWS_DD().select(4)
            break;  
            default:
                this.jointOpView.INC_SUM_TABLE_NO_ROWS_DD().select(0)
          }
    }

    search_INC_SUM = (text:string)=>{
        this.jointOpView.SEARCH().eq(1).type(text)
    }

    verify_INC_SUM_search = (text:string)=>{
        this.jointOpView.INC_SUM_TABLE_ROWS_INC().find('td:nth-child(1)>a').each(($el, index, $list) =>{
            cy.wrap($el).contains(text)
        })
        this.jointOpView.INC_SUM_TABLE_ROWS_INC().find('td:nth-child(1)>a').eq(0).click()        
        this.inc_dom.verify_INCNAME_INCDETPAGE(text)
        cy.go(-1)
    }

    verify_INC_SUM_COLS = () => {
        this.jointOpView.INC_SUM_TABLE_COLS().then(items=>{
            cy.wrap(items).should('have.length',10)
            cy.wrap(items[0]).contains(/(Incident Name)/)
            cy.wrap(items[2]).contains(/(Region)/)
            cy.wrap(items[3]).contains(/(Date)/)
            cy.wrap(items[4]).contains(/(Area)/)
            cy.wrap(items[5]).contains(/(Class)/)
            cy.wrap(items[6]).contains(/(Status)/)
            cy.wrap(items[7]).contains(/(Units)/)
            cy.wrap(items[8]).contains(/(Aircraft)/)
            cy.wrap(items[9]).contains(/(Plant)/)
        })
    }

    click_Inc_Reg = () => {
        cy.get('.table.big-screen.big-screen-striped.dataTable.containers').eq(0).find('a').eq(0)
        .invoke('text')
        .then((text1) => {   
            cy.get('.table.big-screen.big-screen-striped.dataTable.containers').eq(0).find('a').eq(0).click()
            this.inc_dom.verify_INCNAME_INCDETPAGE(text1)     
        })         
    }

        

}
export default jointOpView_domain;