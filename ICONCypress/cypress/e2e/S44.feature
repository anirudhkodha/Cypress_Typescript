Feature: To Test S44 Features
@Regression @Teamcity
Scenario: ICONSUP-T417 (1.0) BR-S44-4 Create S44 
    ICONSUP-T419 (1.0) BR-S44-2 Attach Document to S44 fire and selected Incidents / 
    ICONSUP-T418 (1.0) BR-S44-1 Select Incidents /
    ICONSUP-T421 (1.0) View S44 
    ICONSUP-T420 - BR-S44-3
Given I open ICON webpage
And I can see dashbaord
And I open knowledge
And I select joint operations overview 
And I click on Section44 list
And I click Add new S44
And I fill up mandatory fields
And I click on next
And I click on Select incidents
And I Select any incident from list
And I click on Done
And I click on Next
And I click on Create
And I verify the name for S44
And I update and Attach Documents
And I view S44
And I Revoke the Incident
And I click on next
And I click on Next
And I click on update
And I verify the name is not visible for S44 -Revoke   


@Regression @Teamcity 
Scenario: Verify S44 section and search ICONSUP-T-955
ICONSUP-T475

    Given I open ICON webpage
    And I can see dashbaord
    And I open knowledge
    And I select joint operations overview 
    Then I select 10 records to display in s44 section
    And I search for "Automation" in S44 section search
    Then I verify all entries include "Automation"
    Then I hide s44 section

@Regression @Teamcity
Scenario: Verify Region section ICONSUP-T-956

    Given I open ICON webpage
    And I can see dashbaord
    And I open knowledge
    And I select joint operations overview 
    Then I verify region section
    And I verify expand all button displays related incidents tables

@Regression @Teamcity
Scenario: Verify Incident Summary section ICONSUP-T-957

    Given I open ICON webpage
    And I can see dashbaord
    And I open knowledge
    And I select joint operations overview 
    Then I verify incident summary tables  
    And I search for "Automation" in incident summary section search
    Then I verify all entries include "Automation" in incident summary table
    
