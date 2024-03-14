import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import dayjs from "dayjs";
import { truncate } from "lodash";
import BIRS_COMMONPAGES from "../pages/Birs_common_pages";
import Dashboard from "../pages/Dashboard";
import Eventlocators from "../pages/eventlocators";
import GRNlocators from "../pages/GRNlocators";
import INCIDENTLOCATORS from "../pages/Incidentlocators";
import Operations from "../pages/Operations&fiu";
import SecureLogon from "../pages/SecureLogon";
import UserSearch from "../pages/UserSearch";
import { TIMEOUT } from "dns";

const secureLogon = new SecureLogon()
const dashboard= new Dashboard()
const operations = new Operations()
const userSearch = new UserSearch()
const eventlocators = new Eventlocators()
const incidentlocators = new INCIDENTLOCATORS()
const birspage = new BIRS_COMMONPAGES()
const grnlocators = new GRNlocators()
let fromdate =  dayjs().subtract(4,'day').format('DD/MM/YYYY');
let untildate = dayjs().format('DD/MM/YYYY');
let termdate = dayjs().add(3,'day').format('DD/MM/YYYY');
let fromdate_txt= ''
let untildate_txt = ''
let channel_name = ''
let authorised_by = ''
let termdate_txt = ''
let channelnme = ''
let Deptmntnme = ''
let Categorynme =''
let resultscnt =''
let resultsCountBfre =''
let resultsCountAfter = ''



    Given ('I open ICON webpage',()=>{

        cy.loginToICON()

    })

    And ('I can see dashbaord',()=> {

        dashboard.CURRENT_INCIDENTS().should('be.visible')    

    })

    And ('I expand Logistics',()=> {
    
        grnlocators.GRN_LOGISTICSTAB().should('be.visible').click({force: true})

    })
    And ('I Open GRN Allocations',()=> {
    
        grnlocators.GRN_ALLOCATIONSTAB().click({force: true})
    
    })
    And ('I Select the District',()=> {

        grnlocators.GRN_DPTMNTNME().select("55",{force: true})
    })
    And ('I Select the date range and checked Include previous channels',()=> {

        grnlocators.GRN_FROMDATE().type(fromdate,{force: true})
            .then(($txt)=>{
            fromdate_txt = $txt.text()
        })
        grnlocators.GRN_UNTILDATE().type(untildate,{force: true}).then(($txt1)=>{
            untildate_txt = $txt1.text()
        })

    })
    And ('I click on search',()=> {

        grnlocators.GRN_SEARCHBTTN().click({force: true})
    })
    And ('I select the channel',()=> {

        grnlocators.GRN_SELECTEDRADIO().click({force:true}).then(($chname)=>{
            channel_name = $chname.text()
        })
    
    })
    And ('I put details on that',()=> {

        //Select channel
        grnlocators.GRN_CHANNELNAME().select("9",{force: true})

        //Select department name
        grnlocators.GRN_SELECTDPNAME().select("55",{force: true})

        //Authorised by
        grnlocators.GRN_AUTHORISEBY().type('TeamC',{force: true}).then(($auth)=> {
            authorised_by = $auth.text()
        
        })
        
        //Update
        grnlocators.GRN_UPDATE().click({force: true}).waitForLoadingSpinner()

    })
    And ('I select allocated district and assert with the details',()=> {
        
        
        //Search Selected LGA
    
        grnlocators.GRN_DPTMNTNME().select("100",{force: true})
        grnlocators.GRN_SEARCHBTTN().click({force: true})
        //grnlocators.GRN_RESULTTABLEHEAD().should(($val)=>
        //let values = $val.text()
        

        //Assert table headers
        
        let thead = ['GRN Channel','Start Date','Termination Date','Allocated Date','Authorised By'] 
        
        
        grnlocators.GRN_TABLEHEAD1().should(($head1)=>{

            const head1_txt = $head1.text()
            expect(head1_txt).to.contain(thead[0])
        })

        grnlocators.GRN_TABLEHEAD2().should(($head2)=>{
            
            const head2_txt = $head2.text()
            expect(head2_txt).to.contain(thead[1])
        })

        grnlocators.GRN_TABLEHEAD3().should(($head3)=>{

            const head3_txt = $head3.text()
            expect(head3_txt).to.contain(thead[2])
        })

        grnlocators.GRN_TABLEHEAD4().should(($head4)=>{

            const head4_txt = $head4.text()
            expect(head4_txt).to.contain(thead[3])
        })

        grnlocators.GRN_TABLEHEAD5().should(($head5)=>{

            const head5_txt = $head5.text()
            expect(head5_txt).to.contain(thead[4])
        })
    
        //Assert table body
        
        let tbody = [channel_name,fromdate_txt,untildate_txt,fromdate_txt,authorised_by]


        grnlocators.GRN_TABLEBODY1().then(($body1)=> {
           const body_txt1 = $body1.text()
            expect(body_txt1).to.contain(tbody[0])
        })

        grnlocators.GRN_TABLEBODY2().then(($body2)=> {
            const body_txt2 = $body2.text()
            expect(body_txt2).to.contain(tbody[1])

         })
     
        grnlocators.GRN_TABLEBODY3().then(($body3)=> {
            const body_txt3 = $body3.text()
            expect(body_txt3).to.contain(tbody[2])

         })
     
        grnlocators.GRN_TABLEBODY4().then(($body4)=> {
            const body_txt4 = $body4.text()
            expect(body_txt4).to.contain(tbody[3])

         })
        grnlocators.GRN_TABLEBODY5().then(($body5)=> {
            const body_txt5 = $body5.text()
            expect(body_txt5).to.contain(tbody[4])

         })
    

     })

    And ('I update the details but not the channel',()=> {

        // Open table details

        grnlocators.GRN_TABLEBODY().click({force: true})

        
        // Can't change the channel
        grnlocators.GRN_CHANNELNAME().should('have.css','display','inline-block')
                
        // New district
        grnlocators.GRN_DISTRICT().select("4500",{force: true})

        // New termination date 
        grnlocators.GRN_TERMDATE().type(termdate).then(($termD)=> {

            termdate_txt = $termD.text()

        })
        
        // Update
        grnlocators.GRN_UPDATE().click({force: true}).waitForLoadingSpinner()



    })


    And ('I select new allocated district and assert with the details',()=>{


        //Search Selected LGA


        grnlocators.GRN_DISTRICT().select("4500",{force: true})
        grnlocators.GRN_SEARCHBTTN().click({force: true})

        //Assert Table body
        
        let tbody1 = [channel_name,fromdate_txt,termdate_txt,fromdate_txt,authorised_by]

        grnlocators.GRN_TABLEBODY1().then(($Ubody1)=> {
            const Ubody_txt1 = $Ubody1.text()
             expect(Ubody_txt1).to.contain(tbody1[0])
         })
 
         grnlocators.GRN_TABLEBODY2().then(($Ubody2)=> {
             const Ubody_txt2 = $Ubody2.text()
             expect(Ubody_txt2).to.contain(tbody1[1])
 
          })
      
         grnlocators.GRN_TABLEBODY3().then(($Ubody3)=> {
             const Ubody_txt3 = $Ubody3.text()
             expect(Ubody_txt3).to.contain(tbody1[2])
 
          })
      
         grnlocators.GRN_TABLEBODY4().then(($Ubody4)=> {
             const Ubody_txt4 = $Ubody4.text()
             expect(Ubody_txt4).to.contain(tbody1[3])
 
          })
         grnlocators.GRN_TABLEBODY5().then(($Ubody5)=> {
             const Ubody_txt5 = $Ubody5.text()
             expect(Ubody_txt5).to.contain(tbody1[4])
 
          })
     
        

    })
    And ('I look for new LGA and check the selected is showing as strikethrough',()=>{

        //select a new LGA
        grnlocators.GRN_DISTRICT().select("20",{force: true})
        grnlocators.GRN_SEARCHBTTN().click({force: true})

        // Channel linethrough
        grnlocators.GRN_SELECTEDRADIO().should('have.css','text-decoration','line-through solid rgb(255, 0, 0)')


    })
    And ('I Delete the channel and verify',()=> {
        
        //back to updated lga
        grnlocators.GRN_DISTRICT().select("4500",{force: true})
        grnlocators.GRN_SEARCHBTTN().click({force: true})

        //delete channel
        grnlocators.GRN_TABLEBODY().click({force: true})
        grnlocators.GRN_DELETEBTTN().click({force: true}).waitForLoadingSpinner()
        grnlocators.GRN_DELETEOK().click({force: true}).wait(4000)

        //Assert on delete
        grnlocators.GRN_DISTRICT().select("4500",{force: true})
        grnlocators.GRN_SEARCHBTTN().click({force: true})

        grnlocators.GRN_SELECTEDRADIO().should('have.css','display','inline-block')



    })

    And ('I expand profile',()=> {
        grnlocators.GRN_PROFILE().should('be.visible').click({force: true})
    })
    
    And ('I select administration',()=> {
        grnlocators.GRN_ADMIN().should('be.visible').click({force: true})
    })
    
    And ('I click GRN management',()=> {
        grnlocators.GRN_MGMT().click({force: true})
    })
    
    And ('I click the Channel tab',()=> {
        grnlocators.GRN_CHANNELTAB().should('be.visible').click({force: true})
    })
    
    And ('I click the Add channel button',()=> {
        grnlocators.GRN_CHNLADDBTN().should('be.visible').click({force: true})
    })
    
    And ('I input Name, category and click Save',()=> {
        channelnme = `CHNL${Math.floor(Math.random() *999)+1}`
        grnlocators.GRN_CHNLNAME().type(channelnme)
        grnlocators.GRN_CATEGORY().select("Operations")
        grnlocators.GRN_CHNLSAVE().click()
       
    })
    
    And ('I input the channel name in search box',()=> {
        grnlocators.GRN_CHNLSRCH().type(channelnme).then(function(){
    
        })
    })
    
    And ('verify the search results for created channel',()=> {
        grnlocators.GRN_CHNLSRCHRESULTS().should('contain.text', channelnme)        
    })
    
    And ('I input department name and click Save',()=> {
        Deptmntnme = `DPT${Math.floor(Math.random() *999)+1}`
        //Deptmntnme = `DPT${Math.random().toString(18).slice(4)}`
        grnlocators.GRN_DPTMNAME().type(Deptmntnme, {force: true})
        grnlocators.GRN_DPTMSAVE().click({force: true})
    })
    
    And ('I click the department tab',()=> {
        grnlocators.GRN_DPTMNTTAB().should('be.visible').click({force: true})
    })
    
    And ('I click the Add department button',()=> {
        grnlocators.GRN_DPTMADDBTN().should('be.visible').click({force: true})
    })
    
    And ('I input the department name in search box',()=> {
        grnlocators.GRN_DPTMSRCH().type(Deptmntnme).then(function(){
    
        })
    })
    
    And ('verify the search results for created department',()=> {
        grnlocators.GRN_DPTMSRCHRESULTS().should('contain.text', Deptmntnme)        
    })
    
    And ('I click the category tab',()=> {
        grnlocators.GRN_CTGRYTAB().should('be.visible').click({force: true})
        grnlocators.GRN_CTGRYSRCHRESULTS().then((resultscnt) =>{
            resultsCountBfre = resultscnt.text()
        })
    })
    
    And ('I click the Add category button',()=> {
        grnlocators.GRN_CTGRYADDBTN().should('be.visible').click({force: true})
    })
    
    And ('I input category name and click Save',()=> {
        Categorynme = `CTG${Math.floor(Math.random() *999)+1}`
        grnlocators.GRN_CTGRYNME().type(Categorynme, {force: true})
        grnlocators.GRN_CTGRYSAVE().click({force: true})
    })
    
    And ('verify the search results for created category',()=> {
        grnlocators.GRN_CTGRYSRCHRESULTS().then((resultscnt) =>{
            resultsCountAfter = resultscnt.text()
            assert(resultsCountAfter=resultsCountBfre+1)
        })      
    })
    
    And ('verify if the table contains channel records',()=> {      
        grnlocators.GRN_CHNLTABLE().should('not.have.length' , 0) 
    })
    
    And ('verify if the delete and edit option is available for channel',()=> {      
        grnlocators.GRN_CHNLTBLROW().find('.edit-channel').should('be.visible')
        grnlocators.GRN_CHNLTBLROW().find('.delete-channel').should('be.visible')
    })
    
    And ('verify if the table contains department records',()=> {      
        grnlocators.GRN_DPTMTABLE().should('not.have.length' , 0) 
    })
    
    And ('verify if the delete and edit option is available for department',()=> {      
        grnlocators.GRN_DPTMTBLROW().find('.edit-department').should('be.visible')
        grnlocators.GRN_DPTMTBLROW().find('.delete-department').should('be.visible')
    })
    
    And ('verify if the table contains category records',()=> {      
        grnlocators.GRN_CTGRYTABLE().should('not.have.length' , 0) 
    })
    
    And ('verify if the delete and edit option is available for category',()=> {      
        grnlocators.GRN_CTGRYTBLROW().find('.edit-category').should('be.visible')
        grnlocators.GRN_CTGRYTBLROW().find('.delete-category').should('be.visible')
    })
    
    And ('I delete the created channel',()=> {
        grnlocators.GRN_CHNLSRCHRESULTS().should('contain.text', channelnme)
        grnlocators.GRN_CHNLTBLROW().find('.delete-channel').should('be.visible').click()
        grnlocators.GRN_DELCHNL().click();
    
    })
    
    And ('I delete the created department',()=> {
        grnlocators.GRN_DPTMSRCHRESULTS().should('contain.text', Deptmntnme)
        grnlocators.GRN_DPTMTBLROW().find('.delete-department').should('be.visible').click()
        grnlocators.GRN_DELCHNL().click();
    
    })
    
    And ('I input Name, category from above step and click Save',()=> {
        channelnme = `CHNL${Math.floor(Math.random() *999)+1}`
        cy.wait(1000)
        grnlocators.GRN_CHNLNAME().type(channelnme)        
        grnlocators.GRN_CATEGORY().select((Categorynme), {force:true})
        grnlocators.GRN_CHNLSAVE().click()
    
    })
    
    And ('verify the allocation',()=> {
        grnlocators.GRN_LOGISTICSTAB().should('be.visible').click({force: true})
        grnlocators.GRN_ALLOCATIONSTAB().click({force: true})
        grnlocators.GRN_CTGRYSEC().each(($e1, index, $list)=>{
            const ctgryName= $e1.text()
            if(ctgryName==Categorynme)
            {
                cy.wrap($e1).click()
                cy.wait(4000)
                               
            }
        })
        })
    
        And ('click on the channel',()=> {      
            grnlocators.GRN_ACTIVECHNL().should('have.length', 1)
            grnlocators.GRN_ACTIVECHNL().get('.tab-pane.active .btn.channel').click({force: true})
        })
    
        And ('fill the allocation details and click update',()=> {      
            grnlocators.GRN_STARTDTE().type(fromdate,{force: true})
            .then(($txt)=>{
            fromdate_txt = $txt.text()
        })
        grnlocators.GRN_TERMTEDATE().type(untildate,{force: true}).then(($txt1)=>{
            untildate_txt = $txt1.text()
        })
        grnlocators.GRN_ALLOCDPTNME().select('Albury City FCC')
        grnlocators.GRN_USENOTES().type("Test")
        grnlocators.GRN_AUTHORISEBY().type('TestUser')
        grnlocators.GRN_ALLOCUPDATE().click({force: true})
        cy.reload()
        })
    
        And ('also change the per page channel option',()=> {
            grnlocators.GRN_CHNLPERPGE().select('25')
            cy.scrollTo(10000, 10000, { duration: 1000 })
            grnlocators.GRN_CHNLPGERSLT().then(($resultText) =>{
                         assert($resultText.text().includes('Showing 1 to 25'))
                         
                })
            
            })  
    
        And ('also change the per page department option',()=> {
            grnlocators.GRN_DPTMPERPGE().select('25')
            cy.scrollTo(10000, 10000, { duration: 1000 })
            grnlocators.GRN_DPTMPGERSLT().then(($resultText) =>{
                             assert($resultText.text().includes('Showing 1 to 25'))
                             
                    })
                
                })      
    
        And ('verify the allocation in the table',()=> {  
            cy.reload()    
            grnlocators.GRN_ALLOCTABLE().each(($e3, index, $list)=>{
                const deptNameAlloc = $e3.text()
                if(deptNameAlloc == 'Albury City FCC')
                {
                    grnlocators.GRN_ALLOCREC().contains('td', channelnme).should('be.visible')
                   
                }
    
            })
    
          
    
    })
