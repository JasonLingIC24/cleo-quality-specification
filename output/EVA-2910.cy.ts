describe(
  "Feature: Creation and Management of Locations",
  () => {

    describe(
      "PRECONDITION I am on the login page",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION I enter valid Organization Administrator credentials",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify login with valid Organization Administrator credentials
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN I should be logged in successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND I should be redirected to the Service Provider page",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter invalid login credentials",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify login with invalid credentials
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN I should not be logged in",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND I should remain on the login page",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the appropriate login error message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

    describe(
      "PRECONDITION I am logged in as an Organization Administrator",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION I click the Locations icon",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify navigation to the Locations section
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the Locations section should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the Location list and available actions should be visible",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I open the location form to create a new location or edit an existing location",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify unsaved changes when navigating away from the location form
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN a confirmation popup should appear asking whether to discard the unsaved changes",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND I should be navigated away from the location form",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the unsaved changes should not be saved",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I navigate to the Add Location form",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify that an archived location cannot be recreated
             * Status: FAIL
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the application should prevent the creation of a duplicate location",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the archived location should remain archived",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

    describe(
      "PRECONDITION the system is in a valid state",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION I select "Add Location"",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Create a Location with valid details
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the Location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the Location should appear in the Location list with the correct details",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Create a Location with each supported Location Type
             * Status: PASS
             * Examples: 
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the Location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the selected Location Type should be displayed correctly",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Validate mandatory fields during Location creation
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the Location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND appropriate validation messages should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Cancel Location creation
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the creation form should close",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the new Location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

    describe(
      "PRECONDITION the user is on the Add Location page",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user leaves the Location Name field empty",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify location creation with an empty Location Name
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND an appropriate validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION the user enters only whitespace in the Location Name field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify location creation with whitespace-only Location Name
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND an appropriate validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION the user enters a Location Name containing numbers",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Location Name with numeric characters
             * Status: PASS
             * Examples: "Clinic123"
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION the user enters a Location Name containing only numbers",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Location Name with numeric-only input
             * Status: FAIL
             * Examples: "123456"
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND an appropriate validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION the user enters a Location Name containing special characters",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Location Name containing special characters
             * Status: PASS
             * Examples: "St. Mary's Clinic"
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION the user enters a Location Name containing letters, numbers, and special characters",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Location Name containing alphanumeric and special characters
             * Status: PASS
             * Examples: "Clinic@123"
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION the user enters a Location Name containing only special characters",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Location Name containing only special characters
             * Status: FAIL
             * Examples: "!!!@@@"
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND an appropriate validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION the user enters a Location Name within the permitted character limit",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Location Name character length validation
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the system should validate the Location Name according to the configured character limit",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND display an appropriate validation message if the limit is exceeded",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND create the location if all validation rules are satisfied",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

    describe(
      "PRECONDITION I am on the Add Location page",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION I enter a valid address in the Address field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Address field with a valid value
             * Status: PASS
             * Examples: 10 High Street, London
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the entered address should be displayed in the Locations list",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I leave the Address field empty",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Address field with an empty value
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the Address required validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter only whitespace in the Address field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Address field with whitespace-only input
             * Status: FAIL
             * Examples: "     "
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the Address validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter an address containing letters and numbers in the Address field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Address field with alphanumeric characters
             * Status: PASS
             * Examples: 10 High Street
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the entered address should be displayed in the Locations list",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter an address containing special characters in the Address field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Address field containing special characters
             * Status: PASS
             * Examples: 10 High Street, St. John's Road
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the entered address should be displayed in the Locations list",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter only special characters in the Address field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Address field containing only special characters
             * Status: FAIL
             * Examples: "!!!@@@###"
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the Address validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter an address within or exceeding the permitted character limit",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Address field character-length validation
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the address should be accepted when its length is within the permitted limit",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the location should not be created when the address exceeds the permitted limit",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the actual character-length validation message should be displayed when the limit is exceeded",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter a valid UK postcode in the Post Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Post Code field with a valid value
             * Status: PASS
             * Examples: SW1A 1AA
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the entered postcode should be displayed in the Locations list",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I leave the Post Code field empty",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Post Code field with an empty value
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the Post code validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter only whitespace in the Post Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Post Code field with whitespace-only input
             * Status: PASS
             * Examples: "     "
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the Post code validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter an alphanumeric value in the Post Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Post Code field with alphanumeric characters
             * Status: PASS
             * Examples: M1 1AE
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the postcode should be accepted if it is a valid UK postcode",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter only special characters in the Post Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Post Code field containing only special characters
             * Status: PASS
             * Examples: "!!!@@@###"
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the actual Post Code validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter a postcode within or exceeding the permitted character limit",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Post Code field character-length validation
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the postcode should be accepted when it meets the permitted length and format",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the actual validation message should be displayed if the postcode is invalid",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter a valid UK telephone number in the Telephone Number field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Telephone Number field with a valid UK telephone number
             * Status: PASS
             * Examples: 020 7946 0958
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I leave the Telephone Number field empty",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Telephone Number field with an empty value
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND a validation message should be displayed for the Telephone Number field",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter only whitespace in the Telephone Number field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Telephone Number field with whitespace-only input
             * Status: PASS
             * Examples: "     "
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND a validation message should be displayed for the Telephone Number field",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter only special characters in the Telephone Number field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Telephone Number field containing only special characters
             * Status: PASS
             * Examples: !!!@@@###
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the application should display a validation message if the value is invalid",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter only alphabetic characters in the Telephone Number field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Telephone Number field containing only alphabets
             * Status: PASS
             * Examples: ABCDEFGHIJK
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the application should display a validation message if the value is invalid",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter a telephone number exceeding the permitted character limit",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify Telephone Number field length validation
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the actual length-validation message should be displayed for the Telephone Number field",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter a valid ODS Code in the ODS Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify ODS Code field with a valid value
             * Status: PASS
             * Examples: RJYW
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I leave the ODS Code field empty",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify ODS Code field with an empty value
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created if ODS Code is mandatory",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND a validation message should be displayed for the ODS Code field",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter only whitespace in the ODS Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify ODS Code field with whitespace-only input
             * Status: FAIL
             * Examples: "     "
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the actual validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter only special characters in the ODS Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify ODS Code field with special characters
             * Status: FAIL
             * Examples: !!!@@@
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the actual validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter alphabetic characters in the ODS Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify ODS Code field with alphabetic-only input
             * Status: UNKNOWN
             * Examples: ABCDE
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter numeric-only input in the ODS Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify ODS Code field with numeric-only input
             * Status: FAIL
             * Examples: 12345
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the actual validation message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter alphanumeric characters in the ODS Code field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify ODS Code field with alphanumeric input
             * Status: UNKNOWN
             * Examples: ABC123
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should be created successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

        context(
          "ACTION I enter an ODS Code exceeding the permitted character limit",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Verify ODS Code field length validation
             * Status: FAIL
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the location should not be created",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the actual length-validation error message should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

    describe(
      "PRECONDITION a Location with an existing name or ODS Code is available",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION I select "Add Location"",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Handle duplicate Location details
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the application should handle duplicate values according to the business rules",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND duplicate records should not be created if duplicates are prohibited",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

    describe(
      "PRECONDITION an existing Location is available",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION I select the Edit icon for the Location",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Edit an existing Location and save changes
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the changes should be saved successfully",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the updated details should appear in the Location list",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the updated details should be retained",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Discard unsaved changes to a Location
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the unsaved changes should be discarded",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the previously saved details should remain unchanged",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

    describe(
      "PRECONDITION archived and active Locations exist",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION I select "Show Archived"",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: View archived Locations
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN archived Locations should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the Location list should reflect the selected filter",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

    describe(
      "PRECONDITION active and inactive Locations exist",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION I select "Show Inactive"",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: View inactive Locations
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN inactive Locations should be displayed",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

            it(
              "AND the Location list should reflect the selected filter",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

    describe(
      "PRECONDITION active, inactive and archived Locations exist",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION I select "Show Archived"",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2910
             * Scenario: Apply Show Archived and Show Inactive together
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the Location list should reflect both selected filters",
              () => {

                // Arrange

                // TODO: Setup test data

                // Act

                // TODO: Perform action

                // Assert

                // TODO: Verify expected outcome

              },
            );

          },
        );

      },
    );

  },
);
