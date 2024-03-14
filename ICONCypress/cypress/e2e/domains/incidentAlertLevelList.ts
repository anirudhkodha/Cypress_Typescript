import { trim } from "lodash";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import KNOWLEDGE from "../pages/knowledge";
import IALL from "../pages/incidentAlertLevelList";

class iall {

    knowledge = new KNOWLEDGE()
    iall = new IALL()
    incidentLocators = new INCIDENTLOCATORS()

    verify_IALL_page = () => {
        cy.url().should('not.include','Errors')
        cy.url().should('include','AlertLevel')
        this.knowledge.incident_alert_heading().should('contain.text','Incidents Alert Levels List')
        this.knowledge.incident_alert_table().should('exist')
        this.verify_IALLTable_Columns()          
    } 

    verify_IALLTable_Columns = () => {
        this.iall.IALL_TABLE_COLS().then(items=>{
            cy.wrap(items[0]).contains(/(Incident)/)
            cy.wrap(items[1]).contains(/(LGA)/)
            cy.wrap(items[2]).contains(/(Region)/)
            cy.wrap(items[3]).contains(/(Address)/)
            cy.wrap(items[4]).contains(/(Class)/)
            cy.wrap(items[5]).contains(/(Type)/)
            cy.wrap(items[6]).contains(/(Status)/)
            cy.wrap(items[7]).contains(/(SitRep)/)
            cy.wrap(items[8]).contains(/(Impact)/)
            cy.wrap(items[9]).contains(/(Current)/)
            cy.wrap(items[10]).contains(/(Previous)/)
            cy.wrap(items[11]).contains(/(Trend)/)
            
        })
    }

    search_Given_Incident = (incident:string) =>{
        this.iall.IALL_SEARCHBOX().clear().type(incident)
    }

    select_firstMatch = () =>{
        this.iall.IALL_TAB_FIRST_ROW().eq(0).should('be.visible').click()
    }

    
    fetch_Incident_Details_fromINCPAGE = ()=> {
        let det:string[] = []
        this.incidentLocators.INC_DET().click({force:true})
        this.incidentLocators.INC_DET_1COL().eq(2).then(($text)=>det.push($text.text()))  //name
        this.incidentLocators.INC_DET_1COL().eq(4).then(($text)=>det.push($text.text()))  //LGA
        this.incidentLocators.INC_DET_1COL().eq(5).then(($text)=>det.push($text.text()))  //region
        this.incidentLocators.INC_DET_1COL().eq(3).then(($text)=>det.push($text.text()))  //address
        this.incidentLocators.INC_DET_2COL().eq(5).find('span').then(($text)=>det.push($text.text().slice(-1)))  //class
        //this.incidentLocators.INC_DET_2COL().eq(2).then(($text)=>det.push($text.text()))  //type (add functionality for everything)
        this.incidentLocators.INC_DET_1COL().eq(1).then(($text)=>det.push($text.text()))  //status
        this.incidentLocators.INC_SITREP_DT().then(($text)=>det.push($text.text().toString().slice(0,5)+$text.text().toString().slice(10)))  //sitrep_DT
        this.incidentLocators.INC_DET_2COL().eq(4).then(($text)=>det.push($text.text()))  //currentAlertLevel
        //cy.go(-1)
        return det
    }

    fetch_searchedINC_Details_fromIALL = () => {
        let det:string[] = []        
        for (let i = 0 ; i<=4 ; i++){
            this.iall.IALL_TAB_FIRST_ROW().eq(i).then(($text)=>det.push($text.text()))
        }
        this.iall.IALL_TAB_FIRST_ROW().eq(6).then(($text)=>det.push($text.text()))
        this.iall.IALL_TAB_FIRST_ROW().eq(7).then(($text)=>det.push($text.text().toString()))
        this.iall.IALL_TAB_FIRST_ROW().eq(9).then(($text)=>det.push($text.text().toString()))
        return det
    }

    verify_incidentDET_match_iall = (inc:string[], iall:string[]) =>{
        
        for(let i = 0 ; i<=inc.length-2 ; i++){
            expect(inc[i]).eql(iall[i])
        }
        this.crossverify_alert_inc_iall(inc[inc.length-1], iall[iall.length-1])

    }

    crossverify_alert_inc_iall = (inc:string, iall:string) =>{
        if(iall.includes('('))
          expect(inc.slice(1,3)+inc.slice(5,7)).eql(iall.slice(0,2)+iall.slice(4,6)) 
        else
        expect(inc.slice(1,3)).eql(iall)  
    }

    crossverify_prev_alert_inc_iall = (inc:string) =>{
        this.iall.IALL_TAB_FIRST_ROW().eq(10).then(($text)=>{ let iall = $text.text()
        if(iall.includes('('))
          expect(inc.slice(0,2)+inc.slice(4,6)).eql(iall.slice(0,2)+iall.slice(4,6)) 
        else
        expect(inc.slice(1,3)).eql(iall)  
          })
    }





    
}
export default iall;