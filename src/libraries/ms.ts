import ms from 'ms';
import {BenchmarkTitles} from '../config.js';

export const name = 'ms';

const tests = {
	[BenchmarkTitles.ParseDurationAndNormalize]() {
		return ms('4d12h45m');
	}
};

export default tests;
