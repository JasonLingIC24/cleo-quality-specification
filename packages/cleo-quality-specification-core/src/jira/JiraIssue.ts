export interface JiraIssue {
  key: string;

  summary: string;

  description?: unknown;

  issueType: string;

  labels: string[];
}
