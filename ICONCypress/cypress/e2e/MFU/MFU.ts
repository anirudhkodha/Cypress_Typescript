import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import SecureLogon from '../pages/SecureLogon';
import Dashboard from '../pages/Dashboard'
import UserSearch from "../pages/UserSearch";
import Operations from "../pages/Operations&fiu";
import { contains } from "cypress/types/jquery";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat)
import Mfulocators from "../pages/Mfupage";
import { subtract } from "lodash";


const secureLogon = new SecureLogon()
const dashboard = new Dashboard()
const userSearch = new UserSearch()
const operations = new Operations()
const mfulocators = new Mfulocators()


//BR-MFU-1 MFU-Incidents to be attached ICONSUP-T446
Given ('I visit ICON webpage',()=> {

    cy.loginToICON()

})



When ('I open Public Information Tab',()=>{
   
    mfulocators.PUBLIC_INFORMATION_TAB().click()
   
})

And ('I can select Major Fire Updates menu item',()=> {
   
    mfulocators.MAJOR_FIRE_UPDATE_MENU().click()
    
})

Then ('I can see controls on Major Fire Update',()=> {

    mfulocators.MAJOR_FIRE_UPDATES_TITLE()
})


And ('I select Add New Update button',()=> {

   mfulocators.ADD_NEW_FIRE_UPDATE_BTN().click()
    
})


And ('I can click Select Incidents button',()=> {

    mfulocators.SELECT_INCIDENT_BTN().should('be.visible').click({force: true})
    
})


And ('I can select incidents based on LGA selection', ()=> {

    mfulocators.SELECT_LGA_DROPDOWN().click().type('Albury')
    
    mfulocators.SELECTED_LGA_NAME().click({force: true}).waitForLoadingSpinner()

    mfulocators.INCIDENT_SELECT_CHECKBOX().should('be.visible').click({force: true})

    
})



//BR-MFU-11 publish ICONSUP-T456



And ('I can click Done button on LGA selection page', ()=> {
    mfulocators.SELECT_LGAINCIDENT_DONE_BTN().click()
    mfulocators.NXT_BTTN_AFTER_DONE().click()
})

    
And ('I can enter information on Name and Summary required field', ()=> {

    mfulocators.MFU_NAME()

    mfulocators.MGU_SUMMARY()

    mfulocators.MFU_BODY().type('Fire is getting bigger')

})
    
    


And ('I click Next on information required page',()=> {

    mfulocators.NEXT_BTTN_MFUINFOREQ_PAGE().click()
    
})

And ('I again click Next on warning map page',()=> {

    mfulocators.NEXT_BTTN_MFUWRNGMAP_PAGE().click()

})




And ('I Select Publish to facebook',()=> {

    mfulocators.FACEBOOK_CHECKBOX().check({force: true})

})
    
And ('I type into Facebook Message',()=> {

   mfulocators.FACEBOOK_MESSAGE()

})


And ('I Select Publish to Twitter', ()=> {

   mfulocators.TWITTER_CHECKBOX().check()

})
    

And ('I type in Twitter Message', ()=>{

    mfulocators.TWITTER_MESSAGE()

})
    

And ('I click Next button on media publish page',()=> {

    mfulocators.SOCIAL_MEDIA_EDIT_NXTBTN().click({force:true})

})



And ('Select Publish at specific time',()=> {

    mfulocators.PUBLISH_SPECIFICTIME_CHECKBOX().check()
    
    const publishduedate = dayjs().add(1,'day').format('DD/MM/YYYY HH:mm');

    cy.get('[name="PublishDateTime"]').type(publishduedate)

})


And ('I click Next on selected publish time',()=> {

    mfulocators.SELECTED_PUBLISHTIME_NXTBTN().click()

})

    
And ('I verify Submit Page information',()=> {
    
    cy.contains('General Information')
    
})

    
And ('I finally publish it',()=> {

    mfulocators.PUBLISH_BUTTON().should('exist').click()

})

And ('I assert for published',()=>{

    mfulocators.ASSERT_PUBLISHED()

})

/// BR MFU 3 _ Reissue MFU      >>>>>>>>>>>>>>>>>>>>>



And ('I select fire update from the list to reissue',()=> {

    mfulocators.SELECTED_INC_REISSUE().invoke('text').as('mfuToReissue')
    mfulocators.SELECTED_INC_REISSUE().click()

})

And ('I verify preview tab from information page',()=> {

    mfulocators.PREVIEW_BUTTON().click()
    mfulocators.PREVIEW_DIALOGUEBOX().should('be.visible')
    mfulocators.CLOSE_PREVIEW().click()

})


And ('I click on Re-issue update from information page',()=> {

    mfulocators.REISUUE_BTTN().click()
    mfulocators.NXT_BTTN_AFTER_DONE().click()

})

And ('I select publish now for re-issue update',()=> {

   mfulocators.PUBLISH_NOW_CHECKBOX().check()

})

And ('I assert Success of reissuing',()=> {

    mfulocators.REISSUE_SUCCESS_ALERT().should('contain.text','Success!')

})

And('I validate Superseded is not displayed',()=>{

    mfulocators.MFU_DETAILS_PUB_SOCIAL_AUDIT_LABELS().contains('Superseded').should('not.exist')
    mfulocators.MFU_DETAILS_SUPERCEDED_WARNING()
    .contains('This update has been superseded').should('not.exist')

})


And('I validate Retired alert is not displayed',()=>{

    mfulocators.MFU_DETAILS_PUB_SOCIAL_AUDIT_LABELS().contains('Retired').should('not.exist')
    mfulocators.MFU_DETAILS_RETIRED_WARNING()
    .contains('This update has been retired').should('not.exist')

})


When('I click on updated MFU',()=>{

    cy.get('@mfuToReissue').then((t:any)=>{
        mfulocators.MFU_FEED_UPDATES_TABLE().contains(t).click()
    })


})

Then('I see Supersedes label',()=>{
    cy.waitForLoadingSpinner()
    mfulocators.MFU_DETAILS_PUB_SOCIAL_AUDIT_LABELS().contains('Supersedes').should('exist')
})

When('I click and open the superseded mfu',()=>{
    mfulocators.MFU_DETAILS_PUB_SOCIAL_AUDIT_LABELS().contains('Supersedes').should('exist')
    mfulocators.MFU_DETAILS_SUPERCEDE_VALUE().should('exist').click().waitForLoadingSpinner()
})

Then('I see a warning message saying it is superseded and not current',()=>{
    mfulocators.MFU_DETAILS_PUB_SOCIAL_AUDIT_LABELS().contains('Superseded').should('exist')
    cy.waitUntil(()=>mfulocators.MFU_DETAILS_SUPERCEDED_WARNING()
        .contains('This update has been superseded')).should('exist')
  
})

Given('I navigate to MFU page',()=>{

    cy.loginToICONNoVisit()
    mfulocators.VISIT_MFU_PAGE()

})

And('I select first incident based on LGA selection and click Done button',()=>{
    mfulocators.SELECT_LGA_DROPDOWN().click().type('Albury')
    
    mfulocators.SELECTED_LGA_NAME().click({force: true}).waitForLoadingSpinner()

    mfulocators.MFU_SELECT_INCIDENTS_PAGE_FIRST_INCIDENT().should('be.visible').click({force: true})  
    cy.intercept('/PublicInformation/MajorFireUpdates/AttachIncidents').as('attachInc')
    mfulocators.SELECT_LGAINCIDENT_DONE_BTN().click()
    //cy.visit('/')
    cy.wait('@attachInc').its('response.body').then((n)=>{cy.wrap(n.slice(n.search('value')+7,n.search('value')+13)).as('incID')})
    mfulocators.NXT_BTTN_AFTER_DONE().click()
   

})

And('I fill in details on the Overview Page',()=>{
    
    mfulocators.MFU_INFORMATION_NAME().then(($el)=>{
        const el = $el
        const timeStamp = Date.now()
        const name = 'ICONSUP-T461: ' + timeStamp.toString()
        cy.wrap(name).as('mfuName')
        const dUTC = new Date().getMinutes()
        cy.wrap(dUTC).as('tstamp')
        cy.wrap(el).type(name)
    })
    mfulocators.MFU_INFORMATION_SUMMARY().type('This a a test')
    mfulocators.MFU_BODY().type('This a a test')
    //mfulocators.MFU_CURRENT_SITUATION().type('Test')
    //mfulocators.MFU_INFORMATION_ADVICE().type('ICON MFU')
    //mfulocators.MFU_INFORMATION_OTHER_INFO().type('Sprint 26')
})

When('I click on Preview button on Overview page',()=>{
    mfulocators.MFU_INFORMATION_PREVIEW_BUTTON().click()
})

Then('I should see the Preview popup with the correct information',()=>{
    mfulocators.PREVIEW_DIALOGUEBOX().should('be.visible').then(($el)=>{
        
        mfulocators.MFU_PREVIEW_NAME().then(($el)=>{
            const name = $el.text()
            cy.get('@mfuName').then((n)=>{
                expect(n).to.equal(name)
            })
        })
        mfulocators.MFU_PREVIEW_SUMMARY().should('contain', 'This a a test')
        //mfulocators.MFU_PREVIEW_CURRENT_SITUATION().should('contain', 'Test')
        //mfulocators.MFU_PREVIEW_ADVICE().should('contain', 'ICON MFU')
        //mfulocators.MFU_PREVIEW_OTHER_INFO().should('contain', 'Sprint 26')
        mfulocators.CLOSE_PREVIEW().click().waitForLoadingSpinner()
        mfulocators.NEXT_BTTN_MFUINFOREQ_PAGE().click()

    })
    
})

And('I go to Warning page', ()=>{
    //mfulocators.MFU_INFORMATION_NEXT_BUTTON().click().waitForLoadingSpinner()
    mfulocators.MFU_WARNING_AREA_MAP().should('be.visible')
})

And('I draw a polygon on warning area map',()=>{
    mfulocators.MFU_WARNING_AREA_PENCIL().click()
    cy.wait(6000)
    mfulocators.MFU_WARNING_AREA_NEW_AREA_SYMBOL().should('be.visible').click({force:true})
    // this following line assertion is flaky
    // mfulocators.MFU_WARNING_AREA_NEW_AREA_SYMBOL_SELECTED().should('exist')
    mfulocators.MFU_WARNING_AREA_MAP().click(1134,380,{force: true})
    mfulocators.MFU_WARNING_AREA_MAP().click(1556,673,{force: true})
    mfulocators.MFU_WARNING_AREA_MAP().dblclick(1229,430,{force: true})
    //mfulocators.MFU_WARNING_AREA_VALIDATE_BTN().click({force:true}).waitForLoadingSpinner()
} )


And('I delete the polygon I drew on warning area map',()=>{
    mfulocators.MFU_WARNING_AREA_EDIT_DELETE().click({force:true})
    mfulocators.MFU_WARNING_AREA_PENCIL().click()
    cy.wait(6000)
} )

And('I validate the polygon I drew on warning area map',()=>{
    //mfulocators.MFU_WARNING_AREA_EDIT_DELETE().click({force:true})
    mfulocators.MFU_WARNING_AREA_VALIDATE_BTN().click({force:true}).waitForLoadingSpinner()
} )

And('I go to Publishing page and select correct options and click Next',()=>{
    mfulocators.MFU_WARNING_AREA_NEXT_BTN().click().waitForLoadingSpinner()
    mfulocators.SOCIAL_MEDIA_EDIT_NXTBTN().click().waitForLoadingSpinner()
    mfulocators.PUBLISH_NOW_CHECKBOX().should('be.visible').click()
    mfulocators.NO_RETIRE_CHECKBOX().should('be.visible').click()
})

And('I go to Submit page and publish MFU',()=>{
    mfulocators.SELECTED_PUBLISHTIME_NXTBTN().click().waitForLoadingSpinner()
    mfulocators.PUBLISH_BUTTON().click().waitForLoadingSpinner()
})

And('I can see the update on the Major Fire Updates page',()=>{
    cy.get('@mfuName').then((name:any)=>{
        mfulocators.MFU_FEED_UPDATES_TABLE().contains(name)
    })
})

// waiting an arbitrary amount of time so the server completes updating the MFU file
And('I wait for some time',()=>{    
    cy.task('getFileMofifyDT').then((name:any)=>{
        let mfuT = parseInt(name.toString().slice(14,16))
        cy.get('@tstamp').then((name:any)=>{cy.log(name)
            let res= mfuT - name
            if(res==-1)
            cy.wait(101000)
            else if(res==0 || res<-1)
            cy.wait(201000)
            else
            cy.wait(30000)
        })
        
})
})


Then('I see the update in the mfu.xml file',()=>{
    cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\MFU.xml`).then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
        const titleElemIndex = xmlDocument.getElementsByTagName("title").length -1
        const titleElem = xmlDocument.getElementsByTagName("title")[titleElemIndex];

        cy.get('@mfuName').then((name)=>{
            expect(titleElem.outerHTML).to.contain(name)
        })
        })
})

Then('I verify warning area is displayed in ICON Landing page',()=>{
    cy.visit('https://icon.uat.rfs.nsw.gov.au/')
    cy.get('#s2id_autogen1').type('Albury{Enter}')
    cy.get('@incID').then((a)=>{
         cy.get('.leaflet-pane.leaflet-marker-pane').find('.incID-'+a).should('be.visible')
    })

})



Then('I see listed MFU were published on or after 1st July of previous year',()=>{

    const lastYearString = dayjs().subtract(1,'years').year().toString()
    const dateLowerBoundString = '01/07/'+ lastYearString
    const lowerBoundDateObj = dayjs(dateLowerBoundString,'DD/MM/YYYY')

    mfulocators.MFU_FEED_UPDATES_TABLE_DATE_COLUMN().each((item, index)=>{
        const dateString = item.text().trim()
        const dateObj = dayjs(dateString, 'H:mm DD/MM/YYYY')
        expect(dateObj>=lowerBoundDateObj).to.be.true
    })

})

Then('I see that no MFU is retired',()=>{
    mfulocators.MFU_FEED_UPDATES_TABLE_RETIRE_COLUMN().each((item, index)=>{
        let dateString = item.text().trim()
        if (dateString==='Not set'){
            dateString = dayjs().add(1,'years').format('H:mm DD/MM/YYYY')
        }
        const dateObj = dayjs(dateString, 'H:mm DD/MM/YYYY')
        const currentDate = dayjs()
        expect(dateObj>currentDate).to.be.true
    })
})

And ('I select fire update from the list to check superseded',()=> {
    mfulocators.SELECTED_INC_REISSUE().invoke('text').as('mfuToReissue')
    mfulocators.SELECTED_INC_REISSUE().click()
})



And('I uncheck Only Show My Updates checkbox',()=>{
    mfulocators.ONLY_MINE_CHECKBOX().uncheck()
})
When('I click on MFU by different user',()=>{
    cy.waitForLoadingSpinner()
    // the 'different user' value is hard coded so if it fails because of that, it needs to changed/addressed
    mfulocators.MFU_FEED_UPDATES_TABLE_AUTHOR_NAME_COLUMN().contains('Team City').eq(0)
    .click({force:true})
})
Then('I can see Reissue and Retire buttons',()=>{
    mfulocators.REISUUE_BTTN().should('be.visible')
    mfulocators.RETIRE_BTN().should('be.visible')
})

And('I create MFU with future publish date',()=>{
    // The following steps have been integrated here:  
    // And I select Add New Update button
    mfulocators.ADD_NEW_FIRE_UPDATE_BTN().click()
    // And I can click Select Incidents button
    mfulocators.SELECT_INCIDENT_BTN().should('be.visible').click({force: true})
    // And I select first incident based on LGA selection and click Done button
    mfulocators.SELECT_LGA_DROPDOWN().click().type('Albury').waitForLoadingSpinner()
    mfulocators.SELECTED_LGA_NAME().click({force: true}).waitForLoadingSpinner()
    mfulocators.MFU_SELECT_INCIDENTS_PAGE_FIRST_INCIDENT().should('be.visible').click({force: true})
    mfulocators.SELECT_LGAINCIDENT_DONE_BTN().click()
    mfulocators.NXT_BTTN_AFTER_DONE().click().waitForLoadingSpinner()
    // And I fill in details on the Overview Page
    mfulocators.MFU_INFORMATION_NAME().then(($el)=>{
        const el = $el
        const timeStamp = Date.now().toString()
        const name = 'ICONSUP-MFU-Future-Publish: ' + timeStamp
        cy.wrap(name).as('mfuNameFuturePub')
        cy.wrap(el).type(name)
    })
    mfulocators.MFU_INFORMATION_SUMMARY().type('This a a test')
    mfulocators.MFU_BODY().type('This a a test')
    mfulocators.NEXT_BTTN_MFUINFOREQ_PAGE().click()
    //mfulocators.MFU_CURRENT_SITUATION().type('Test')
   // mfulocators.MFU_INFORMATION_ADVICE().type('ICON MFU')
   // mfulocators.MFU_INFORMATION_OTHER_INFO().type('hey hey')
    // And I go to Warning page
    //mfulocators.MFU_INFORMATION_NEXT_BUTTON().click().waitForLoadingSpinner()
    //And I go to Publishing page and select correct options and click Next
    //mfulocators.MFU_WARNING_AREA_VALIDATE_BTN().click({force:true}).waitForLoadingSpinner()
    //mfulocators.MFU_WARNING_AREA_NEXT_BTN().click().waitForLoadingSpinner()
    mfulocators.SOCIAL_MEDIA_EDIT_NXTBTN().click().waitForLoadingSpinner()
    mfulocators.NO_RETIRE_CHECKBOX().should('be.visible').click()
    // Select Publish at specific time
    mfulocators.PUBLISH_SPECIFICTIME_CHECKBOX().check()
    // publish one minute later
    const publishduedate = dayjs().add(2,'minute').format('DD/MM/YYYY HH:mm');
    cy.get('[name="PublishDateTime"]').type(publishduedate)
    // go to next page
    mfulocators.SELECTED_PUBLISHTIME_NXTBTN().click()
    // And I verify Submit Page information
    cy.contains('General Information')
    // And I finally publish it
    mfulocators.PUBLISH_BUTTON().should('exist').click().waitForLoadingSpinner()
    mfulocators.ASSERT_PUBLISHED()
    
})


And('I reissue MFU with future date',()=>{

    mfulocators.SELECTED_INC_REISSUE().invoke('text').as('mfuNameFutureReissue')
    mfulocators.SELECTED_INC_REISSUE().click()

    mfulocators.REISUUE_BTTN().click()
    mfulocators.NXT_BTTN_AFTER_DONE().click()
    mfulocators.MFU_INFORMATION_NAME().then(($el)=>{
        const el = $el
        const timeStamp = Date.now().toString()
        const name = 'ICONSUP-MFU-Future-Reissue: ' + timeStamp
        cy.wrap(name).as('mfuNameFutureReissue')
        cy.wrap(el).clear().type(name)
    })
    mfulocators.MFU_INFORMATION_SUMMARY().clear().type('This a a test')
    mfulocators.MFU_BODY().clear().type('This a a test')
    //mfulocators.MFU_CURRENT_SITUATION().clear().type('Test')
    //mfulocators.MFU_INFORMATION_ADVICE().clear().type('ICON MFU')
    //mfulocators.MFU_INFORMATION_OTHER_INFO().clear().type('hey hey')
    mfulocators.MFU_INFORMATION_NEXT_BUTTON().click().waitForLoadingSpinner()
    //And I go to Publishing page and select correct options and click Next
    //mfulocators.MFU_WARNING_AREA_VALIDATE_BTN().click({force:true}).waitForLoadingSpinner()
    //mfulocators.MFU_WARNING_AREA_NEXT_BTN().click().waitForLoadingSpinner()
    mfulocators.SOCIAL_MEDIA_EDIT_NXTBTN().click().waitForLoadingSpinner()
    mfulocators.NO_RETIRE_CHECKBOX().should('be.visible').click()
    // Select Publish at specific time
    mfulocators.PUBLISH_SPECIFICTIME_CHECKBOX().check()
    // publish one minute later
    const publishduedate = dayjs().add(1,'minute').format('DD/MM/YYYY HH:mm');
    cy.get('[name="PublishDateTime"]').clear().type(publishduedate)
    // go to next page
    mfulocators.SELECTED_PUBLISHTIME_NXTBTN().click()
    // And I verify Submit Page information
    cy.contains('General Information')
    // And I finally publish it
    mfulocators.PUBLISH_BUTTON().should('exist').click().waitForLoadingSpinner()

    mfulocators.ASSERT_PUBLISHED()

    mfulocators.REISSUE_SUCCESS_ALERT().should('contain.text','Success!')
    
})

Then('The MFU with future published date should not be available in xml feed',()=>{
    cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\MFU.xml`).then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
        const titleElemIndex = xmlDocument.getElementsByTagName("title").length -1
        const titleElem = xmlDocument.getElementsByTagName("title")[titleElemIndex];
        cy.get('@mfuNameFuturePub').then((name)=>{
            expect(titleElem.outerHTML).to.not.contain(name)
        })
        })
})


Then('The MFU with future published date should not be available in xml feed- Reissue',()=>{
    cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\MFU.xml`).then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
        const titleElemIndex = xmlDocument.getElementsByTagName("title").length -1
        const titleElem = xmlDocument.getElementsByTagName("title")[titleElemIndex];
        cy.get('@mfuNameFutureReissue').then((name)=>{
            expect(titleElem.outerHTML).to.not.contain(name)
        })
        })
})


When('I wait until the publish time is reached',()=>{
    // sometimes the server will take too long to make changes to xml file so may need to wait longer
    cy.wait(150000)
})

Then('The MFU should be available in xml feed',()=>{
    cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\MFU.xml`).then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
        const titleElemIndex = xmlDocument.getElementsByTagName("title").length -1
        const titleElem = xmlDocument.getElementsByTagName("title")[titleElemIndex];
        cy.get('@mfuNameFuturePub').then((name)=>{
            expect(titleElem.outerHTML).to.contain(name)
        })
        })
})

Then('The MFU should be available in xml feed- Reissue',()=>{
    cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\MFU.xml`).then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
        const titleElemIndex = xmlDocument.getElementsByTagName("title").length -1
        const titleElem = xmlDocument.getElementsByTagName("title")[titleElemIndex];
        cy.get('@mfuNameFutureReissue').then((name)=>{
            expect(titleElem.outerHTML).to.contain(name)
        })
        })
})


And('I open the first MFU',()=>{
    mfulocators.SELECTED_INC_REISSUE().invoke('text').as('selectedMFU')
    mfulocators.SELECTED_INC_REISSUE().click().waitForLoadingSpinner()
})
When('I open the same MFU in a different browser and retire it',()=>{
    cy.task('retireConcurrent')
})

Then('I should not be allowed to retire the originally opened MFU',()=>{
    mfulocators.RETIRE_BTN().click().waitForLoadingSpinner()
    mfulocators.RETIRE_UPDATE_POPUP_BTN().click().waitForLoadingSpinner()
    mfulocators.MFU_DETAILS_CONCURRENT_RETIRE_WARNING().should('exist')
})

And('I retire the MFU',()=>{
    mfulocators.RETIRE_BTN().click().waitForLoadingSpinner()
    mfulocators.RETIRE_UPDATE_POPUP_BTN().click().waitForLoadingSpinner()
})

And('I reissue the MFU',()=>{
    mfulocators.REISUUE_BTTN().click()
    mfulocators.NXT_BTTN_AFTER_DONE().click()
    mfulocators.MFU_INFORMATION_PUB_TO_WEBSITE_CHECKBOX().uncheck()
    mfulocators.NEXT_BTTN_MFUINFOREQ_PAGE().click()
    cy.wait(3000)
    mfulocators.SOCIAL_MEDIA_EDIT_NXTBTN().click({force:true})
    // mfulocators.MFU_WARNING_AREA_VALIDATE_BTN().click({force:true})
    // mfulocators.NEXT_BTTN_MFUWRNGMAP_PAGE().click()
    mfulocators.PUBLISH_NOW_CHECKBOX().check().waitForLoadingSpinner()
mfulocators.SELECTED_PUBLISHTIME_NXTBTN().click({force:true})
    cy.contains('General Information')
    mfulocators.PUBLISH_BUTTON().should('exist').click({force:true})
    mfulocators.ASSERT_PUBLISHED()
    cy.waitForLoadingSpinner()
})

When('I open the same MFU in a different browser and reissue it',()=>{
    cy.task('reissueConcurrent')
})

Then('I should not be allowed to retire the originally opened MFU',()=>{
    mfulocators.RETIRE_BTN().click().waitForLoadingSpinner()
    mfulocators.RETIRE_UPDATE_POPUP_BTN().click().waitForLoadingSpinner()
    mfulocators.MFU_DETAILS_CONCURRENT_RETIRE_WARNING().should('exist')
})


Then('I should not be allowed to reissue the originally opened MFU',()=>{
    mfulocators.REISUUE_BTTN().click()
    mfulocators.MFU_DETAILS_SUPERCEDED_WARNING()
    .contains('This update has been superseded').should('exist')

})


And('I create a MFU',()=>{
    // The following steps have been integrated here:  
    // And I select Add New Update button
    mfulocators.ADD_NEW_FIRE_UPDATE_BTN().click()
    // And I can click Select Incidents button
    mfulocators.SELECT_INCIDENT_BTN().should('be.visible').click({force: true})
    // And I select first incident based on LGA selection and click Done button
    mfulocators.SELECT_LGA_DROPDOWN().click().type('Albury').waitForLoadingSpinner()
    mfulocators.SELECTED_LGA_NAME().click({force: true}).waitForLoadingSpinner()
    mfulocators.MFU_SELECT_INCIDENTS_PAGE_FIRST_INCIDENT().should('be.visible').click({force: true})
    mfulocators.SELECT_LGAINCIDENT_DONE_BTN().click()
    mfulocators.NXT_BTTN_AFTER_DONE().click().waitForLoadingSpinner()
    // And I fill in details on the Overview Page
    mfulocators.MFU_INFORMATION_NAME().then(($el)=>{
        const el = $el
        const timeStamp = Date.now().toString()
        const name = 'ICONSUP-BR-PUF-04-Major-Incidents-File: ' + timeStamp
        cy.wrap(name).as('mfuNamePUF-04')
        cy.wrap(el).type(name)
    })
    mfulocators.MFU_INFORMATION_SUMMARY().type('This a a test')
    mfulocators.MFU_BODY().type('This a a test')
    //mfulocators.MFU_CURRENT_SITUATION().type('Test')
    //mfulocators.MFU_INFORMATION_ADVICE().type('ICON MFU')
    //mfulocators.MFU_INFORMATION_OTHER_INFO().type('hey hey')
    mfulocators.MFU_INFORMATION_PUB_TO_WEBSITE_CHECKBOX().check()

    // And I go to Warning page
    mfulocators.MFU_INFORMATION_NEXT_BUTTON().click().waitForLoadingSpinner()
    //And I go to Publishing page and select correct options and click Next
    mfulocators.MFU_WARNING_AREA_VALIDATE_BTN().click({force:true}).waitForLoadingSpinner()
    mfulocators.MFU_WARNING_AREA_NEXT_BTN().click().waitForLoadingSpinner()
    mfulocators.SOCIAL_MEDIA_EDIT_NXTBTN().click().waitForLoadingSpinner()
    mfulocators.NO_RETIRE_CHECKBOX().should('be.visible').click()
   
    // go to next page
    mfulocators.SELECTED_PUBLISHTIME_NXTBTN().click()
    // And I verify Submit Page information
    cy.contains('General Information')
    // And I finally publish it
    mfulocators.PUBLISH_BUTTON().should('exist').click().waitForLoadingSpinner()
    mfulocators.ASSERT_PUBLISHED()
})

Then('The MFU xml files must be updated',()=>{
    // this wait is arbitrary. 
    // it is waiting for the server to make changes to the xml files so may need to wait longer
    cy.wait(150000)
    cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\MFU.xml`).then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
        const titleElemIndex = xmlDocument.getElementsByTagName("title").length -1
        const titleElem = xmlDocument.getElementsByTagName("title")[titleElemIndex];
        cy.get('@mfuNamePUF-04').then((name)=>{
            expect(titleElem.outerHTML).to.contain(name)
        })
    })

    cy.readFile(`\\\\wildfire\\hiav\\feeds\\${Cypress.env('ENVIRONMENT')}\\feedspublicdata\\major-Fire-Updates.xml`).then(
        XMLDATA => {
        var domParser = new DOMParser();
        var xmlDocument = domParser.parseFromString(XMLDATA, "text/xml");
        const titleElemIndex = xmlDocument.getElementsByTagName("title").length -1
        const titleElem = xmlDocument.getElementsByTagName("title")[titleElemIndex];
        cy.get('@mfuNamePUF-04').then((name)=>{
            expect(titleElem.outerHTML).to.contain(name)
        })
        })
})

When('I create a MFU with multiple attached incidents',()=>{
     // The following steps have been integrated here:  
    // And I select Add New Update button
    mfulocators.ADD_NEW_FIRE_UPDATE_BTN().click()
    // And I can click Select Incidents button
    mfulocators.SELECT_INCIDENT_BTN().should('be.visible').click({force: true})
    // And I select first incident based on LGA selection and click Done button
    mfulocators.SELECT_LGA_DROPDOWN().click().type('Albury').waitForLoadingSpinner()
    mfulocators.SELECTED_LGA_NAME().click({force: true}).waitForLoadingSpinner()
    //mfulocators.MFU_SELECT_INCIDENTS_PAGE_FIRST_INCIDENT().invoke('text').as('firstIncident')
    var text_firstInc;
    mfulocators.MFU_SELECT_INCIDENTS_PAGE_FIRST_INCIDENT().then(($el) =>{
        const el = $el
        text_firstInc = el.text()
        cy.wrap(text_firstInc).as('firstIncident')
    })

    mfulocators.MFU_SELECT_INCIDENTS_PAGE_FIRST_INCIDENT().should('be.visible').click({force: true})
    //mfulocators.MFU_SELECT_INCIDENTS_PAGE_SECOND_INCIDENT().invoke('text').as('secondIncident')
    var text_secInc;
    mfulocators.MFU_SELECT_INCIDENTS_PAGE_SECOND_INCIDENT().then(($el) =>{
        const el = $el
        text_secInc = el.text()
        cy.wrap(text_secInc).as('secondIncident')
    })
    mfulocators.MFU_SELECT_INCIDENTS_PAGE_SECOND_INCIDENT().should('be.visible').click({force: true})
    mfulocators.SELECT_LGAINCIDENT_DONE_BTN().click()
    mfulocators.NXT_BTTN_AFTER_DONE().click().waitForLoadingSpinner()
    // And I fill in details on the Overview Page
    mfulocators.MFU_INFORMATION_NAME().then(($el)=>{
        const el = $el
        const timeStamp = Date.now().toString()
        const name = 'ICONSUP-T447-BR-MFU-2-Attach-incidents: ' + timeStamp
        cy.wrap(name).as('mfuName-BR-MFU-2')
        cy.wrap(el).type(name)
    })
    mfulocators.MFU_INFORMATION_SUMMARY().type('This a a test')
    mfulocators.MFU_BODY().type('This a a test')
    //mfulocators.MFU_CURRENT_SITUATION().type('Test')
    //mfulocators.MFU_INFORMATION_ADVICE().type('ICON MFU')
    //mfulocators.MFU_INFORMATION_OTHER_INFO().type('hey hey')
    mfulocators.MFU_INFORMATION_PUB_TO_WEBSITE_CHECKBOX().check()

    // And I go to Warning page
    mfulocators.MFU_INFORMATION_NEXT_BUTTON().click().waitForLoadingSpinner()
    //And I go to Publishing page and select correct options and click Next
    // mfulocators.MFU_WARNING_AREA_VALIDATE_BTN().click({force:true}).waitForLoadingSpinner()
    // mfulocators.MFU_WARNING_AREA_NEXT_BTN().click().waitForLoadingSpinner()
    mfulocators.SOCIAL_MEDIA_EDIT_NXTBTN().click().waitForLoadingSpinner()
    mfulocators.NO_RETIRE_CHECKBOX().should('be.visible').click()
   
    // go to next page
    mfulocators.SELECTED_PUBLISHTIME_NXTBTN().click()
    // And I verify Submit Page information
    cy.contains('General Information')
    // And I finally publish it
    mfulocators.PUBLISH_BUTTON().should('exist').click().waitForLoadingSpinner()
    mfulocators.ASSERT_PUBLISHED()
})
/*
Then('I should see the MFU with the attached incidents in MFU page',()=>{
    cy.get('@mfuName-BR-MFU-2').then((mfuName:any)=>{
        //const name = mfuName
        cy.get('@firstIncident').then((first:any)=>{
            //const firstIncidentName = first
            mfulocators.MFU_FEED_UPDATES_TABLE().contains('td', mfuName).find('.label').eq(0)
            .invoke('text').as('BR-mfu_FIRST')
            cy.get('@BR-mfu_FIRST').then((lab_first:any)=>{
                if(lab_first.substring(0,1)=='A')
                    assert.equal(lab_first.substring(2,),first)
                else if(lab_first.substring(0,1)=='W')
                assert.equal(lab_first.substring(3,),first)
            })
            
        })
        cy.get('@secondIncident').then((second:any)=>{
            //const secondIncidentName = second
            mfulocators.MFU_FEED_UPDATES_TABLE().contains('td', mfuName).find('.label').eq(1)
            .invoke('text').as('BR-mfu_SECOND')
            cy.get('@BR-mfu_SECOND').then((lab_second:any)=>{
                if(lab_second.substring(0,1)=='A')
                    assert.equal(lab_second.substring(2,),second)
                else if(lab_second.substring(0,1)=='W')
                assert.equal(lab_second.substring(3,),second)
            })
        })
    })
})
*/

Then('I should see the MFU with the attached incidents in MFU page',()=>{
    
    cy.get('@mfuName-BR-MFU-2').then((mfuName:any)=>{
        //const name = mfuName
        let firstIncidentsName: string[] = []
        let secondIncidentsName: string[] = []
        cy.get('@firstIncident').then((first:any)=>{
            firstIncidentsName[0] = (first)
            mfulocators.MFU_FEED_UPDATES_TABLE().contains('td', mfuName).find('.label').eq(0)
            .invoke('text').as('BR-mfu_FIRST')
            cy.get('@BR-mfu_FIRST').then((lab_first:any)=>{
                secondIncidentsName.push(lab_first)
                cy.get('@secondIncident').then((second:any)=>{
                    firstIncidentsName[1]=(second)
                    mfulocators.MFU_FEED_UPDATES_TABLE().contains('td', mfuName).find('.label').eq(1)
                    .invoke('text').as('BR-mfu_SECOND')
                    cy.get('@BR-mfu_SECOND').then((lab_second:any)=>{
                        secondIncidentsName.push(lab_second)
                        firstIncidentsName.sort()
                        secondIncidentsName.sort() 
                        for (let i =0 ; i<firstIncidentsName.length;i++){
                            if(secondIncidentsName[i].substring(0,1)=='A')
                                assert.equal(secondIncidentsName[i].substring(2,),firstIncidentsName[i])
                            else if(secondIncidentsName[i].substring(0,1)=='W')
                            assert.equal(secondIncidentsName[i].substring(3,),firstIncidentsName[i])
                        }

                    })
                                      
                    
                })
            })
            
            
        })
        
        
    })
    
})
