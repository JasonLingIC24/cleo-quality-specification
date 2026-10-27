Feature: Login functionality

Scenario: Valid login
  Given I am on the login page
  When I enter valid credentials
  Then I am logged in successfully
  Then I see the dashboard

Scenario: Invalid login
  Given I am on the login page
  When I enter invalid credentials
  Then I see an authentication error
  Then I remain on the login page
