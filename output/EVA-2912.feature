@manual
Feature: Exploratory testing of the creation and management of Services under a Contract - waiting on bug fixes to retest

  # Description:
  # Exploratory testing of the creation and management of Services under a Contract - waiting on bug fixes to retest

  # Scope:
  # - Open the service creation form
  # - Verify available services in the Service dropdown
  # - Verify behavior when a service is not linked in Organisation Settings
  # - Verify available options in the Service Type dropdown
  # - Verify available locations in the Location dropdown
  # - Accept 10-digit numeric DOS Service ID
  # - Validate mandatory service fields
  # - Service opening/closing times can be selected or typed
  # - Service opening/closing dates can be selected or typed
  # - Prevent saving a service with an invalid date and time range
  # - Display saved service details in the service list
  # - Create a service with a present/future start date
  # - Automatically activate a future-dated service
  # - Display System One configuration fields
  # - Validate mandatory System One configuration fields
  # - Validate an invalid System One Endpoint URL
  # - Validate the Target ODS Code
  # - Validate the Max Attempts field
  # - Save a service with System One configuration disabled
  # - Verify saved System One configuration
  # - Discard unsaved service changes
  # - Cancel the service form
  # - Verify saved service details
  # - Edit permitted service fields
  # - Verify service association with the contract

  # Preconditions:
  # - I have the required permissions to create and manage services
  # - an organisation exists with at least one contract

  Scenario: Open the service creation form

    Given I am viewing an existing contract
    When I click the "Create Service" button
    Then the new service form is displayed

  Scenario: Verify available services in the Service dropdown

    Given an organisation has services linked in Organisation Settings
    And I am creating a new service under a contract
    When I open the "Service" dropdown
    Then the services linked to the organisation should be displayed
    And I should be able to select an available service

  Scenario: Verify behavior when a service is not linked in Organisation Settings

    Given I am creating a new service under a contract
    And a service is not linked to the organisation in Organisation Settings
    When I open the "Service" dropdown
    Then the unlinked service should not be available for selection
    And I should not be able to associate that service with the contract

  Scenario: Verify available options in the Service Type dropdown

    Given I am creating a new service under a contract
    When I open the "Service Type" dropdown
    Then the available service types should be displayed
    And I should be able to select an appropriate service type

  Scenario: Verify available locations in the Location dropdown

    Given I am creating a new service under a contract
    And a valid location has been created in the Location tab
    When I open the "Location" dropdown
    Then the created location should be available for selection
    And I should be able to associate the selected location with the service

  Scenario: Accept 10-digit numeric DOS Service ID

    Given I am creating a new service under a contract
    When I enter a valid 10-digit numeric value in the DOS Service ID field
    And I click "Save"
    Then the service should be saved successfully
    And the DOS Service ID should be displayed correctly when viewing the service

  Scenario: Validate mandatory service fields

    Given I am creating a new service under a contract
    When I leave a mandatory service field empty
    And I click "Save"
    Then the service is not saved
    And validation identifies the fields requiring completion

  Scenario: Service opening/closing times can be selected or typed

    Given I am editing service opening hours
    When I set the <timeField> using the <method>
    Then the value is accepted

  Scenario: Service opening/closing dates can be selected or typed

    Given I am editing service opening dates
    When I set the <dateField> using the <method>
    Then the value is accepted

  Scenario: Prevent saving a service with an invalid date and time range

    Given I am creating a new service under a contract
    And all mandatory fields contain valid values
    When I enter an end date and time earlier than the start date and time
    And I click "Save"
    Then the service should not be saved
    And an appropriate validation message should be displayed

  Scenario: Display saved service details in the service list

    Given I have successfully created a service under a contract
    When I view the service list
    Then the Status should be displayed as Active, Inactive, or Expired as applicable
    And the Start Date should be displayed correctly
    And the End Date should be displayed correctly
    And the "Configure SLA" action should be available
    And the "Archive" action should be available
    And the "Edit" action should be available

  Scenario: Create a service with a present/future start date

    Given I am creating a new service under a contract
    And all mandatory fields contain valid values
    When I set the service start date and time to a present/future point
    And I enter a valid end date and time
    And I click "Save"
    Then the service should be saved successfully
    And the service status should be "Inactive" before its start date and time

  Scenario: Automatically activate a future-dated service

    Given a service has been created with a future start date and time
    And the service status is "Inactive"
    When the configured start date and time is reached
    Then the service status should automatically change to "Active"
    And the updated status should be displayed in the service list

  Scenario: Display System One configuration fields

    Given I am creating a new service under a contract
    When I enable "Enable System One Configuration"
    Then the Endpoint URL, Target ODS Code , Max Attempts field should be displayed

  Scenario: Validate mandatory System One configuration fields

    Given I am creating a new service under a contract
    And all standard mandatory fields contain valid values
    And "Enable System One Configuration" is enabled
    When I leave "<field>" empty
    And I click "Save"
    Then the service should not be saved
    And a validation message should indicate that "<field>" is require

  Scenario: Validate an invalid System One Endpoint URL

    Given System One configuration is enabled
    And all other mandatory fields contain valid values
    When I enter an invalid Endpoint URL
    And I click "Save"
    Then the invalid URL should be rejected
    And an appropriate validation message should be displayed

  Scenario: Validate the Target ODS Code

    Given System One configuration is enabled
    When I enter "<value>" as the Target ODS Code
    Then the value can accept alphanumeric characters

  Scenario: Validate the Max Attempts field

    Given System One configuration is enabled
    When I enter a non-numeric value in the Max Attempts field
    Then the invalid input should be rejected and an appropriate validation message should be displayed

  Scenario: Save a service with System One configuration disabled

    Given I am creating a new service under a contract
    And all standard mandatory fields contain valid values
    And "Enable System One Configuration" is disabled
    When I click "Save"
    Then the service should be saved successfully

  Scenario: Verify saved System One configuration

    Given a service has been saved with System One configuration enabled
    When I reopen the service for editing
    Then the System One configuration toggle should reflect the saved state
    And the saved Endpoint URL, Target ODS Code and   Max Attempts value should be displayed

  Scenario: Discard unsaved service changes

    Given I am creating a new service under a contract
    When I enter service details
    And I click "Discard Changes"
    Then the unsaved changes are discarded

  Scenario: Cancel the service form

    Given I am creating or editing a service under a contract
    When “Cancel" button is clicked
    Then the service form closes without saving the entered details

  Scenario: Verify saved service details

    Given a service has been saved under a contract
    When I reopen or view the service
    Then the selected service is displayed correctly

  Scenario: Edit permitted service fields

    Given a service exists under a contract
    And I have permission to edit the service
    When I open the service for editing
    And I update permitted service fields and save the changes
    Then the changes are saved successfully
    And the updated details are displayed when I reopen the service

  Scenario: Verify service association with the contract

    Given a service has been saved under a contract
    When I view the services associated with that contract
    Then the saved service appears under the correct contract
