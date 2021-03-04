import {parse, format} from '@lukeed/ms';
import {BenchmarkTitles} from '../config.js';

export const name = '@lukeed/ms';

const tests = {
	[BenchmarkTitles.ParseDurationAndNormalize]() {
		return parse('10h');
	}
};

export default tests;
