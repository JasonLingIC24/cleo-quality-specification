import {
  TEST_SPECIFICATION_VERSION,
  type TestSpecification,
} from "@cleo-quality-specification/test-specification";
import type { JiraIssue } from "../jira/JiraIssue.js";
import { adfToText } from "./adfToText.js";
import { parseGherkinText } from "./gherkinParser.js";

export function parseJiraIssue(issue: JiraIssue): TestSpecification {
  const text = adfToText(issue.description);
  const parsed = parseGherkinText(text);

  return {
    schemaVersion: TEST_SPECIFICATION_VERSION,

    metadata: {
      generator: "cleo-quality-specification",
      generatorVersion: "0.1.0",
      generatedAt: new Date().toISOString(),
      sourceType: "jira-story",
    },

    jiraKey: issue.key,

    summary: parsed.feature ?? issue.summary,

    acceptanceCriteria: parsed.scenarios.map((scenario, index) => ({
      id: `AC-${index + 1}`,
      text: scenario.title,
    })),

    background: parsed.background,

    scenarios: parsed.scenarios.map((scenario, index) => ({
      id: `MA-${issue.key}-${String(index + 1).padStart(3, "0")}`,

      requirementId: issue.key,

      title: scenario.title,

      preconditions: scenario.given,

      actions: scenario.when,

      expectedResults: scenario.then,

      examples: scenario.examples,

      tags: [],
    })),
  };
}
