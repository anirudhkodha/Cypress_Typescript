Feature: To Test incident events ops log Features
@Regression @Teamcity
Scenario:  ICONSUP-T960 - Verify incident events ops log page 
    Given I open ICON webpage
    And I can see dashbaord
    Then I select incident event ops log in knowledge tab
    And I verify logs are displayed
    