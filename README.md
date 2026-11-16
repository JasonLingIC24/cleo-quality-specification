# Cleo Quality Specification

Cleo Quality Specification transforms Jira requirements into reusable quality assets.

The platform parses Jira QA tickets, converts Gherkin into a canonical `TestSpecification`, and generates artefacts for manual testing, automation, and traceability.

---

# Overview

The primary goal of the platform is to establish a single source of truth for test design.

Rather than generating workbooks, feature files, and automation code independently, all outputs are derived from a shared `TestSpecification` contract.

```text
Jira
 ↓

ADF
 ↓

adfToText()
 ↓

parseGherkinText()
 ↓

parseJiraIssue()
 ↓

TestSpecification
 ↓
├── Feature Generator
├── Cypress Generator
├── Workbook Generator
└── Specification JSON Generator
```

---

# Key Principles

## Single Source of Truth

All parsers produce a:

```ts
TestSpecification;
```

All generators consume a:

```ts
TestSpecification;
```

This allows new generators and integrations to be added without changing Jira parsing or business rules.

---

## Asset Generation

The platform generates multiple testing artefacts from the same requirement source.

```text
One Requirement
       ↓
One TestSpecification
       ↓
Many Outputs
```

This ensures consistency between:

- Manual tests
- Automation tests
- Feature files
- Traceability records

---

# Prerequisites

## Software

The following tools must be installed:

| Tool               | Version                      |
| ------------------ | ---------------------------- |
| Node.js            | 22+                          |
| npm                | 10+                          |
| Git                | Latest                       |
| Jira Cloud Account | Required for Jira generation |

Verify installation:

```bash
node --version
npm --version
git --version
```

---

# Environment Variables

The Jira generator requires access to Jira Cloud.

Create a `.env` file in the repository root:

```env
JIRA_BASE_URL=https://cleosystems.atlassian.net

JIRA_EMAIL=your.name@cleo.net

JIRA_API_TOKEN=xxxxxxxxxxxxxxxx
```

## Generate a Jira API Token

1. Sign in to Atlassian.
2. Navigate to:

   https://id.atlassian.com/manage-profile/security/api-tokens

3. Create a new API token.
4. Copy the token value.
5. Add it to your `.env` file.

If using dotenv, uncomment the following line in:

```text
apps/qa-automation-cli/src/main.ts
```

```ts
import "dotenv/config";
```

---

# TestSpecification

`TestSpecification` is the canonical platform contract.

## Top-Level Model

```ts
export interface TestSpecification {
  schemaVersion: string;

  metadata: SpecificationMetadata;

  jiraKey: string;

  parentStoryKey?: string;

  summary: string;

  background?: string[];

  objective?: string;

  acceptanceCriteria: AcceptanceCriterion[];

  scenarios: Scenario[];
}
```

## Scenario Model

```ts
export interface Scenario {
  id: string;

  requirementId?: string;

  title: string;

  tags?: string[];

  preconditions: string[];

  actions: string[];

  expectedResults: string[];

  examples?: string[];
}
```

---

# Features

## Jira Integration

- Fetch Jira issues directly
- Convert Atlassian Document Format (ADF)
- Extract and parse Gherkin
- Build canonical specifications

### Supported Constructs

```gherkin
Feature:
Background:
Scenario:
Given:
When:
Then:
And:
Example:
```

---

## Manual Test Workbook Generation

Creates execution-ready Excel workbooks.

### Workbook Features

- One assertion per execution row
- Frozen panes
- Column filtering
- Dynamic row heights
- Hidden lookup sheets
- Result dropdowns
- Environment dropdowns
- Tester Notes column
- Evidence column
- Jira hyperlinks
- Rich-text Given / When / Then formatting

### Execution Statuses

```text
Not Run
Pass
Fail
N/A
```

### Environments

```text
Manual
Cypress
```

### Workbook Philosophy

The workbook is an execution tool, not a reporting tool.

Its primary purpose is to assist testers in executing and recording results.

Reporting, metrics, release readiness, and test plan tracking are handled separately by:

```text
cleo-quality-reporting
```

---

## Feature Generation

Generates standard Gherkin feature files.

Example:

```gherkin
Feature: Service Creation

Scenario: Create a Service

Given I am viewing a contract

When I create a service

Then the service is saved
```

---

## Cypress Generation

Generates Cypress BDD scaffolding.

Example structure:

```ts
describe("Feature", () => {
  describe("GIVEN ...", () => {
    context("WHEN ...", () => {
      it("THEN ...", () => {});
    });
  });
});
```

---

## Specification Generation

Generates a portable specification artefact.

Output:

```text
.specification.json
```

This file provides a durable representation of the requirement and generated testing model.

---

# Parsing Capabilities

## ADF Conversion

Converts Atlassian Document Format into plain text.

```ts
adfToText();
```

---

## Gherkin Parsing

Parses free-form Gherkin content.

```ts
parseGherkinText();
```

Supports:

```text
Feature
Background
Scenario
Given
When
Then
And
Example
```

---

## Jira Parsing

Builds a `TestSpecification` directly from a Jira issue.

```ts
parseJiraIssue();
```

---

## Scenario Title Cleanup

Automatically removes common execution markers.

### Input

```text
Scenario: Open the service creation form (PASS)
```

### Output

```json
{
  "title": "Open the service creation form"
}
```

Removed markers:

```text
(PASS)
(FAIL)

"PASS"
"FAIL"

'PASS'
'FAIL'
```

---

# Repository Structure

```text
cleo-quality-specification

apps/
└── qa-automation-cli

packages/
├── cleo-quality-specification-core
└── test-specification

output/
```

---

# Outputs

Running:

```bash
npm run jira EVA-2912
```

Produces:

```text
output/

EVA-2912.feature
EVA-2912.cy.ts
EVA-2912.specification.json
EVA-2912-manual-tests.xlsx
```

---

# Commands

## Generate From Jira

```bash
npm run jira EVA-2912
```

Fetches a Jira issue and generates all supported artefacts.

---

## Generate From Manual Ticket

```bash
npm run generate ticket.json
```

Generates artefacts from a manual QA ticket definition.

---

## Validate Manual Ticket

```bash
npm run validate ticket.json
```

Validates a manual QA ticket before generation.

---

## Generate Specification Only

```bash
npm run generate-spec ticket.json
```

Produces only:

```text
.specification.json
```

---

# Example Usage

## Generate From Jira

```bash
npm run jira EVA-2912
```

Expected output:

```text
✅ Generated artefacts for EVA-2912
📂 Output: ./output
```

Generated files:

```text
output/

EVA-2912.feature
EVA-2912.cy.ts
EVA-2912.specification.json
EVA-2912-manual-tests.xlsx
```

---

## Generate From Manual JSON

```bash
npm run generate examples/manual-ticket.json
```

Example input:

```json
{
  "jiraKey": "DEMO-1",
  "summary": "Create Service",
  "scenarios": [
    {
      "id": "TC-001",
      "title": "Create Service",
      "preconditions": ["Contract exists"],
      "actions": ["Create a new service"],
      "expectedResults": ["Service is saved"]
    }
  ]
}
```

---

## Validate Manual JSON

```bash
npm run validate examples/manual-ticket.json
```

Successful output:

```text
✅ Validation passed
```

---

## Generate Specification Only

```bash
npm run generate-spec examples/manual-ticket.json
```

Output:

```text
output/
└── DEMO-1.specification.json
```

---

# Workbook Example

Input:

```gherkin
Scenario: Create Service

Given I am viewing a contract

When I create a service

Then the service is saved

And the service appears in the list

And the service can be edited
```

Workbook output:

```text
Row 1
TC-001 | THEN service is saved

Row 2
       | AND service appears in the list

Row 3
       | AND service can be edited
```

Each assertion receives its own:

- Result
- Environment
- Tester Notes
- Evidence

This allows each expected outcome to be executed and recorded independently.

---

# Build

Install dependencies:

```bash
npm install
```

Build all workspaces:

```bash
npm run build
```

---

# Troubleshooting

## Build Fails After Package Renames

Perform a clean rebuild:

```bash
rm -rf node_modules

rm package-lock.json

find packages -name dist -type d -exec rm -rf {} +

npm install

npm run build
```

---

## Cannot Find Module Errors

Example:

```text
Cannot find module
'@cleo-quality-specification/test-specification'
```

Verify workspace resolution:

```bash
npm ls @cleo-quality-specification/test-specification
```

Expected:

```text
@cleo-quality-specification/test-specification@0.1.0
```

---

## Jira Authentication Failure

Example:

```text
JIRA_EMAIL is not configured
```

or

```text
401 Unauthorized
```

Verify:

```env
JIRA_BASE_URL
JIRA_EMAIL
JIRA_API_TOKEN
```

and confirm the API token is valid.

---

## Workbook Not Generated

Verify the solution builds successfully:

```bash
npm run build
```

before running:

```bash
npm run jira EVA-2912
```

Generated workbooks are written to:

```text
output/
```

and named:

```text
<JIRA-KEY>-manual-tests.xlsx
```

---

## Missing Scenarios In Generated Files

Ensure Jira content follows supported Gherkin syntax:

```gherkin
Scenario: Create Service

Given ...

When ...

Then ...
```

Supported keywords:

```text
Feature
Background
Scenario
Given
When
Then
And
Example
```

---

## Hidden Lookup Sheet Appears

The workbook contains a hidden worksheet:

```text
_lists
```

used for:

- Result dropdowns
- Environment dropdowns

It should not normally be edited.

---

## Row Heights Look Incorrect

ExcelJS cannot perfectly reproduce native Excel auto-fit behaviour.

If text wrapping appears inconsistent:

1. Save the workbook.
2. Open in Microsoft Excel.
3. Allow Excel to recalculate row heights.

The generated workbook uses a best-effort row height calculation designed for readability rather than pixel-perfect rendering.

---

# Development Workflow

Generate a specification:

```text
Jira
 ↓
TestSpecification
```

Generate assets:

```text
TestSpecification
 ↓

Feature File

Cypress Test

Workbook

Specification JSON
```

Review outputs and gather feedback from:

- Manual testers
- Automation engineers
- Product owners

before extending reporting or execution capabilities.

---

# Ecosystem

The platform is part of the wider quality engineering ecosystem.

```text
cleo-quality-specification
│
├─ Jira Parsing
├─ TestSpecification
├─ Workbook Generation
├─ Feature Generation
└─ Automation Generation

cleo-quality-reporting
│
├─ Test Plans
├─ Test Runs
├─ Release Reporting
├─ Quality Metrics
└─ Traceability Reporting

cleo-cypress-bdd
│
└─ Test Execution Framework

cleo-cypress-codemod
│
└─ AST Transformations
```

---

# Future Direction

The long-term objective is to establish `TestSpecification` as the central quality engineering contract.

```text
Requirements
 ↓

TestSpecification
 ↓
├── Manual Testing
├── Automation
├── Reporting
├── Traceability
└── Test Planning
```

By separating test design from execution and reporting, quality assets remain reusable, traceable, and consistent across the entire testing lifecycle.

---

# Support

When reporting issues, include:

- Jira ticket number
- Generated artefact type
- Error message
- Stack trace (if available)
- Sample Gherkin content

This significantly reduces investigation time and helps reproduce issues quickly.
