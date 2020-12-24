import {ascending, sortObject} from '@pizzafox/util';
import {readFile, writeFile} from 'fs/promises';
import path from 'path';
import prettier from 'prettier';
import prettyMilliseconds from 'pretty-ms';
import prettierConfig from '../prettier.config.cjs';
import {runBenchmark} from './benchmark.js';
import {skip, trials} from './config.js';
import {baseDir, npmLink, replaceHtmlBlock, runtimeStats} from './util.js';

console.log('performing', trials + skip, 'trials and skipping the first', skip, 'trials');

const results = await runBenchmark(trials, skip);

console.log();
console.log('average execution time (lower is better):');

const markdownLines = [
	`Generated automatically at ${new Date().toUTCString()} with ${runtimeStats}`,
	'',
	`Each library was called ${skip} times to allow the runtime to warmup.`,
	`Afterward ${trials} trials were performed for each library.`,
	'The mean of the execution times are displayed in the tables below.'
];

for (const [title, benchmark] of Object.entries(results)) {
	console.log(`${title}:`);
	markdownLines.push(`### ${title}`, '', '| Library | Average execution time (lower is better) |', '| --- | --- |');

	/** Used to display data in the console. */
	const table: Record<string, string> = {};

	const sortedBenchmark = sortObject(benchmark, ascending);
	for (const [library, averageExecutionTime] of Object.entries(sortedBenchmark)) {
		const prettyExecutionTime = prettyMilliseconds(averageExecutionTime, {formatSubMilliseconds: true});

		table[library] = prettyExecutionTime;
		markdownLines.push(`| ${npmLink(library)} | ${prettyExecutionTime} (\`${averageExecutionTime.toFixed(3)}\`ms) |`);
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
