import {dist} from 'fluxunit';
import {BenchmarkTitles} from '../config.js';

export const name = 'fluxunit';

const tests = {
	[BenchmarkTitles.InchesToMillimeters]() {
		return dist.in2MM(4);
	}
};

export default tests;
