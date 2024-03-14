:DFeature: To test Set to out API
@Regression 
#Removed from regression as per Rajiv Rao comment on ICONSUP-3635
Scenario: ICONSUP-T536 (1.0) Validate User able to set out using Incident Number and 000 Reference and CAD from the same incident where criteria is meet for "Set to Out"

    Given I open ICON webpage
    And  I can see dashboard
    When I expand operations tab
    And I expand Incidents
    And I open Create bushfire Shell
    And I write Incident name to incident creation -settoout
    And I enter LGA on create full incident page -settoout
    And I enter Start Date Time to incident creation -settoout
    And I select the type of the fire to incident creation -settoout
    And I type firesize to incident creation -settoout
    And I enter tenure to incident creation -settoout
    And I select Incident Status to incident creation -settoout
    And I select responsible agency to incident creation -settoout
    And I select Incident owner to incident creation -settoout
    And I select suspected cause to incident creation -settoout
    And I enter set alert level to incident creation -settoout
    And I enter location to incident creation - bushfireshell -settoout
    And I enter 000 Reference to incident creation -settoout
    And I enter heading direction to incidentcreation -settoout
    And I enter resources to incident creation -settoout
    And I Save the incident creation form -settoout
    And I Assert with the Authorised SitRep -settoout
    And I click on add SitRep -settoout
    And I can verify report date as current -settoout
    And I type Incident controller -settoout
    And I Authorise SitRep -settoout
    And I verify that Sitrep is Authorised -settoout
    And I edit Incident and set to out -settoout
    Given I create access token
    And I set to out the incident API
    And I check the the incident in ICON webpage














