import {dirname} from 'path';
import {fileURLToPath} from 'url';
import os from 'os';
import {skip, trials} from './config.js';

export const baseDir = dirname(fileURLToPath(import.meta.url));

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
 * Get an Markdown formatted npm link to a library, unless the library ends with `(builtin)`.
 *
 * @param library - The library to get the npm link for
 *
 * @returns The Markdown formatted npm link to the library, unless it ended with `(builtin)`
 */
export function npmLink(library: string): string {
	if (library.endsWith('(builtin)')) {
		return library;
	}

	return `[${library}](https://npmjs.com/package/${library})`;
}
