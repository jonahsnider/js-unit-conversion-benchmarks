import {Duration} from 'luxon';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'luxon';

export const category = LibraryCategory.Popular;

const tests = {
	[BenchmarkTitles.HoursToMinutes]() {
		return Duration.fromObject({hours: 24}).as('minutes');
	},
};

export default tests;
