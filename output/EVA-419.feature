Feature: Login functionality

Scenario: Login using valid credentials
  Given I am on the login page
  When I enter valid credentials
  Then I am logged in successfully

Scenario: Login using invalid credentials
  Given I am on the login page
  When I enter invalid credentials
  Then I should see an authentication error
