Feature: To test SERVER patch features ::  
        INCIDENT CREATE > INDCIDENT LISTING & SEARCH > BIRS > BIRS OUTSTANDING REPORTS > FDR > PFU > COP > BRS > ONERFS > FIRE & Weather


    Scenario: WMP-T45/T25 ICON LANDING PAGE

        Given I open ICON page
        And I can see dashboard
        Then I verify with MAP VIEW AREAS


    Scenario: ICONSUP-T399 (1.0) BR-INC-3 View Incident or Event

        Given I open ICON webpage
        And  I can see dashboard
        And I expand breadcrumb_menu & submenu "Operations > Current Incident Search"
        And I can see Incident list
        And I verified one of the incidents


    Scenario: WMP-T47 Validate ICON Operations - Incident Listing

        Given I open ICON page
        And I can see dashboard
        Then I verify Operations - Incident Listing

        

    Scenario: WMP-T48 Validate ICON Knowledge - Incident and Ops log

        Given I open ICON page
        And I can see dashboard
        And I expand breadcrumb_menu & submenu "Knowledge > Incident and Ops Log"
        Then I verify with Incident and ops page and select a log



    Scenario: ICONSUP-T514 (1.0) Validate user is able to Generate BIRS Outstanding report


        Given I open ICON webpage - user
        And I can see dashboard
        And I open knowledge
        And I expand Reports
        And I click on Joint Agency
        And I click on Birs Outstanding Report
        And I Validate three fields and search for the results
        And I export the Result to verify Twelve Fields with the data



    Scenario: 21- Admin can search user and validate number of same users
        Given I have opened web application
        And I can see dashboard
        When I expand Admin menu
        And I expand Administration menu
        And I Select User Management link
        Then I Verify User Search Page controls
        And I can look for "Paul"
        And I verify total numbers of users



    Scenario: BR-ADMIN-11 ESCAD ICON Data Display
        Given Escad-Icon Data Display page is displayed
        When the user searches by incident start from past 3 months
        Then incident search results are displayed


        
    # Scenario:  FDR PUF Validation

    #    Given I open ICON webpage - user
    #    And I can see dashboard
    #    When I open Public Information Tab
    #    And I select Fire Danger Rating
    #    And I make changes in FDR ratings for tomorrow and today
    #    And I Save the details
    #    And I open XML file



    #Scenario: Make FDR back to normal 

    #   Given I open ICON webpage
    #   And I can see dashboard
    #   When I open Public Information Tab
    #   And I select Fire Danger Rating
    #   And I make FDR back to normal


    # Scenario: Back to Normal FDR complete
    #     Given I open ICON webpage
    #     And I can see dashboard
    #     When I open Public Information Tab
    #     And I select Fire Danger Rating
    #     And I set FDR TOBAN to normal
    #     And I set FDR selectors back to normal
    #     And I Save the details 


        
        


    Scenario: WMP-T49/T24/T50 Validate COP - Initial presentation
    ICONSUP-T973 (1.0) Verify if the COP page is displayed.
    ICONSUP-T975 (1.0) Verify if the Alert Status page is displayed.

        Given I open COP page
        And I verify Map Areas
        And I Verify Map coordinates tab
        And I verify different layers on the Map
        Then Verify AlertStatus page is properly displayed




    Scenario: ICONSUP-T974 (1.0) Verify if the Fire Weather page is displayed

        Given I open fire weather page
        And I verify the page is displayed



    Scenario: WMP-T27 Validate ONERFS for Volunteers

        Given I open ONERFS webpage 
        And I can see For Staff Dropdown
        And I can see FOR VOLUNTEERS Dropdown
        Then I verify quick links 


    Scenario: Update FDR
        Given I open ICON webpage - user
        And I can see dashboard
        When I open Public Information Tab
        And I select Fire Danger Rating
        Then I reset the TOBAN for first 5 districts
        And I make changes in FDR ratings for top5 District
        And I update TOBANs for top 5 district
        And I Save the details 
        Then I verify the details are saved


    Scenario: WMP-T46/35 Validate BIRS for Volunteers

        Given I open BRS for volunteers page 
        And I assert for page title
        And I will search for current incidents on BRSVOL

        And I land into current incidents page




    Scenario Outline: Create Full incident[Bushfire type]

		||	# ICONSUP-T424 (1.0) BR-STRP-10 Full Incident SitRep/ICONSUP-T423 (1.0) BR-STRP-9 Automatically triggered SitRep
			# ICONSUP-T405 (1.0) BR-INC-14 [Add/Edit SitUp/SitRep] / No BRIGADE REPORTING TAB 
			# ICONSUP-T642 (1.0) Validate 'Fire(& other incidents/events)' validation messages are displayed correctly and tab is highlighted 
			# ICONSUP-T604 (1.0) Validate Successfully saved message is displayed when user save information on SitRep Fire (&other Incidents/events)
			# ICONSUP-T952 (1.0) verify Alert level new matrix and alert level list page/ BR-STRP0-3
			# ICONSUP-T424
			# ICONSUP-T1421 (1.0) ICONSUP-3677 : Default values of Sitrep created through "ICON"||

		Given I open ICON webpage
		And I can see dashboard
		And I expand breadcrumb_menu & submenu "Operations > Incidents" "Create Full Incident"
		And I can see the page header "Full Incident Details"
		And if I have the test data for "Full Incident"
		And I enter "<inc_name>" "<LGA>" "<incident_loc>" "<sensitive>" "<master>" "<RART>" "<Triple0_ref>" "<reason_noTriple0_ref>" "<local_inc_id>" "<triple0_RCVDCall>" "<Rfs_RCVDCall>"
		And I select the type "<inc_type>" and input the value "<type_value>"
		And I take a pic of the page "FULL INCIDENT CREATE"
		When I click "Save"
		Then I should find validate mssg "Info! No SitRep Authorised"
		Then I click "Incident Details"
		Then I should find "Reference No." is populated
		Then I should find "Universal Id" is populated

	Examples:
					 
		|inc_name|LGA|incident_loc|sensitive|master|RART|Triple0_ref|reason_noTriple0_ref|inc_type| type_value|local_inc_id|triple0_RCVDCall|Rfs_RCVDCall|
		||||||||||||||