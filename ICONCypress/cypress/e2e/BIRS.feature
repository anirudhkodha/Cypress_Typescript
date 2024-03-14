Feature: To test ICON BIRS
As a staff member
I want to Search Brigade Incident Report

@Regression @Teamcity 
Scenario: ICONSUP-T408 (1.0) BR-BIRS-1 Creation of report /
    ICONSUP-T415 (1.0) BR-BIRS-12 View BIRS Details /
    ICONSUP-T416 (1.0) BR-BIRS-13 Enter BIRS Details (Reports data entry) /
    ICONSUP-T410 (1.0) BR-BIRS-3 Enter, validate and save Primary/ Support Brigade Details / 
    ICONSUP-T412 (1.0) BR-BIRS-5 Validate and Save Report / 
    ICONSUP-T413 (1.0) BR-BIRS-6 Complete a Report (Authorise)/
    ICONSUP-T414 (1.0) BR-BIRS-7 Complete Primary / Support Brigade Details (Authorise)  
    ICONSUP-T411  

    Given I open ICON webpage
    And I can see dashboard
    When I expand operations tab
    And I expand Incidents
    And I open Create bushfire Shell
    And I write Incident name to incident creation
    And I enter LGA on create full incident page 
    And I enter Start Date Time to incident creation
    And I select the type of the fire to incident creation
    And I type firesize to incident creation
    And I enter tenure to incident creation
    And I select Incident Status to incident creation
    And I select responsible agency to incident creation
    And I select Incident owner to incident creation
    And I select suspected cause to incident creation
    And I enter set alert level to incident creation
    And I enter location to incident creation - bushfireshell
    And I enter 000 Reference to incident creation
    And I enter heading direction to incidentcreation
    And I enter resources to incident creation
    And I Save the incident creation form
    And I Assert with the Authorised SitRep, Investigation by the FIU
    And I select edit incident and assert that Delete not available
    And I click on Brigade Reporting
    And I select Primary Brigade
    And I select Add Brigade for Primary Brigade
    And I select Add Appliance
    And I put Appliance details
    And I select validate & Complete
    And I select Support brigade for brigade reporting
    And I enter Ignition Information
    And I enter injury details
    And I enter Fire fighting details 
    And I validate and save

@Regression @Teamcity
Scenario: ICONSUP-T409 (1.0) BR-BIRS-2 Date Time validation for Brigade Advised time

    Given I open ICON webpage
    And I can see dashboard
    When I expand operations tab
    And I expand Incidents
    And I open Create bushfire Shell
    And I write Incident name to incident creation
    And I enter LGA on create full incident page 
    And I enter Start Date Time to incident creation
    And I select the type of the fire to incident creation
    And I type firesize to incident creation
    And I enter tenure to incident creation
    And I select Incident Status to incident creation
    And I select responsible agency to incident creation
    And I select Incident owner to incident creation
    And I select suspected cause to incident creation
    And I enter set alert level to incident creation
    And I enter location to incident creation - bushfireshell
    And I enter 000 Reference to incident creation
    And I enter heading direction to incidentcreation
    And I enter resources to incident creation
    And I Save the incident creation form
    And I Assert with the Authorised SitRep, Investigation by the FIU
    And I select edit incident and assert that Delete not available
    And I click on Brigade Reporting
    And I select Primary Brigade
    And I select Add Brigade for Primary Brigade - Error Validation
    And I select Add Appliance
    And I Validate primary brigade Errors

@Regression @Teamcity
Scenario: ICONSUP-T514 (1.0) Validate user is able to Generate BIRS Outstanding report


    Given I open ICON webpage
    And I can see dashboard
    And I open knowledge
    And I expand Reports
    And I click on Joint Agency
    And I click on Birs Outstanding Report
    And I Validate three fields and search for the results
    And I export the Result to verify Twelve Fields with the data


# ICONSUP-T638 Validate Search results and export have correct columns displayed as per requirements
# Navigation Check
@Regression @Teamcity
Scenario: Navigate to Joint Agency page
    Given I open ICON webpage
    And I can see dashboard
    And I open knowledge
    And I expand Reports
    And I click on Joint Agency

# ICONSUP-T638 Validate Search results and export have correct columns displayed as per requirements
# fromDate takes an integer that represents how many days before today
# toDate takes an integer of how many days after today
# these are used to populate the date range form inputs on the birs report search page
@Regression @Teamcity
Scenario: ICONSUP-T638 Validate Search results and export have correct columns displayed as per requirements
    Given I go to Joint Agency page
    And I see "Birs Incident Response Report" is displayed under "BIRS Reports" and click on it
    And I can see five filter fields
    And I fill in the form with the following details
    | fieldName  | value           |
    | fromDate   | 30             |
    | toDate     | 0               |
    When I click find records
    And I see Export Results button is displayed
    When I Click on "Export Results" button
    Then I see the CSV file has the 11 fields with the data

@Regression @Teamcity
Scenario: Navigate to Brigade Report Search page
    Given I open ICON webpage
    And I can see dashboard
    And I expand operations tab
    And I select the 'Current Incident Search' option
    When I click on 'Search Brigade Reports' button on 'Brigade Report Search' page
    Then I am taken to the 'Brigade Report Search' page


@Regression
Scenario: Scenario Outline name: ICONSUP-T561 (1.0) Validate "Volunteer Report Submitted" filter is correctly displaying as per selected radio button
    Given I open the 'Brigade Report Search' page
    And I see the 'Volunteer Report Submitted' label
    And I see 'Brigade Report' label below 'Volunteer Report Submitted' label
    And I see 'Volunteer Report Submitted' label has options 'All', 'Yes', 'No'
     # the steps below sometimes fail when the types of incident being searched for doesnt exist.
    When I select 'All' for 'Volunteer Report Submitted' and 'Incomplete' for 'Brigade Report' and click 'Search' button
    Then I should receive incidents with brigade-report-status-incomplete class
    When I select 'All' for 'Volunteer Report Submitted' and 'Complete' for 'Brigade Report' and click 'Search' button
    Then I should receive incidents with brigade-report-status-complete class
    When I select 'All' for 'Volunteer Report Submitted' and 'All' for 'Brigade Report' and click 'Search' button
    Then I should receive incidents from the previous two scenarios
    When I select 'No' for 'Volunteer Report Submitted' and 'Incomplete' for 'Brigade Report' and click 'Search' button
    Then I should receive incidents with brigade-report-status-incomplete class and no volunteer report
    When I select 'No' for 'Volunteer Report Submitted' and 'Complete' for 'Brigade Report' and click 'Search' button
    Then I should receive incidents with brigade-report-status-complete class and no volunteer report
    When I select 'No' for 'Volunteer Report Submitted' and 'All' for 'Brigade Report' and click 'Search' button
    Then I should receive incidents from the previous two 'No Volunteer Report' scenarios
    #When I select 'Yes' for 'Volunteer Report Submitted' and 'Complete' for 'Brigade Report' and click 'Search' button
    #Then I should receive incidents with brigade-report-status-complete class and with volunteer report
    When I select 'Yes' for 'Volunteer Report Submitted' and 'Incomplete' for 'Brigade Report' and click 'Search' button
    Then I should receive incidents with brigade-report-status-incomplete class and with volunteer report
    #When I select 'Yes' for 'Volunteer Report Submitted' and 'All' for 'Brigade Report' and click 'Search' button
    #Then I should receive incidents from the previous two 'Yes Volunteer Report' scenarios
