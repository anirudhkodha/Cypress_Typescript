# This is a script to retire all active mfus
# This was a one-off cleanup activity and not part of the Regression suite

Feature: Retire all MFUs 

 @sanity
 Scenario: Retire MFU
     Given I navigate to MFU page
     Then I retire all updates from feed table
