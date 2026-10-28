@manual
Feature: Creation and Management of Locations

  # Description:
  # Creation and Management of Locations

  # Scope:
  # - Verify login with valid Organization Administrator credentials
  # - Verify login with invalid credentials
  # - Verify navigation to the Locations section
  # - Create a Location with valid details
  # - Create a Location with each supported Location Type
  # - Verify location creation with an empty Location Name
  # - Verify location creation with whitespace-only Location Name
  # - Verify Location Name with numeric characters
  # - Verify Location Name with numeric-only input
  # - Verify Location Name containing special characters
  # - Verify Location Name containing alphanumeric and special characters
  # - Verify Location Name containing only special characters
  # - Verify Location Name character length validation
  # - Verify Address field with a valid value
  # - Verify Address field with an empty value
  # - Verify Address field with whitespace-only input
  # - Verify Address field with alphanumeric characters
  # - Verify Address field containing special characters
  # - Verify Address field containing only special characters
  # - Verify Address field character-length validation
  # - Verify Post Code field with a valid value
  # - Verify Post Code field with an empty value
  # - Verify Post Code field with whitespace-only input
  # - Verify Post Code field with alphanumeric characters
  # - Verify Post Code field containing only special characters
  # - Verify Post Code field character-length validation
  # - Verify Telephone Number field with a valid UK telephone number
  # - Verify Telephone Number field with an empty value
  # - Verify Telephone Number field with whitespace-only input
  # - Verify Telephone Number field containing only special characters
  # - Verify Telephone Number field containing only alphabets
  # - Verify Telephone Number field length validation
  # - Verify ODS Code field with a valid value
  # - Verify ODS Code field with an empty value
  # - Verify ODS Code field with whitespace-only input
  # - Verify ODS Code field with special characters
  # - Verify ODS Code field with alphabetic-only input
  # - Verify ODS Code field with numeric-only input
  # - Verify ODS Code field with alphanumeric input
  # - Verify ODS Code field length validation
  # - Validate mandatory fields during Location creation
  # - Handle duplicate Location details
  # - Cancel Location creation
  # - Edit an existing Location and save changes
  # - Discard unsaved changes to a Location
  # - View archived Locations
  # - View inactive Locations
  # - Apply Show Archived and Show Inactive together
  # - Verify unsaved changes when navigating away from the location form
  # - Verify that an archived location cannot be recreated

  # Preconditions:
  # - I am logged in as an Organization Administrator
  # - I am on the Service Provider page

  Scenario: Verify login with valid Organization Administrator credentials

    Given I am on the login page
    When I enter valid Organization Administrator credentials
    And I click the Login button
    Then I should be logged in successfully
    And I should be redirected to the Service Provider page

  Scenario: Verify login with invalid credentials

    Given I am on the login page
    When I enter invalid login credentials
    And I click the Login button
    Then I should not be logged in
    And I should remain on the login page
    And the appropriate login error message should be displayed

  Scenario: Verify navigation to the Locations section

    Given I am logged in as an Organization Administrator
    And I am on the Service Provider page
    When I click the Locations icon
    Then the Locations section should be displayed
    And the Location list and available actions should be visible

  Scenario: Create a Location with valid details

    When I select "Add Location"
    And I enter all required Location details
    And I configure the Active status
    And I select "Create Location"
    Then the Location should be created successfully
    And the Location should appear in the Location list with the correct details

  Scenario: Create a Location with each supported Location Type

    When I select "Add Location"
    And I enter all required Location details
    And I select "<Location Type>" as the Location Type
    And I select "Create Location"
    Then the Location should be created successfully
    And the selected Location Type should be displayed correctly

    Examples:
      |  |

  Scenario: Verify location creation with an empty Location Name

    Given the user is on the Add Location page
    When the user leaves the Location Name field empty
    And enters all other required details
    And clicks the Create Location button
    Then the location should not be created
    And an appropriate validation message should be displayed

  Scenario: Verify location creation with whitespace-only Location Name

    Given the user is on the Add Location page
    When the user enters only whitespace in the Location Name field
    And enters all other required details
    And clicks the Create Location button
    Then the location should not be created
    And an appropriate validation message should be displayed

  Scenario: Verify Location Name with numeric characters

    Given the user is on the Add Location page
    When the user enters a Location Name containing numbers
    And enters all other required details
    And clicks the Create Location button
    Then the location should be created successfully

    Examples:
      | "Clinic123" |

  Scenario: Verify Location Name with numeric-only input

    Given the user is on the Add Location page
    When the user enters a Location Name containing only numbers
    And enters all other required details
    And clicks the Create Location button
    Then the location should not be created
    And an appropriate validation message should be displayed

    Examples:
      | "123456" |

  Scenario: Verify Location Name containing special characters

    Given the user is on the Add Location page
    When the user enters a Location Name containing special characters
    And enters all other required details
    And clicks the Create Location button
    Then the location should be created successfully

    Examples:
      | "St. Mary's Clinic" |

  Scenario: Verify Location Name containing alphanumeric and special characters

    Given the user is on the Add Location page
    When the user enters a Location Name containing letters, numbers, and special characters
    And enters all other required details
    And clicks the Create Location button
    Then the location should be created successfully

    Examples:
      | "Clinic@123" |

  Scenario: Verify Location Name containing only special characters

    Given the user is on the Add Location page
    When the user enters a Location Name containing only special characters
    And enters all other required details
    And clicks the Create Location button
    Then the location should not be created
    And an appropriate validation message should be displayed

    Examples:
      | "!!!@@@" |

  Scenario: Verify Location Name character length validation

    Given the user is on the Add Location page
    When the user enters a Location Name within the permitted character limit
    And enters all other required details
    And clicks the Create Location button
    Then the system should validate the Location Name according to the configured character limit
    And display an appropriate validation message if the limit is exceeded
    And create the location if all validation rules are satisfied

  Scenario: Verify Address field with a valid value

    Given I am on the Add Location page
    When I enter a valid address in the Address field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should be created successfully
    And the entered address should be displayed in the Locations list

    Examples:
      | 10 High Street, London |

  Scenario: Verify Address field with an empty value

    Given I am on the Add Location page
    When I leave the Address field empty
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the Address required validation message should be displayed

  Scenario: Verify Address field with whitespace-only input

    Given I am on the Add Location page
    When I enter only whitespace in the Address field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the Address validation message should be displayed

    Examples:
      | "     " |

  Scenario: Verify Address field with alphanumeric characters

    Given I am on the Add Location page
    When I enter an address containing letters and numbers in the Address field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should be created successfully
    And the entered address should be displayed in the Locations list

    Examples:
      | 10 High Street |

  Scenario: Verify Address field containing special characters

    Given I am on the Add Location page
    When I enter an address containing special characters in the Address field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should be created successfully
    And the entered address should be displayed in the Locations list

    Examples:
      | 10 High Street, St. John's Road |

  Scenario: Verify Address field containing only special characters

    Given I am on the Add Location page
    When I enter only special characters in the Address field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the Address validation message should be displayed

    Examples:
      | "!!!@@@###" |

  Scenario: Verify Address field character-length validation

    Given I am on the Add Location page
    When I enter an address within or exceeding the permitted character limit
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the address should be accepted when its length is within the permitted limit
    And the location should not be created when the address exceeds the permitted limit
    And the actual character-length validation message should be displayed when the limit is exceeded

  Scenario: Verify Post Code field with a valid value

    Given I am on the Add Location page
    When I enter a valid UK postcode in the Post Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should be created successfully
    And the entered postcode should be displayed in the Locations list

    Examples:
      | SW1A 1AA |

  Scenario: Verify Post Code field with an empty value

    Given I am on the Add Location page
    When I leave the Post Code field empty
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the Post code validation message should be displayed

  Scenario: Verify Post Code field with whitespace-only input

    Given I am on the Add Location page
    When I enter only whitespace in the Post Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the Post code validation message should be displayed

    Examples:
      | "     " |

  Scenario: Verify Post Code field with alphanumeric characters

    Given I am on the Add Location page
    When I enter an alphanumeric value in the Post Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the postcode should be accepted if it is a valid UK postcode
    And the location should be created successfully

    Examples:
      | M1 1AE |

  Scenario: Verify Post Code field containing only special characters

    Given I am on the Add Location page
    When I enter only special characters in the Post Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the actual Post Code validation message should be displayed

    Examples:
      | "!!!@@@###" |

  Scenario: Verify Post Code field character-length validation

    Given I am on the Add Location page
    When I enter a postcode within or exceeding the permitted character limit
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the postcode should be accepted when it meets the permitted length and format
    And the actual validation message should be displayed if the postcode is invalid

  Scenario: Verify Telephone Number field with a valid UK telephone number

    Given I am on the Add Location page
    When I enter a valid UK telephone number in the Telephone Number field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should be created successfully

    Examples:
      | 020 7946 0958 |

  Scenario: Verify Telephone Number field with an empty value

    Given I am on the Add Location page
    When I leave the Telephone Number field empty
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And a validation message should be displayed for the Telephone Number field

  Scenario: Verify Telephone Number field with whitespace-only input

    Given I am on the Add Location page
    When I enter only whitespace in the Telephone Number field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And a validation message should be displayed for the Telephone Number field

    Examples:
      | "     " |

  Scenario: Verify Telephone Number field containing only special characters

    Given I am on the Add Location page
    When I enter only special characters in the Telephone Number field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the application should display a validation message if the value is invalid
    And the location should not be created

    Examples:
      | !!!@@@### |

  Scenario: Verify Telephone Number field containing only alphabets

    Given I am on the Add Location page
    When I enter only alphabetic characters in the Telephone Number field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the application should display a validation message if the value is invalid
    And the location should not be created

    Examples:
      | ABCDEFGHIJK |

  Scenario: Verify Telephone Number field length validation

    Given I am on the Add Location page
    When I enter a telephone number exceeding the permitted character limit
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the actual length-validation message should be displayed for the Telephone Number field

  Scenario: Verify ODS Code field with a valid value

    Given I am on the Add Location page
    When I enter a valid ODS Code in the ODS Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should be created successfully

    Examples:
      | RJYW |

  Scenario: Verify ODS Code field with an empty value

    Given I am on the Add Location page
    When I leave the ODS Code field empty
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created if ODS Code is mandatory
    And a validation message should be displayed for the ODS Code field

  Scenario: Verify ODS Code field with whitespace-only input

    Given I am on the Add Location page
    When I enter only whitespace in the ODS Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the actual validation message should be displayed

    Examples:
      | "     " |

  Scenario: Verify ODS Code field with special characters

    Given I am on the Add Location page
    When I enter only special characters in the ODS Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the actual validation message should be displayed

    Examples:
      | !!!@@@ |

  Scenario: Verify ODS Code field with alphabetic-only input

    Given I am on the Add Location page
    When I enter alphabetic characters in the ODS Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should be created successfully

    Examples:
      | ABCDE |

  Scenario: Verify ODS Code field with numeric-only input

    Given I am on the Add Location page
    When I enter numeric-only input in the ODS Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the actual validation message should be displayed

    Examples:
      | 12345 |

  Scenario: Verify ODS Code field with alphanumeric input

    Given I am on the Add Location page
    When I enter alphanumeric characters in the ODS Code field
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should be created successfully

    Examples:
      | ABC123 |

  Scenario: Verify ODS Code field length validation

    Given I am on the Add Location page
    When I enter an ODS Code exceeding the permitted character limit
    And I enter valid values in all other required fields
    And I click the Create Location button
    Then the location should not be created
    And the actual length-validation error message should be displayed

  Scenario: Validate mandatory fields during Location creation

    When I select "Add Location"
    And I leave the mandatory fields empty
    And I select "Create Location"
    Then the Location should not be created
    And appropriate validation messages should be displayed

  Scenario: Handle duplicate Location details

    Given a Location with an existing name or ODS Code is available
    When I select "Add Location"
    And I enter duplicate Location details
    And I select "Create Location"
    Then the application should handle duplicate values according to the business rules
    And duplicate records should not be created if duplicates are prohibited

  Scenario: Cancel Location creation

    When I select "Add Location"
    And I enter Location details
    And I select "Cancel"
    Then the creation form should close
    And the new Location should not be created

  Scenario: Edit an existing Location and save changes

    Given an existing Location is available
    When I select the Edit icon for the Location
    And I update the Location details
    And I select "Save"
    And I reopen the Location
    Then the changes should be saved successfully
    And the updated details should appear in the Location list
    And the updated details should be retained

  Scenario: Discard unsaved changes to a Location

    Given an existing Location is available
    When I select the Edit icon for the Location
    And I modify the Location details
    And I select "Discard Changes"
    Then the unsaved changes should be discarded
    And the previously saved details should remain unchanged

  Scenario: View archived Locations

    Given archived and active Locations exist
    When I select "Show Archived"
    Then archived Locations should be displayed
    And the Location list should reflect the selected filter

  Scenario: View inactive Locations

    Given active and inactive Locations exist
    When I select "Show Inactive"
    Then inactive Locations should be displayed
    And the Location list should reflect the selected filter

  Scenario: Apply Show Archived and Show Inactive together

    Given active, inactive and archived Locations exist
    When I select "Show Archived"
    And I select "Show Inactive"
    Then the Location list should reflect both selected filters

  Scenario: Verify unsaved changes when navigating away from the location form

    Given I am logged in as an Organization Administrator
    And I am on the Locations section
    When I open the location form to create a new location or edit an existing location
    And I enter or modify the location details
    And I navigate away without clicking Create Location or Save
    And I confirm discarding the changes
    Then a confirmation popup should appear asking whether to discard the unsaved changes
    And I should be navigated away from the location form
    And the unsaved changes should not be saved

  Scenario: Verify that an archived location cannot be recreated

    Given I am logged in as an Organization Administrator
    And a location has already been created and archived
    When I navigate to the Add Location form
    And I enter the same details as the archived location
    And I click the Create Location button
    Then the application should prevent the creation of a duplicate location
    And the archived location should remain archived
