import {
  parseJiraStory,
} from "../packages/qa-automation-core/src/index.js";

import {
  loginStory,
} from "./loginStory.js";

const specification =
  parseJiraStory(loginStory);

console.log(
  JSON.stringify(
    specification,
    null,
    2,
  ),
);