import {
  parseManualQaTicket,
  generateFeature,
  generateSpreadsheetCsv,
  generateCypress,
  writeFeature,
  writeCsv,
  writeCypress,
} from "../packages/qa-automation-core/src/index.js";

import {
  manualQaTicket,
} from "./manualQaTicket.js";

const specification =
  parseManualQaTicket(
    manualQaTicket,
  );

const outputDir = "output";

const feature =
  generateFeature(specification);

const csv =
  generateSpreadsheetCsv(specification);

const cypress =
  generateCypress(specification);

writeFeature(
  outputDir,
  `${specification.jiraKey}.feature`,
  feature,
);

writeCsv(
  outputDir,
  `${specification.jiraKey}.csv`,
  csv,
);

writeCypress(
  outputDir,
  `${specification.jiraKey}.cy.ts`,
  cypress,
);

console.log("✅ Feature generated");
console.log("✅ Spreadsheet generated");
console.log("✅ Cypress skeleton generated");
console.log(`📂 Output written to ./${outputDir}`);