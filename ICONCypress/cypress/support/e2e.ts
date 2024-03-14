//***********************************************
 // "blockHosts": [
  //   "spatial.uat.rfs.nsw.gov.au",
  //   "spatial.dev.rfs.nsw.gov.au",
  //   "bam.nr-data.net"
  // ]
//************************************************
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
import addContext from 'mochawesome/addContext'

// Import commands.js using ES2015 syntax:
import './commands'
import '../../node_modules/cypress-xpath'
// import  '../../node_modules/@types/lodash-es'
import * as _ from "lodash-es";





// Alternatively you can use CommonJS syntax:
// require('./commands')
require('cypress-xpath')

Cypress.on('test:after:run', (test, runnable) => {

  if (test.state === 'failed') {
    let item: any = runnable
    const nameParts = [runnable.title]

    while (item.parent) {
      nameParts.unshift(item.parent.title)
      item = item.parent      
    }
    
    const fullTestName = nameParts
            .filter(Boolean)
            .join(' -- ')

    const imageUrl = `screenshots/${Cypress.spec.name}/${fullTestName} (failed).png`

    addContext({ test } as Mocha.Context, imageUrl)
  }


})


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})



