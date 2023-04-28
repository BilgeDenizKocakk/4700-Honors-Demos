const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require('assert');
const Converter = require("../converter");

converter = new Converter.Converter();

Given("num is {int}", function(int) {
    converter.setNumber(int);
});

When("I ask for a conversion", function() {
    converter.convert();
});

Then("I should be told {string}", function(String) {
    assert.equal(String, converter.getResult());
}); 