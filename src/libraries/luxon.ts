import {Duration} from 'luxon';
import {BenchmarkTitles} from '../config.js';

export const name = 'luxon';

const tests = {
	[BenchmarkTitles.HoursToMinutes]() {
		return Duration.fromObject({hours: 24}).as('minutes');
	}
};

export default tests;
