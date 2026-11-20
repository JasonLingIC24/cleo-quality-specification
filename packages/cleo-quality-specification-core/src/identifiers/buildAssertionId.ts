export function buildAssertionId(jiraKey: string, sequence: number): string {
  return `MA-${jiraKey}-${String(sequence).padStart(3, "0")}`;
}
