Feature: Create Birs Report

   Background: New Brigade Report Inaitiate
        Given I open ICON webpage
		And I can see dashboard
		And I expand breadcrumb_menu & submenu "Operations > Current Incident Search"
		And I can see the page header "Incident Search"
        And I enter "<incident_no>" from "Create Incident-Bushfire_shell"
        Then I should find validate mssg "Showing 1 to 1 of 1 entries"
        When I click 'result-Incident_no'
        And I click "Incident Details"
        Then within "Incident Details", I should find the attribute "Reference No." with "<incident_no>" value
        When I click "Brigade Reporting"
		And I can see the page header "Brigade Reporting"
        
        
        # And I expand dropdown for ""  
        # And I expand the dropdown and select "Volunteer Report"

        #===VALIDATE THE CLEAR BIRS AND ERROR CHECK FUNCTIONALITY===
        # And I can the empty table or take action to clear the reports
        # When I expand the dropdown and select "Validate & Complete"
        # And I click "Validate and Save"
        # Then I should find alert mssg "Primary brigade: details must be entered.n/Ignition: details must be entered.n/Fire fighting: details must be entered."
        # And I click "No RFS Presence"
        # Then I should find alert mssg "Incident information now marked as incomplete."
        # And I click "Undo Complete"
        # And I click "Clear BIR"
        # And I click "OK"
        # Then I should find alert mssg "All brigade reporting information deleted"
        #============================================================



    
    Scenario Outline: Igninition Details
        Given I can see the page header "Brigade Reporting"
        And I expand dropdown for "Primary brigade"
        When I click "ADD Brigade"
        Then I update "<Brigade Name>"
        When I click "Save"
        Then I can seee the "Brigade Details"
        When I click "ADD Appliances"








    