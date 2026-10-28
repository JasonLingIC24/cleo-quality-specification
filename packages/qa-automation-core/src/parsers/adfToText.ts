export function adfToText(node: unknown): string {
  if (!node || typeof node !== "object") {
    return "";
  }

  const current = node as {
    type?: string;
    text?: string;
    content?: unknown[];
  };

  let result = "";

  if (current.text) {
    result += current.text;
  }

  if (Array.isArray(current.content)) {
    for (const child of current.content) {
      result += adfToText(child);
    }
  }

  if (current.type === "paragraph") {
    result += "\n\n";
  }

  if (current.type === "hardBreak") {
    result += "\n";
  }

  return result;
}
