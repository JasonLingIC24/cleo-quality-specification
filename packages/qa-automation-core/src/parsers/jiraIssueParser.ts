import {
  TEST_SPECIFICATION_VERSION,
  type TestSpecification,
} from "@qa-automation/test-specification";
import type { JiraIssue } from "../jira/JiraIssue.js";
import { adfToText } from "./adfToText.js";
import { parseGherkinText } from "./gherkinParser.js";
import fs from "fs";

export function parseJiraIssue(issue: JiraIssue): TestSpecification {
  const text = adfToText(issue.description);
  fs.writeFileSync(`output/${issue.key}.raw.txt`, text);

  const parsed = parseGherkinText(text);

  return {
    schemaVersion: TEST_SPECIFICATION_VERSION,

    metadata: {
      generator: "qa-automation",
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
      id: `SC-${String(index + 1).padStart(3, "0")}`,

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
