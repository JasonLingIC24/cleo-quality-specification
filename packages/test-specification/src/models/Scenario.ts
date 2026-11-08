export interface Scenario {
  /**
   * Unique scenario identifier.
   * Example: EVA-2910-SC-001
   */
  id: string;

  /**
   * Original Jira requirement.
   */
  requirementId?: string;

  /**
   * Scenario title.
   */
  title: string;

  /**
   * Optional tags.
   */
  tags?: string[];

  /**
   * Preconditions (Given).
   */
  preconditions: string[];

  /**
   * Actions (When).
   */
  actions: string[];

  /**
   * Expected results (Then).
   */
  expectedResults: string[];

  /**
   * Free-form examples.
   */
  examples?: string[];
}
