Feature: To test test icon FDR feature 

# Note the cleanup for this scenario is done in a scenario after the step
# so if you run this scenario by itself if will change the state of FDR feature
# causing other scenarios to fail
# so keep in mind that reseting the FDR state would be necessary after this scenario
# either through the cleanup script or ideally it should be done in an after hook

#Removed the first 4 scenarios from Regression due to FDR page changes and inability to access the S3 bucket via automation

Scenario: ICONSUP-439 Move FDR from Tomorrow to today 
    
    Given I open ICON webpage
    And I can see dashbaord
    When I open Public Information Tab
    And I select Fire Danger Rating
    And I make changes in FDR ratings for top5 District on tomorrow
    And I click on TOBAN tomorrow for top 5 district
    And I Save the details 
    And I assert with the saved details
    And I cange FDR from Tomorrow to Today
    And I Change TOBAN from Tomorrow to Today
    And I Save the details 
    And I assert with the saved result for TOBAN Today



Scenario: Make FDR back to normal after ICONSUP-439
    Given I open ICON webpage
    And I can see dashbaord
    When I open Public Information Tab
    And I select Fire Danger Rating
    And I make FDR back to normal


Scenario:  ICONSUP-T442 (1.0) BR-PUF-01 Source of Information/ ICONSUP-T443 (1.0) BR-PUF-03 File Structure/ FDR PUF Validation

    Given I open ICON webpage
    And I can see dashbaord
    When I open Public Information Tab
    And I select Fire Danger Rating
    And I make changes in FDR ratings for tomorrow and today
    And I Save the details
    And I open XML file

    
 
Scenario: Make FDR back to normal 

    Given I open ICON webpage
    And I can see dashbaord
    When I open Public Information Tab
    And I select Fire Danger Rating
    And I make FDR back to normal


@Regression @Teamcity
Scenario: Update FDR ICONSUP-439
Given I open ICON webpage
And I can see dashbaord
When I open Public Information Tab
And I select Fire Danger Rating
Then I reset the TOBAN for first 5 districts
And I make changes in FDR ratings for top5 District
And I update TOBANs for top 5 district
And I add statewide TOBAN info
And I Save the details 
Then I verify the details are saved

@TeamcityPlus1
Scenario: ICONSUP-440 BR-FDR-1: Verrify updated FDR after one day ICONSUP-439 BR-FDR-3
Given I open ICON webpage
And I can see dashbaord
When I open Public Information Tab
And I select Fire Danger Rating
Then I verify the details are updated for the next day

@Teamcity @focus
Scenario: Back to Normal FDR complete ICONSUP-439
Given I open ICON webpage
And I can see dashbaord
When I open Public Information Tab
And I select Fire Danger Rating
And I set FDR TOBAN to normal
And I set FDR selectors back to normal
And I Save the details 

# Manually check the S3 bucket and verify the changes reflect