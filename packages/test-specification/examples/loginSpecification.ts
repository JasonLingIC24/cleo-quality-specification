import { TestSpecification, TEST_SPECIFICATION_VERSION } from "../src/index.js";

export const loginSpecification: TestSpecification = {
  schemaVersion: TEST_SPECIFICATION_VERSION,

  metadata: {
    generator: "qa-automation",
    generatorVersion: "0.1.0",
    generatedAt: "2026-10-27T00:00:00.000Z",
    sourceType: "manual-ticket",
  },

  jiraKey: "EVA-418",

  summary: "Login functionality",

  acceptanceCriteria: [
    {
      id: "AC-1",
      text: "User can login using valid credentials",
    },
  ],

  scenarios: [
    {
      id: "TC-001",

      title: "Login using valid credentials",

      preconditions: ["I am on the login page"],

      actions: ["I enter valid credentials"],

      expectedResults: ["I am logged in successfully"],
    },
  ],
};
