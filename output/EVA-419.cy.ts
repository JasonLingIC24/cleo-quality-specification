describe(
  "Feature: Login functionality",
  () => {

    describe(
      "GIVEN I am on the login page",
      () => {

        context(
          "WHEN I enter valid credentials",
          () => {


            /**
             * Jira Ticket: EVA-419
             * Scenario: Valid login
             */
            it(
              "THEN I am logged in successfully",
              () => {

                // TODO: Implement test

              },
            );

            it(
              "AND I see the dashboard",
              () => {

                // TODO: Implement test

              },
            );

          },
        );

        context(
          "WHEN I enter invalid credentials",
          () => {


            /**
             * Jira Ticket: EVA-419
             * Scenario: Invalid login
             */
            it(
              "THEN I see an authentication error",
              () => {

                // TODO: Implement test

              },
            );

            it(
              "AND I remain on the login page",
              () => {

                // TODO: Implement test

              },
            );

          },
        );

      },
    );

  },
);
