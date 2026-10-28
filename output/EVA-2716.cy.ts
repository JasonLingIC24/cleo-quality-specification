describe(
  "Feature: Exploratory Testing of Create Service-Scoped Roles (EVA-219)",
  () => {

    describe(
      "PRECONDITION the user is viewing a role's Associated Services section",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user selects "All Services" and saves the role",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify All Services option
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the role should be associated with all services in the organisation",
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
              "AND the selected option should remain saved when the user reopens the role",
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
          "ACTION the user selects "Selected Services Only", chooses one or more active services, and saves the role",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify Selected Services Only option
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the selected services should be saved successfully",
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
              "AND the selected services should remain selected when the user reopens the role",
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
      "PRECONDITION the user has selected an active service for a role",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user saves the role and reopens it",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify service selection persists after saving
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the previously selected service should remain selected",
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
      "PRECONDITION the user has selected "Selected Services Only" for a role",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user attempts to save without selecting any service",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify validation when no service is selected
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN an appropriate validation message should be displayed",
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
              "AND the role should not be saved with an empty service selection",
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
      "PRECONDITION an expired service is displayed under "Selected Services Only"",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user attempts to select the expired service and save the role",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify an expired service cannot be associated with a role
             * Status: FAIL
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the system should prevent the expired service from being associated with the role, if expired services are not permitted by the business rules",
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
      "PRECONDITION a role has one or more services associated with it",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user deselects a service and saves the role",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify removing a previously selected service
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the removed service should no longer be associated with the role",
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
              "AND the updated selection should remain saved when the user reopens the role",
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
      "PRECONDITION a role already has services associated with it (PASS)",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user changes the selected services and saves the role",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify updating service associations
             * Status: UNKNOWN
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the updated service associations should be saved successfully",
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
              "AND the updated selections should appear when the user reopens the role",
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
      "PRECONDITION the organisation has active and expired services",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user opens the service list under "Selected Services Only"",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify expired services in the selection list
             * Status: FAIL
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN expired services should not be displayed as available options",
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
              "AND only eligible active services should be available for selection",
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
      "PRECONDITION a role has specific services selected under "Selected Services Only"",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user switches to "All Services" and saves the role",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify switching from Selected Services Only to All Services
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN "All Services" should remain selected when the user reopens the role",
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
      "PRECONDITION a role has "All Services" selected",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user switches to "Selected Services Only", selects one or more active services, and saves the role",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify switching from All Services to Selected Services Only
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN "Selected Services Only" and the selected services should remain saved when the user reopens the role",
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
      "PRECONDITION the user opens an existing role with saved service associations",
      () => {

        before(() => {

          // TODO: Create test data

        });

        context(
          "ACTION the user saves the role without making any changes",
          () => {

            beforeEach(() => {

              // TODO: Navigate to page

            });


            /**
             * Jira Ticket: EVA-2716
             * Scenario: Verify saving a role without making changes
             * Status: PASS
             *
             * TODO:
             * - Create page objects
             * - Implement actions
             * - Implement assertions
             */
            it(
              "THEN the role should be saved without errors",
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
              "AND the existing service associations should remain unchanged",
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
