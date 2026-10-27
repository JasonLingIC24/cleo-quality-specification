import type {
  TestSpecification,
} from "@qa-automation/test-specification";

export function generateCypress(
  specification: TestSpecification,
): string {

  const lines: string[] = [];

  lines.push(
    `describe("${specification.summary}", () => {`,
    ""
  );

  specification.scenarios.forEach(
    scenario => {

      lines.push(
        `  it("${scenario.id} ${scenario.title}", () => {`,
        "",
        "    // Given",
        "",
        "    // When",
        "",
        "    // Then",
        "",
        "  });",
        ""
      );
    },
  );

  lines.push("});");

  return lines.join("\n");
}