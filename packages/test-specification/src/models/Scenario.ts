export interface Scenario {
  id: string;

  title: string;

  status?: "PASS" | "FAIL";

  preconditions: string[];

  actions: string[];

  expectedResults: string[];

  examples?: string[];
}
