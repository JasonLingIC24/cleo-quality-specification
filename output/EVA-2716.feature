@manual
Feature: Exploratory Testing of Create Service-Scoped Roles (EVA-219)

  # Description:
  # Exploratory Testing of Create Service-Scoped Roles (EVA-219)

  # Scope:
  # - Verify All Services option
  # - Verify Selected Services Only option
  # - Verify service selection persists after saving
  # - Verify validation when no service is selected
  # - Verify an expired service cannot be associated with a role
  # - Verify removing a previously selected service
  # - Verify updating service associations
  # - Verify expired services in the selection list
  # - Verify switching from Selected Services Only to All Services
  # - Verify switching from All Services to Selected Services Only
  # - Verify saving a role without making changes

  Scenario: Verify All Services option

    Given the user is viewing a role's Associated Services section
    When the user selects "All Services" and saves the role
    Then the role should be associated with all services in the organisation
    And the selected option should remain saved when the user reopens the role

  Scenario: Verify Selected Services Only option

    Given the user is viewing a role's Associated Services section
    When the user selects "Selected Services Only", chooses one or more active services, and saves the role
    Then the selected services should be saved successfully
    And the selected services should remain selected when the user reopens the role

  Scenario: Verify service selection persists after saving

    Given the user has selected an active service for a role
    When the user saves the role and reopens it
    Then the previously selected service should remain selected

  Scenario: Verify validation when no service is selected

    Given the user has selected "Selected Services Only" for a role
    When the user attempts to save without selecting any service
    Then an appropriate validation message should be displayed
    And the role should not be saved with an empty service selection

  Scenario: Verify an expired service cannot be associated with a role

    Given an expired service is displayed under "Selected Services Only"
    When the user attempts to select the expired service and save the role
    Then the system should prevent the expired service from being associated with the role, if expired services are not permitted by the business rules

  Scenario: Verify removing a previously selected service

    Given a role has one or more services associated with it
    When the user deselects a service and saves the role
    Then the removed service should no longer be associated with the role
    And the updated selection should remain saved when the user reopens the role

  Scenario: Verify updating service associations

    Given a role already has services associated with it (PASS)
    When the user changes the selected services and saves the role
    Then the updated service associations should be saved successfully
    And the updated selections should appear when the user reopens the role

  Scenario: Verify expired services in the selection list

    Given the organisation has active and expired services
    When the user opens the service list under "Selected Services Only"
    Then expired services should not be displayed as available options
    And only eligible active services should be available for selection

  Scenario: Verify switching from Selected Services Only to All Services

    Given a role has specific services selected under "Selected Services Only"
    When the user switches to "All Services" and saves the role
    Then "All Services" should remain selected when the user reopens the role

  Scenario: Verify switching from All Services to Selected Services Only

    Given a role has "All Services" selected
    When the user switches to "Selected Services Only", selects one or more active services, and saves the role
    Then "Selected Services Only" and the selected services should remain saved when the user reopens the role

  Scenario: Verify saving a role without making changes

    Given the user opens an existing role with saved service associations
    When the user saves the role without making any changes
    Then the role should be saved without errors
    And the existing service associations should remain unchanged
