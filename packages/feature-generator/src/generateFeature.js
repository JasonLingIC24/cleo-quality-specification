export function generateFeature(specification) {
    const lines = [];
    lines.push(`Feature: ${specification.summary}`, "");
    specification.scenarios.forEach((scenario) => {
        lines.push(`Scenario: ${scenario.title}`);
        scenario.given.forEach((step) => lines.push(`  Given ${step}`));
        scenario.when.forEach((step) => lines.push(`  When ${step}`));
        scenario.then.forEach((step) => lines.push(`  Then ${step}`));
        lines.push("");
    });
    return lines.join("\n");
}
