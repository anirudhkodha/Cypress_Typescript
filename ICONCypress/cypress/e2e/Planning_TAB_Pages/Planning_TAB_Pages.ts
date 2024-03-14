import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";



// login using credentials


//||>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>COP>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>






Given ('I open COP page',()=> {
  cy.loginToCOP().wait(50000)

  
  cy.get('#showAdditionalDataButton').click({force:true}).wait(6000)

  cy.screenshot('COP01')
  
  cy.get('#showAdditionalDataButton').click({force:true}).wait(4000)
  


})

And ('I verify Map Areas',()=> {

  cy.get('#mapDiv_gc').should('have.attr','style').and('contain','touch-action: none; will-change: transform; overflow: visible; position: absolute;').wait(4000)
})

And ('I Verify Map coordinates tab',()=>{

  cy.get('#hideCoordinatesButton').click({force:true}).wait(4000)
  cy.get('#coordinateDiv[class="coordinateContainer showCoordinateContainer"]').should('be.visible').wait(4000)

  
  cy.screenshot("COP02")
})

And ('I verify different layers on the Map',()=> {

  cy.get('#mapDiv_zoom_slider > div.esriSimpleSliderIncrementButton').click({force: true}).wait(6000)
  cy.get('#mapDiv_zoom_slider > div.esriSimpleSliderIncrementButton').click({force: true}).wait(6000)
  cy.get('#showLocationSearchButton[title="Location Search"]').click({force:true}).wait(2000)
  cy.get('#txtLocation[tooltip="Zoom to location"]').should('be.visible').click({force:true}).type('153.50, -32.17').wait(6000)
  cy.get('#imgLocation[class="menuIcon"]').click({force:true}).wait(4000)
  cy.get('#mapDiv_zoom_slider > div.esriSimpleSliderIncrementButton').click({force: true}).wait(6000)
  cy.get('#mapDiv_zoom_slider > div.esriSimpleSliderIncrementButton').click({force: true}).wait(6000)



  cy.screenshot('COP03')

})

Then ('Verify AlertStatus page is properly displayed',()=> {
  cy.visit('https://cop.uat.rfs.nsw.gov.au/cop_portal/dAlertStatusUI.html')
  cy.get('#alertMap1Div_gc').should('be.visible')
  cy.get('#alertMap2Div_gc').should('be.visible')
  cy.get('#alertMap3Div_gc').should('be.visible')
  cy.get('#alertMap4Div_gc').should('be.visible')
  cy.screenshot('AlertStatusPage')

})

//||>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Fire Weather>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

Given ('I open fire weather page',()=> {
  cy.loginToFireWeather()
  cy.screenshot('fireWeather') 
})
And ('I verify the page is displayed', ()=> { 

  cy.get('h4').each(($el, index, $list) => {
  cy.wrap($el).should('be.visible')
  })
})

