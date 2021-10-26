"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const reporter = require("cucumber-html-reporter");
exports.config = {
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    getPageTimeout: 60000,
    allScriptsTimeout: 500000,
    // baseUrl: 'https://angularjs.org/',
    capabilities: {
        // browserName: "firefox",
        browserName: "chrome",
        chromeOptions: {
            'args': [
                'no-sandbox',
                '--disable-web-security',
                '--disable-dev-shm-usage',
                '--headless',
                '--disable-dev-shm-usage'
            ]
        }
    },
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // ignoreUncaughtExceptions: true,
    specs: [
        'cucumber/*.feature' // Specs here are the cucumber feature files
    ],
    // cucumber command line options
    cucumberOpts: {
        require: [
            //'take-screenshot.js',
            'cucumber/*.js',
            'hooks.js'
        ],
        tags: [],
        // strict: true,                  // <boolean> fail if there are any undefined or pending steps
        // format: ["pretty"],            // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
        // 'dry-run': false,              // <boolean> invoke formatters without executing steps
        format: 'json:cucumber_report.json',
        compiler: [] // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    },
    onComplete: () => {
        const id = browser.params.id;
        console.log('onComplete', id);
        const options = {
            theme: 'bootstrap',
            jsonFile: './cucumber_report.json',
            output: `./public/${id}/cucumber_report.html`,
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Chrome  54.0.2840.98",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
        reporter.generate(options);
    },
    /*
   onPrepare: function () {
      browser.manage().window().maximize(); // maximize the browser before executing the feature files
    }
    */
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdHJhY3Rvci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1EQUFrRDtBQUV2QyxRQUFBLE1BQU0sR0FBVztJQUUxQixtREFBbUQ7SUFDbkQsYUFBYSxFQUFFLElBQUk7SUFDbkIsY0FBYyxFQUFFLEtBQUs7SUFDckIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixxQ0FBcUM7SUFFckMsWUFBWSxFQUFFO1FBQ1YsMEJBQTBCO1FBQzFCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGFBQWEsRUFBRTtZQUNiLE1BQU0sRUFBRTtnQkFDTCxZQUFZO2dCQUNaLHdCQUF3QjtnQkFDeEIseUJBQXlCO2dCQUN6QixZQUFZO2dCQUNaLHlCQUF5QjthQUMzQjtTQUNGO0tBQ0o7SUFFRCxTQUFTLEVBQUUsUUFBUTtJQUVuQixhQUFhLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQztJQUUvRCxrQ0FBa0M7SUFHbEMsS0FBSyxFQUFFO1FBQ0wsb0JBQW9CLENBQUssNENBQTRDO0tBQ3RFO0lBRUQsZ0NBQWdDO0lBQ2hDLFlBQVksRUFBRTtRQUNaLE9BQU8sRUFBRTtZQUNQLHVCQUF1QjtZQUN2QixlQUFlO1lBQ2YsVUFBVTtTQUNYO1FBQ0QsSUFBSSxFQUFFLEVBQUU7UUFDUiwrRkFBK0Y7UUFDL0YseUpBQXlKO1FBQ3pKLHdGQUF3RjtRQUN4RixNQUFNLEVBQUUsMkJBQTJCO1FBQ25DLFFBQVEsRUFBRSxFQUFFLENBQW1CLDZHQUE2RztLQUM3STtJQUNELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFDZixNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QixNQUFNLE9BQU8sR0FBcUI7WUFDaEMsS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxNQUFNLEVBQUUsWUFBWSxFQUFFLHVCQUF1QjtZQUM3QyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLGlCQUFpQixFQUFFLElBQUk7WUFDdkIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxTQUFTO2dCQUM3QixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsWUFBWTtnQkFDeEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0YsQ0FBQztRQUVGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVEOzs7O01BSUU7Q0FDSCxDQUFDIn0=