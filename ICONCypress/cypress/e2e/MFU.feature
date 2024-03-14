Feature: To Test MajorFireUpdate
As a staff member
I want to verify FIU controls
so that to ensure that its working as per expectation



@Regression @Teamcity
Scenario: BR-MFU-1 MFU-Incidents to be attached ICONSUP-T446
Given I visit ICON webpage
When I open Public Information Tab
And I can select Major Fire Updates menu item
Then I can see controls on Major Fire Update
And I select Add New Update button
And I can click Select Incidents button
And I can select incidents based on LGA selection

@Regression @Teamcity
Scenario: BR-MFU-11 publish ICONSUP-T456
ICONSUP-T474
Given I visit ICON webpage
When I open Public Information Tab
And I can select Major Fire Updates menu item
Then I can see controls on Major Fire Update
And I select Add New Update button
And I can click Select Incidents button
And I can select incidents based on LGA selection
And I can click Done button on LGA selection page
And I can enter information on Name and Summary required field
And I click Next on information required page
And I Select Publish to facebook
And I type into Facebook Message
And I Select Publish to Twitter
And I type in Twitter Message  
And I click Next button on media publish page
And Select Publish at specific time
And I click Next on selected publish time
And I verify Submit Page information
And I finally publish it
And I assert for published




@Regression @Teamcity
Scenario: ICONSUP-448 BR MFU 3 - Reisuue MFU 

Given I visit ICON webpage
When I open Public Information Tab
And I can select Major Fire Updates menu item
Then I can see controls on Major Fire Update
And I select fire update from the list to reissue
And I validate Retired alert is not displayed
And I validate Superseded is not displayed
And I click on Re-issue update from information page
And I verify preview tab from information page
And I click Next on information required page
And I click Next button on media publish page
And I select publish now for re-issue update
And I click Next on selected publish time
And I verify Submit Page information
And I finally publish it
And I assert Success of reissuing
Given I navigate to MFU page
When I click on updated MFU
Then I see Supersedes label
When I click and open the superseded mfu
Then I see a warning message saying it is superseded and not current


#navigation to MFU
@Regression @Teamcity @common
Scenario: User is able to navigate to MFU section
Given I visit ICON webpage
When I open Public Information Tab
And I can select Major Fire Updates menu item
Then I can see controls on Major Fire Update


# ICONSUP-T461 (1.0) User is able to add Warning Areas in an MFU
@Regression @noblock
Scenario: ICONSUP-T461 (1.0) User is able to add Warning Areas in an MFU
            T444- Major Incidents File
Given I navigate to MFU page
And I select Add New Update button
And I can click Select Incidents button
And I select first incident based on LGA selection and click Done button
And I fill in details on the Overview Page
When I click on Preview button on Overview page
Then I should see the Preview popup with the correct information
And I go to Warning page
And I draw a polygon on warning area map
And I delete the polygon I drew on warning area map
#And I draw a polygon on warning area map
#And I validate the polygon I drew on warning area map
And I go to Publishing page and select correct options and click Next
When I go to Submit page and publish MFU
Then I can see the update on the Major Fire Updates page
And I wait for some time
Then I see the update in the mfu.xml file
### TODO - requirements unclear and difficult to automate
### Also MFU scenarios likely to change as per Sprint Review - 01/04
### So these steps are being held off for now
Then I verify warning area is displayed in ICON Landing page
#Need to raise the performance with COP team
#Then I verify warning area is displayed in COP Landing page
#Existing BUG https://jira.rfs.nsw.gov.au/browse/ICONSUP-3611
#When I reissue the MFU
#Then I see it is displayed in mfu.xml
#When I retire the MFU
#Then I see that it is removed from mfu.xml


# ICONSUP-T451 (1.0) BR-MFU-6 Get major fire updates - 1
@Regression @Teamcity
Scenario: ICONSUP-T451 (1.0) BR-MFU-6 - 1 - Only get non retired and superceded updates
Given I navigate to MFU page
Then I see that no MFU is retired
And I select fire update from the list to reissue
And I validate Retired alert is not displayed
And I validate Superseded is not displayed


# ICONSUP-T453 (1.0) BR-MFU-8 Get major fire updates - 3
@Regression @Teamcity
Scenario: ICONSUP-T453 (1.0) BR-MFU-8 Get major fire updates - 3 - Only get MFU created after July of last year
Given I navigate to MFU page
Then I see listed MFU were published on or after 1st July of previous year


# ICONSUP-T454 (1.0) BR-MFU-9 Get major fire updates - 4
@Regression @Teamcity
Scenario: ICONSUP-T454 (1.0) BR-MFU-9 Get major fire updates - 4 - Edit MFU made by other users
Given I navigate to MFU page
And I uncheck Only Show My Updates checkbox
When I click on MFU by different user
Then I can see Reissue and Retire buttons
Then I reissue the MFU
And I uncheck Only Show My Updates checkbox
When I click on MFU by different user
Then I can see Reissue and Retire buttons
And I retire the MFU


# ICONSUP-T450 (1.0) BR-MFU-5 Reissue MFU - Supercede
# The MFU reissue must supersede the latest MFU.
@Regression @Teamcity
Scenario: ICONSUP-T450 (1.0) BR-MFU-5 Reissue MFU - Supercede - Reissue supercede latest
Given I navigate to MFU page
And I select fire update from the list to reissue
And I validate Superseded is not displayed


#Decided to keep it manual based on the low effeciency of the test from automation perspective
@Regression 
Scenario: ICONSUP-T452 (1.0) BR-MFU-7 Get major fire updates - 2
Given I navigate to MFU page
And I create MFU with future publish date
Then The MFU with future published date should not be available in xml feed
When I wait until the publish time is reached
Then The MFU should be available in xml feed
And I reissue MFU with future date
Then The MFU with future published date should not be available in xml feed- Reissue
When I wait until the publish time is reached
Then The MFU should be available in xml feed- Reissue



@Regression 
Scenario: ICONSUP-T455 (1.0) BR-MFU-10 Retire MFU - Concurrency
Given I navigate to MFU page
And I uncheck Only Show My Updates checkbox
And I open the first MFU
And I open the same MFU in a different browser and retire it
Then I should not be allowed to retire the originally opened MFU

@Regression
Scenario: ICONSUP-T449 (1.0) BR-MFU-4 Reissue MFU - Check for Concurrency
ICONSUP-T445 
Given I navigate to MFU page
And I uncheck Only Show My Updates checkbox
And I open the first MFU
When I open the same MFU in a different browser and reissue it
Then I should not be allowed to reissue the originally opened MFU

# this test requirements ask for 3 files to be updated:
# majorFireUpdates.xml, major-Fire-Updates.xml, MFU.xml
# but majorFireUpdates does not have anything on it, after talking to Karthik he suggested only checking other two
@Regression 
Scenario: T444- Major Incidents File
Given I navigate to MFU page
And I create a MFU
Then The MFU xml files must be updated

# this scenario has unclear instructions. the steps below are interpreted from the latest execution file
# this test will fail if there are not multiple incidents in Albury
@Regression @Teamcity
Scenario: ICONSUP-T447 BR-MFU-2 Attach incidents
Given I navigate to MFU page
When I create a MFU with multiple attached incidents
Then I should see the MFU with the attached incidents in MFU page


