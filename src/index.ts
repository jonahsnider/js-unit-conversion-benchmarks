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
	'Information about the execution times are shown below.',
	'Lower execution times and higher executions per second are better.',
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
		'| Library | Median execution time | 75th percentile execution time | Executions per second |',
		'| ------- | --------------------- | ------------------------------ | --------------------- |',
	);

	/** Used to display data in the console. */
	const table: Record<string, string> = {};

	/** Benchmarks sorted by average execution time ascending. */
	const sortedBenchmark = [...suite.entries()].sort(Sort.ascending(([, executionTime]) => executionTime.median));

	/** The fastest speed of any library. */
	let fastest: number;

	for (const [libraryName, executionTimeNs] of sortedBenchmark) {
		// Times are sorted ascending, so the first iteration is always the fastest library
		// This will only assign once
		fastest ??= executionTimeNs.median;

		const executionTimeNsFormatted = Math.round(executionTimeNs.median).toLocaleString();

		table[libraryName] = `${executionTimeNsFormatted}ns`;

		const columns: string[] = [
			// Package name
			markdownPackageName(libraryName),
			// Median execution time
			`\`${executionTimeNsFormatted}\`ns (${Math.round((executionTimeNs.median / fastest) * 100).toLocaleString()}%)`,
			// 75th percentile execution time
			`\`${Math.round(executionTimeNs.percentile75).toLocaleString()}\`ns (${Math.round((executionTimeNs.percentile75 / fastest) * 100).toLocaleString()}%)`,
			// Executions per second
			`\`${Math.round(convert(1, 's').to('ns') / executionTimeNs.median).toLocaleString()}\`/sec`,
		];

		markdownLines.push(`| ${columns.join('|')} |`);
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
