describe(
  "Feature: Exploratory testing of the creation and management of Services under a Contract - waiting on bug fixes to retest",
  () => {

    describe(
      "GIVEN I am viewing an existing contract",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I click the "Create Service" button",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Open the service creation form
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the new service form is displayed",
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
      "GIVEN an organisation has services linked in Organisation Settings",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I open the "Service" dropdown",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Verify available services in the Service dropdown
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the services linked to the organisation should be displayed",
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
              "AND I should be able to select an available service",
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
      "GIVEN I am creating a new service under a contract",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I open the "Service" dropdown",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Verify behavior when a service is not linked in Organisation Settings
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the unlinked service should not be available for selection",
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
              "AND I should not be able to associate that service with the contract",
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
          "WHEN I open the "Service Type" dropdown",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Verify available options in the Service Type dropdown
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the available service types should be displayed",
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
              "AND I should be able to select an appropriate service type",
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
          "WHEN I open the "Location" dropdown",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Verify available locations in the Location dropdown
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the created location should be available for selection",
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
              "AND I should be able to associate the selected location with the service",
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
          "WHEN I enter a valid 10-digit numeric value in the DOS Service ID field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Accept 10-digit numeric DOS Service ID
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the service should be saved successfully",
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
              "AND the DOS Service ID should be displayed correctly when viewing the service",
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
          "WHEN I leave a mandatory service field empty",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Validate mandatory service fields
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the service is not saved",
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
              "AND validation identifies the fields requiring completion",
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
          "WHEN I enter an end date and time earlier than the start date and time",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Prevent saving a service with an invalid date and time range
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the service should not be saved",
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
          "WHEN I set the service start date and time to a present/future point",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Create a service with a present/future start date
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the service should be saved successfully",
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
              "AND the service status should be "Inactive" before its start date and time",
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
          "WHEN I enable "Enable System One Configuration"",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Display System One configuration fields
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the Endpoint URL, Target ODS Code , Max Attempts field should be displayed",
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
          "WHEN I leave "<field>" empty",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Validate mandatory System One configuration fields
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the service should not be saved",
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
              "AND a validation message should indicate that "<field>" is require",
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
          "WHEN I click "Save"",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Save a service with System One configuration disabled
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the service should be saved successfully",
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
          "WHEN I enter service details",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Discard unsaved service changes
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the unsaved changes are discarded",
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
      "GIVEN I am editing service opening hours",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I set the <timeField> using the <method>",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Service opening/closing times can be selected or typed
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the value is accepted",
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
      "GIVEN I am editing service opening dates",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I set the <dateField> using the <method>",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Service opening/closing dates can be selected or typed
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the value is accepted",
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
      "GIVEN I have successfully created a service under a contract",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I view the service list",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Display saved service details in the service list
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the Status should be displayed as Active, Inactive, or Expired as applicable",
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
              "AND the Start Date should be displayed correctly",
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
              "AND the End Date should be displayed correctly",
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
              "AND the "Configure SLA" action should be available",
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
              "AND the "Archive" action should be available",
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
              "AND the "Edit" action should be available",
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
      "GIVEN a service has been created with a future start date and time",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN the configured start date and time is reached",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Automatically activate a future-dated service
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the service status should automatically change to "Active"",
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
              "AND the updated status should be displayed in the service list",
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
      "GIVEN System One configuration is enabled",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I enter an invalid Endpoint URL",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Validate an invalid System One Endpoint URL
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the invalid URL should be rejected",
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
          "WHEN I enter "<value>" as the Target ODS Code",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Validate the Target ODS Code
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the value can accept alphanumeric characters",
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
          "WHEN I enter a non-numeric value in the Max Attempts field",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Validate the Max Attempts field
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the invalid input should be rejected and an appropriate validation message should be displayed",
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
      "GIVEN a service has been saved with System One configuration enabled",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I reopen the service for editing",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Verify saved System One configuration
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the System One configuration toggle should reflect the saved state",
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
              "AND the saved Endpoint URL, Target ODS Code and   Max Attempts value should be displayed",
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
      "GIVEN I am creating or editing a service under a contract",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN “Cancel" button is clicked",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Cancel the service form
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the service form closes without saving the entered details",
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
      "GIVEN a service has been saved under a contract",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I reopen or view the service",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Verify saved service details
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the selected service is displayed correctly",
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
          "WHEN I view the services associated with that contract",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Verify service association with the contract
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the saved service appears under the correct contract",
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
      "GIVEN a service exists under a contract",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "WHEN I open the service for editing",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Requirement: EVA-2912
             * Scenario: Edit permitted service fields
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the changes are saved successfully",
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
              "AND the updated details are displayed when I reopen the service",
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
