import type { TestSpecification } from "@qa-automation/test-specification";
import { TEST_SPECIFICATION_VERSION } from "@qa-automation/test-specification";
import type { JiraStory } from "../models/JiraStory.js";

export function parseJiraStory(story: JiraStory): TestSpecification {
  return {
    schemaVersion: TEST_SPECIFICATION_VERSION,

    metadata: {
      generator: "qa-automation",
      generatorVersion: "0.1.0",
      generatedAt: new Date().toISOString(),
      sourceType: "jira-story",
    },

    jiraKey: story.key,

    summary: story.summary,

    acceptanceCriteria: story.acceptanceCriteria.map((ac, index) => ({
      id: `AC-${index + 1}`,
      text: ac,
    })),

    scenarios: [],
  };
}
