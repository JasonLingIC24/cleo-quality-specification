import type { TestSpecification } from "@qa-automation/test-specification";

import { TEST_SPECIFICATION_VERSION } from "@qa-automation/test-specification";

export function validateSpecification(specification: TestSpecification): void {
  if (specification.schemaVersion !== TEST_SPECIFICATION_VERSION) {
    throw new Error(
      [
        "Unsupported specification version.",
        `Expected: ${TEST_SPECIFICATION_VERSION}`,
        `Actual: ${specification.schemaVersion}`,
      ].join(" "),
    );
  }
}
