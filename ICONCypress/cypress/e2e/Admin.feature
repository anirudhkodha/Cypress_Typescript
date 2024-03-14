Feature: To test Admin As a staff member I want to access Admin tasks

@Regression @Teamcity 
Scenario: 21- Admin can search user and validate number of same users
	Given I have opened web application
	And I can see dashboard
	When I expand Admin menu
	And I expand Administration menu
	And I Select User Management link
	Then I Verify User Search Page controls
	And I can look for "Paul"
	And I verify total numbers of users

@Regression @Teamcity  
Scenario: ICONSUP-T460 BR-ADMIN-11 ESCAD ICON Data Display
	Given Escad-Icon Data Display page is displayed
	When the user searches by incident start from past 3 months
	Then incident search results are displayed


@Regression @Teamcity @focus
Scenario: ICONSUP-T457 (1.0) BR-ADMIN-2 LGA Administrator - First Half
	
	Given I have opened web application
	And I can see dashboard
	When I expand Admin menu
	And I expand Administration menu
	And I Select User Management link
	Then I Verify User Search Page controls
	And I search for admin user
	And I click on the testuser
	And I go to LGA roles
	And I check for LGA ADMIN
	And I open ICON as testuser
	And I verify with Administration tab is not visible
	And I have opened web application as automation user
	And I can see dashboard
	And I expand Administration menu
	And I Select User Management link
	And I search for admin user
	And I click on the testuser
	And I go to LGA roles
	And I check for LGA ADMIN to tick
	And I open ICON as testuser
	When I expand Admin menu
	And I expand Administration menu

	

@Regression @Teamcity
Scenario:	ICONSUP-T458 (1.0) BR-ADMIN-3 OCSC Administrator

	Given I have opened web application
	And I can see dashboard
	When I expand Admin menu
	And I expand Administration menu
	And I Select User Management link
	Then I Verify User Search Page controls
	And I search for admin user
	And I click on the testuser
	And I go to LGA roles
	And I check for LGA ADMIN
	And I go to General roles
	And I look for grant - uncheck
	And I open ICON as testuser
	And I verify with Administration tab is not visible
	And I have opened web application as automation user
	And I can see dashboard
	When I expand Admin menu
	And I expand Administration menu
	And I Select User Management link
	And I search for admin user
	And I click on the testuser
	And I go to LGA roles
	And I check for LGA ADMIN to tick
	And I go to General roles again
	And I look for grant - check
	Given I open ICON as testuser
	And I verify with Administration tab visible contains all menu


# Warid has said this test will fail because we don't have test users
# @focus	
# Scenario: OCSC Administration 2

# 	Given I open ICON as testuser - II 
# 	And I verify with Administration tab visible contains all menu





# If the GIS API's are blocked in cypress config. This test may not work.
@Regression @noblock 
Scenario:ICONSUP-T415 (1.0) BR-BIRS-12 View [BIRS Details/SITREP] /
		ICONSUP-T434 (1.0) BR-STRP-6 Viewing [SitReps/SitUps] / 
		ICONSUP-T459 (1.0) BR-ADMIN-5 ICON User Management
	

Given I have opened web application
And I can see dashboard
When I expand Admin menu
And I expand Administration menu
And I Select User Management link
Then I Verify User Search Page controls
And I can look for "GrahamW1"
And I click on the testuser
And I go to LGA roles
And I verify SitrepViewer uncheck all LGA
And I open ICON as testuser
And  I can see dashboard
When I expand operations tab
And I can see Incident list
And I Search for 1st LGA
And I have opened web application again
And I can see dashboard
When I expand Admin menu
And I expand Administration menu
And I Select User Management link
Then I Verify User Search Page controls
And I can look for "GrahamW1"
And I click on the testuser
And I go to LGA roles
And I verify SitrepViewer check all LGA
And I open ICON as testuser
And  I can see dashboard
When I expand operations tab
And I can see Incident list
And I verified one of the incidents
And I verify Brigade report as testuser


#Note: if this test fails during execution, it may not change the Agency of the user back to RFS, which may cause others to fail
@Regression @Teamcity
Scenario: ICONSUP-T540 (1.0) ICONSUP - 3153 - Adding NSW Health to the Agency List in ICON

	Given I have opened web application
	And I can see dashboard
	When I expand Admin menu
	And I click on Username
	And I Verified Agency Dropdown and select NSW Health
	And I save the details
	And I Reload the page 
	And I verified Agency is NSW Health
	And I Verified Agency Dropdown and select Rural Fire Service
	And I save the details
	And I Reload the page
	And I verified Agency is Rural Fire Service


	
	
	 