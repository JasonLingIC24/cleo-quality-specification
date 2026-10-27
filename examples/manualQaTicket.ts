import type {
  ManualQaTicket,
} from "../packages/qa-automation-core/src/index.js";

export const manualQaTicket: ManualQaTicket = {
  key: "EVA-419",

  parentStoryKey: "EVA-418",

  summary: "Login functionality",

  objective:
    "Verify user authentication functionality",

  acceptanceCriteria: [
    "User can login using valid credentials",
    "User receives an error when credentials are invalid",
  ],

  scenarios: [
    {
      id: "TC-001",

      title: "Login using valid credentials",

      given: [
        "I am on the login page",
      ],

      when: [
        "I enter valid credentials",
      ],

      then: [
        "I am logged in successfully",
      ],

      result: "PASS",
    },

    {
      id: "TC-002",

      title: "Login using invalid credentials",

      given: [
        "I am on the login page",
      ],

      when: [
        "I enter invalid credentials",
      ],

      then: [
        "I should see an authentication error",
      ],

      result: "PASS",
    },
  ],
};