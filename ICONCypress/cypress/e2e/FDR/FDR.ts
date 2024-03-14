import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import dayjs from "dayjs";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import FDRlocators from "../pages/FDRlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Mfulocators from "../pages/Mfupage";
import Operations from "../pages/Operations&fiu";
import S44PAGE from "../pages/S44Page";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";


const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const birspage = new BIRS_COMMONPAGES()
const s44page = new S44PAGE()
const mfulocators = new Mfulocators()
const fdrlocators = new FDRlocators()

Given ('I open ICON webpage',()=> {

    cy.loginToICON()
})

And ('I can see dashbaord',()=> {
    dashboard.CURRENT_INCIDENTS().should('exist')

})


When ('I open Public Information Tab',()=>{
    mfulocators.PUBLIC_INFORMATION_TAB().click()

})

And ('I select Fire Danger Rating',()=> {
    fdrlocators.FDR_TAB().click({force : true})

})

And ('I make changes in FDR ratings for top5 District on tomorrow',()=> {
    fdrlocators.FDR_TOMORROW1().select("HIGH")
    fdrlocators.FDR_TOMORROW2().select("VERY HIGH")
    fdrlocators.FDR_TOMORROW3().select("SEVERE")
    fdrlocators.FDR_TOMORROW4().select("EXTREME")
    fdrlocators.FDR_TOMORROW5().select("CATASTROPHIC")

    


})
And ('I click on TOBAN tomorrow for top 5 district',()=> {
    fdrlocators.FDR_TOBANTOMMOROW1().click({force: true})
    fdrlocators.FDR_TOBANTOMMOROW2().click({force: true})
    fdrlocators.FDR_TOBANTOMMOROW3().click({force: true})
    fdrlocators.FDR_TOBANTOMMOROW4().click({force: true})
    fdrlocators.FDR_TOBANTOMMOROW5().click({force: true})
 

})
And ('I Save the details', ()=> { 

    fdrlocators.FDR_SAVEBTTN().click({force: true})
    cy.waitForLoadingSpinner()
    fdrlocators.FDR_ALERTSUCCESS().should('exist').and('contain','Success')
    fdrlocators.FDR_ALERTSUCCESSNOTE().should('exist').and('contain',('The Fire Danger and TOBAN feeds were successfully generated and will be published to the Public Website and IVR.'))
    fdrlocators.FDR_ALERTSUCCESSCLOSE().click({multiple:true , force: true})
})
And ('I assert with the saved details',()=> {
    cy.reload()
    
    fdrlocators.FDR_TOMORROW1().should('be.visible').and('have.attr','class','fdr-HIGH')
    fdrlocators.FDR_TOMORROW2().should('be.visible').and('have.attr','class','fdr-VERY HIGH')
    fdrlocators.FDR_TOMORROW3().should('be.visible').and('have.attr','class','fdr-SEVERE')
    fdrlocators.FDR_TOMORROW4().should('be.visible').and('have.attr','class','fdr-EXTREME')
    fdrlocators.FDR_TOMORROW5().should('be.visible').and('have.attr','class','fdr-CATASTROPHIC')
    
    fdrlocators.FDR_TOBANTOMORROWASSERT1().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTOMORROWASSERT2().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTOMORROWASSERT3().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTOMORROWASSERT4().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTOMORROWASSERT5().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')


})



///>>>>>>>>>>>>>>>>>>>>>>>>>> Move FDR from Tomorrow to today >>>>>>>>>>>>


And ('I cange FDR from Tomorrow to Today',()=> {

    fdrlocators.FDR_TOMORROW1().select("None")
    fdrlocators.FDR_TOMORROW2().select("None")
    fdrlocators.FDR_TOMORROW3().select("None")
    fdrlocators.FDR_TOMORROW4().select("None")
    fdrlocators.FDR_TOMORROW5().select("None")

    fdrlocators.FDR_TOBANTOMORROW_NO1().scrollIntoView().click({force: true})
    fdrlocators.FDR_TOBANTOMORROW_NO2().scrollIntoView().click({force: true})
    fdrlocators.FDR_TOBANTOMORROW_NO3().scrollIntoView().click({force: true})
    fdrlocators.FDR_TOBANTOMORROW_NO4().scrollIntoView().click({force: true})
    fdrlocators.FDR_TOBANTOMORROW_NO5().scrollIntoView().click({force: true})

    fdrlocators.FDR_SAVEBTTN().click({force: true})
    cy.waitForLoadingSpinner()
    fdrlocators.FDR_ALERTSUCCESS().should('be.visible').and('contain','Success')
    fdrlocators.FDR_ALERTSUCCESSNOTE().should('be.visible').and('contain',('The Fire Danger and TOBAN feeds were successfully generated and will be published to the Public Website and IVR.'))
    fdrlocators.FDR_ALERTSUCCESSCLOSE().click({multiple:true , force: true})


})



And ('I Change TOBAN from Tomorrow to Today',()=> {

    cy.reload()
    fdrlocators.FDR_TODAY1().select('HIGH', {force: true})
    fdrlocators.FDR_TODAY2().select('VERY HIGH', {force: true})
    fdrlocators.FDR_TODAY3().select('SEVERE', {force: true})
    fdrlocators.FDR_TODAY4().select('EXTREME', {force: true})
    fdrlocators.FDR_TODAY5().select('CATASTROPHIC',{force: true})


    fdrlocators.FDR_TOBANTODAY_YES1().click({force: true})
    fdrlocators.FDR_TOBANTODAY_YES2().click({force: true})
    fdrlocators.FDR_TOBANTODAY_YES3().click({force: true})
    fdrlocators.FDR_TOBANTODAY_YES4().click({force: true})
    fdrlocators.FDR_TOBANTODAY_YES5().click({force: true})




})

And ('I assert with the saved result for TOBAN Today',()=> {

    cy.reload()

    fdrlocators.FDR_TODAY1().should('be.visible').and('have.attr','class','fdr-HIGH')
    fdrlocators.FDR_TODAY2().should('be.visible').and('have.attr','class','fdr-VERY HIGH')
    fdrlocators.FDR_TODAY3().should('be.visible').and('have.attr','class','fdr-SEVERE')
    fdrlocators.FDR_TODAY4().should('be.visible').and('have.attr','class','fdr-EXTREME')
    fdrlocators.FDR_TODAY5().should('be.visible').and('have.attr','class','fdr-CATASTROPHIC')

    fdrlocators.FRD_TOBANTODAYASSERT1().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')
    fdrlocators.FRD_TOBANTODAYASSERT2().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')
    fdrlocators.FRD_TOBANTODAYASSERT3().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')
    fdrlocators.FRD_TOBANTODAYASSERT4().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')
    fdrlocators.FRD_TOBANTODAYASSERT5().should('be.visible').and('have.attr','class','btn ng-pristine ng-valid active btn-danger')


})
//>>>>>>>>>>>> DEFAULT >>>>>>>>>>>>>>>>>>>>>>>>






And ('I make changes in FDR ratings for tomorrow and today',()=> {

    fdrlocators.FDR_TODAY1().select("HIGH", {force: true})

    fdrlocators.FDR_TOMORROW1().select("HIGH", {force: true})

    fdrlocators.FDR_TOBANTODAY_YES1().click({force: true})

    fdrlocators.FDR_TOBANTOMMOROW1().click({force: true})



})

And ('I open XML file',()=> {



    cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\fdrToban.xml`).then(
    XMLDATA => {
    var domParser = new DOMParser();
    var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
    

    console.log(xmlDocument);
    
    var district = xmlDocument.getElementsByTagName("District");
    var Name = xmlDocument.getElementsByTagName("Name")[0].childNodes[0].nodeValue;
    var RegionNumber = xmlDocument.getElementsByTagName("RegionNumber")[0].childNodes[0].nodeValue;
    var Councils = xmlDocument.getElementsByTagName("Councils")[0].childNodes[0].nodeValue;
    var DangerLevelToday = xmlDocument.getElementsByTagName("DangerLevelToday")[0].childNodes[0].nodeValue;
    var DangerLevelTomorrow = xmlDocument.getElementsByTagName("DangerLevelTomorrow")[0].childNodes[0].nodeValue;
    var FireBanToday = xmlDocument.getElementsByTagName("FireBanToday")[0].childNodes[0].nodeValue;
    var FireBanTomorrow = xmlDocument.getElementsByTagName("FireBanTomorrow")[0].childNodes[0].nodeValue;
    
    
    expect(Name).to.contain('Far North Coast')
    expect(RegionNumber).to.contain('1')
    expect(Councils).to.contain('Ballina; Byron; Clarence Valley; Kyogle; Lismore; Richmond Valley; Tweed')
    expect(DangerLevelToday).to.contain('HIGH')
    expect(DangerLevelTomorrow).to.contain('HIGH')
    expect(FireBanToday).to.contain('Yes')
    expect(FireBanTomorrow).to.contain('Yes')

    cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\region1.xml`).then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
    
        console.log(xmlDocument);

        expect(Name).to.contain('Far North Coast')
        expect(RegionNumber).to.contain('1')
        expect(Councils).to.contain('Ballina; Byron; Clarence Valley; Kyogle; Lismore; Richmond Valley; Tweed')
        expect(DangerLevelToday).to.contain('HIGH')
        expect(DangerLevelTomorrow).to.contain('HIGH')
        expect(FireBanToday).to.contain('Yes')
        expect(FireBanTomorrow).to.contain('Yes')

        })
    })
    
    
})


    And ('I make FDR back to normal',()=> {

        fdrlocators.FDR_TODAY1().select('None', {force: true})
        fdrlocators.FDR_TODAY2().select('None',  {force: true})
        fdrlocators.FDR_TODAY3().select('None',  {force: true})
        fdrlocators.FDR_TODAY4().select('None',  {force: true})
        fdrlocators.FDR_TODAY5().select('None',  {force: true})

        fdrlocators.FDR_TODAYplus1_1().select('None', {force: true})
        fdrlocators.FDR_TODAYplus1_2().select('None', {force: true})
        fdrlocators.FDR_TODAYplus1_3().select('None', {force: true})
        fdrlocators.FDR_TODAYplus1_4().select('None', {force: true})
        fdrlocators.FDR_TODAYplus1_5().select('None', {force: true})

        fdrlocators.FDR_TODAYplus2_1().select('None', {force: true})
        fdrlocators.FDR_TODAYplus2_2().select('None', {force: true})
        fdrlocators.FDR_TODAYplus2_3().select('None', {force: true})
        fdrlocators.FDR_TODAYplus2_4().select('None', {force: true})
        fdrlocators.FDR_TODAYplus2_5().select('None',{force: true})

        fdrlocators.FDR_TODAYplus3_1().select('None', {force: true})
        fdrlocators.FDR_TODAYplus3_2().select('None', {force: true})
        fdrlocators.FDR_TODAYplus3_3().select('None', {force: true})
        fdrlocators.FDR_TODAYplus3_4().select('None', {force: true})
        fdrlocators.FDR_TODAYplus3_5().select('None',{force: true})
    
        fdrlocators.FDR_ALL_TOBANTODAY_BTNS().each(($el, index, $list) => {
            cy.wrap($el).contains('No').click({force:true})
          })

          fdrlocators.FDR_ALL_TOBANTODAYplus1_BTNS().each(($el, index, $list) => {
            cy.wrap($el).contains('No').click({force:true})
          })

          fdrlocators.FDR_ALL_TOBANTODAYplus2_BTNS().each(($el, index, $list) => {
            cy.wrap($el).contains('No').click({force:true})
          })

          fdrlocators.FDR_ALL_TOBANTODAYplus3_BTNS().each(($el, index, $list) => {
            cy.wrap($el).contains('No').click({force:true})
          })

                

    /*    fdrlocators.FDR_ALL_TOBANTOMORROW_BTNS().each(($el, index, $list) => {
            cy.wrap($el).contains('No').click({force:true})
          })
      */    
        // fdrlocators.FDR_TOBANTODAY_NO2().click({force: true})
        // fdrlocators.FDR_TOBANTODAY_NO3().click({force: true})
        // fdrlocators.FDR_TOBANTODAY_NO4().click({force: true})
        // fdrlocators.FDR_TOBANTODAY_NO5().click({force: true})
        
        // fdrlocators.FDR_TOBANTOMORROW_NO1().click({force: true})
        
    
    
        
        
        //SAVE FDR
        fdrlocators.FDR_SAVEBTTN().click({force: true})
        cy.waitForLoadingSpinner()
        fdrlocators.FDR_ALERTSUCCESS().should('exist').and('contain','Success')
        fdrlocators.FDR_ALERTSUCCESSNOTE().should('exist').and('contain',('The Fire Danger and TOBAN feeds were successfully generated and will be published to the Public Website and IVR.'))
        fdrlocators.FDR_ALERTSUCCESSCLOSE().click({multiple:true , force: true})
    
        
        //READ PUF
        cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\fdrToban.xml`).then(
            XMLDATA => {
            var domParser = new DOMParser();
            var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
            
            console.log(xmlDocument);
            
            var district = xmlDocument.getElementsByTagName("District");
            var Name = xmlDocument.getElementsByTagName("Name")[0].childNodes[0].nodeValue;
            var RegionNumber = xmlDocument.getElementsByTagName("RegionNumber")[0].childNodes[0].nodeValue;
            var Councils = xmlDocument.getElementsByTagName("Councils")[0].childNodes[0].nodeValue;
            var DangerLevelToday = xmlDocument.getElementsByTagName("DangerLevelToday")[0].childNodes[0].nodeValue;
            var DangerLevelTomorrow = xmlDocument.getElementsByTagName("DangerLevelTomorrow")[0].childNodes[0].nodeValue;
            var FireBanToday = xmlDocument.getElementsByTagName("FireBanToday")[0].childNodes[0].nodeValue;
            var FireBanTomorrow = xmlDocument.getElementsByTagName("FireBanTomorrow")[0].childNodes[0].nodeValue;
                    
            expect(Name).to.contain('Far North Coast')
            expect(RegionNumber).to.contain('1')
            expect(Councils).to.contain('Ballina; Byron; Clarence Valley; Kyogle; Lismore; Richmond Valley; Tweed')
            expect(DangerLevelToday).to.contain('None')
            expect(DangerLevelTomorrow).to.contain('None')
            expect(FireBanToday).to.contain('No')
            expect(FireBanTomorrow).to.contain('No')
    
    
    
            cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\region1.xml`).then(
                XMLDATA => {
                var domParser = new DOMParser();
                var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
                
                console.log(xmlDocument);
    
                expect(Name).to.contain('Far North Coast')
                expect(RegionNumber).to.contain('1')
                expect(Councils).to.contain('Ballina; Byron; Clarence Valley; Kyogle; Lismore; Richmond Valley; Tweed')
                expect(DangerLevelToday).to.contain('None')
                expect(DangerLevelTomorrow).to.contain('None')
                expect(FireBanToday).to.contain('No')
                expect(FireBanTomorrow).to.contain('No')
        
            
                })
        })

    })
    

        //>>>>>>>>>>>>>>>>>>>>>Updated FDR with 8 columns>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//

    And ('I make changes in FDR ratings for top5 District',()=> {
        fdrlocators.FDR_TODAY1().select('MODERATE', {force: true})
        fdrlocators.FDR_TODAY2().select('None', {force: true})
        fdrlocators.FDR_TODAY3().select('None', {force: true})
        fdrlocators.FDR_TODAY4().select('None', {force: true})
        fdrlocators.FDR_TODAY5().select('None',{force: true})

        fdrlocators.FDR_TODAYplus1_1().select('None', {force: true})
        fdrlocators.FDR_TODAYplus1_2().select('HIGH', {force: true})
        fdrlocators.FDR_TODAYplus1_3().select('None', {force: true})
        fdrlocators.FDR_TODAYplus1_4().select('None', {force: true})
        fdrlocators.FDR_TODAYplus1_5().select('None',{force: true})

        fdrlocators.FDR_TODAYplus2_1().select('None', {force: true})
        fdrlocators.FDR_TODAYplus2_2().select('None', {force: true})
        fdrlocators.FDR_TODAYplus2_3().select('EXTREME', {force: true})
        fdrlocators.FDR_TODAYplus2_4().select('None', {force: true})
        fdrlocators.FDR_TODAYplus2_5().select('None',{force: true})

        fdrlocators.FDR_TODAYplus3_1().select('None', {force: true})
        fdrlocators.FDR_TODAYplus3_2().select('None', {force: true})
        fdrlocators.FDR_TODAYplus3_3().select('None', {force: true})
        fdrlocators.FDR_TODAYplus3_4().select('CATASTROPHIC', {force: true})
        fdrlocators.FDR_TODAYplus3_5().select('MODERATE',{force: true})



    })

    And ('I update TOBANs for top 5 district',()=> {
        fdrlocators.FDR_TOBANTODAY_NO1().click({force: true})
       
        fdrlocators.FDR_TOBANTODAYplus1_2().click({force: true})

        fdrlocators.FDR_TOBANTODAYplus2_3().click({force: true})      
        
        fdrlocators.FDR_TOBANTODAYplus3_4().click({force: true})
        fdrlocators.FDR_TOBANTODAYplus3_5().click({force: true})
    })

    Then ('I verify the details are saved',()=> {
        cy.reload()

        fdrlocators.FDR_TODAY1().should('be.visible').and('have.attr','class','fdr-MODERATE')
        fdrlocators.FDR_TODAY2().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAY3().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAY4().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAY5().should('be.visible').and('have.attr','class','fdr-None')

        fdrlocators.FDR_TODAYplus1_1().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAYplus1_2().should('be.visible').and('have.attr','class','fdr-HIGH')
        fdrlocators.FDR_TODAYplus1_3().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAYplus1_4().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAYplus1_5().should('be.visible').and('have.attr','class','fdr-None')

        fdrlocators.FDR_TODAYplus2_1().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAYplus2_2().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAYplus2_3().should('be.visible').and('have.attr','class','fdr-EXTREME')
        fdrlocators.FDR_TODAYplus2_4().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAYplus2_5().should('be.visible').and('have.attr','class','fdr-None')

        fdrlocators.FDR_TODAYplus3_1().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAYplus3_2().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAYplus3_3().should('be.visible').and('have.attr','class','fdr-None')
        fdrlocators.FDR_TODAYplus3_4().should('be.visible').and('have.attr','class','fdr-CATASTROPHIC')
        fdrlocators.FDR_TODAYplus3_5().should('be.visible').and('have.attr','class','fdr-MODERATE')

        fdrlocators.FDR_TOBANTODAY_NO1().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
        fdrlocators.FDR_TOBANTODAYplus1_2().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
        fdrlocators.FDR_TOBANTODAYplus2_3().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
        fdrlocators.FDR_TOBANTODAYplus3_4().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
        fdrlocators.FDR_TOBANTODAYplus3_5().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')

        fdrlocators.FDR_Today_Info().should('have.value', 'Testing Today')
        fdrlocators.FDR_TodayPlus1_Info().should('have.value', 'Testing Today plus1')
        fdrlocators.FDR_TodayPlus2_Info().should('have.value', 'Testing Today plus2')
        fdrlocators.FDR_TodayPlus3_Info().should('have.value', 'Testing Today plus3')

    })


    And ('I set FDR TOBAN to normal',()=> { 
    
         fdrlocators.FDR_ALL_TOBANTODAY_BTNS().each(($el, index, $list) => {                   
                    cy.wrap($el).contains('No').click({force:true})              
          })
          

          fdrlocators.FDR_ALL_TOBANTODAYplus1_BTNS().each(($el, index, $list) => {
            cy.wrap($el).contains('No').click({force:true})
          })

          fdrlocators.FDR_ALL_TOBANTODAYplus2_BTNS().each(($el, index, $list) => {            
            cy.wrap($el).contains('No').click({force:true})
          })

          fdrlocators.FDR_ALL_TOBANTODAYplus3_BTNS().each(($el, index, $list) => {
            cy.wrap($el).contains('No').click({force:true})
          })
    })


    And ('I set FDR selectors back to normal',()=> {

        fdrlocators.FDR_None_opt().each(($el, index, $list) => {
            cy.wrap($el).select('No change to BOM data',  {force: true})                                             
    })
        fdrlocators.FDR_Moderate_opt().each(($el, index, $list) => {
            cy.wrap($el).select('No change to BOM data',  {force: true})
    })    
        fdrlocators.FDR_High_opt().each(($el, index, $list) => {            
            cy.wrap($el).select('No change to BOM data',  {force: true})
    })
        fdrlocators.FDR_Extreme_opt().each(($el, index, $list) => {
            cy.wrap($el).select('No change to BOM data',  {force: true})
    })
        fdrlocators.FDR_Catastrophic_opt().each(($el, index, $list) => {
            cy.wrap($el).select('No change to BOM data',  {force: true})
    })

    })


    
And ('I Save the details', ()=> { 

    fdrlocators.FDR_SAVEBTTN().click({force: true})
    cy.waitForLoadingSpinner()
    fdrlocators.FDR_ALERTSUCCESS().should('exist').and('contain','Success')
    fdrlocators.FDR_ALERTSUCCESSNOTE().should('exist').and('contain',('The Fire Danger and TOBAN feeds were successfully generated and will be published to the Public Website and IVR.'))
    fdrlocators.FDR_ALERTSUCCESSCLOSE().click({multiple:true , force: true})
})

Then('I reset the TOBAN for first 5 districts', ()=>{

    fdrlocators.FDR_ALL_TOBANTODAY_BTNS().then(items=>{
        for(let i=0; i<5; i++)
        cy.wrap(items[i]).contains('No').click({force:true})
    })
    fdrlocators.FDR_ALL_TOBANTODAYplus1_BTNS().then(items=>{
        for(let i=0; i<5; i++)
        cy.wrap(items[i]).contains('No').click({force:true})
    })    
    fdrlocators.FDR_ALL_TOBANTODAYplus2_BTNS().then(items=>{
    for(let i=0; i<5; i++)
    cy.wrap(items[i]).contains('No').click({force:true})
    })
    fdrlocators.FDR_ALL_TOBANTODAYplus3_BTNS().then(items=>{
    for(let i=0; i<5; i++)
    cy.wrap(items[i]).contains('No').click({force:true})
    })
    

})

And ('I add statewide TOBAN info', ()=> { 
    fdrlocators.FDR_Today_Info().clear()
    fdrlocators.FDR_Today_Info().type("Testing Today",{force: true})
    fdrlocators.FDR_TodayPlus1_Info().clear()
    fdrlocators.FDR_TodayPlus1_Info().type("Testing Today plus1",{force: true})
    fdrlocators.FDR_TodayPlus2_Info().clear()
    fdrlocators.FDR_TodayPlus2_Info().type("Testing Today plus2",{force: true})
    fdrlocators.FDR_TodayPlus3_Info().clear()
    fdrlocators.FDR_TodayPlus3_Info().type("Testing Today plus3",{force: true})
    
})

Then ('I verify the details are updated for the next day',()=> {
    cy.reload()

    fdrlocators.FDR_TODAY1().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAY2().should('be.visible').and('have.attr','class','fdr-HIGH')
    fdrlocators.FDR_TODAY3().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAY4().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAY5().should('be.visible').and('have.attr','class','fdr-None')

    fdrlocators.FDR_TODAYplus1_1().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus1_2().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus1_3().should('be.visible').and('have.attr','class','fdr-EXTREME')
    fdrlocators.FDR_TODAYplus1_4().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus1_5().should('be.visible').and('have.attr','class','fdr-None')

    fdrlocators.FDR_TODAYplus2_1().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus2_2().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus2_3().should('be.visible').and('have.attr','class','fdr-None')
    fdrlocators.FDR_TODAYplus2_4().should('be.visible').and('have.attr','class','fdr-CATASTROPHIC')
    fdrlocators.FDR_TODAYplus2_5().should('be.visible').and('have.attr','class','fdr-MODERATE')

    fdrlocators.FDR_TODAYplus3_1().should('be.visible').and('have.attr','class','fdr-No change to BOM data')
    fdrlocators.FDR_TODAYplus3_2().should('be.visible').and('have.attr','class','fdr-No change to BOM data')
    fdrlocators.FDR_TODAYplus3_3().should('be.visible').and('have.attr','class','fdr-No change to BOM data')
    fdrlocators.FDR_TODAYplus3_4().should('be.visible').and('have.attr','class','fdr-No change to BOM data')
    fdrlocators.FDR_TODAYplus3_5().should('be.visible').and('have.attr','class','fdr-No change to BOM data')
    
    fdrlocators.FDR_TOBANTODAY_NO1().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid inactive')
    fdrlocators.FDR_TOBANTODAY_NO2().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTODAYplus1_2().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid inactive')
    fdrlocators.FDR_TOBANTODAYplus1_3().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTODAYplus2_3().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid inactive')
    fdrlocators.FDR_TOBANTODAYplus2_4().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTODAYplus2_5().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid active btn-danger')
    fdrlocators.FDR_TOBANTODAYplus3_4().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid inactive')
    fdrlocators.FDR_TOBANTODAYplus3_5().should('be.visible').and('have.attr','class','btn btn-toban ng-pristine ng-valid inactive')

    fdrlocators.FDR_Today_Info().should('have.value', 'Testing Today plus1')
    fdrlocators.FDR_TodayPlus1_Info().should('have.value', 'Testing Today plus2')
    fdrlocators.FDR_TodayPlus2_Info().should('have.value', 'Testing Today plus3')
    fdrlocators.FDR_TodayPlus3_Info().should('be.empty')

})