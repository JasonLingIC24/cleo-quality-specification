import type { TestSpecification } from "@cleo-quality-specification/test-specification";

import { TEST_SPECIFICATION_VERSION } from "@cleo-quality-specification/test-specification";

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
