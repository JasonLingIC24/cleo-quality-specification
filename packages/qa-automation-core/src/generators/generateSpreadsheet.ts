import type {
  TestSpecification,
} from "@qa-automation/test-specification";

export interface SpreadsheetRow {
  testCaseId: string;
  jiraKey: string;
  scenarioTitle: string;
  category: string;
  automationStatus: string;
}

export function generateSpreadsheet(
  specification: TestSpecification,
): SpreadsheetRow[] {

  return specification.scenarios.map(
    scenario => ({
      testCaseId: scenario.id,
      jiraKey: specification.jiraKey,
      scenarioTitle: scenario.title,
      category: scenario.category,
      automationStatus: scenario.automationStatus,
    }),
  );
}