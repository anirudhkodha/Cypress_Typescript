class S44PAGE{

    KNOWLEDGE_TAB = ()=> cy.get('#nav > ul:nth-child(1) > li:nth-child(2) > a')
    JOINT_OPERATIONS_OVERVIEW = ()=> cy.get('#mnuKnowledge > li:nth-child(1) > a')
    S44_SECTION44_LIST = ()=> cy.get('#operationsOverview > div.clearfix > div.pull-right > a:nth-child(2)')
    S44_ADD_NEWS44 = ()=> cy.get('#article > div.pull-right > a')
    S44_REFERENCEAGENCY = ()=> cy.get('#AgencyId')
    S44_REFERENCE_MAX = ()=> cy.get('#ReferenceNo')
    S44_NAME = ()=> cy.get('#Name')
    S44_DESTINATIONAREA = ()=> cy.get('#DeclarationArea')
    S44_REGION = ()=> cy.get('#SelectedRegion')
    S44_LGA = ()=> cy.get('#SelectedLga')
    S44_DECLAREDATE = ()=> cy.get('input[name="DeclaredDate"][type="text"]')
    S44_REVOKEDATE = ()=> cy.get('input[name="RevokedDate"][type="text"]')
    S44_NXTBTTN_GNRLINFO = ()=> cy.get('#generalNext[class="btn next"]')
    S44_ATTACHINCIDENTS = ()=> cy.get('#btn_attachIncidents[class="btn   btn btn-primary"]')
    S44_INCIDENTSELECT_CHECKBOX1 = ()=> cy.get('tbody> tr:nth-child(1) > td:nth-child(1) > input[type="checkbox"]')
    S44_INCIDENTSELECT_CHECKBOX2 = ()=> cy.get('tbody> tr:nth-child(2) > td:nth-child(1) > input[type="checkbox"]')
    
    S44_SELECTINCIDENT_DONE = ()=> cy.get('#btn_attachIncidentsDone[id="btn_attachIncidentsDone"]')
    S44_ATTACHEDINCIDENT_NEXT = ()=> cy.get('#attachedIncidentsPage > div.form-actions > div > a.btn.next')
    S44_CREATEBTTN = ()=> cy.get('#submit > div.form-actions > div > div > button')
    S44_ATTACHDOCUMENTS = ()=> cy.get('#attachDocument')
    S44_ATTACHDOCUMENTS2 = ()=> cy.get('#toggleSelectAllIncidents')
    S44_VERIFYONPAGE = ()=> cy.get('#article > table > tbody > tr:last-of-type > td:nth-child(1)')
    S44_SECTION44NAME= ()=> cy.get('#article > table > tbody > tr:last-of-type > td:nth-child(1) > a')
    S44_VERIFYONPAGE2 = ()=> cy.get('#article > table > tbody > tr:last-of-type > td:nth-child(5)')
    S44_VERIFYONPAGE3 = ()=> cy.get('#article > table > tbody > tr:last-of-type > td:nth-child(6)')
    S44_VERIFYONPAGE4 = ()=> cy.get('#article > table > tbody > tr:last-of-type > td:nth-child(2)')
    S44_VERIFYONPAGE5 = ()=> cy.get('#article > table > tbody > tr:last-of-type > td:nth-child(8)')
    S44_INCIDENTADD =() =>cy.get('table[class="incidentTable table table-striped table-hover table-bordered"]>tbody>tr:nth-child(1)>td:nth-child(3)')
    
    
    S44_ASSERTINCNAME = ()=> cy.get('#summary > dl > dd:nth-child(16) > ul > li:nth-child(1) > span')
    S44_INCIDENTNAME = ()=> cy.get('#attachedIncidents > table > tbody > tr:nth-child(1) > td:nth-child(3) > strong')
    S44_ASSERTVIEW1 = ()=> cy.get('#article > div.clearfix.form-horizontal > div:nth-child(2) > div')
    S44_ASSERTVIEW2 = ()=> cy.get('#article > div.clearfix.form-horizontal > div:nth-child(4) > div')
    S44_ASSERTVIEW3 = ()=> cy.get('#article > div.clearfix.form-horizontal > div:nth-child(6) > div')
    
    S44_WAITUNTILATTACHINC = ()=> cy.get('[class="unstyled inline"]>li >span')
    S44_SEC44LIST_S44COUNT = ()=> cy.get('#article>p>small')
    tst=()=>cy.get('#s44Table>tbody>tr[role="row"]>td')
    
    }
    export default S44PAGE