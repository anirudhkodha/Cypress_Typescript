Feature: EDIT INCIDENTS


#***********************************************************************************************
# 
# ***********************<< NOTES FOR EDIT INCIDENTS >>*****************************************
# Info! The incident type with Status OUT/OutAmalgamated/Planned/Withdrawn can not be changed.!!
# TestCases With TAG "OUT/OutAmalgamated/Planned/Withdrawn" Will ChecK the Avobe Rule
#***********************************************************************************************



    # Background: STEPS TO REPRODUCE ON EDIT INCIDENT Scenarios
    #     Given I open ICON webpage
	# 	And I can see dashboard
	# 	And I expand breadcrumb_menu & submenu "Operations > Advanced Incident Search"
	# 	And I can see the page header "Incident / Event Search"
    #     And if I have the test data for "Search Incident"
       
        # When I click 'result-Incident_no'
        # And I click "Incident Details"
        # Then within "Incident Details", I should find the attribute "Reference No." with "<incident_no>" value


    @OUT/OutAmalgamated/Planned/Withdrawn
    Scenario Outline: TO EDIT ANY CREATED INCIDENT
        Given I open ICON webpage
		And I can see dashboard
		And I expand breadcrumb_menu & submenu "Operations > Advanced Incident Search"
		And I can see the page header "Incident / Event Search"
        And if I have the test data for "<test_data_is_for>"
        When I search and open latest result from current incident with "<filterStrings>" and the "<filterValues>" of the key if I have not open the incident
        Then I should find validate mssg "<mssg>"
        When I click 'href'
        # Then within "Incident Details", I should find the attribute "Reference No." with "<incident_no>" valu
        And I click "Edit Incident"
        And I can see the page header "Edit Incident"
        
        
        # # And I can only edit agency received time after settoout and cannot change the incident type


        
    

    Examples:
        # |test_data_is_for              |mssg                                                  |filterStrings                  |filterValues                         | 
        # |Bushfire type                 |Showing 1 to 10 of 1,000 entries                      |Incident_Status                |Out/Out-Amalgamated/Planned/Withdrawn|
        
        |test_data_is_for|
        |Bushfire type |