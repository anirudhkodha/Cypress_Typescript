Feature: As a ICON user testing ICON activity summary features

@Regression @Teamcity
Scenario: ICONSUP-T953
ICONSUP-T957 (1.0)Verify the functions in Joint Operations Overview
    Given I open ICON webpage
    And I can see dashbaord
    And I expand Knowledge
    And I Open ICON activity summary
    Then I verify the page is displayed
    Then I validate the s44 count matches the count on s44 list page
    And I validate the TOBAN count matches the count on FDR page
    