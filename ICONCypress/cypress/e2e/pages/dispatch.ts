/// <reference types="cypress-xpath" />
class dispatchPage{

    APP_DIS =() => cy.get(`.application`)

    MAP =() => cy.get(`#mapDiv_rfsVectorBasemap`) 

    NEIGHBORBRIGADE_BTN=() => cy.get(`#loadNeighboursButton_label`)
    CLOSEBY_STATION=() => cy.get(`#findClosestStations_label`)
    
     
}

export default dispatchPage