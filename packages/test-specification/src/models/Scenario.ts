import type { ExpectedResult } from "./ExpectedResult.js";

export interface Scenario {
  id: string;

  requirementId?: string;

  title: string;

  tags?: string[];

  preconditions: string[];

  actions: string[];

  expectedResults: ExpectedResult[];

  examples?: string[];
}
