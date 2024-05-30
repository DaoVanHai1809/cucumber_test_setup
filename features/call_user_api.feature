Feature: Call user api
  Simple example for pactum

  Scenario: get list user on jsonplaceholder
    Given I make a GET request to "https://jsonplaceholder.typicode.com/users"
    When I receive a response
    Then I expect response should have a status 200
