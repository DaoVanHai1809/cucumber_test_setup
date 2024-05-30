Feature: Create a post
  Simple example for pactum

  Scenario: creating a post on jsonplaceholder
    Given I make a POST request to "https://jsonplaceholder.typicode.com/posts"
    And I set body to
      """
        {
            "title": "foo",
            "body": "bar",
            "userId": 1
        }
      """
    When I receive a response
    Then I expect response should have a status 201
    Then I expect response time should be less than 3000 ms
