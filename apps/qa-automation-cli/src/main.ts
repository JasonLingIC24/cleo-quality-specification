import {
  generateFeature,
  generateSpreadsheet,
  generateCypress,
} from "../../../packages/qa-automation-core/dist/index.js";

import {
  loginSpecification,
} from "../../../packages/test-specification/dist/examples/loginSpecification.js";

console.log("=================================");
console.log("FEATURE");
console.log("=================================");

console.log(
  generateFeature(loginSpecification),
);

console.log();

console.log("=================================");
console.log("SPREADSHEET");
console.log("=================================");

console.log(
  JSON.stringify(
    generateSpreadsheet(loginSpecification),
    null,
    2,
  ),
);

console.log();

console.log("=================================");
console.log("CYPRESS");
console.log("=================================");

console.log(
  generateCypress(loginSpecification),
);