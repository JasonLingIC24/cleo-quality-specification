import type {
  JiraStory,
} from "../packages/qa-automation-core/src/models/JiraStory.js";

export const loginStory: JiraStory = {
  key: "EVA-418",

  summary: "User can login with valid credentials",

  description:
    "As a user I want to login so that I can access the application",

  acceptanceCriteria: [
    "User can login with valid credentials",
    "User receives an error for invalid credentials",
  ],
};