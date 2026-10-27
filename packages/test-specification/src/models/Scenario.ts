import { ScenarioCategory } from "./ScenarioCategory.js";

export interface Scenario {
  id?: string;

  title: string;

  given: string[];
  when: string[];
  then: string[];
}
