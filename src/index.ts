import prettierConfig from '@jonahsnider/prettier-config';
import {Sort} from '@jonahsnider/util';
import {convert} from 'convert';
import {readFile, writeFile} from 'fs/promises';
import path from 'path';
import prettier from 'prettier';
import {runBenchmark} from './benchmark.js';
import {suiteRunOptions} from './config.js';
import {baseDir, markdownPackageName, replaceHtmlBlock, runtimeStats} from './util.js';

console.log('performing', suiteRunOptions.run.trials, 'trials with a warmup of', suiteRunOptions.warmup.trials, 'trials');

const results = await runBenchmark();

const markdownLines = [
	`Generated automatically at ${new Date().toUTCString()} with ${runtimeStats}`,
	'',
	`Each test was called ${suiteRunOptions.warmup.trials.toLocaleString()} times to allow the runtime to warmup.`,
	`Afterward ${suiteRunOptions.run.trials.toLocaleString()} trials were performed for each library.`,
	'The 99th percentile of execution times are displayed in the tables below.',
	'',
	'A baseline of raw math is included when relevant.',
	'',
	"If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.",
];

console.log();
console.log('execution time (lower is better):');

for (const [suiteName, suite] of results) {
	console.log(`${suiteName}:`);
	markdownLines.push(
		`### ${suiteName}`,
		'',
		'| Library | Execution time (lower is better) | Executions per second (higher is better) |',
		'| --- | --- | --- |',
	);

	/** Used to display data in the console. */
	const table: Record<string, string> = {};

	/** Benchmarks sorted by average execution time ascending. */
	const sortedBenchmark = [...suite.entries()].sort(Sort.ascending(([, executionTime]) => executionTime));

	/** The fastest speed of any library. */
	let fastest: number;

	for (const [libraryName, executionTimeNs] of sortedBenchmark) {
		// Times are sorted ascending, so the first iteration is always the fastest library
		// This will only assign once
		fastest ??= executionTimeNs;

		// TODO: Make an object mapping library names to their categories
		const packageName = markdownPackageName(libraryName);
		const executionTimeNsFormatted = Math.round(executionTimeNs).toLocaleString();
		const percent = Math.round((executionTimeNs / fastest) * 100);
		const opsPerSec = Math.round(1 / convert(executionTimeNs, 'ns').to('s')).toLocaleString();

		table[libraryName] = `${executionTimeNsFormatted}ns`;

		markdownLines.push(`| ${packageName} | \`${executionTimeNsFormatted}\`ns (${percent}%) | \`${opsPerSec}\`/sec |`);
	}

	console.table(table);

	markdownLines.push('');
}

if (process.env.CI) {
	const markdown = markdownLines.join('\n');

	const readMePath = path.join(baseDir, '..', 'readme.md');
	const readMe = await readFile(readMePath, 'utf-8');

	const updatedReadme = prettier.format(replaceHtmlBlock(readMe, 'results', markdown), {filepath: readMePath, ...prettierConfig});

	await writeFile(readMePath, updatedReadme, 'utf-8');
}
