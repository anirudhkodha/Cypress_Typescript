Feature: To Test FIU
As a staff member
I want to verify FIU controls
so that to ensure that its working as per expectation

@Regression @Teamcity
Scenario: ICONSUP-T470 (1.0) BR-FIU-9 User is able to export FIU Search Result as .csv file/
ICONSUP-T987 (1.0) BR-FIU-3/
ICONSUP-T988 (1.0) BR-FIU-5

	Given I open ICON webpage
    And I can see dashbaord
    When I expand operations tab
    And I expand Incidents
    And I open Create bushfire Shell
    And I write Incident name to incident creation
    And I enter LGA on create full incident page 
    And I enter Start Date Time to incident creation
    And I select the type of the fire to incident creation
    And I type firesize to incident creation
    And I enter tenure to incident creation
    And I select Incident Status to incident creation
    And I select responsible agency to incident creation
    And I select Incident owner to incident creation
    And I select suspected cause to incident creation
    And I enter set alert level to incident creation
    And I enter location to incident creation - bushfireshell
    And I enter 000 Reference to incident creation
    And I enter heading direction to incidentcreation
    And I enter resources to incident creation
    And I Save the incident creation form
    And I Assert with the Authorised SitRep, Investigation by the FIU
	When I expand operations tab
	And I select FIU operation
    And I see status board page
	And I click on search board
	And I type incident number
	And I click search button 
	And I download the Excel and CSV file
	And Validate Excel
	And Validate CSV
	And I log into Another user 
	And I can see dashbaord
    When I expand operations tab
	And I select FIU operation
	And I click on search board
	And I type incident number
	And I select the incident and make a report
	And I open ICON webpage as testuser
	And I can see dashbaord
    When I expand operations tab
	And I select FIU operation
	And I click on search board
	And I type incident number
	And I select the number and Approve the report


