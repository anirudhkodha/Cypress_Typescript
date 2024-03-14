Feature: To test ESCADE INCIDENT API


@Regression
Scenario: ICONSUP-T5 CREATE ESCAD INCIDENT
          |ICONSUP-T426
          ICONSUP-T427(Deprecated)
          ICONSUP-T972
          ICONSUP-T398(Deprecated)|

    Given I create access token
    And I create ESCADE incident - II
    And I open ICON
    When I expand operations tab
    And I select Advanced incident search
    And I search for the created incident
    And I click Search and select the Incident
    And I Verified with all element values
    When I expand Admin menu
	And I expand Administration menu
    And I click on ESCAD-Icon data display
    And I search for the incident and click on the incident
    And I assert for incident details on ESCAD ICON DATA DISPLAY
    And I Authorise pending Incident

@Regression
Scenario: ICONSUP-T5 Authorise ESCAD from ICON Landing page
    Given I create access token
    And I create ESCADE incident - II
    Then I open ICON
    And I Enter LGA name 'Wollongong'
    Then I find and click ESCAD pending incident created
    #Then I click Authorise incident option on tile
    #And I click authorise incident
    #Then I verify the incident is authorised



