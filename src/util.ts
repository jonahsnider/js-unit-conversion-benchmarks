import {dirname} from 'path';
import {fileURLToPath} from 'url';
import os from 'os';
import {skip, trials} from './config.js';

export const baseDir = dirname(fileURLToPath(import.meta.url));

export function resultsToMarkdown(results: Record<string, {average: number; pretty: string}>): string {
	let output = [
		// prettier-disable
		'| Library | Average execution time (lower is better) |',
		'| --- | --- |'
	];

	for (const [library, result] of Object.entries(results)) {
		output.push(`| ${library} | ${result.pretty} (\`${result.average}\`ms) |`);
	}

	output.push(
		'',
		`Generated automatically at ${new Date().toUTCString()} with ${runtimeStats}`,
		'',
		`Each library was called ${skip} times to allow the runtime to warmup.`,
		`Afterward ${trials} trials were performed for each library.`
	);

	return output.join('\n');
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
export function replaceHtmlBlock(string: string, blockId: string, replaceValue: string): string {
	const regExp = new RegExp(`<!--\\s*beginblock\\(${blockId}\\)((.|\\n)*)endblock\\(${blockId}\\)\\s*-->`, 'im');

	return string.replace(regExp, [`<!-- beginblock(${blockId}) -->`, replaceValue, `<!-- endblock(${blockId}) -->`].join('\n'));
}

/**
 * Node.js and system information.
 * @example 'Node.js v15.4.0 (V8 v8.6.395.17-node.22) on Jonah-PC (Linux-x64 AMD Ryzen 7 3700X 8-Core Processor)'
 */
export const runtimeStats = [
	`Node.js v${process.versions.node}`,
	`(V8 v${process.versions.v8})`,
	`on ${os.hostname()}`,
	`(${os.type()}-${process.arch}`,
	`${os.cpus()[0].model})`
].join(' ');
