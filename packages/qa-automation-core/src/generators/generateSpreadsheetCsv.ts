import type {
  TestSpecification,
} from "@qa-automation/test-specification";

export function generateSpreadsheetCsv(
  specification: TestSpecification,
): string {

  const rows: string[] = [];

  rows.push(
    "TestCaseId,JiraKey,Scenario,Category,Status",
  );

  specification.scenarios.forEach(
    (scenario) => {
      rows.push(
        [
          scenario.id,
          specification.jiraKey,
          `"${scenario.title}"`,
          scenario.category,
          scenario.automationStatus,
        ].join(","),
      );
    },
  );

  return rows.join("\n");
}
