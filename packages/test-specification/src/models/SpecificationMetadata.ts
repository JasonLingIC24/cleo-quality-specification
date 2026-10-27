export interface SpecificationMetadata {
  generator: string;

  generatorVersion: string;

  generatedAt: string;

  sourceType: "manual-ticket" | "jira-story";
}
