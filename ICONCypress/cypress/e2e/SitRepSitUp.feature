Feature: To test SitRep/SitUp Features 



@Regression @Teamcity  
Scenario: ICONSUP-T429 (1.0) BR-STRP-2 Mandatory fields for SitRep Main information - Incident/ICONSUP-T431 (1.0) BR-STRP-3 Changes to Alert levels/
    ICONSUP-T422 (1.0) BR-STRP-8 SitRep Basic Requirement / 
    ICONSUP-T405 (1.0) BR-INC-14 Add/Edit SitUp/SitRep / 
    ICONSUP-T407 (1.0) BR-INC-16 Add SitUp
    ICONSUP-T436: BR-STUP-2
    ICONSUP-T435: BR-STUP-1
    ICONSUP-T437: BR-STUP-3
    ICONSUP-T438: BR-STUP-4
    
    

    Given I open Icon page
    And  I can see dashbaord
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
    And I Assert with the Authorised SitRep
    And I click on add SitRep
    And I can verify report date as current
    And I Change alert level on SitRep
    And I type Incident controller
    And I Authorise SitRep
    And I verify that Sitrep is Authorised
    And I assert add Situp and click
    And I assert for Alert levels, Incident locations, Headings and threats
    And I save SU for the incident




@Regression @Teamcity
Scenario: ICONSUP-T432 (1.0) BR-STRP-4 SitRep Authorisation- Notifiable Incident / 
    ICONSUP-T433 (1.0) BR-STRP-5 SitRep Authorisation- Fire Investigation

    Given I open Icon page
    And  I can see dashbaord
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
    And I Assert with the Authorised SitRep
    And I click on add SitRep
    And I can verify report date as current
    And I type Incident controller
    And I Authorise SitRep for Notifiable and fire investigation
    And I verify that Sitrep is Authorised 
    And I Assert for FIU alert
