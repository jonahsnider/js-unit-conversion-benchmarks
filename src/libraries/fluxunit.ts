import {dist} from 'fluxunit';
import {BenchmarkTitles} from '../config.js';

export const name = 'fluxunit';

const tests = {
	[BenchmarkTitles.InchesToFeet]() {
		return dist.in2FT(1024);
	}
};

export default tests;
