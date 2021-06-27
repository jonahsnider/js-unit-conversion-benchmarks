import ms from 'ms';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'ms';

export const category = LibraryCategory.Popular;

const tests = {
	[BenchmarkTitles.ParseDurationToMilliseconds]() {
		return ms('10h');
	}
};

export default tests;
