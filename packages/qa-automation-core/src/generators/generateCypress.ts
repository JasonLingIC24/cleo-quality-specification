import type {
  TestSpecification,
} from "@qa-automation/test-specification";

export function generateCypress(
  specification: TestSpecification,
): string {

  const lines: string[] = [];

  lines.push(
    `describe(`,
    `  "Feature: ${specification.summary}",`,
    `  () => {`,
    "",
  );

  specification.scenarios.forEach(
    (scenario) => {

      const given =
        scenario.given[0] ??
        "the system is in a valid state";

      const when =
        scenario.when[0] ??
        "an action is performed";

      lines.push(
        `    describe(`,
        `      "GIVEN ${given}",`,
        `      () => {`,
        "",
        `        context(`,
        `          "WHEN ${when}",`,
        `          () => {`,
        "",
      );

      scenario.then.forEach(
        (thenStep) => {

          lines.push(
            `            it(`,
            `              "THEN ${thenStep}",`,
            `              () => {`,
            "",
            `                // TODO: Implement test`,
            "",
            `              },`,
            `            );`,
            "",
          );
        },
      );

      lines.push(
        `          },`,
        `        );`,
        "",
        `      },`,
        `    );`,
        "",
      );
    },
  );

  lines.push(
    `  },`,
    `);`,
  );

  return lines.join("\n");
}