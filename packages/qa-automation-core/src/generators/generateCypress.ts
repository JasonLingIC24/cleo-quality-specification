import type {
  TestSpecification,
  Scenario,
} from "@qa-automation/test-specification";

interface ScenarioDefinition {
  title: string;
  then: string[];
}

interface WhenGroup {
  when: string;
  scenarios: ScenarioDefinition[];
}

interface GivenGroup {
  given: string;
  whenGroups: WhenGroup[];
}

export function generateCypress(specification: TestSpecification): string {
  const lines: string[] = [];

  const givenGroups = new Map<string, GivenGroup>();

  /*
   * Build hierarchy:
   *
   * GIVEN
   *   └── WHEN
   *         └── Scenario
   */
  for (const scenario of specification.scenarios) {
    const given = scenario.given[0] ?? "the system is in a valid state";

    const when = scenario.when[0] ?? "an action is performed";

    if (!givenGroups.has(given)) {
      givenGroups.set(given, {
        given,
        whenGroups: [],
      });
    }

    const givenGroup = givenGroups.get(given)!;

    let whenGroup = givenGroup.whenGroups.find((w) => w.when === when);

    if (!whenGroup) {
      whenGroup = {
        when,
        scenarios: [],
      };

      givenGroup.whenGroups.push(whenGroup);
    }

    whenGroup.scenarios.push({
      title: scenario.title,
      then: scenario.then,
    });
  }

  lines.push(
    "describe(",
    `  "Feature: ${specification.summary}",`,
    "  () => {",
    "",
  );

  for (const givenGroup of givenGroups.values()) {
    lines.push(
      "    describe(",
      `      "GIVEN ${givenGroup.given}",`,
      "      () => {",
      "",
      "        before(() => {",
      "",
      "          // TODO: Create test data",
      "",
      "        });",
      "",
    );

    for (const whenGroup of givenGroup.whenGroups) {
      lines.push(
        "        context(",
        `          "WHEN ${whenGroup.when}",`,
        "          () => {",
        "",
        "            beforeEach(() => {",
        "",
        "              // TODO: Navigate to page",
        "",
        "            });",
        "",
      );

      for (const scenario of whenGroup.scenarios) {
        lines.push(
          "",
          "            /**",
          `             * Jira Ticket: ${specification.jiraKey}`,
        );

        if (specification.parentStoryKey) {
          lines.push(
            `             * Parent Story: ${specification.parentStoryKey}`,
          );
        }

        lines.push(
          `             * Scenario: ${scenario.title}`,
          "             *",
          "             * TODO:",
          "             * - Create page objects",
          "             * - Implement actions",
          "             * - Implement assertions",
          "             */",
        );

        let firstAssertion = true;

        for (const thenStep of scenario.then) {
          const keyword = firstAssertion ? "THEN" : "AND";

          firstAssertion = false;

          lines.push(
            "            it(",
            `              "${keyword} ${thenStep}",`,
            "              () => {",
            "",
            "                // Arrange",
            "",
            "                // TODO: Setup test data",
            "",
            "                // Act",
            "",
            "                // TODO: Perform action",
            "",
            "                // Assert",
            "",
            "                // TODO: Verify expected outcome",
            "",
            "              },",
            "            );",
            "",
          );
        }
      }

      lines.push("          },", "        );", "");
    }

    lines.push("      },", "    );", "");
  }

  lines.push("  },", ");", "");

  return lines.join("\n");
}
