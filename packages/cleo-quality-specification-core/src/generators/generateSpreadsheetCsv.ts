import type { TestSpecification } from "@cleo-quality-specification/test-specification";

export function generateSpreadsheetCsv(
  specification: TestSpecification,
): string {
  const rows: string[][] = [
    ["Jira Key", "Scenario Title", "Given", "When", "Then"],
  ];

  for (const scenario of specification.scenarios) {
    rows.push([
      specification.jiraKey,
      scenario.id ?? "",
      scenario.title,
      scenario.preconditions
        .map((step, index) => `${index === 0 ? "Given" : "And"} ${step}`)
        .join("\n"),
      scenario.actions
        .map((step, index) => `${index === 0 ? "When" : "And"} ${step}`)
        .join("\n"),

      scenario.expectedResults
        .map((step, index) => `${index === 0 ? "Then" : "And"} ${step}`)
        .join("\n"),
    ]);
  }

  return rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
}
