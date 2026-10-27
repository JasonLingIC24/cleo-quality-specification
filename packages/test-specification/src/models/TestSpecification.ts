import { AcceptanceCriterion } from "./AcceptanceCriterion.js";
import { Scenario } from "./Scenario.js";
import type { SpecificationMetadata } from "./SpecificationMetadata.js";

export interface TestSpecification {
  schemaVersion: string;

  metadata: SpecificationMetadata;

  jiraKey: string;

  parentStoryKey?: string;

  summary: string;

  objective?: string;

  acceptanceCriteria: AcceptanceCriterion[];

  scenarios: Scenario[];
}
