Feature: As a ICON user testing GRN features



    @Regression @focus 
    Scenario: T1366:Create/update/Delete, View Allocations, Block Duplication, Historic Data
        Given I open ICON webpage
        And I can see dashboard
		And I expand breadcrumb_menu & submenu "Logistics > GRN Allocations"
        And I Select the District 
        Then I enter the "from_date" and "until date" from the search form
        And I click "Search Historical"
        Then I should find validate mssg "Showing 1 to 1 of 1 entries"

        And I select the channel
        And I put details on that
        And I select allocated district and assert with the details
        # And I update the details but not the channel
        # And I select new allocated district and assert with the details
        # And I look for new LGA and check the selected is showing as strikethrough
        # And I Delete the channel and verify

@Teamcity 
Scenario: T1366:Create Category, channel and do GRN allocation -Admin
    Given I open ICON webpage
    And I can see dashbaord
    And I expand profile 
    And I select administration
    And I click GRN management
    And I click the category tab 
    And verify if the table contains category records
    And verify if the delete and edit option is available for category
    And I click the Add category button
    And I input category name and click Save
    And I click the Channel tab     
    And I click the Add channel button
    And I input Name, category from above step and click Save
    And verify the allocation 
    Then click on the channel
    And fill the allocation details and click update
    And verify the allocation in the table

    # Then verify the search results for created category 


@Teamcity
# Scenario: T1366:GRN Allocation
#     Given I open ICON webpage
#     And I can see dashbaord
#     And I expand profile 
#     And I select administration
#     And I click GRN management
#     And I click the Channel tab     
#     And I click the Add channel button
#     And I input Name, category from above step and click Save
#     And verify the allocation 
#     Then click on the channel
#     And fill the allocation details and click update
#     And verify the allocation in the table

@Teamcity
Scenario: T1366:Create/Delete Channel -Admin
    Given I open ICON webpage
    And I can see dashbaord
    And I expand profile 
    And I select administration
    And I click GRN management
    And I click the Channel tab 
    And verify if the table contains channel records
    And verify if the delete and edit option is available for channel
    And also change the per page channel option
    And I click the Add channel button
    And I input Name, category and click Save
    Then I input the channel name in search box
    And verify the search results for created channel  
    And I delete the created channel 

@Teamcity 
Scenario: T1366:Create/Delete Department -Admin
    Given I open ICON webpage
    And I can see dashbaord
    And I expand profile 
    And I select administration
    And I click GRN management
    And I click the department tab
    And verify if the table contains department records
    And verify if the delete and edit option is available for department 
    And also change the per page department option
    And I click the Add department button
    And I input department name and click Save
    Then I input the department name in search box
    And verify the search results for created department 
    And I delete the created department       
    