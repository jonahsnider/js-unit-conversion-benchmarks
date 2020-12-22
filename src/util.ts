import { dirname } from "path";
import { fileURLToPath } from "url";

export const baseDir = dirname(fileURLToPath(import.meta.url));

export function resultsToMarkdown(
  results: Record<string, { average: number; pretty: string }>
): string {
  let output = [
    // prettier-disable
    "| Library | Average execution time (lower is better) |",
    "| --- | --- |",
  ];

  for (const [library, result] of Object.entries(results)) {
    output.push(`| ${library} | ${result.pretty} (\`${result.average}\`ms) |`);
  }

  return output.join("\n");
}

/**
 * Replaces an HTML block with a provided string.
 *
 * @param string - String to replace
 * @param blockId - Block ID to replace
 * @param replaceValue - Value to replace with
 *
 * @returns The updated block
 */
export function replaceHtmlBlock(
  string: string,
  blockId: string,
  replaceValue: string
): string {
  const regExp = new RegExp(
    `<!--\\s*beginblock\\(${blockId}\\)((.|\\n)*)endblock\\(${blockId}\\)\\s*-->`,
    "im"
  );

  return string.replace(
    regExp,
    [
      `<!-- beginblock(${blockId}) -->`,
      replaceValue,
      `<!-- endblock(${blockId}) -->`,
    ].join("\n")
  );
}
