import type { TestSpecification } from "@cleo-quality-specification/test-specification";

export function generateSpreadsheet(specification: TestSpecification) {
  return specification.scenarios.map((scenario) => ({
    testCaseId: scenario.id,
    jiraKey: specification.jiraKey,
    scenarioTitle: scenario.title,
  }));
}
