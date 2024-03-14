class INCIDENTLOCATORS{

    //````````````Function to get the value from DataTable or JSON file``````````````
   
    //______________________________________________________________________________


    INCIDENT_INCIDENT_LIST = ()=> cy.get('#mnuOperation').contains('Incident List')
    INCIDENT_LISTTABUSER = ()=> cy.get('#mnuOperation').contains('Incident List')
    INCIDENT_TAB = ()=> cy.get('#mnuOperation > .dropdown-submenu > [tabindex="-1"]')

    INC_SEARCHBYNAME = ()=> cy.get('#DataTables_Table_0_wrapper > div.dataTables_scroll > div.dataTables_scrollHead > div > table > thead > tr.filters > th:nth-child(3) > input[type=text]')

    CREATE_FULL_INCIDENT_TAB = ()=> cy.get('#mnuOperation > li.dropdown-submenu.visible-desktop > ul > li:nth-child(1) > a',{timeout: 10000})
    MAP_BOX = ()=>  cy.get('#map')
    INCIDENT_NAME = ()=> cy.get('#IncidentName')
    INC_LGA = ()=> cy.get('#SelectedLga')
    INCIDENT_LOCATION = ()=> cy.get('#MapViewModel_Address_FormattedAddress')
    ZOOMBUTTON_INC_MAP = ()=> cy.get('input[value="Zoom to"][type="button"]')
    LOCALINC_NUMBER = ()=> cy.get('#LocalIncidentNumber')
    TRIPLE0_NUMBER = ()=> cy.get('#TripleOReferenceNumber')
    TRIPLE0_CALL_RECEIVED =() => cy.get('[name= "TripleOCallReceiveDateTime"]')
    AGENCY_CALL_RECEIVED = ()=> cy.get('[name="RFSReceivedDateTime"]')
    BUSHFIRE_TYPE_TAB = ()=>  cy.get('.selectize-input')
    SELECTED_BUSHFIRETYPE_FOREST = ()=> cy.get('div.selectize-dropdown.multi.plugin-remove_button > div > div.option.active')
    SAVE_BTTN_FULLINC = ()=>  cy.get('.pull-right > .btn',{timeout: 60000})
    FULLINC_SUMMARY_ALERT = ()=>  cy.get('[class="alert alert-info"]')
    EDIT_SITREP_BTTN = ()=> cy.get('.odd > :nth-child(3) > .btn')
    EDITSITREP_TITLE = ()=> cy.get('h1')
    INC_SITREPALERTS = ()=> cy.get('#opMessage [class="alert alert-error"]')
    INC_SITREPERRORMSSG = ()=> cy.get('#opMessage [class="alert alert-error"]')
    CURRENT_REPORT_TIME_SR= ()=> cy.get('[name="DateTime"]')
    SITREP_COMMENTS_SR = ()=> cy.get('#SitRepComments')
    FIRETAB_SITREP = ()=>  cy.get(':nth-child(21) > :nth-child(1) > .nav > :nth-child(2) > a',{timeout:6000})
    DAMAGETAB_SITREP = ()=> cy.get('#fireotherincidents > :nth-child(1) > .accordion-toggle',{timeout:6000})
    DAMAGE_NAITONALPARK_SR = ()=> cy.get('#DamageNationalPark')
    INCIDENT_ORIGIN_TAB_SR = ()=> cy.get(':nth-child(3) > .accordion-toggle > span',{timeout:6000})
    INC_STARTDATE_SR = ()=> cy.get('[name="OriginStartDateTime"]')
    INCLOCDETAILS_TAB_SR = ()=> cy.get('#currentIncidentDetailLink > span',{timeout:6000})
    TENURE_TAB_SR = ()=> cy.get('.bushfiretype > .controls > .selectize-control > .selectize-input' )
    TENURE_SELECTED_SR = ()=> cy.get('div.selectize-dropdown.multi.plugin-remove_button > div > div:nth-child(6)')
    THREATS_TAB_SR = ()=> cy.get(':nth-child(21) > :nth-child(1) > .nav > :nth-child(3) > a',{timeout:6000})
    THREAT_POTENTIAL_SR = ()=> cy.get('#ThreatPotentialLessThan2Hours')
    FIRE_CLASS_SR = ()=> cy.get('#SelectedFireClass')
    //Master Incident
    TOGGLE_MASTER_INC = () => cy.get('#IsMaster')
    //ACTION_TAB_SR = ()=>  cy.get(':nth-child(21) > :nth-child(1) > .nav > :nth-child(4) > a',{timeout:6000})
    ACTION_TAB_SR = ()=>  cy.get('[href="#action"]',{timeout:6000})
    ALERTLEVEL_REQTEXT = ()=> cy.get('#newShellIncidentAlertLevel > .alert > span')
    SETALERTBTTN_SR = ()=> cy.get('#btnShowAlert')
    ALERTLEVETBOX_SR = ()=> cy.get('#alertModal > .modal-header > h3') 
    SELECTED_ALERTLEVEL = ()=> cy.get(':nth-child(4) > :nth-child(2) > .btn').eq(0).click({force: true})
    SETALERTOK_SR = ()=> cy.get('#btnAlertLevelMatrixOk')
    VERIFY_ALERTLEVLTXT = ()=> cy.get('#newShellIncidentAlertLevel > .alert > span')
    INCCONTROLLER_SRE_TAB = ()=> cy.get('.nav > :nth-child(6) > a')
    INCCONTROLLER_SRE = ()=>   cy.get('#IncidentController')
    INCLEAD_AGENCY_SRE = ()=> cy.get('#SelectedLeadAgency')
    INC_AUTHORISE_SRE = ()=> cy.get('#btnAuthorize', {timeout: 180000})
    INC_AUTHORISE_SRE_VERIFY1 = ()=>   cy.get('#credentialsForm > div:nth-child(3) > div:nth-child(1) > label',{timeout: 180000})
    INC_AUTHORISE_SRE_VERIFY2 = ()=>   cy.get('#credentialsForm > div:nth-child(3) > div:nth-child(2) > label')
    INC_AUTHORISE_SRE_VERIFY3 = ()=>   cy.get('#credentialsForm > div:nth-child(3) > div.control-group.span6 > label') 
    INC_FIREINVESTIGATIONBTTN = ()=>   cy.get('[id="IncludeIntel"]')
    INC_INCLUDEINTELBTTN = ()=> cy.get('[id="IncludeIntel"]')
    INC_NOTIFIABLEBTTN = ()=> cy.get('[id="IsNotifiable"]')
    INC_BTN_AUTHORISE_SRE  = ()=>  cy.get('#btn_AuthorizeSitRep',{timeout: 60000})
    INC_SRE_USERNAME = ()=> cy.get('#credentials_username').click({force:true}).type(Cypress.env('ICON_USERNAME'), {force:true})
    INC_SRE_PASSWORD = ()=> cy.get('#credentials_password').click({force:true}).type(Cypress.env('ICON_PASSWORD'), {force:true})
    INC_CREDENTIALSOK = ()=>  cy.get('#btnCredentialsModal_Ok')
    INC_SITREP_SUCCESS = ()=> cy.get('.alert')
    INC_CLOSE_SITREPE1 = ()=> cy.get('#credentialsForm > div.form-actions > a')
    INC_HEADERINCDETAILS = ()=> cy.get('#header > div > div.navbar-subnav > div > ul > li:nth-child(3) > a')
    INC_ASSERT_FULLINC_SRE = ()=> cy.get('#sitReps > tbody > tr > td:nth-child(2)')
    //INC_ADD_SITREP = ()=> cy.get('#article > div:nth-child(6) > div.pull-right > a:nth-child(1)')
    INC_NOTIFIABLECHECKED = ()=> cy.get('#IncidentSummary_Notifiable')

    INC_SUMMARYDETAILS = ()=> cy.get('#incidentSummaryDetails')

    //>>>>>>Errors>>>>>>>>
    INC_NAME_ERROR = () => cy.get('#IncidentName-error')
    INC_LGA_ERROR = () => cy.get('#SelectedLga-error')
    INC_LOCATION_ERROR = () => cy.get('#MapViewModel_Address_FormattedAddress-error')
    FIRE_TYPE_VALIDATION_MSSG = ()=>  cy.get('#validationMessage')
    AGENCY_RCV_DATE_ERROR = () => cy.get('span[class="field-validation-error help-inline"]>span')
    
    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>////
    /// OTHERTYPES OR NON FIERE >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    INC_OtherShell_TAB = () => cy.get('#mnuOperation > li.dropdown-submenu.visible-desktop > ul > li:nth-child(3) > a',{timeout: 10000})
    INC_NAME_OTHER_TYPE = ()=> cy.get('#IncidentName')
    INC_OTHER_TENURE_TAB = () => cy.get('#otherIncidentForm> div:nth-child(2) > div:nth-child(7)>div>div>div.selectize-input.items.not-full.has-options')
    INC_OTHERFIRE_TYPE = ()=> cy.get('#otherfiretype')
    INC_SUPPORT_TAB = ()=> cy.get('#frmSitRep > div.control-group > div > ul > li:nth-child(5) > a',{timeout:6000})
    INC_FIELDPERSONNEL = ()=>  cy.get('#ResourceViewModel_PersonnelResources_NSWRFS')
    
    /// OTHERTYPES OR NON FIERE select Field >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    Selectypedropdown = ()=> cy.get('')
    
    //>Other Error>>>>
    OTHER_FIRETENURE_ERR = () => cy.get('#otherIncidentForm> div:nth-child(2) > div:nth-child(7) > div>span.field-validation-error.help-inline.error')
    
    //>Event >>>>
    INC_EVNT_TENURE_TAB = () => cy.get('#wizardForm>div>div:nth-child(8)>div>div>div.selectize-input.items.not-full.has-options')
    
    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>////
    /// BUSHFIRE   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    
    INCCREATE_BUSHFIRESHELL1 = ()=>  cy.get('#mnuOperation > li.dropdown-submenu.visible-desktop > ul > li:nth-child(2) > a')
    INCCREATE_BUSHFIRESHELL2 = ()=>     cy.get('#map')
    INC_NAME_BUSH = ()=>  cy.get('#IncidentName')
    INC_LGA_BUSH = ()=>  cy.get('#SelectedLga')
    INC_STARTDATETIME_ = () => cy.get('[name="StartDateTime"]')
    INC_ALERT_LVL_BUSH1 = ()=>   cy.get('#btnShowAlert')
    INC_ALERT_LVL_BUSH2 = () => cy.get('#alertModal > div.modal-body')
    INC_ALERT_LVL_BUSH3 = ()=> cy.get('#matrixControls > table > tbody > tr:nth-child(3) > td:nth-child(3) > input.btn.medium')
    INC_ALERT_LVL_BUSH4 = ()=>   cy.get('#btnAlertLevelMatrixOk')
    INC_BUSHFIRETYPE_TAB = ()=> cy.get('#shellIncidentForm > div:nth-child(4) > div:nth-child(5) > div > div > div.selectize-input.items.not-full.has-options')
    INC_BUSHFIRETYPE = ()=> cy.get('div.selectize-dropdown.multi.plugin-remove_button > div > div:nth-child(1)')
    INC_FIRESIZETAB_BUSH = ()=>  cy.get('#shellIncidentForm > div:nth-child(4) > div:nth-child(7) > label')
    INC_FIRESIZE_BUSH = ()=> cy.get('#FireSize')
    INC_TENURE_TAB_ = ()=> cy.get('.selectize-input > input')
    INC_TENURE_BUSH = ()=> cy.get('body > div:nth-child(83) > div > div:nth-child(6)')
    INC_STATUS_BUSH1 = ()=> cy.get('#shellIncidentForm > div:nth-child(4) > div:nth-child(9) > label')
    INC_STATUS = ()=>   cy.get('#SelectedIncidentStatus')
    INC_RESPONSIBLE_AGENCY_ = ()=>  cy.get('#SelectedLeadAgency')
    INC_OWNER_ = ()=>  cy.get('#SelectedIncidentOwner')
    INC_SUSPECTED_CAUSE_ = ()=>  cy.get('#SelectedSuspectedCause')
    INC_ALERT_BTTN = ()=>   cy.get('#btnShowAlert')
    INC_ALERT_MODAL = () => cy.get('#alertModal > div.modal-body')
    INC_ALERT_SELECT = ()=> cy.get('#matrixControls > table > tbody > tr:nth-child(3) > td:nth-child(3) > input.btn.medium')
    INC_ALERT_BTTN_OK = ()=>   cy.get('#btnAlertLevelMatrixOk')
    INC_LOCATION_BUSH1 = ()=> cy.get('#MapViewModel_Address_FormattedAddress')
    INC_LOCATION_BUSH2 = ()=> cy.get('[value="Zoom to"]')
    INC_000REF_BUSH = ()=>  cy.get('#TripleOReferenceNumber')
    INC_DIRECTION_BUSH = ()=> cy.get('[name="ThreatCurrent"]').click({force: true})
    //copy for OperationTAB_pageViiew feature
    INC_CURRENT_THREAT = ()=> cy.get('[name="ThreatCurrent"]')
    INC_PROPERTY_THREAT = ()=> cy.get('[name="PropertyThreat"]')
    INC_RESOURCES_BUSH = () =>  cy.get('[name="ResourceViewModel.PersonnelResources.NSWRFS"]')
    INC_SAVE_ = ()=>  cy.get('#save',{timeout: 60000})
    INC_ASSERT_BUSH1 = ()=>  cy.get('#sitReps > tbody > tr > td:nth-child(2)')
    INC_ASSERT_BUSH2 = ()=> cy.get('[class="alert alert-info"]')
    RESOURCES_COLS = () => cy.get('table[class="resources flip-scroll table table-bordered table-striped"]>thead>tr>td')
    RESOURCES_ROWS = () => cy.get('table[class="resources flip-scroll table table-bordered table-striped"]>tbody>tr')
    
    ///>>>>>>BUSH ERROR >>>>>>>>>>
    BUSH_STARTDATE_ERR = () => cy.get ('span[class="field-validation-error help-inline error"]>span').eq(2)
    BUSH_FIRETYPE_ERR = () => cy.get ('#fiteTypeValidationMessage')
    BUSH_FIRESIZE_ERR = () => cy.get ('span[class="help-inline error field-validation-valid"]').eq(1)
    BUSH_FIRETENURE_ERR = () => cy.get ('#tenureValidationMessage')
    BUSH_RESPAGENCY_ERR = () => cy.get ('#SelectedLeadAgency-error')
    BUSH_SUSPCAUSE_ERR = () => cy.get ('#SelectedSuspectedCause-error')
    BUSH_ALERTLVL_ERR = () => cy.get ('#newShellIncidentAlertLevel')
    BUSH_CURRENTTHREAT_ERR = () => cy.get ('span[class="field-validation-error help-inline error"]>span').eq(3)
    
    ///>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>////
    /// CALL OUT   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    INCCREATE_CALLOUT1 = ()=> cy.get('#mnuOperation > li.dropdown-submenu.visible-desktop > ul > li:nth-child(5) > a')
    INCCREATE_CALLOUT2 = ()=> cy.get('#map')
    INC_NAME_CALLOUT = ()=>  cy.get('#IncidentName')
    INC_BUSHTYPE_CALLOUT = ()=>  cy.get('div.selectize-input.items.not-full.has-options').eq(0)
    INC_TENURE_CALLOUT1 = ()=>  cy.get('#wizardForm > div:nth-child(1) > div:nth-child(12) > div > div > div.selectize-input.items.not-full.has-options')
    INC_TENURE_CALLOUT2 = ()=> cy.get('body > div:nth-child(82) > div > div:nth-child(6)')
    INC_TENURE_CALLOUT3 = ()=> cy.get('#wizardForm > div:nth-child(1) > div:nth-child(13) > label')
    INC_ACTIONSTAKEN_CALLOUT = ()=>     cy.get('#SelectedActionTaken')
    INC_SUSPECTEDCAUSE_CALLOUT = ()=>     cy.get('#SelectedSuspectedCause')
    INC_LOCATION_CALLOUT1 = ()=> cy.get('#MapViewModel_Address_FormattedAddress')
    INC_LOCATION_CALLOUT2 = ()=>   cy.get('[value="Zoom to"]')
    INC_RFSCALL_CALLOUT = ()=>   cy.get('[name="RFSReceivedDateTime"]')
    INC_RESOURCES_CALLOUT = () => cy.get('table[class="resources flip-scroll table table-bordered table-striped"]')
    INC_STOP_MESSAGE_CALLOUT = ()=>   cy.get('[name="StopMessageDateTime"]')
    INC_SAVE_CALLOUT = ()=>  cy.get('#wizardForm > div.form-actions > div > div > button', {timeout: 60000})
    INC_ASSERT_CALLOUT3 = ()=> cy.get ('#sitReps > tbody > tr > td:nth-child(2)')
    INCIDENTDETAILS = ()=> cy.get('[href="#incidentSummary"]')
    INC_ASSERT_CALLOUT2 = ()=> cy.get('#incidentSummaryDetails > div > div > div:nth-child(1) > div > div > dl > dd:nth-child(4)')
    
    //>>>>>CALL OUT>>>>>>>
    CALLOUT_FIRETYPE_ERR = () => cy.get ('#fireValidationMessage')
    CALLOUT_FIRETENURE_ERR = () => cy.get ('#wizardForm>div>div:nth-child(12)>div>span.field-validation-error.help-inline.error')
    CALLOUT_ACTION_ERR = () => cy.get ('#wizardForm>div>div:nth-child(15)>div>span.field-validation-error.help-inline.error')
    CALLOUT_RFSCALL_ERR = () => cy.get ('span[class="field-validation-error help-inline error"]>span').eq(3)
    CALLOUT_STOP_MESSAGE_ERR = () => cy.get ('span[class="field-validation-error help-inline error"]>span').eq(4)
    

    
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>SET TO OUT >>>>>>>>>>>>>>>>>>>>>>>>>
    
    
    
    
    //INC_ADDSITREP_SETTOOUT = () =>  cy.get('#article > div:nth-child(6) > div.pull-right > a:nth-child(1)')
    INC_INCCONTROLLER_ADDSR_SETTOOUT = ()=>   cy.get('#frmSitRep > div.control-group > div > ul > li:nth-child(6) > a')
    INC_SETTOOUT_ICON = ()=>  cy.get('#setToOut')
    INC_EDITINCIDENT_SETTOOUT = ()=>  cy.get('#editIncident[class="btn next"]')
    INC_STOPMESSAGE_DATE = ()=> cy.get('[name="StopMessageDateTime"][type="text"]')
    INC_SAVE_EDITINCIDENT = ()=> cy.get('#save[type="submit"][class="btn next"]',{timeout: 60000})
    INC_SETTOOUT_CONFIRMBOX = ()=> cy.get('#setToOut_ConfirmModal[class="modal hide fade in"]')
    INC_SETTOUT_YES = ()=> cy.get('[name="btn_ConfirmSetToOut"][value="Yes"]')
    INC_SUCCESS_SETTOIUT = ()=> cy.get('#article > div.alert.alert-success')
    INC_WARNING_SETTOIUT = ()=> cy.get('#article > div.alert.alert-error')
    
    
    
    
    ///>>>>>>>>>>>>>>>>>>>>>>>>>> rfsdatetime >>>>>>>>>>>>>>>>>>>>>>>>>>
    
    INC_EDITINCIDENTBTTN_SETOOUT = ()=> cy.get('#article > div.well.clearfix > div > a:nth-child(2)')
    INC_RFSDATETIME_REASONFORCHANGE = ()=> cy.get('#RFSReceivedDateTimeOverrideReason')
    INC_CANNOTBE_CHANGEALERT = ()=> cy.get('[class="alert alert-info"]')
    INC_RFSDATETIME_SUCCESSALERT = ()=> cy.get('#article > div.accordion > div > div.accordion-heading > a')
    
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>> INCIDENT SEARCH>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    
    INC_EDITINCIDENTBTTN = ()=> cy.get('#article > div.well.clearfix > div > a').contains('Edit')
    CURRENT_INCIDENT_SEARCH = ()=>  cy.get('#mnuOperation > li:nth-child(10) > a')
    SEARCH_BTTN = ()=>  cy.get('#search[value="Search"]')
    INCIDENT_EVENT_LIST_ALERT = ()=>  cy.get('#article > div.page-header > h1')
    INCIDENT_SEARCH1 = ()=> cy.get('tbody > tr:nth-child(1) > td:nth-child(5) > a')
    INCIDENT_SEARCH2 = ()=> cy.get('#article > div.accordion > div.accordion-group')
    INCIDENT_SEARCH_TYPE =()=> cy.get('#DataTables_Table_0_filter > label > input[type=search]')
    INCIDENT_NORESULTLGA =()=> cy.get('#DataTables_Table_0')
    INCIDENT_SEARCH_SITRSORTING = ()=> cy.get('#DataTables_Table_0_wrapper > div.dataTables_scroll > div.dataTables_scrollHead > div > table > thead > tr:nth-child(1) > th:nth-child(9)')
    INCIDENT_ADDSITREP =()=> cy.get('div[id="sitReps_wrapper"]')
    INC_SITREPVIEWBTTN = ()=> cy.get('#sitReps > tbody > tr > td:nth-child(3)')
    INC_SITREPPDFBTTN = ()=> cy.get('#sitReps > tbody > tr > td:nth-child(4)')
    LOC_SEARCH=()=>cy.get('div[id="DataTables_Table_0_wrapper"]>div:nth-child(4)>div>div>table>thead>tr:nth-child(2)>th:nth-child(4)>input')

    //>>>>>>>>>>>>>>>>>>>>>>>>>>> Merge Incidents >>>>>>>>>>>>>>>>>>>>>>>
    
    INC_MERGEINCIDENTSTAB = ()=> cy.get('#mnuOperation > li.dropdown-submenu.visible-desktop > ul > li:nth-child(6) > a')
    INC_SELECT_LGA = ()=> cy.get('#lgaSelector')
    INC_INCIDENTLIST_TABLE = ()=> cy.get('#incidentListTable')
    INC_INCIDENTLIST_TAB_COLS = ()=> cy.get('div.dataTables_scrollHeadInner>table>thead>tr>th')

    // mergenum_Out = '21092752874'
    // mergenum_planned = '21092752872'
    // mergenum_outamalgamated = '21092752877'

    INC_REFNO_SEARCH =()=> cy.get('#incidentListTable_filter > label > input[type=search]')
    INC_NORESULTFOUND = ()=> cy.get('#incidentListTable > tbody > tr > td')
    
    INC_SEARCHMERGE =()=> cy.get('#incidentListTable_filter > label > input[type=search]')
    INC_SELECTED1 = ()=> cy.get('#incidentListTable > tbody>tr:nth-child(1)>td:nth-child(1)>input')
    ATIFINC_SELECTED1 = ()=> cy.get('#incidentListTable > tbody > tr:nth-child(1) > td.center.sorting_1')
    INC_SELECTED2 = ()=> cy.get('#incidentListTable > tbody>tr>td:nth-child(1)>input').last()
    ATIFINC_SELECTED2 = ()=> cy.get('#incidentListTable > tbody > tr:nth-child(2) > td.center.sorting_1')
    INC_SUBMITMERGE = ()=> cy.get('#mergeIncidentsBtn[type="submit"]')
    // INC_SELECTEDPRIMARY = ()=> cy.get('#primaryIncidentSelection > tbody > tr.odd > td.sorting_1 > input[type=checkbox]')
    INC_MASTER = ()=> cy.get('#incidentListTable>tbody>tr>td>span[class="badge badge-important"]').siblings('#IncidentId').eq(0)
    INC_NON_MASTER = ()=> cy.get('#incidentListTable>tbody>tr>td:not(:has(>span))>input[id = "IncidentId"]').eq(0)
    BTN_INC_MERGE = ()=> cy.get('button[id="mergeIncidentsBtn"]')
    // INC_SELECTEDPRIMARY = ()=> cy.get('#primaryIncidentSelection > tbody > tr.odd > td.sorting_1 > input[type=checkbox]')
    INC_SELECTEDPRIMARY = ()=>cy.get('div[class="dataTables_scroll"]>div:nth-child(2)>table>tbody>tr>td>input[type=checkbox]')
    incidnet_sel = () =>cy.get('div[class="dataTables_scroll"]>div:nth-child(2)>table>tbody')
    
    
    //copy merge incidents number
    INC_PRIMARYMERGENUM = ()=> cy.get('tbody > tr:nth-child(1) > td:nth-child(5) > span > a')
    INC_SECONDARYMERGENUM = ()=> cy.get('tbody > tr:nth-child(2) > td:nth-child(5) > span > a')
        
    INC_MERGEREASON = ()=> cy.get('#MergeReason')
    INC_ASSERTMERGEDNUMBER = ()=> cy.get('#incidentSummaryDetails > div > div > div:nth-child(3) > div > div > dl > dd:nth-child(14) > p > a')
    INC_SECONDARYMERGEDNUMBER = ()=> cy.get('#primaryIncidentSelection > tbody > tr.even > td.hidden-phone > span > a')

    //>>>>Merge ERR>>>>>>>
    MERGE_ERR = ()=> cy.get('#validationMessage')

    //>>>>>>>>>>>>>>>>>>>>>>>>>> Change Alert level>>>>>>>>>>>>>>>>>>>>

    INC_SRACTIONTAB = ()=> cy.get('#frmSitRep > div.control-group > div > ul > li:nth-child(4) > a') 
    INC_SETALERTLEVELMESSAGE = ()=> cy.get('#alertModal > div.modal-body.custorm-alertmodel > div.well.alertlevel-message-setting')
    INC_ALRTLVLDOWNGRADEBTTN = ()=> cy.get('#waDgA')
    INC_REGRADEDLEVEL = ()=> cy.get('#AlertLevelViewModel_NewAlertLevelId')
    INC_ALRTCHANGERSN = ()=> cy.get('#AlertLevelViewModel_RegradeReason')
    INC_ALRTLVLCHNGESUCCESS = ()=> cy.get('#newShellIncidentAlertLevel > p')
    INC_SITUPALRTCHNGSUCCESS = ()=> cy.get('#newSitRepAlertLevel > p')
    
    INC_SITUPCURRENTLOCATION = ()=> cy.get('#fieldIncidentLocationAccordion > div:nth-child(1)')
    INC_SITUPHEADING = ()=> cy.get('#fieldIncidentLocationAccordion > div:nth-child(2)')
    INC_SITUPPOTENTIALTHREAT = ()=> cy.get('#fieldIncidentLocationAccordion > div:nth-child(3)')
    INC_SITUPTHREATINHOURS = ()=> cy.get('#ThreatPotential2To6Hours')
    INC_SITUPOTHERINFORMATION = ()=> cy.get('#fieldIncidentLocationAccordion > div:nth-child(5)')

//>>>>>>>>>>>>>>>>>>>>>> change incident type >>>>>>>>>>>>>>>>

    ADVANCE_INCIDENTSEARCH = ()=> cy.get('#mnuOperation > li:nth-child(11) > a') 
    INC_ADVANCESEARCH_REF = ()=> cy.get('#Reference')
    INC_ADVANCESEARCH_NAME = ()=> cy.get('#IncidentName')
    INC_ADVANCESEARCH_BTTN = ()=> cy.get('#article > form > div.tab-content > div.pull-right > button')
    INC_REFNUMBER = ()=> cy.get('#advanceSearch > tbody > tr:nth-child(1) > td:nth-child(5) > a')
    INC_TYPECHANGEALRTMSSG = ()=> cy.get('#UpdateIncidentForm > div.row-fluid > div')
 
    //>>>>>>>>>>>>> SITREP EVENT  >>>>>>>>>>>>>>>>

    INC_SITREP_ALERTMSSG = ()=> cy.get('#opMessage > p > span')
    INC_SITREPMAINTAB = ()=> cy.get('#frmSitRep > div.control-group > div > ul > li:nth-child(1) > a')



    //>>>>>>>>>EDIT Current Map >>>>>>>>>>>>>
    INC_ADVANCESEARCHNAVTAB = ()=> cy.get('form > ul') 
    INC_NOAUTHORISEMAP = ()=> cy.get('[id="optionFilterNotMapped"]')
    INCIDENT_SEARCH = ()=> cy.get('[type="submit"]')
    INC_EIDTCURRENTMAP_BTTN = ()=> cy.get('#article > div:nth-child(8) > div.row-fluid > div > a:nth-child(1)')
    INC_EDITCURRENTMAP_ = ()=>  cy.get('#article')
    INC_EDITOR_BTTNINMAP = ()=>  cy.get('#showEditorButton')
    INC_MAPWIDGET = ()=> cy.get('[id="dijit_layout_ContentPane_1"]')
    INC_SAFETYTAG = ()=>  cy.get('#tpick-surface-3')
    INC_EMERGENCYALERT = ()=> cy.get('[id="tpick-surface-73"]')
    INC_MAP_LAYERS = ()=>  cy.get('[id="mapDiv_gc"]')
    INC_LABELOK = ()=> cy.get('#dijit_form_Button_7_label')
    INC_AUTHORESEMAP_BTTN = ()=> cy.get('#authoriseMapButton')
    INC_AUTHORESEMAP_BTTN2 = ()=> cy.get('#Map_Summary')
    INC_AUTHORESEMAP_BTTN3 = ()=> cy.get('#Map_AuthoriserCredentials_UserName')
    INC_AUTHORESEMAP_BTTN4 = ()=> cy.get('#Map_AuthoriserCredentials_Password')
    INC_AUTHORESEMAP_BTTN5 =()=> cy.get('#authoriseForm > div.modal-footer > button:nth-child(1)')
    INC_AUTHORISEMAPSUCCESS1 = ()=> cy.get('#article > div.alert.alert-success')
    INC_AUTHORISEMAPSUCCESS2 = ()=> cy.get('div[id="maps_wrapper"]  div[class="dataTables_scrollBody"]')

    //>>>>>>>>>>>>>>>>> general locators >>>>>>>>>>>>>>>>>

    INC_INCIDENTLIST_TESTUSER= ()=> cy.get('#mnuOperation > li:nth-child(4) > a')
    

    //>>>>>>>>>>>Attach document >>>>>>>>>>>>>>>>>

    INC_ATTACHDOCUMENT = ()=> cy.get('#attachDocument')
    INC_ATTACHDOCUMENTMODAL = ()=> cy.get ('#attachDocumentModal')
    INC_ADDFILES = ()=> cy.get('div.row-fluid.fileupload-buttonbar > div.span7 > span.btn.btn-primary.fileinput-button > input[type=file]')
    INC_ATTACHFILENAMEBOX = ()=> cy.get('table[role="presentation"] > tbody[class="files"] > tr > td:nth-child(2) > p')
    INC_STARTUPLOAD = ()=> cy.get('div.row-fluid.fileupload-buttonbar > div.spxan7 > button[type="submit"]')
    INC_UPLOADALERT = ()=> cy.get('#uploadStatus[class="alert alert-error"]')
    INC_UPLOADDESCRIPTION = ()=> cy.get('#fileUploadMetaData[type="text"]')
    INC_UPLOADCLOSE = ()=> cy.get('#btnCloseRefresh[class="btn"]')
    INC_UPLOADASSERT1 = ()=> cy.get('#AttachmentForm > #docs_wrapper > div[class="dataTables_scroll"] > div[class="dataTables_scrollBody"] > table[id="docs"] > tbody > tr > td:nth-child(1)')
    INC_UPLOADASSERT2 = ()=> cy.get('#AttachmentForm > #docs_wrapper > div[class="dataTables_scroll"] > div[class="dataTables_scrollBody"] > table[id="docs"] > tbody > tr > td:nth-child(2)')
    INC_UPLOADASSERT3 = ()=> cy.get('#AttachmentForm > #docs_wrapper > div[class="dataTables_scroll"] > div[class="dataTables_scrollBody"] > table[id="docs"] > tbody > tr > td:nth-child(3)')


    //ATTACH IAP 
    INC_ADDIAPBTTN = ()=> cy.get('#addIAP')
    INC_ADDIAPFORM = ()=> cy.get('#wizardForm')
    INC_IAPNAME = ()=> cy.get('#Name[type="text"]')
    INC_IAPSTARTDATETIME = ()=> cy.get('input[name="StartDateTime"][type="text"]')
    INC_IAPENDDATETIME = ()=> cy.get('input[name="EndDateTime"][type="text"]')
    INC_IAPSAVE = ()=> cy.get ('#btnSaveIAP')
    
    INC_AUTHORISEIAP = ()=> cy.get('#btnAuthorizeIAP')
    INC_IAPAUTHORISEERROR = ()=> cy.get('#article > div.alert.alert-error')
    INC_IAPPREPARE = ()=> cy.get('#PreparaedByName')
    INC_IAPSITUATIONTAB = ()=> cy.get('#article > ul > li:nth-child(2) > a')
    INC_CURRENSITUATIONTAB = ()=> cy.get('#situation > div.clearfix > div:nth-child(1) > a')
    INC_IAPCURRENTSITUATION = ()=>cy.get('#Tab_CurrentSituation_NewEntry')
    INC_CURRENTSITADDNEW = ()=> cy.get('div[id="currentSituation"] div[class="pull-right"] > button')
    INC_SITUATIONSELECTEDCATEGORY = ()=> cy.get('#Tab_CurrentSituation_SelectedCategory')
    INC_CURRENTSITUATIONEDITENTRY = ()=> cy.get('#Tab_CurrentSituation_EditEntry')
    INC_SAVEENTRYCURRENTSITUATION = ()=> cy.get('#myModal_CurrentSituation > div > div > div.modal-footer > div > button.btn.pull-right.saveItemEntry.CurrentSituation')
    INC_IAPCURRENTSITUATIONASSERT1 = ()=> cy.get('div[id="currentSituation"] div[class="control-group"] > div[class="dataTables_wrapper form-inline no-footer"] > div[class="dataTables_scroll"] > div[class="dataTables_scrollBody"] > table > tbody > tr > td:nth-child(1) > span')
    INC_IAPCURRENTSITUATIONASSERT2 = ()=> cy.get(' div[id="currentSituation"] div[class="control-group"] > div[class="dataTables_wrapper form-inline no-footer"] > div[class="dataTables_scroll"] > div[class="dataTables_scrollBody"] > table > tbody > tr > td > label')
    INC_IAPCURRENTWEATHERTAB = ()=> cy.get('#situation > div.clearfix > div:nth-child(5) > a')
    INC_CURRENTWEATHERNEWENTRY = ()=> cy.get('#Tab_CurrentWeatherSituation_NewEntry')
    INC_IAPWEATHERLOC = ()=> cy.get('#CurrentWeatherSituation_LocationOfWeatherReading')
    INC_IAPWEATHERTAKENDATE = ()=> cy.get('input[name="CurrentWeatherSituation.TakenDateTime"][type="text"]')
    INC_IAPWEATHERSAVE = ()=> cy.get('#CurrentWeatherSituationForm > div.pull-right > button')
    INC_WEATHERSAVESUCCESS = ()=> cy.get('#Tab_CurrentWeatherSituation_NewEntry_DetailedIAPSaveStatus')
    INC_SAVENOTIFICATIONMESSAGE = ()=> cy.get('#bottom_notification_message')
    INC_IAPPREPARERTAB = ()=> cy.get('#fieldIAP > div:nth-child(18) > a')
    INC_IAPAUTHORISE1 = ()=> cy.get('#AuthoriserCredentials_UserName')
    INC_IAPAUTHORISE2 = ()=> cy.get('#AuthoriserCredentials_Password')
    INC_IAPAUTHORISEOK = ()=> cy.get('#iap_AuthoriseCredentials > form > div.modal-footer > input')
    INC_IAPAUTHORISESUCCESS = ()=> cy.get('#article > div.alert.alert-success')

    //Edit incident from bushfire to non bushfire

    INC_EDITINCTONONBUSH = ()=> cy.get('#article > div.well.clearfix > div > a:nth-child(1)')
    INC_CHANGEINCIDENTTYPE = ()=> cy.get('#UpdateIncidentForm > div:nth-child(18) > div > div > div > label')
    INC_CHANGEINCIDENTREASON = ()=> cy.get('#NewIncidentTypeChangeReason')
    INC_CHANGEINCWARNALERT = ()=> cy.get('#newIncidentTypeContainer > div:nth-child(1) > div')
    INC_CHANGEINCINFOALERT = ()=> cy.get('#newIncidentTypeContainer > div:nth-child(2) > div')
    INC_CONFIRMTYPECHANGEDALRT = ()=> cy.get('#article > div:nth-child(4) > div')
    INC_SITREPBOX1 = ()=> cy.get('#sitReps_wrapper > div.dataTables_scroll > div.dataTables_scrollBody > table> tbody tr:nth-child(1)>td:nth-child(2)')
    INC_SITREPBOX2 = ()=> cy.get('#sitReps_wrapper > div.dataTables_scroll > div.dataTables_scrollBody > table> tbody tr:nth-child(2)>td:nth-child(2)')
    
    //copy Incident number 
    
    INC_COPYNUMBER = ()=> cy.get('#incidentSummaryDetails > div > div > div:nth-child(1) > div > div > dl > dd:nth-child(2) > a')
    INC_000REFCOPY = ()=> cy.get('#incidentSummaryDetails > div > div > div:nth-child(3) > div > div > dl > dd:nth-child(12)')     
    

    //Delete Incident

    INC_DELETEBTTN = ()=> cy.get('#btnDeleteIncident')
    INC_DELETEOK = ()=> cy.get('#btnDelete')
    INC_DELETERSNALERT = ()=> cy.get('#DeleteReason-error')
    INC_DELETEREASON = ()=> cy.get('#DeleteReason')
    INC_DELETESUCCESS = ()=> cy.get('#article > div.alert.alert-success > strong')

    //Delete no available
    
    INC_DELETENOTAVAILABE = ()=> cy.get('#article > div.page-header > h1')
    
    //SECTION 44 BTTN
    
    INC_SEC44BTTN = ()=> cy.get('#article > div.page-header > div > a')

    //ACT Rural Fire Service

    INC_DETAILSOWNER = ()=> cy.get('#incidentSummaryDetails > div > div > div:nth-child(2) > div > div > dl > dd:nth-child(8)')
    INC_DETAILSLGA = ()=> cy.get ('#incidentSummaryDetails > div > div > div:nth-child(1) > div > div > dl > dd:nth-child(10)')
    INC_DETAILSREGION = ()=> cy.get('#incidentSummaryDetails > div > div > div:nth-child(1) > div > div > dl > dd:nth-child(12)')
    INC_STRPCONTROLCNTR = ()=> cy.get('#SelectedControlCentre')
    INC_STRPCONTROLLERAGENCY = ()=> cy.get('#SelectedControllerAgency') 

    //change local number 

    INC_LOCALNUMCADPAGE = ()=> cy.get('#LocalIncidentNumber')
    INC_DETAILSPAGEERRORALET = ()=> cy.get('[class="alert alert-error"]')
    INC_LOCALNUMCHANGERSN = ()=> cy.get('#LocalIncidentNumberChangeReason')
    INC_LOCALNUMONDETAILSTAB = ()=> cy.get('#incidentSummaryDetails > div > div > div:nth-child(2) > div > div > dl > dd:nth-child(14)')

    // ICONSUP-T428 (1.0) BR-STRP-14 SitRep Pending Incidents
    // Create Full Incident Page 
    ICON_LANDING_PAGE = () => cy.get('a[href="/"]').eq(0) 
    VISIT_CREATE_FULL_INCIDENT_PAGE = () => cy.visit(`https://${Cypress.env('ICON_HOST_URL')}${'/FireIncident/FireIncident/NewFullIncident'}`,{failOnStatusCode: false}) 
    // assert sitrep pending incident exists in icon landing page map
    // the css class name of the marker has incident Id from URL
    // we will use this to assert on the map
    SITREP_PENDING_INC_MARKER_ICON_MAP = (incId:any) => cy.get(`.leaflet-pane>.severity-pending-icon.incID-${incId}`)
    SITREP_NOTAPP_INC_MARKER_ICON_MAP = (incId:any) => cy.get(`.leaflet-pane>.severity-notApplicable-icon.incID-${incId}`)
    INC_DET_POPUP = () => cy.get('.leaflet-popup-content-wrapper')
    INC_DET_POPUP_ITEMS = () => cy.get('.leaflet-popup-content-wrapper>div>dl>dd')
    BTN_INC_DET_POPUP_AUTH = () => cy.get('.leaflet-popup-content-wrapper>div>a:nth-child(3)')
    inc_Name = () =>cy.get('div[class="leaflet-popup  leaflet-zoom-animated"]:nth-child(1) div:nth-child(1) dl:nth-child(1) dd:nth-child(1)')
    lga_Name=()=>cy.get('div[class="leaflet-popup  leaflet-zoom-animated"]:nth-child(1) div:nth-child(1) dl:nth-child(1) dd:nth-child(4)')
    status_Name=()=>cy.get('div[class="leaflet-popup  leaflet-zoom-animated"]:nth-child(1) div:nth-child(1) dl:nth-child(1) dd:nth-child(6)')


    //**********Authorise pending sitrep**********/
    REF_SITREP = () => cy.get('#article>div>h1>small')
    BTN_PENDING_SIT_AUTH = () => cy.get('#btnAuthorize')
    PENDING_SIT_DET = () => cy.get('form[action="/Incidents/SitReps/Authorize"]>div>dl>dd')

    /******************Pending Incident Page****************** */
    TXT_SRCH_TAB_INCID = () => cy.get('#sitRepTable_wrapper>div:nth-child(2)>div:nth-child(1)>div>table>thead>tr:nth-child(2)>th:nth-child(1)>input')
    PENDING_TAB_ROW1 = () => cy.get('#sitRepTable>tbody>tr:nth-child(1)>td:nth-child(1)')


    EDIT_SITREP_PAGE_SAVE_BUTTON = () => cy.get('#btnSave')


    //>>>>>>>>>>>>>>>>>>>>>>>>>>> Brigade Reports >>>>>>>>>>>>>>>>>>>>>>>

    INC_BRIGADEREPORTTAB = ()=> cy.get('#mnuOperation > li.dropdown-submenu.visible-desktop > ul > li:nth-child(7) > a')
    INC_INCIDENTSEARCH = ()=> cy.get('#txtBxIncidentRef')
    INC_SEARCH_BTN = ()=> cy.get('#lnkBtnSearch')

    //>>>>>>>>>>>>>>>>>>>>>>>>>>> OperationsLog >>>>>>>>>>>>>>>>>>>>>>>

    OPERATIONSLOG_TAB = ()=> cy.get('#mnuOperation > li:nth-child(15) > a')

    //>>>>>>>>>>>>>>>>>>>>>>>>>>> RART >>>>>>>>>>>>>>>>>>>>>>>

    RART_TAB = ()=> cy.get('#mnuOperation > li:nth-child(16) > a')

    //>>>>>>>>>>>>>>>>>>>>>>>>>>> DOCTRINE >>>>>>>>>>>>>>>>>>>>>>>

    DOCTRINE_TAB = ()=> cy.get('#mnuOperation > li:nth-child(17) > a')

    //>>>>>>>>>>>>>>>>>>>>>>>>>>> DISPATCH >>>>>>>>>>>>>>>>>>>>>>>

    DISPATCH_TAB = ()=> cy.get('#mnuOperation > li:nth-child(12) > a')

    //>>>>>>>>>>>>>>>>>>>>>>>>>>> ALERT >>>>>>>>>>>>>>>>>>>>>>>

    ALERT_TOOLTIP = ()=> cy.get('.well.alertlevel-message-setting')
    ALERT_TAB_COLS = ()=> cy.get('table[class="alertLevel flip-scroll  table table-bordered table-striped"]>thead>tr>th')
    ALERT_TAB_ROWS = ()=> cy.get('table[class="alertLevel flip-scroll  table table-bordered table-striped"]>tbody>tr')
    ALERT_LEVEL_LABEL = ()=> cy.get('#lblAlertLevel')
    ALERT_WA_BTN = ()=> cy.get('#waButtons>input')
    ALERT_EW_BTN = ()=> cy.get('#ewButtons>input')
    ALERT_A_BTN = ()=> cy.get('#aButtons>input')
    ALERT_REGRADE_LABEL = ()=> cy.get('#regradeReasonControls>div>span')
    ALERT_REGRADE_RESN = ()=> cy.get('#AlertLevelViewModel_RegradeReason')
    ALERT_CLEAR= ()=> cy.get('#btnClearSelection') 

    //>>>>>>>>>>>>>>>>>>>>>>>>>>> INCIDENT DETAILS >>>>>>>>>>>>>>>>>>>>>>>
    INC_DET = ()=> cy.get('.accordion-toggle>strong')
    INC_xDET_1COL = ()=> cy.get('#incidentSummaryDetails>div>div>div:nth-child(1)>div>div>dl>dd')
    INC_DET_2COL = ()=> cy.get('#incidentSummaryDetails>div>div>div:nth-child(2)>div>div>dl>dd')
    INC_DET_3COL = ()=> cy.get('#incidentSummaryDetails>div>div>div:nth-child(3)>div>div>dl>dd')
    INC_SITREP_DT = ()=> cy.get('#sitReps>tbody>tr>td:nth-child(1)') 
    
    
    INC_ADD_SITREP = ()=> cy.get('a[class="btn"]').contains('Add SitRep')
    INC_NAME_HEAD = ()=> cy.get('h1>small')
}

    export default INCIDENTLOCATORS





