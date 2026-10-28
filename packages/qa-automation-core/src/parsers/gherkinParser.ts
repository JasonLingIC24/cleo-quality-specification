export interface ParsedScenario {
  title: string;
  status?: "PASS" | "FAIL";
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
    if (line.startsWith("Feature:")) {
      result.feature = line.replace("Feature:", "").trim();

      continue;
    }

    if (line.startsWith("Background:")) {
      currentSection = "background";
      continue;
    }

    const scenarioMatch = line.match(
      /^Scenario:\s*(.*?)\s*(?:\((PASS|FAIL)\))?$/i,
    );

    if (scenarioMatch) {
      currentScenario = {
        title: scenarioMatch[1].trim(),
        status: scenarioMatch[2] as "PASS" | "FAIL" | undefined,
        given: [],
        when: [],
        then: [],
        examples: [],
      };

      result.scenarios.push(currentScenario);

      currentSection = undefined;
      continue;
    }

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

    if (/^When\s+/i.test(line)) {
      const value = line.replace(/^When\s+/i, "");

      currentScenario?.when.push(value);

      currentSection = "when";
      continue;
    }

    if (/^Then\s+/i.test(line)) {
      const value = line.replace(/^Then\s+/i, "");

      currentScenario?.then.push(value);

      currentSection = "then";
      continue;
    }

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

    const exampleMatch = line.match(/^Example:\s*(.*)$/i);

    if (exampleMatch && currentScenario) {
      currentScenario.examples.push(exampleMatch[1].trim());
    }
  }

  return result;
}
