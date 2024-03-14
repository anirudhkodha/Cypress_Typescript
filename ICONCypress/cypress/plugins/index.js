/// <reference types="cypress" />



//// <reference types="@shelex/cypress-allure-plugin" />


// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
const browserify = require('@cypress/browserify-preprocessor');
const cucumber = require('cypress-cucumber-preprocessor').default
const resolve = require('resolve');
const xlsx = require("node-xlsx");
const fs = require("fs");
const path = require('path');
const utc = require('dayjs/plugin/utc');
const dayjs = require('dayjs');
const toObject = require('dayjs/plugin/toObject')
const timezone = require("dayjs/plugin/timezone");
const advancedFormat = require("dayjs/plugin/advancedFormat");
const customParseFormat = require('dayjs/plugin/customParseFormat');




// using puppeteer to opening concurrent browsers for mfu tests
const puppeteer = require('puppeteer');
//const credentials = require('../../cypress.env.json');

dayjs.extend(customParseFormat)
dayjs.extend(utc)
dayjs.extend(timezone)
dayjs.extend(toObject)
dayjs.extend(advancedFormat) 



// const allureWriter = require('@shelex/cypress-allure-plugin/writer');
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config 
  

  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
  };


  on('file:preprocessor', cucumber(options))
  // allureWriter(on, config);

  on("task", {
    parseXlsx({filePath}) {
      return new Promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath), {cellDates: true});
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    }
  });
  on("task", {retireConcurrent:
    async function mfuRetireConcurrent() {

      const browser = await puppeteer.launch({
        ignoreDefaultArgs: ['--disable-extensions'],
      });
  
      // opening in incognito mode
      const context = await browser.createIncognitoBrowserContext();
      const page = await context.newPage();

      // wanted to ensure the same user is logged into puppeteer as the one in cypress while developing
      // logging in using the credentials, doesnt seem to do anything
      // its logging in using vpn credentials?
      await page.goto('https://icon.uat.rfs.nsw.gov.au/PublicInformation/MajorFireUpdates', {
        waitUntil: 'networkidle2'
      });
      await page.authenticate({'username':'TeamC', 'password': 'Fire321'});
      
      // unchecking only mine checkbox cause sometimes the logged in user may not have any MFUs
      // may cause rare problems if someone else tries to modify/modifies the same mfu at same time
      const isMineCheckBoxSelector = '#IsMine'
      await page
        .waitForSelector(isMineCheckBoxSelector, {
          visible: true,
        })
        .then(() => page.click(isMineCheckBoxSelector))

      // taking the first mfu from the results
      const firstMfuSelector = '#DataTables_Table_0 > tbody > tr:nth-child(1) > td:nth-child(2) > p > strong'
      await page
        .waitForSelector(firstMfuSelector, {
          visible: true,
        })
        .then(() => page.click(firstMfuSelector))

      // click retire button on mfu details page
      const retireBtnSelector = '[class="well clearfix"]>div>a>.icon-moon'
      await page
      .waitForSelector(retireBtnSelector, {
        visible: true,
      }) 
      const retireBtn = await page.$(retireBtnSelector)
      await page.evaluate(ele => ele.click(), retireBtn);

      // click retire mfu confirm button
      const retireConfirmModal = '[id = "RetireModal"]'
      await page
        .waitForSelector(retireConfirmModal, {
          visible: true,
        })

      const retireUpdatePopupBtnSelector = '.btn-danger'
      await page
        .waitForSelector(retireUpdatePopupBtnSelector, {
          visible: true,
        })
        const retireUpdatePopupBtn = await page.$(retireUpdatePopupBtnSelector)
        await page.evaluate(ele => ele.click(), retireUpdatePopupBtn);


      await page.waitForNavigation({ waitUntil:  'networkidle0'  })

      await browser.close()
      
      return null


    }
  });
  
  on('task', {
    fileExists(filePath) {
      return fs.existsSync(filePath);
    },
  });


  on("task", {reissueConcurrent:
    
    async function mfuReissueConcurrent() {
      return new Promise(async (resolve, reject) => {
        try {

      const browser = await puppeteer.launch({ headless: true});
      // opening in incognito mode
      const context = await browser.createIncognitoBrowserContext();
      const page = await context.newPage();

      // wanted to ensure the same user is logged into puppeteer as the one in cypress while developing
      // logging in using the credentials, doesnt seem to do anything
      // its logging in using vpn credentials?
      await page.authenticate({'username':'TeamC', 'password': 'Fire321'});
      await page.goto('https://icon.uat.rfs.nsw.gov.au/PublicInformation/MajorFireUpdates');

      const loadingSpinnerLocator = '#loadingOverlay'
      // unchecking only mine checkbox cause sometimes the logged in user may not have any MFUs
      // may cause rare problems if someone else tries to modify/modifies the same mfu at same time
      const isMineCheckBoxSelector = '#IsMine'
      console.log('I am here')
      await page
        .waitForSelector(isMineCheckBoxSelector, {
          visible: true,
        })
        .then(() => page.click(isMineCheckBoxSelector))

      // taking the first mfu from the results
      const firstMfuSelector = '#DataTables_Table_0 > tbody > tr:nth-child(1) > td:nth-child(2) > p > strong'
      await page
        .waitForSelector(firstMfuSelector, {
          visible: true,
        })
        .then(() => page.click(firstMfuSelector))
      
      await page.waitForSelector(loadingSpinnerLocator,{visible:false})
      
      // click reissue button on mfu details page
      const reissueBtnSelector = '[class="well clearfix"]>div>a>.icon-edit'
      await page
      .waitForSelector(reissueBtnSelector, {
        visible: true,
      }) 
      const reissueBtn = await page.$(reissueBtnSelector)
      await page.evaluate(ele => ele.click(), reissueBtn);
      await page.waitForNavigation({ waitUntil:  'networkidle2'  })
      
      

      // click the next button on choose incident page
      page.waitForTimeout(1000)
      await page.waitForSelector(loadingSpinnerLocator,{visible:false})
      const chooseIncidentsPageNextBtnSelector = '#attachedIncidentsPage > .form-actions > .pull-right > .btn'
      await page
        .waitForSelector(chooseIncidentsPageNextBtnSelector, {
          visible: true,
        })
      const chooseIncidentsPageNextBtn = await page.$(chooseIncidentsPageNextBtnSelector)
      await page.evaluate(ele => ele.click(), chooseIncidentsPageNextBtn);
      // await page.waitForNavigation({ waitUntil:  'networkidle2'  })


      page.waitForTimeout(1000)
      await page.waitForSelector(loadingSpinnerLocator,{visible:false})
      const mfuGeneralInfomationPageNextBtnSelector = '#generalNext'
      await page
        .waitForSelector(mfuGeneralInfomationPageNextBtnSelector, {
          visible: true,
        })
      const mfuGeneralInfomationPageNextBtn = await page.$(mfuGeneralInfomationPageNextBtnSelector)
      await page.evaluate(ele => ele.click(), mfuGeneralInfomationPageNextBtn);
      // await page.waitForNavigation({ waitUntil:  'networkidle2'  })
     
      /*await page.waitForSelector(loadingSpinnerLocator,{visible:false})
      const mfuWarningAreaPageNextBtnSelector = '#warningAreaEditNextButton > .hidden-phone'
      await page
        .waitForSelector(mfuWarningAreaPageNextBtnSelector, {
          visible: true,
        })
      const mfuWarningAreaPageNextBtn = await page.$(mfuWarningAreaPageNextBtnSelector)
      await page.evaluate(ele => ele.click(), mfuWarningAreaPageNextBtn);*/



      await page.waitForSelector(loadingSpinnerLocator,{visible:false})
      const mfuSocialPageNextBtnSelector = '#socialMedia>div:nth-child(3)>div>div>a'
      await page
        .waitForSelector(mfuSocialPageNextBtnSelector, {
          visible: true,
        })
      const mfuSocialPageNextBtn = await page.$(mfuSocialPageNextBtnSelector)
      await page.evaluate(ele => ele.click(), mfuSocialPageNextBtn);
      

      await page.waitForSelector(loadingSpinnerLocator,{visible:false})
      const mfuPublishPagePublishNowCheckboxSelector= '#IsPublishNow_t'
      await page
        .waitForSelector(mfuPublishPagePublishNowCheckboxSelector, {
          visible: true,
        })
      const mfuPublishPagePublishNowCheckbox = await page.$(mfuPublishPagePublishNowCheckboxSelector)
      await page.evaluate(ele => ele.click(), mfuPublishPagePublishNowCheckbox);
      
      
      await page.waitForSelector(loadingSpinnerLocator,{visible:false})
      const mfuPublishPageNextBtnSelector= '#publishing > .form-actions > :nth-child(1) > .pull-right > .btn'
      await page
        .waitForSelector(mfuPublishPageNextBtnSelector, {
          visible: true,
        })
      const mfuPublishPageNextBtn = await page.$(mfuPublishPageNextBtnSelector)
      await page.evaluate(ele => ele.click(), mfuPublishPageNextBtn);
      
    

      await page.waitForSelector(loadingSpinnerLocator,{visible:false})
      const mfuSubmitPageReissueBtnSelector= '#submit > .form-actions > :nth-child(1) > .pull-right > .btn'
      await page
        .waitForSelector(mfuSubmitPageReissueBtnSelector, {
          visible: true,
        })
      const mfuSubmitPageReissueBtn = await page.$(mfuSubmitPageReissueBtnSelector)
      await page.evaluate(ele => ele.click(), mfuSubmitPageReissueBtn);

      await page.waitForNavigation({ waitUntil:  'networkidle0'  })

      await browser.close()
      
      resolve(null)
        }
        catch(e){
          reject(e)
        }
    })
  }
  });

  on('task',{
    getFileMofifyDT(){
      return new Promise((resolve, reject) => {
        try{
          fs.stat(`\\\\wildfire\\hiav\\feeds\\UAT\\feedspublicdata\\MFU.xml`, (error, stats) => {
 
          resolve(stats.mtime)
    })
  }
      catch (e) {
        reject(e);
      }
    })
     
    }
  });

  on("after:spec", (result) => {
    if (result === 'failed') {
      // Log the failure message
      Cypress.log({
        name: 'Test Failed',
        message: result.error.message
      })

      // Move to the next test specification
      fs.readdirSync(path.join(__dirname, `cypress/videos/${Cypress.spec.name}`)).forEach((file) => {
        fs.linkSync(path.join(__dirname, `cypress/videos/${Cypress.spec.name}`, file));
      });

      
    }


  });


  
  on("after:spec", (result) => {
    if (result === 'failed') {
      // Log the failure message
      Cypress.log({
        name: 'Test Failed',
        message: result.error.message
      })

      // Move to the next test specification 
      fs.readdirSync(path.join(__dirname, `cypress/screenshots/${Cypress.spec.__dirname}`)).forEach((file) => {
        fs.linkSync(path.join(__dirname, `cypress/screenshots/${Cypress.spec.name}`, file));
      });

      
    }


  });

  on('after:run', (result) => {
    if (result === 'failed') {
      // Log the failure message
      Cypress.log({
        name: 'Test Failed',
        message: result.error.message
      })
  
      // Move to the next test specification
      Cypress.runner.nextSpec()
      
    }
    
    
  }) 

}
