Feature: To create incidents with all other and non-fire type options avaialable Features 
@Regression 
Scenario Outline: ICONSUP-T10 (1.0) BR INC 2.1 Create Full incident - Other types
    Given I open ICON webpage
    And I can see dashboard
    When I expand operations tab
    And I expand Incidents
    And I can select Create Full Incident 
    And I enter incident name "<type>" in the field on create full incident page - other types
    And I enter LGA on create full incident page
    And I enter incident location on create full incident page
    And I enter Incident Number-Local on create full incident page
    And I enter 000 Reference No on create full incident page
    And I enter Agency Call received date-time on create full incident page
    And I save the list of options to csv
    And I select the "<incid_type>" field with value of "<type>"
    And I click on save button on create full incident page
    And I verified saved page with no sitrep authorised
    And I click on Edit SitRep for full incident summary page
    #And I verify create Sitrep page for full incident and assert alerts - OTHER TYPES Incident
    And I can verify report date as current 
    And I enter SitRep comments
    And I enter Damage area size
    And I enter start origin date
    #And I enter tenure
    #And I enter threat potential in <2 hours
    And I enter support resources
    #And I select Incident Controller
    #And I select Lead Agency
    And I Authorise SitRep
    And I verify that Sitrep is Authorised
 
    Examples:
        |  type |   
        
		|Backyard fire|
		|Playground equipment fire|
		|Power pole alight|
		|School fire|
		|Shed fire|
		|Smell of burning|
		|Smoke in vicinity|
		|Structure/building/house fire|
		|Stubble burn|
		|Sub station fire|
		|Tip/Rubbish fire|
		|Train fire|
		|Transformer fire|
		|Tree alight|
		|Truck fire|
		|Unknown - fire|

        

@Regression @Teamcity @nonFire
Scenario Outline: Create Full incident - Non-Fire types
    Given I open ICON webpage
    And I can see dashboard
    When I expand operations tab
    And I expand Incidents
    And I can select Create Full Incident 
    And I enter incident name "<type>" in the field on create full incident page - non-fire types
    And I enter LGA on create full incident page
    And I enter incident location on create full incident page
    And I enter Incident Number-Local on create full incident page
    And I enter 000 Reference No on create full incident page
    And I enter Agency Call received date-time on create full incident page
    And I select the "<inc_type>" field with value of "<type>"
    And I click on save button on create full incident page
    And I verified saved page with no sitrep authorised
    And I click on Edit SitRep for full incident summary page
    #And I verify create Sitrep page for full incident and assert alerts - OTHER TYPES Incident
    And I can verify report date as current 
    And I enter SitRep comments
    And I enter Damage area size
    And I enter start origin date
    #And I enter tenure
    #And I enter threat potential in <2 hours
    And I enter support resources
    #And I select Incident Controller
    #And I select Lead Agency
    And I Authorise SitRep
    And I verify that Sitrep is Authorised
 
    Examples:
        | type |   		
		|Deployment interstate|
		|Explosion|
		|Flood & storm|
		|Hazmat|
		|ICEMS|
		|Lightning strike - no fire|
		|Medical access emergency|
		|Medical emergency|
		|MVA|
		|MVA persons trapped|
		|Oil petrol diesel spill|
		|Other|
		|Planned Event|
		|Rail incident|
		|Rescue General|
		|Rescue Industrial|
		|Rescue Other|
		|Rescue Road Crash|
		|Rescue Vertical|
		|SAR|
		|Silo incident|
		|Spillage (not HAZMAT)|
		|Tree down|
		|Tree down on power lines|
		|Unknown - non-fire|
		|Wires down/arcing|