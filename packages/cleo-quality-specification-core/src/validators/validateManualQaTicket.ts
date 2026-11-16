import type { ManualQaTicket } from "../models/ManualQaTicket.js";

import type { ValidationResult } from "../models/ValidationResult.js";

export function validateManualQaTicket(
  ticket: ManualQaTicket,
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!ticket.key?.trim()) {
    errors.push("Ticket key is required");
  }

  if (!ticket.acceptanceCriteria?.length) {
    warnings.push("No acceptance criteria supplied");
  }

  if (!ticket.summary?.trim()) {
    errors.push("Summary is required");
  }

  if (!ticket.scenarios?.length) {
    errors.push("At least one scenario is required");
  }

  const titles = new Set<string>();

  ticket.scenarios?.forEach((scenario, index) => {
    const scenarioNumber = index + 1;

    if (!scenario.title?.trim()) {
      errors.push(`Scenario ${scenarioNumber}: title is required`);
    }

    if (titles.has(scenario.title)) {
      errors.push(`Duplicate scenario title: ${scenario.title}`);
    }

    titles.add(scenario.title);

    if (!scenario.given?.length) {
      errors.push(`Scenario "${scenario.title}": Given step missing`);
    }

    if (!scenario.when?.length) {
      errors.push(`Scenario "${scenario.title}": When step missing`);
    }

    if (!scenario.then?.length) {
      errors.push(`Scenario "${scenario.title}": Then step missing`);
    }
  });

  if (!ticket.acceptanceCriteria?.length) {
    warnings.push("No acceptance criteria supplied");
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
  };
}
