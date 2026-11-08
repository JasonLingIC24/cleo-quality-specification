export interface ParsedScenario {
  title: string;
  given: string[];
  when: string[];
  then: string[];
  examples: string[];
}

export interface ParsedGherkin {
  feature?: string;
  background: string[];
  scenarios: ParsedScenario[];
}

export function parseGherkinText(text: string): ParsedGherkin {
  const lines = text
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const result: ParsedGherkin = {
    background: [],
    scenarios: [],
  };

  let currentScenario: ParsedScenario | undefined;

  let currentSection: "background" | "given" | "when" | "then" | undefined;

  for (const line of lines) {
    /*
     * Feature
     */

    if (line.startsWith("Feature:")) {
      result.feature = line.replace("Feature:", "").trim();

      continue;
    }

    /*
     * Background
     */

    if (line.startsWith("Background:")) {
      currentSection = "background";

      continue;
    }

    /*
     * Scenario
     *
     * Handles:
     *
     * Scenario: My scenario
     *
     * AND
     *
     * Scenario: My scenario (PASS)
     *
     * AND
     *
     * Scenario: My scenario (PASS) Given something
     *
     */

    const scenarioMatch = line.match(/^Scenario:\s*(.*)$/i);

    if (scenarioMatch) {
      let scenarioTitle = scenarioMatch[1].trim();

      let firstGiven: string | undefined;

      /*
       * Detect malformed:
       *
       * Scenario: Something (PASS) Given ...
       */

      const inlineGiven = scenarioTitle.match(/^(.*?)\s+Given\s+(.*)$/i);

      if (inlineGiven) {
        scenarioTitle = inlineGiven[1].trim();

        firstGiven = inlineGiven[2].trim();
      }

      /*
       * Remove PASS / FAIL
       */

      scenarioTitle = scenarioTitle.replace(/\s+\((PASS|FAIL)\)$/i, "");

      currentScenario = {
        title: scenarioTitle,
        given: [],
        when: [],
        then: [],
        examples: [],
      };

      result.scenarios.push(currentScenario);

      if (firstGiven && firstGiven.length > 0) {
        currentScenario.given.push(firstGiven);

        currentSection = "given";
      } else {
        currentSection = undefined;
      }

      continue;
    }

    /*
     * Given
     */

    if (/^Given\s+/i.test(line)) {
      const value = line.replace(/^Given\s+/i, "");

      if (currentScenario) {
        currentScenario.given.push(value);

        currentSection = "given";
      } else {
        result.background.push(value);

        currentSection = "background";
      }

      continue;
    }

    /*
     * When
     */

    if (/^When\s+/i.test(line)) {
      const value = line.replace(/^When\s+/i, "");

      currentScenario?.when.push(value);

      currentSection = "when";

      continue;
    }

    /*
     * Then
     */

    if (/^Then\s+/i.test(line)) {
      const value = line.replace(/^Then\s+/i, "");

      currentScenario?.then.push(value);

      currentSection = "then";

      continue;
    }

    /*
     * And
     */

    if (/^And\s+/i.test(line)) {
      const value = line.replace(/^And\s+/i, "");

      switch (currentSection) {
        case "background":
        case "given":
          if (currentScenario) {
            currentScenario.given.push(value);
          } else {
            result.background.push(value);
          }

          break;

        case "when":
          currentScenario?.when.push(value);

          break;

        case "then":
          currentScenario?.then.push(value);

          break;
      }

      continue;
    }

    /*
     * Examples
     */

    const exampleMatch = line.match(/^Example:\s*(.*)$/i);

    if (exampleMatch && currentScenario) {
      currentScenario.examples.push(exampleMatch[1].trim());
    }
  }

  return result;
}
