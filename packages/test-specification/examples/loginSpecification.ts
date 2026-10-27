import { TestSpecification, TEST_SPECIFICATION_VERSION } from "../src/index.js";

export const loginSpecification: TestSpecification = {
  schemaVersion: TEST_SPECIFICATION_VERSION,

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

      given: ["I am on the login page"],

      when: ["I enter valid credentials"],

      then: ["I am logged in successfully"],
    },
  ],
};
