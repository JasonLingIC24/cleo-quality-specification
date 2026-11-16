export interface JiraStory {
  key: string;

  summary: string;

  description: string;

  acceptanceCriteria: string[];

  scenarios?: string[];
}