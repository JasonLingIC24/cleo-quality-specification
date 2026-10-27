import type { TestSpecification }
  from "@qa-automation/test-specification";

import type { ManualQaTicket }
  from "../models/ManualQaTicket.js";

export function parseManualQaTicket(
  ticket: ManualQaTicket,
): TestSpecification {

  return {
    jiraKey: ticket.key,

    summary: ticket.summary,

    objective: ticket.objective,

    acceptanceCriteria:
      ticket.acceptanceCriteria.map(
        (ac, index) => ({
          id: `AC-${index + 1}`,
          text: ac,
        }),
      ),

    scenarios:
      ticket.scenarios.map(
        (scenario) => ({
          id: scenario.id,

          title: scenario.title,

          category: "HAPPY_PATH",

          given: scenario.given,

          when: scenario.when,

          then: scenario.then,

          automationStatus: "MANUAL",

          jiraKey: ticket.key,
        }),
      ),
  };
}
