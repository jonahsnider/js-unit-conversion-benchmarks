import {parse} from '@lukeed/ms';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = '@lukeed/ms';

export const category = LibraryCategory.Fast;

const tests = {
	[BenchmarkTitles.ParseDurationToMilliseconds]() {
		return parse('10h');
	}
};

export default tests;
