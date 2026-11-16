import type { JiraConfig } from "./JiraConfig.js";
import type { JiraIssue } from "./JiraIssue.js";

export class JiraClient {
  constructor(private readonly config: JiraConfig) {}

  async getIssue(key: string): Promise<JiraIssue> {
    const auth = Buffer.from(
      `${this.config.email}:${this.config.apiToken}`,
    ).toString("base64");

    const response = await fetch(
      `${this.config.baseUrl}/rest/api/3/issue/${key}`,
      {
        headers: {
          Authorization: `Basic ${auth}`,
          Accept: "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Jira returned ${response.status} ${response.statusText}`,
      );
    }

    const issue = await response.json();

    return {
      key: issue.key,

      summary: issue.fields.summary,

      description: issue.fields.description,

      issueType: issue.fields.issuetype?.name ?? "Unknown",

      labels: issue.fields.labels ?? [],
    };
  }
}
