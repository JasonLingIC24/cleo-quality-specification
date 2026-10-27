import type { ManualQaTicket } from "../models/ManualQaTicket.js";
import type { TestSpecification } from "@qa-automation/test-specification";
import { TEST_SPECIFICATION_VERSION } from "@qa-automation/test-specification";

export function parseManualQaTicket(ticket: ManualQaTicket): TestSpecification {
  return {
    schemaVersion: TEST_SPECIFICATION_VERSION,

    jiraKey: ticket.key,

    parentStoryKey: ticket.parentStoryKey,

    summary: ticket.summary,

    objective: ticket.objective,

    acceptanceCriteria: (ticket.acceptanceCriteria ?? []).map(
      (text, index) => ({
        id: `AC-${index + 1}`,
        text,
      }),
    ),

    scenarios: (ticket.scenarios ?? []).map((scenario) => ({
      id: scenario.id,
      title: scenario.title,
      given: scenario.given ?? [],
      when: scenario.when ?? [],
      then: scenario.then ?? [],
    })),
  };
}
