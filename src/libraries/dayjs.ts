import duration from 'dayjs/plugin/duration.js';
import dayjs from 'dayjs';
import {BenchmarkTitles} from '../config.js';

export const name = 'dayjs';

dayjs.extend(duration);

const tests = {
	[BenchmarkTitles.HoursToMinutes]() {
		return dayjs.duration({hours: 24}).asMinutes();
	}
};

export default tests;
