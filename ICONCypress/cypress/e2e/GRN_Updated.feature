Feature: As a ICON user testing GRN features
    Background: GRN Background
        Given I open ICON webpage
        And I can see dashboard
		And I expand breadcrumb_menu & submenu "Logistics > GRN Allocations"


    # @Regression
    # Scenario: Create/update/Delete, View Allocations, Block Duplication, Historic Data
    #     When I enter the "From" and "Until" date
    #     And I click "Search Historical"
    #     Then the count should be greater than "0"



    @focus    
    Scenario: Create and allocate channel
        When From "GRN Radio Channels" I select "Operations"
        And From "Channel Name" I select "TesT16"
        And From "Department Name" I select "Albury City FCC"
        And I enter the "StartDate" and "TerminateDate" date
        And I input "This is for AUTOMATION TEST ONLY" for "Use"
        And I input "Warid Islam" for "Authorised By"
        And I click "Update"

        