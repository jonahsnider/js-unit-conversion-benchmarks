import { readFile, writeFile } from "fs/promises";
import path from "path";
import prettier from "prettier";
import { runBenchmark } from "./benchmark.js";
import { skip, trials } from "./config.js";
import { baseDir, replaceHtmlBlock, resultsToMarkdown } from "./util.js";

console.log(
  "performing",
  trials + skip,
  "trials and skipping the first",
  skip,
  "trials"
);
console.log();
console.log("average execution time (lower is better):");

const results = await runBenchmark();

if (process.env.CI) {
  const markdown = resultsToMarkdown(results);

  const readMePath = path.join(baseDir, "..", "readme.md");
  const readMe = await readFile(readMePath, "utf-8");

  const updatedReadme = prettier.format(
    replaceHtmlBlock(readMe, "results", markdown),
    { filepath: readMePath }
  );

  await writeFile(readMePath, updatedReadme, "utf-8");
}

console.table(results);
