import type { TestSpecification } from "@cleo-quality-specification/test-specification";

export function generateSpreadsheetCsv(
  specification: TestSpecification,
): string {
  const rows: string[][] = [
    ["Jira Key", "Test Case ID", "Scenario Title", "Given", "When", "Then"],
  ];

  for (const scenario of specification.scenarios) {
    scenario.expectedResults.forEach((expectedResult, index) => {
      rows.push([
        specification.jiraKey,

        expectedResult.id,

        scenario.title,

        scenario.preconditions
          .map(
            (step, stepIndex) => `${stepIndex === 0 ? "Given" : "And"} ${step}`,
          )
          .join("\n"),

        scenario.actions
          .map(
            (step, stepIndex) => `${stepIndex === 0 ? "When" : "And"} ${step}`,
          )
          .join("\n"),

        `${index === 0 ? "Then" : "And"} ${expectedResult.text}`,
      ]);
    });
  }

  return rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
}
