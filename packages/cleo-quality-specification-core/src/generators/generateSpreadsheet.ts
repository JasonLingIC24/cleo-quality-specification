import type { TestSpecification } from "@cleo-quality-specification/test-specification";

export function generateSpreadsheet(specification: TestSpecification) {
  return specification.scenarios.flatMap((scenario) =>
    scenario.expectedResults.map((expectedResult) => ({
      testCaseId: expectedResult.id,
      jiraKey: specification.jiraKey,
      scenarioTitle: scenario.title,
      expectedResult: expectedResult.text,
    })),
  );
}
