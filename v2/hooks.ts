const { BeforeAll, After, AfterAll, Status } = require('@cucumber/cucumber');

After(async function(scenario) {
    /*
    if (scenario.result.status === Status.FAILED) {
        // screenShot is a base-64 encoded PNG
         const screenShot = await browser.takeScreenshot();
         this.attach(screenShot, "image/png");
    }
    */
    const screenShot = await browser.takeScreenshot();
    this.attach(screenShot, "image/png");
});