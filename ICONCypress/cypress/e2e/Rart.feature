Feature: To Test Rart Features

    Scenario: ICONSUP-977 BR-RART-4 View RART Deployment

        Given I have opened web application
        And I can see dashboard
        And I expand operations tab
        When I select Rart operation
        And I see the Rart list page
        And I click the first Rart standup
        Then I am taken to Rart Details page
        And I can see details of the Rart standup I clicked
