import { AcceptanceCriterion } from "./AcceptanceCriterion.js";
import { Scenario } from "./Scenario.js";

export interface TestSpecification {
  schemaVersion: string;

  jiraKey: string;

  parentStoryKey?: string;

  summary: string;

  objective?: string;

  acceptanceCriteria: AcceptanceCriterion[];

  scenarios: Scenario[];
}
