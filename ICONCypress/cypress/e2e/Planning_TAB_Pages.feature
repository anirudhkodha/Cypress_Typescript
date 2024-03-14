Feature: Test pages under planning tab
    @Teamcity
    Scenario: ICONSUP-T973 (1.0) Verify if the COP page is displayed.
    ICONSUP-T975 (1.0) Verify if the Alert Status page is displayed.

        Given I open COP page
        And I verify Map Areas
        And I Verify Map coordinates tab
        And I verify different layers on the Map
        Then Verify AlertStatus page is properly displayed
    @Teamcity
    Scenario: ICONSUP-T974 (1.0) Verify if the Fire Weather page is displayed

        Given I open fire weather page
        And I verify the page is displayed