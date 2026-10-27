import type { TestSpecification } from "@qa-automation/test-specification";

export function generateSpreadsheet(specification: TestSpecification) {
  return specification.scenarios.map((scenario) => ({
    testCaseId: scenario.id,
    jiraKey: specification.jiraKey,
    scenarioTitle: scenario.title,
  }));
}
