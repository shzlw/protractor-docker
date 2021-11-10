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
                '--disable-gpu',
                '--silent'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvdHJhY3Rvci5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLG1EQUFrRDtBQUV2QyxRQUFBLE1BQU0sR0FBVztJQUUxQixtREFBbUQ7SUFDbkQsYUFBYSxFQUFFLElBQUk7SUFDbkIsY0FBYyxFQUFFLEtBQUs7SUFDckIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixxQ0FBcUM7SUFFckMsWUFBWSxFQUFFO1FBQ1YsMEJBQTBCO1FBQzFCLFdBQVcsRUFBRSxRQUFRO1FBQ3JCLGFBQWEsRUFBRTtZQUNiLE1BQU0sRUFBRTtnQkFDTCxZQUFZO2dCQUNaLHdCQUF3QjtnQkFDeEIseUJBQXlCO2dCQUN6QixZQUFZO2dCQUNaLGVBQWU7Z0JBQ2YsVUFBVTthQUNaO1NBQ0Y7S0FDSjtJQUVELFNBQVMsRUFBRSxRQUFRO0lBRW5CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELGtDQUFrQztJQUdsQyxLQUFLLEVBQUU7UUFDTCxvQkFBb0IsQ0FBSyw0Q0FBNEM7S0FDdEU7SUFFRCxnQ0FBZ0M7SUFDaEMsWUFBWSxFQUFFO1FBQ1osT0FBTyxFQUFFO1lBQ1AsdUJBQXVCO1lBQ3ZCLGVBQWU7WUFDZixVQUFVO1NBQ1g7UUFDRCxJQUFJLEVBQUUsRUFBRTtRQUNSLCtGQUErRjtRQUMvRix5SkFBeUo7UUFDekosd0ZBQXdGO1FBQ3hGLE1BQU0sRUFBRSwyQkFBMkI7UUFDbkMsUUFBUSxFQUFFLEVBQUUsQ0FBbUIsNkdBQTZHO0tBQzdJO0lBQ0QsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNmLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlCLE1BQU0sT0FBTyxHQUFxQjtZQUNoQyxLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsd0JBQXdCO1lBQ2xDLE1BQU0sRUFBRSxZQUFZLEVBQUUsdUJBQXVCO1lBQzdDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsaUJBQWlCLEVBQUUsSUFBSTtZQUN2QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ04sYUFBYSxFQUFDLE9BQU87Z0JBQ3JCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLFNBQVMsRUFBRSxzQkFBc0I7Z0JBQ2pDLFVBQVUsRUFBRSxZQUFZO2dCQUN4QixVQUFVLEVBQUUsV0FBVztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7YUFDdkI7U0FDRixDQUFDO1FBRUYsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUM1QixDQUFDO0lBRUQ7Ozs7TUFJRTtDQUNILENBQUMifQ==