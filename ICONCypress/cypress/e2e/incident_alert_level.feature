Feature: As a ICON user testing ICON incident alert level feature

@Regression @Teamcity
Scenario: verify alert level list page is getting displayed ICONSUP_T954
    Given I open ICON webpage
    And I can see dashbaord
    And I expand Knowledge
    And I Open incident alert level list
    Then I verify the incident alert level page is displayed
    Then I search for "FullIncidentAutomationBush" incident
    And I look for the incident details
    Then I verify the details on incident alert level list match the incident details

    # I Select the District 
    #And I Select the date range and checked Include previous channels
    #And I click on search
    #And I select the channel
    #And I put details on that
    #And I select allocated district and assert with the details
    #And I update the details but not the channel
    #And I select new allocated district and assert with the details
    #And I look for new LGA and check the selected is showing as strikethrough
    #And I Delete the channel and verify
    