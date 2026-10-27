import type {
  TestSpecification,
  Scenario
} from "@qa-automation/test-specification";

export function generateFeature(
  specification: TestSpecification,
): string {

  const lines: string[] = [];

  lines.push(
    `Feature: ${specification.summary}`,
    ""
  );

  specification.scenarios.forEach(
    (scenario) => {

      lines.push(
        `Scenario: ${scenario.title}`
      );

      scenario.given.forEach(
        (step) => lines.push(
          `  Given ${step}`
        )
      );

      scenario.when.forEach(
        (step) => lines.push(
          `  When ${step}`
        )
      );

      scenario.then.forEach(
        (step) => lines.push(
          `  Then ${step}`
        )
      );

      lines.push("");
    }
  );

  return lines.join("\n");
}