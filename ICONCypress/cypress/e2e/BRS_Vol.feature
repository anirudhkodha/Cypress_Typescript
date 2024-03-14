Feature: To test BRS and ICON INTEGRATION

@Regression
Scenario: T1367:Complete brigade Report
    Given I open BRS for volunteers page
    And I assert for page title
    And I will search for current incidents
    And I Select the incident and Copy the important details
    And I put Brigade Info
    And I Select appliances and put details
    And I Select Primary Crew Members and Role
    And I Select Type of Call
    And I Select Action Taken
    And I Select from Problems Encountered
    And I Write Report Comments
    And I Submit Report
    And I Search for the incident into ICON
    And I Import Brigade
    And I Validate and Complete Report
    And I enter Ignition Information
    And I enter Fire fighting details 
    And I complete Report
