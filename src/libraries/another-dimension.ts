import Dimension from 'another-dimension';
import {BenchmarkTitles} from '../config.js';

export const name = 'another-dimension';

const tests = {
	[BenchmarkTitles.InchesToMillimeters]() {
		return Dimension(4, 'in').toNumber('mm');
	}
};

export default tests;
