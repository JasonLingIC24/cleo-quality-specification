import type {
  ExpectedResult,
  TestSpecification,
} from "@cleo-quality-specification/test-specification";

interface ScenarioDefinition {
  id: string;
  title: string;
  requirementId?: string;
  expectedResults: ExpectedResult[];
  examples?: string[];
}

interface WhenGroup {
  when: string;
  scenarios: ScenarioDefinition[];
}

interface GivenGroup {
  given: string;
  whenGroups: WhenGroup[];
}

function quote(text: string): string {
  return `\`${text.replace(/`/g, "\\`")}\``;
}

export function generateCypress(specification: TestSpecification): string {
  const lines: string[] = [];

  const givenGroups = new Map<string, GivenGroup>();

  /*
   * ============================================================
   * BUILD HIERARCHY
   *
   * GIVEN
   *   └── WHEN
   *         └── SCENARIO
   * ============================================================
   */

  for (const scenario of specification.scenarios) {
    const given = scenario.preconditions[0] ?? "the system is in a valid state";

    const when = scenario.actions[0] ?? "an action is performed";

    if (!givenGroups.has(given)) {
      givenGroups.set(given, {
        given,
        whenGroups: [],
      });
    }

    const givenGroup = givenGroups.get(given)!;

    let whenGroup = givenGroup.whenGroups.find((group) => group.when === when);

    if (!whenGroup) {
      whenGroup = {
        when,
        scenarios: [],
      };

      givenGroup.whenGroups.push(whenGroup);
    }

    whenGroup.scenarios.push({
      id: scenario.id,
      title: scenario.title,
      requirementId: scenario.requirementId,
      expectedResults: scenario.expectedResults,
      examples: scenario.examples,
    });
  }

  /*
   * ============================================================
   * FILE HEADER
   * ============================================================
   */

  lines.push(
    "describe(",
    `  ${quote(`Feature: ${specification.summary}`)},`,
    "  () => {",
    "",
  );

  /*
   * ============================================================
   * GIVEN GROUPS
   * ============================================================
   */

  for (const givenGroup of givenGroups.values()) {
    lines.push(
      "    describe(",
      `      ${quote(`GIVEN ${givenGroup.given}`)},`,
      "      () => {",
      "",
      "        before(() => {",
      "",
      "          // TODO: Create test data",
      "",
      "        });",
      "",
    );

    /*
     * ============================================================
     * WHEN GROUPS
     * ============================================================
     */

    for (const whenGroup of givenGroup.whenGroups) {
      lines.push(
        "        context(",
        `          ${quote(`WHEN ${whenGroup.when}`)},`,
        "          () => {",
        "",
        "            beforeEach(() => {",
        "",
        "              // TODO: Navigate to page",
        "",
        "            });",
        "",
      );

      /*
       * ============================================================
       * SCENARIOS
       * ============================================================
       */

      for (const scenario of whenGroup.scenarios) {
        lines.push(
          "",
          "            /**",
          `             * Requirement: ${scenario.requirementId ?? specification.jiraKey}`,
          `             * Scenario: ${scenario.title}`,
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
            `              ${quote(`[${expectedResult.id}] ${keyword} ${expectedResult.text}`)},`,

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
