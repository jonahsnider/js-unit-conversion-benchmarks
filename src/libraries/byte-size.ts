import byteSize from 'byte-size';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'byte-size';

export const category = LibraryCategory.Popular;

const tests = {
	[BenchmarkTitles.BytesToBest]() {
		return byteSize(8192).toString();
	},
};

export default tests;
