import type { TestSpecification } from "@qa-automation/test-specification";

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
      scenario.given.join(" | "),
      scenario.when.join(" | "),
      scenario.then.join(" | "),
    ]);
  }

  return rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n");
}
