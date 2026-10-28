import type { TestSpecification } from "@qa-automation/test-specification";

interface ScenarioDefinition {
  title: string;
  status?: "PASS" | "FAIL";
  expectedResults: string[];
  examples?: string[];
}

interface ActionGroup {
  action: string;
  scenarios: ScenarioDefinition[];
}

interface PreconditionsGroup {
  precondition: string;
  actionGroups: ActionGroup[];
}

export function generateCypress(specification: TestSpecification): string {
  const lines: string[] = [];

  const preconditionGroups = new Map<string, PreconditionsGroup>();

  /*
   * Build hierarchy:
   *
   * PRECONDITION
   *   └── ACTION
   *         └── SCENARIO
   */
  for (const scenario of specification.scenarios) {
    const precondition =
      scenario.preconditions[0] ?? "the system is in a valid state";

    const action = scenario.actions[0] ?? "an action is performed";

    if (!preconditionGroups.has(precondition)) {
      preconditionGroups.set(precondition, {
        precondition,
        actionGroups: [],
      });
    }

    const preconditionGroup = preconditionGroups.get(precondition)!;

    let actionGroup = preconditionGroup.actionGroups.find(
      (group) => group.action === action,
    );

    if (!actionGroup) {
      actionGroup = {
        action,
        scenarios: [],
      };

      preconditionGroup.actionGroups.push(actionGroup);
    }

    actionGroup.scenarios.push({
      title: scenario.title,
      status: scenario.status,
      expectedResults: scenario.expectedResults,
      examples: scenario.examples,
    });
  }

  lines.push(
    "describe(",
    `  "Feature: ${specification.summary}",`,
    "  () => {",
    "",
  );

  for (const preconditionGroup of preconditionGroups.values()) {
    lines.push(
      "    describe(",
      `      "PRECONDITION ${preconditionGroup.precondition}",`,
      "      () => {",
      "",
      "        before(() => {",
      "",
      "          // TODO: Create test data",
      "",
      "        });",
      "",
    );

    for (const actionGroup of preconditionGroup.actionGroups) {
      lines.push(
        "        context(",
        `          "ACTION ${actionGroup.action}",`,
        "          () => {",
        "",
        "            beforeEach(() => {",
        "",
        "              // TODO: Navigate to page",
        "",
        "            });",
        "",
      );

      for (const scenario of actionGroup.scenarios) {
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
          `             * Status: ${scenario.status ?? "UNKNOWN"}`,
        );

        if (scenario.examples && scenario.examples.length > 0) {
          lines.push(
            `             * Examples: ${scenario.examples.join(", ")}`,
          );
        }

        lines.push(
          "             *",
          "             * TODO:",
          "             * - Create page objects",
          "             * - Implement actions",
          "             * - Implement assertions",
          "             */",
        );

        let firstAssertion = true;

        for (const expectedResult of scenario.expectedResults) {
          const keyword = firstAssertion ? "THEN" : "AND";

          firstAssertion = false;

          lines.push(
            "            it(",
            `              "${keyword} ${expectedResult}",`,
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
