import { Config } from 'protractor';
import * as reporter from "cucumber-html-reporter"

function findId() {
  const ID_ARG = "--params.id";
  const args = process.argv;
  let idIndex = args.findIndex(p => p.includes(ID_ARG));
  if (idIndex !== -1) {
    const idArg = args[idIndex];
    const index = idArg.indexOf("=");
    if (index !== -1) {
      return idArg.substring(index + 1);
    }
  }

  return "";
}

// Get the id from arguments. The format is --params.id=123
const id = findId();
const cucumberJsonFile = `./cucumber_json_${id}.json`;

export let config: Config = {
  // seleniumAddress: 'http://localhost:4444/wd/hub',
  directConnect: true,  
  getPageTimeout: 60000,  
  allScriptsTimeout: 500000, 
  // baseUrl: 'https://angularjs.org/',

  // maxSessions: 1,


  capabilities: {
      // browserName: "firefox",
      browserName: "chrome",
      chromeOptions: {
        'args': [
           'no-sandbox',
           '--disable-web-security',
           '--disable-dev-shm-usage',
           '--headless',
           '--disable-gpu',
           '--silent'
        ]
      }
  },

  framework: 'custom',  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve('protractor-cucumber-framework'),  // path relative to the current config file

  // ignoreUncaughtExceptions: true,


  specs: [
    'cucumber/*.feature'     // Specs here are the cucumber feature files
  ],

  // cucumber command line options
  cucumberOpts: {
    require: [ // require step definition files before executing features
      //'take-screenshot.js',
      'cucumber/*.js',
      'hooks.js'
    ],  
    tags: [],                      // <string[]> (expression) only execute the features or scenarios with tags matching the expression
    // strict: true,                  // <boolean> fail if there are any undefined or pending steps
    // format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    // 'dry-run': false,              // <boolean> invoke formatters without executing steps
    format: `json:${cucumberJsonFile}`,
    compiler: []                   // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
  },
  onComplete: () => {
    const id = browser.params.id;


    console.log('onComplete', id);
    const options: reporter.Options = {    
      theme: 'bootstrap',    
      jsonFile: `${cucumberJsonFile}`,    
      output: `./public/${id}/cucumber_report.html`,    
      reportSuiteAsScenarios: true,    
      scenarioTimestamp: true,    
      launchReport: true,    
      metadata: {    
          "App Version":"0.3.2",    
          "Test Environment": "STAGING",    
          "Browser": "Chrome  54.0.2840.98",    
          "Platform": "Windows 10",    
          "Parallel": "Scenarios",    
          "Executed": "Remote"    
      }    
    };    
      
    reporter.generate(options)
  },

  /*
 onPrepare: function () {
    browser.manage().window().maximize(); // maximize the browser before executing the feature files
  }
  */
};