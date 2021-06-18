import moment from 'moment';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'moment';

export const category = LibraryCategory.Popular;

const tests = {
	[BenchmarkTitles.HoursToMinutes]() {
		return moment.duration(24, 'hours').asMinutes();
	}
};

export default tests;
