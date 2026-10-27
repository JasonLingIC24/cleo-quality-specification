#!/usr/bin/env node

import fs from "fs";

import { Command } from "commander";

import {
  parseManualQaTicket,
  generateFeature,
  generateSpreadsheetCsv,
  generateCypress,
  writeFeature,
  writeCsv,
  writeCypress,
} from "../../../packages/qa-automation-core/src/index.js";

const program = new Command();

program
  .name("qa-automation")
  .description("QA Automation Platform");

program
  .command("generate")
  .argument("<file>", "Manual QA ticket JSON")
  .action((filePath) => {

    const raw =
      fs.readFileSync(
        filePath,
        "utf8",
      );

    const ticket =
      JSON.parse(raw);

    const specification =
      parseManualQaTicket(
        ticket,
      );

    const outputDir = "output";

    writeFeature(
      outputDir,
      `${specification.jiraKey}.feature`,
      generateFeature(specification),
    );

    writeCsv(
      outputDir,
      `${specification.jiraKey}.csv`,
      generateSpreadsheetCsv(
        specification,
      ),
    );

    writeCypress(
      outputDir,
      `${specification.jiraKey}.cy.ts`,
      generateCypress(
        specification,
      ),
    );

    console.log(
      `✅ Generated artefacts for ${specification.jiraKey}`,
    );

    console.log(
      `📂 Output: ./${outputDir}`,
    );
  });

program.parse();