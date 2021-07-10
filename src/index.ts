import {Sort, sortObject} from '@jonahsnider/util';
import {convert} from 'convert';
import {readFile, writeFile} from 'fs/promises';
import path from 'path';
import prettier from 'prettier';
import prettierConfig from '../prettier.config.cjs';
import {runBenchmark} from './benchmark.js';
import {skip, trials} from './config.js';
import * as libraries from './libraries/index.js';
import {baseDir, markdownPackageName, replaceHtmlBlock, runtimeStats} from './util.js';

console.log('performing', trials + skip, 'trials and skipping the first', skip, 'trials');

const results = await runBenchmark(trials, skip);

console.log();
console.log('average execution time (lower is better):');

const markdownLines = [
	`Generated automatically at ${new Date().toUTCString()} with ${runtimeStats}`,
	'',
	`Each library was called ${skip.toLocaleString()} times to allow the runtime to warmup.`,
	`Afterward ${trials.toLocaleString()} trials were performed for each library.`,
	'The mean of the execution times are displayed in the tables below.',
	'',
	'A baseline of raw math is included in each benchmark.',
	'It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.',
	'',
	"If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.",
];

const nameToLibrary = Object.fromEntries(Object.values(libraries).map(library => [library.name, library])) as Record<
	typeof libraries[keyof typeof libraries]['name'],
	typeof libraries[keyof typeof libraries]
>;

for (const [title, benchmark] of Object.entries(results)) {
	console.log(`${title}:`);
	markdownLines.push(
		`### ${title}`,
		'',
		'| Library | Average execution time (lower is better) | Executions per second (higher is better) |',
		'| --- | --- | --- |',
	);

	/** Used to display data in the console. */
	const table: Record<string, string> = {};

	/** Benchmarks sorted by average execution time ascending. */
	const sortedBenchmark = Object.fromEntries(sortObject(benchmark, Sort.ascending));

	/** The fastest speed of any library. */
	let fastest: number;

	for (const [library, averageExecutionTime] of Object.entries(sortedBenchmark)) {
		// Times are sorted ascending, so the first iteration is always the fastest library
		// This will only assign once
		fastest ??= averageExecutionTime;

		const packageName = markdownPackageName(nameToLibrary[library as typeof libraries[keyof typeof libraries]['name']]);
		const executionTimeNs = Math.round(convert(averageExecutionTime, 'ms').to('ns')).toLocaleString();
		const percent = Math.round((averageExecutionTime / fastest) * 100);
		const opsPerSec = Math.round(1 / convert(averageExecutionTime, 'ms').to('s')).toLocaleString();

		table[library] = `${executionTimeNs}ns`;

		markdownLines.push(`| ${packageName} | \`${executionTimeNs}\`ns (${percent}%) | \`${opsPerSec}\`/sec |`);
	}

	console.table(table);

	markdownLines.push('');
}

if (true || process.env.CI) {
	const markdown = markdownLines.join('\n');

	const readMePath = path.join(baseDir, '..', 'readme.md');
	const readMe = await readFile(readMePath, 'utf-8');

	const updatedReadme = prettier.format(replaceHtmlBlock(readMe, 'results', markdown), {filepath: readMePath, ...prettierConfig});

	await writeFile(readMePath, updatedReadme, 'utf-8');
}
