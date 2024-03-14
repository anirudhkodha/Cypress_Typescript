Feature: BR-INC-2.2 User can create an event with the start date / time in future
(up to 6 months) and the event with the future date will have the status "Planned" by default
Event with the current or past date / time will have the default status as "Contained". Once the status is set to "Contained", it is an Active fire

@Regression @Teamcity 
Scenario: ICONSUP-T430 (1.0) Mandatory fields for SitRep Main information - Event(planned)
ICONSUP-T11 (1.0) BR-INC-2.2 - Create Event (Manual Creation) 
    Given I open ICON
    And I can see dashbaord
    When I expand operations tab
    And I expand Incidents
    And I can select Create Event item
    And I enter  indidentname in the field on create event page for future
    And I enter LGA on create event page
    And I enter date time 3 months from now on create event page
    And I select enenttype on create event page   
    And I enter eventareasize on create event page
    And I enter tenure on create event page
    And I select agency responsible on create event page
    And I select incident owner on create event page
    And I enter incident location on create event page
    And I click save button on create event page
    Then I verify SR authorised and planned
    And I click on Add sitrep and verify details


@Regression @Teamcity 
Scenario: ICONSUP-T430 (1.0) Mandatory fields for SitRep Main information - Event(Contained)
    Given I open ICON
    And I can see dashbaord
    When I expand operations tab
    And I expand Incidents
    And I can select Create Event item
    And I enter  indidentname in the field on create event page for contain
    And I enter LGA on create event page
    And I enter date time 3 months before from now on create evnt page
    And I select enenttype on create event page   
    And I enter eventareasize on create event page
    And I enter tenure on create event page
    And I select agency responsible on create event page
    And I select incident owner on create event page
    And I enter incident location on create event page
    And I click save button on create event page
    Then I look for SR authorised Contained