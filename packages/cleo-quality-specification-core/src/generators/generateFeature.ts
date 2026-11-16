import type { TestSpecification } from "@cleo-quality-specification/test-specification";

export function generateFeature(specification: TestSpecification): string {
  const lines: string[] = [];

  lines.push("@manual");
  lines.push(`Feature: ${specification.summary}`);

  lines.push("");

  lines.push("  # Description:");
  lines.push(`  # ${specification.summary}`);
  lines.push("");

  if (specification.scenarios.length > 0) {
    lines.push("  # Scope:");

    specification.scenarios.forEach((scenario) => {
      lines.push(`  # - ${scenario.title}`);
    });

    lines.push("");
  }

  if (specification.background && specification.background.length > 0) {
    lines.push("  # Preconditions:");

    specification.background.forEach((step) => {
      lines.push(`  # - ${step}`);
    });

    lines.push("");
  }

  for (const scenario of specification.scenarios) {
    lines.push(`  Scenario: ${scenario.title}`);

    lines.push("");

    scenario.preconditions.forEach((step, index) => {
      lines.push(`    ${index === 0 ? "Given" : "And"} ${step}`);
    });

    scenario.actions.forEach((step, index) => {
      lines.push(`    ${index === 0 ? "When" : "And"} ${step}`);
    });

    scenario.expectedResults.forEach((step, index) => {
      lines.push(`    ${index === 0 ? "Then" : "And"} ${step}`);
    });

    if (scenario.examples && scenario.examples.length > 0) {
      lines.push("");
      lines.push("    Examples:");

      scenario.examples.forEach((example) => {
        lines.push(`      | ${example} |`);
      });
    }

    lines.push("");
  }

  return lines.join("\n");
}
