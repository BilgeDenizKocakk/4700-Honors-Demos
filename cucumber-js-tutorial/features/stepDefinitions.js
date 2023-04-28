const {Given, When, Then} = require("@cucumber/cucumber");
const assert = require('assert');

let today;
let actualAnswer;

const IsItFriday = function isItFriday(today) {
	return "Friday" === today ? "TGIF" : "Nope";
}

Given("today is {string}", function(String) {
    today = String;
});
    
Given("today is Sunday", function() {
    today = "Sunday";
});

When("I ask whether it's Friday yet", function() {
    actualAnswer = IsItFriday(today);
});

Then("I should be told {string}", function(String) {
    assert.equal(String, actualAnswer);
}); 