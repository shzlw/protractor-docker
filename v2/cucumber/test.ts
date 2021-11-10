const {Given, When, Then} = require('@cucumber/cucumber');
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