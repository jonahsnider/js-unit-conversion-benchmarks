import duration from 'dayjs/plugin/duration.js';
import dayjs from 'dayjs';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'dayjs';

export const category = LibraryCategory.Popular;

dayjs.extend(duration);

const tests = {
	[BenchmarkTitles.HoursToMinutes]() {
		return dayjs.duration({hours: 24}).asMinutes();
	},
};

export default tests;
