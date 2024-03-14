Feature: ICONSUP-T944: To Test all pages under operations tab are working

@Regression @Teamcity
Scenario: Verifying incidents tab
Given I open ICON webpage
And I can see dashbaord
When I expand operations tab
Then I navigate to create full incident page
And I verify create full incident page
Then I click save
And I validate the mandatory fields
When I expand operations tab
Then I navigate to create bush shell page
And I verify create bush shell page
Then I click save
And I validate the mandatory fields for bush shell
When I expand operations tab
Then I navigate to create other shell page
And I verify create other shell page
Then I click save
And I validate the mandatory fields for other shell
When I expand operations tab
Then I navigate to create event page
And I verify create event page
Then I click save
And I validate the mandatory fields for create event
When I expand operations tab
Then I navigate to call out page
And I verify call out page
Then I click save
And I validate the mandatory fields for call out
When I expand operations tab
Then I navigate to merge incidents page
And I verify create merge incidents page
Then I click merge
And I validate the errors for merge incident page
When I expand operations tab
Then I navigate to brigade report search page
And I verify create brigade report search page

@Regression @Teamcity
Scenario: Verifying current incident search

Given I open ICON webpage
And I can see dashbaord
When I expand operations tab
Then I navigate to incident search page
And I verify incident search page
Then I verify create full incident link
Then I verify create bush shell link
Then I verify create other shell link
Then I verify create event link
Then I verify create callout link
Then I verify merge incidents link
Then I verify search brigade report link
Then I verify advanced search link

@Regression @Teamcity
Scenario: Verifying advanced incident search

Given I open ICON webpage
And I can see dashbaord
When I expand operations tab
Then I navigate to advanced search page
And I verify advanced search page
 
@Regression @Teamcity
Scenario: Verifying Operations Log/Message/Intel List ICONSUP-T976 (1.0) Verify the functions of Operations Log page

Given I open ICON webpage
And I can see dashbaord
When I expand operations tab
Then I navigate to operations log page
And I verify operations log page
And I validate the table contains data

@Regression @Teamcity
Scenario: Verifying RART ICONSUP-T977 (1.0) Verify the functions in RART page

Given I open ICON webpage
And I can see dashbaord
When I expand operations tab
Then I navigate to rart page
And I verify rart page
And I validate the rart table contains data

@Regression @Teamcity
Scenario: Verifying DOCTRINE

Given I open ICON webpage
And I can see dashbaord
When I expand operations tab
Then I navigate to doctrine page
And I verify doctrine page
And I add new doctrine file
And I edit the new doctrine file
Then I delete the new doctrine file

@Regression @Teamcity
Scenario: Verifying DISPATCH ICONSUP-T978 (1.0) Verify if the Dispatch page is displayed.
Given I open ICON webpage
And I can see dashbaord
When I expand operations tab
Then I navigate to dispatch page
And I verify redirection to dispatch page
