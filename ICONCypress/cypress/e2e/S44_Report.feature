Feature: To Test S44 Report Features
@Regression
Scenario: ICONSUP-T959 (1.0)Verify whether the Section44 PDF is displayed 
    Given I open ICON webpage
    And I can see dashbaord
    Then I select s44 report from reports in knowledge tab
    And I verify Report iframe is initially not visible
    Then I click Run report button
    And I verify the report iframe is now visible