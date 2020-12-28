import moment from 'moment';
import {BenchmarkTitles} from '../config.js';

export const name = 'moment';

const tests = {
	[BenchmarkTitles.HoursToMinutes]() {
		return moment.duration(24, 'hours').asMinutes();
	}
};

export default tests;
