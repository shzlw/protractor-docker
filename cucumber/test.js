const { Given, When, Then } = require('@cucumber/cucumber');
const { browser, element, by } = require('protractor');
const { expect } = require('chai');
Given('The calculator is open', function () {
    // Write code here that turns the phrase above into concrete actions
    browser.waitForAngularEnabled(false);
    browser.get('http://juliemr.github.io/protractor-demo/');
});
When('I calculate {int} {float} {int}', function (int, float, int2) {
    // When('I calculate {int} {float} {float}', function (int, float, float2) {
    // When('I calculate {float} {float} {int}', function (float, float2, int) {
    // When('I calculate {float} {float} {float}', function (float, float2, float3) {
    // Write code here that turns the phrase above into concrete actions
    element(by.model('first')).sendKeys(1);
    element(by.model('second')).sendKeys(2);
    element(by.id('gobutton')).click();
});
Then('the result should equal {int}', function (int) {
    // Then('the result should equal {float}', function (float) {
    // Write code here that turns the phrase above into concrete actions
    // const val = element(by.binding('latest')).getText();
    // console.log("333333333333 " + val);
    // expect(element(by.binding('latest')).getText()).to.equal('3');
    return;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDMUQsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFbkMsS0FBSyxDQUFDLHdCQUF3QixFQUFFO0lBQzlCLG9FQUFvRTtJQUNwRSxPQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFckMsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLFVBQVUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJO0lBQ2xFLDRFQUE0RTtJQUM1RSw0RUFBNEU7SUFDNUUsaUZBQWlGO0lBQy9FLG9FQUFvRTtJQUNwRSxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLCtCQUErQixFQUFFLFVBQVUsR0FBRztJQUNuRCw2REFBNkQ7SUFDM0Qsb0VBQW9FO0lBQ3BFLHVEQUF1RDtJQUN2RCxzQ0FBc0M7SUFDdEMsaUVBQWlFO0lBQ2pFLE9BQU87QUFDVCxDQUFDLENBQUMsQ0FBQyJ9