export interface ManualScenario {
  id: string;

  title: string;

  given: string[];

  when: string[];

  then: string[];

  result?: "PASS" | "FAIL" | "NOT_RUN";
}