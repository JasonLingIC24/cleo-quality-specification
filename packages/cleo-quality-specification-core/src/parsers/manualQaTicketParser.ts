import type { ManualQaTicket } from "../models/ManualQaTicket.js";
import type { TestSpecification } from "@cleo-quality-specification/test-specification";
import { TEST_SPECIFICATION_VERSION } from "@cleo-quality-specification/test-specification";

export function parseManualQaTicket(ticket: ManualQaTicket): TestSpecification {
  return {
    schemaVersion: TEST_SPECIFICATION_VERSION,

    metadata: {
      generator: "cleo-quality-specification",
      generatorVersion: "0.1.0",
      generatedAt: new Date().toISOString(),
      sourceType: "manual-ticket",
    },

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

      preconditions: scenario.given ?? [],

      actions: scenario.when ?? [],

      expectedResults: scenario.then ?? [],

      examples: [],
    })),
  };
}
