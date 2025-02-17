import assert from 'node:assert/strict';
import os from 'os';
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import {Library, libraryCategories, LibraryCategory} from './config.js';

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
	`${os.cpus()[0]?.model ?? 'unknown CPU'})`,
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
 * Format a library for display in Markdown.
 *
 * @param library - The library to format
 *
 * @returns The Markdown formatted library
 */
export function markdownPackageName(library: Library): string {
	assert(library in libraryCategories);

	const category = libraryCategories[library];

	if (category === LibraryCategory.Baseline) {
		return `${library} (${category})`;
	}

	return `[${library}](https://npmjs.com/package/${library}) (${category})`;
}
