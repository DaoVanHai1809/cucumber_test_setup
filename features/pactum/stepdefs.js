const assert = require('assert');
const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const pactum = require('pactum');

let spec = pactum.spec();

Before(() => {
  spec = pactum.spec();
});

// Given(/^I make a (.*) request to (.*)$/, function (method, endpoint) {
//   spec[method.toLowerCase()](endpoint);
// });

Given("I make a GET request to {string}", function (string) {
  spec.get(string); // call api
});

Given("I make a POST request to {string}", function (string) {
  spec.post(string); // call api
});

Given("I set body to", function (body) {
  try {
    spec.withJson(JSON.parse(body));
  } catch(error) {
    spec.withBody(body);
  }
});

When("I receive a response", async function () {
  await spec.toss()
})

Then("I expect response should have a status {int}", function (int) {
  spec.response().should.have.status(int)
})

Then('I expect response time should be less than {int} ms', function (ms) {
  spec.response().should.have.responseTimeLessThan(ms)
});

After(() => {
  spec.end();
});