import type {
  TestSpecification,
} from "@qa-automation/test-specification";

import type {
  JiraStory,
} from "../models/JiraStory.js";

export function parseJiraStory(
  story: JiraStory,
): TestSpecification {

  return {
    jiraKey: story.key,

    summary: story.summary,

    acceptanceCriteria:
      story.acceptanceCriteria.map(
        (ac, index) => ({
          id: `AC-${index + 1}`,
          text: ac,
        }),
      ),

    scenarios: [],
  };
}