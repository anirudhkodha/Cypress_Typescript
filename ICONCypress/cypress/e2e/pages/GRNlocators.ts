class GRNlocators {

    GRN_LOGISTICSTAB = ()=> cy.get('#nav > ul:nth-child(1) > li:nth-child(4) > a')
    GRN_ALLOCATIONSTAB = ()=> cy.get('#nav > ul:nth-child(1) > li:nth-child(4) > ul > li > a')
    GRN_DISTRICT = ()=> cy.get('#districtSelectBox[class="selectbox"]')
    GRN_DPTMNTNME = () =>cy.get('#departmentSelectBox[class="selectbox"]')
    GRN_FROMDATE = ()=> cy.get('input[name="From"][type="text"]')
    GRN_UNTILDATE = ()=> cy.get('input[name="Until"][type="text"]')
    GRN_SEARCHBTTN = ()=> cy.get('#btnSearch')
    // GRN_SELECTEDRADIO = ()=> cy.get('#stateChannels > span:nth-child(1) > button')
    GRN_SELECTEDRADIO = () =>cy.get('div[class="tab-content active"] >div >span:nth-child(1) >button[class="btn channel  87"]')
    GRN_CHANNELNAME = ()=> cy.get('#Channel_Name')
    GRN_SELECTDPNAME = ()=> cy.get('#Department_Name')
    GRN_AUTHORISEBY = ()=> cy.get('#AuthorisedBy0')
    GRN_UPDATE = ()=> cy.get('[value="Update"]')
    GRN_RESULTTABLE = ()=> cy.get('#article > div:nth-child(10)>div>div>table')

    GRN_PROFILE=()=> cy.get("ul[class='nav pull-right'] a[class='dropdown-toggle']")
    GRN_ADMIN=()=> cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(3) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1)")
    GRN_MGMT=()=> cy.get("a[href='/Admin/GrnManagement']")
    GRN_CHANNELTAB=()=> cy.get('#ui-id-2')
    GRN_CHNLADDBTN=()=> cy.get("#btnAddChannel")
    GRN_CHNLNAME=()=> cy.get('input#txtChannelName')
    GRN_CATEGORY=()=> cy.get('select#select-category')
    GRN_CHNLSAVE=()=> cy.get('a#btnChannelSave')
    GRN_TABPANE=()=> cy.get('.tab-pane.active')
    GRN_CHNLSRCHRESULTS=()=> cy.get('#tableChannel>tbody>tr>td:first-of-type')
    GRN_CHNLSRCH=()=> cy.get('#tableChannel_filter > label > input')
    GRN_DPTMNTTAB=()=>cy.get("#ui-id-3")
    GRN_DPTMADDBTN=()=>cy.get("#btnAddDepartment")
    GRN_DPTMNAME=()=>cy.get("#txtDepartmentName")
    GRN_DPTMSAVE=()=>cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > a:nth-child(1)")
    GRN_DPTMSRCH=()=>cy.get("input[aria-controls='tableDepartment']")
    GRN_DPTMSRCHRESULTS=()=> cy.get('#tableDepartment>tbody>tr>td:first-of-type')
    GRN_CTGRYTAB=()=>cy.get("#ui-id-1")
    GRN_CTGRYADDBTN=()=>cy.get("#btnAddCategory")
    GRN_CTGRYNME=()=>cy.get("#txtName")
    GRN_CTGRYSAVE=()=>cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > a:nth-child(1)")
    GRN_CTGRYSRCHRESULTS=()=>cy.get("#tableCategory_info")
    GRN_CHNLTABLE=()=>cy.get('#tableChannel tbody tr')
    GRN_CHNLTBLROW=()=>cy.get('#tableChannel tbody tr:nth-child(1) td:nth-child(3)')
    GRN_CTGRYTABLE=()=>cy.get('#tableCategory tbody tr')
    GRN_CTGRYTBLROW=()=>cy.get('#tableCategory tbody tr:nth-child(1) td:nth-child(3)')
    GRN_DPTMTABLE=()=>cy.get('#tableDepartment tbody tr')
    GRN_DPTMTBLROW=()=>cy.get('#tableDepartment tbody tr:nth-child(1) td:nth-child(2)')
    GRN_DELCHNL=()=>cy.get("button[class='btn btn-info']")
    GRN_CTGRYSEC=()=>cy.get(".nav.nav-tabs li")
    GRN_ACTIVECHNL=()=>cy.get(".tab-content.active")
    GRN_ALLOCDPTNME=()=>cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select:nth-child(1)")
    GRN_STARTDTE=()=>cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)")
    GRN_TERMTEDATE=()=>cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)")
    GRN_USENOTES=()=>cy.get("#Notes0")
    GRN_ALLOCUPDATE=()=>cy.get("input[class='btn next channelAllocator 0']")
    GRN_ALLOCTABLE=()=>cy.get('.controls div.control-group.department div.legend')
    GRN_ALLOCREC=()=>cy.get("table[class='tblDepartment table table-bordered table-striped'] tr")
    GRN_CHNLPERPGE=()=>cy.get("select[name='tableChannel_length']")
    GRN_CHNLPGERSLT=()=>cy.get("#tableChannel_info")
    GRN_DPTMPGERSLT=()=>cy.get("#tableDepartment_info")
    GRN_DPTMPERPGE=()=>cy.get("select[name='tableDepartment_length']")
    
    GRN_TABLEHEAD1 = ()=> cy.get('#article > div:nth-child(10)>div>div>table > thead > tr > td:nth-child(1)')
    GRN_TABLEHEAD2 = ()=> cy.get('#article > div:nth-child(10)>div>div>table > thead > tr > td:nth-child(2)')
    GRN_TABLEHEAD3 = ()=> cy.get('#article > div:nth-child(10)>div>div>table > thead > tr > td:nth-child(3)')
    GRN_TABLEHEAD4 = ()=> cy.get('#article > div:nth-child(10)>div>div>table > thead > tr > td:nth-child(4)')
    GRN_TABLEHEAD5 = ()=> cy.get('#article > div:nth-child(10)>div>div>table > thead > tr > td:nth-child(5)')
    
    GRN_TABLEBODY1 = ()=> cy.get(' #article > div:nth-child(10)>div>div>table > tbody > tr:nth-child(1) > td:nth-child(1)')    
    GRN_TABLEBODY2 = ()=> cy.get(' #article > div:nth-child(10)>div>div>table > tbody > tr:nth-child(1) > td:nth-child(2)')    
    GRN_TABLEBODY3 = ()=> cy.get(' #article > div:nth-child(10)>div>div>table > tbody > tr:nth-child(1) > td:nth-child(3)')    
    GRN_TABLEBODY4 = ()=> cy.get(' #article > div:nth-child(10)>div>div>table > tbody > tr:nth-child(1) > td:nth-child(4)')    
    GRN_TABLEBODY5 = ()=> cy.get(' #article > div:nth-child(10)>div>div>table > tbody > tr:nth-child(1) > td:nth-child(5)')    

    GRN_TABLEBODY = ()=> cy.get('#article > div:nth-child(10)>div>div>table > tbody > tr:nth-child(1)')
    GRN_TERMDATE = ()=> cy.get('#article > div:nth-child(10)>div>div>table > tbody>tr:nth-child(2)>td>div>div:nth-child(2)>div:nth-child(2)>div>div>div>input[name="DateTerminated"][type="text"]')

    GRN_DELETEBTTN = ()=> cy.get('#article > div:nth-child(10)>div>div> table > tbody > tr.editorContent > td > div > div:nth-child(3) > div:nth-child(2) > div > div > a')
    GRN_DELETEOK = ()=> cy.get('#btnDelete')

    BUTTON_HISTORICAL = ()=> cy.get('#btnSearchHistorical')
    TABLERESULT = ()=> cy.get('#tblDepartment_info')

    GRN_STARTDATE = ()=> cy.get('input[name="DateStarted"][type="text"]')
    GRN_TERMINATEDATE = ()=> cy.get('input[name="DateTerminated"][type="text"]')
    GRN_LABEL_CHANNEL_NAME = ()=> cy.get('label[for="Channel_Name"]')
    GRN_LABEL_DEPARTMENT_NAME = ()=> cy.get('label[for="DateTerminated"]')
    GRN_LABEL_GRN_RADIO = ()=> cy.contains("GRN Radio Channels")




    //*************************************************************************************************//
    /*                       *****************PAGE FUNCTIONS****************                           */
    //************************************************************************************************// 
    
    INPUTFROMDATE = (fromdate: string)=> {

        this.GRN_FROMDATE().type(`${fromdate}`)

    }

    INPUTUNTILDATE = (untildate: string)=> {
        this.GRN_UNTILDATE().type(`${untildate}`)
        
    }
    INPUTSTARTDATE = (fromdate: string)=> {

        this.GRN_STARTDATE().type(`${fromdate}`)

    }

    INPUTTERMINATEDATE = (untildate: string)=> {
        this.GRN_TERMINATEDATE().type(`${untildate}`)
        
    }
    

    TAP_SEARCH_HISTORICAL = (value: string)=> {

        this.BUTTON_HISTORICAL().contains(`${value}`).click()


    }
    
    ASSERT_TABLERESULT = (value: string)=> {

        this.TABLERESULT().then(($textValue) => {

            const RESULTS = $textValue.text()
            const ACTUAL_NUMBER_ARRAY = RESULTS.split(" ")
            const ACTUAL_NUMBER = parseInt(ACTUAL_NUMBER_ARRAY[ACTUAL_NUMBER_ARRAY.length - 2].replace(",", ""))
            expect(ACTUAL_NUMBER).to.be.greaterThan(parseInt(value))
           
        })

    }

    SELECT_CHANNELNAME = (value: string)=> {

        this.GRN_LABEL_CHANNEL_NAME().then(()=> {

            this.GRN_CHANNELNAME().select(value)


        })

    }

    SELECT_RADIO_CHANNEL = (value: string)=> {

        this.GRN_LABEL_GRN_RADIO().then(()=> {

            cy.contains(value).click()

        });

    }


    SELECT_DEPARTMENTNAME = (value: string)=> {

        this.GRN_LABEL_DEPARTMENT_NAME().then(()=> {

            this.GRN_SELECTDPNAME().select(value)


        })

    }



    INPUT_GRNNOTES = (value: string)=> {

        this.GRN_USENOTES().type(`${value}`)

    }

    INPUT_GRNAUTHORISEBY = (value: string)=> {

        this.GRN_AUTHORISEBY().type(`${value}`)

    }


    TAP_GRNUPDATE = (value: string)=> {

    this.GRN_UPDATE().contains(value).click({force: true})
    }

    


}


export default GRNlocators