import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { TimeoutError } from "cypress/types/bluebird";
import dayjs from "dayjs";
import GRNlocators from "../pages/GRNlocators";
import { groupBy } from "lodash";

// const secureLogon = new SecureLogon()
// const dashboard= new Dashboard()
// const operations = new Operations()
// const userSearch = new UserSearch()
// const eventlocators = new Eventlocators()
// const incidentlocators = new INCIDENTLOCATORS()
// const birs_commonpage = new BIRS_COMMONPAGES()
const grnlocators = new GRNlocators()


When('I enter the {string} and {string} date',(fromdate, untildate) => {

if (fromdate == "From" && untildate == "Until"){

    const fromdate =  dayjs().subtract(4,'day').format('DD/MM/YYYY');
    const untildate = dayjs().format('DD/MM/YYYY');
    grnlocators.INPUTFROMDATE(fromdate)
    grnlocators.INPUTUNTILDATE(untildate)
}

if (fromdate == "StartDate" && untildate == "TerminateDate"){

    const startdate = dayjs().format('DD/MMY/YYYY')
    const terminatedate = dayjs().add(4,'day').format('DD/MM/YYYY');
    
    grnlocators.INPUTSTARTDATE(startdate)
    grnlocators.INPUTTERMINATEDATE(untildate)    

}

})

Then("the count should be greater than {string}",(value)=> {
    grnlocators.ASSERT_TABLERESULT(value)

})

And('From {string} I select {string}',(name, value) => {

if (name == 'Channel Name') {
    
    cy.contains(value).click({force:true})

    grnlocators.SELECT_CHANNELNAME(value)
}

if (name == 'Department Name') {
    
    grnlocators.SELECT_DEPARTMENTNAME(value)

}

if (name == "GRN Radio Channels"){

    grnlocators.SELECT_RADIO_CHANNEL(value)
    
    }

})

And('I input {string} for {string}',(place, value) => {


    if (place == "Use"){

        grnlocators.INPUT_GRNNOTES(value)
    }

    if (place == "Authorise By"){

       grnlocators.INPUT_GRNAUTHORISEBY(value)
    }

})












