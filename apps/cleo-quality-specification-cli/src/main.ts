#!/usr/bin/env node
import "dotenv/config";
import fs from "fs";
import { Command } from "commander";
import type { TestSpecification } from "@cleo-quality-specification/test-specification";

import {
  parseManualQaTicket,
  generateFeature,
  generateCypress,
  generateWorkbook,
  writeWorkbook,
  writeFeature,
  writeCypress,
  writeSpecification,
  validateManualQaTicket,
  JiraClient,
  parseJiraIssue,
} from "@cleo-quality-specification/core";

const program = new Command();

program.name("cleo-quality-specification");
program.description("Cleo Quality Specification Platform");

async function generateArtifacts(
  specification: TestSpecification,
  includeWorkbook = false,
) {
  const outputDir = "output";

  writeFeature(
    outputDir,
    `${specification.jiraKey}.feature`,
    generateFeature(specification),
  );

  writeCypress(
    outputDir,
    `${specification.jiraKey}.spec.ts`,
    generateCypress(specification),
  );

  writeSpecification(
    outputDir,
    `${specification.jiraKey}.specification.json`,
    specification,
  );

  if (includeWorkbook) {
    const workbook = await generateWorkbook(specification);

    await writeWorkbook(
      outputDir,
      `${specification.jiraKey}-manual-tests.xlsx`,
      workbook,
    );
  }

  console.log(`✅ Generated artefacts for ${specification.jiraKey}`);
  console.log(`📂 Output: ./${outputDir}`);
}

program
  .command("generate")
  .argument("<file>", "Manual QA ticket JSON")
  .action(async (filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");

    const ticket = JSON.parse(raw);

    const specification = parseManualQaTicket(ticket);

    await generateArtifacts(specification);
  });

program
  .command("validate")
  .argument("<file>", "Manual QA ticket JSON")
  .action((filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");

    const ticket = JSON.parse(raw);

    const result = validateManualQaTicket(ticket);

    if (result.warnings.length) {
      console.log("\nWarnings:");

      result.warnings.forEach((warning) => console.log(`⚠ ${warning}`));
    }

    if (result.errors.length) {
      console.log("\nErrors:");

      result.errors.forEach((error) => console.log(`❌ ${error}`));

      process.exit(1);
    }

    console.log("✅ Validation passed");
  });

program
  .command("generate-spec")
  .argument("<file>", "Manual QA ticket JSON")
  .action((filePath) => {
    const raw = fs.readFileSync(filePath, "utf8");

    const ticket = JSON.parse(raw);

    const specification = parseManualQaTicket(ticket);

    writeSpecification(
      "output",
      `${specification.jiraKey}.specification.json`,
      specification,
    );

    console.log(`✅ Generated specification for ${specification.jiraKey}`);
  });

program
  .command("jira")
  .argument("<issueKey>")
  .action(async (issueKey) => {
    const baseUrl = process.env.JIRA_BASE_URL;
    const email = process.env.JIRA_EMAIL;
    const apiToken = process.env.JIRA_API_TOKEN;

    if (!baseUrl) {
      throw new Error("JIRA_BASE_URL is not configured");
    }

    if (!email) {
      throw new Error("JIRA_EMAIL is not configured");
    }

    if (!apiToken) {
      throw new Error("JIRA_API_TOKEN is not configured");
    }

    const client = new JiraClient({
      baseUrl,
      email,
      apiToken,
    });

    const issue = await client.getIssue(issueKey);

    const specification = parseJiraIssue(issue);

    await generateArtifacts(specification, true);
  });

program.parse();
