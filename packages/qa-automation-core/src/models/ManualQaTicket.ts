import { ManualScenario } from "./ManualScenario.js";

export interface ManualQaTicket {
  key: string;

  parentStoryKey: string;

  summary: string;

  objective?: string;

  acceptanceCriteria: string[];

  assumptions?: string[];

  scenarios: ManualScenario[];
}