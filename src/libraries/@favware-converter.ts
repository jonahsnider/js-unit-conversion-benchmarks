import {convert} from '@favware/converter';
import {BenchmarkTitles} from '../config.js';

export const name = '@favware/converter';

export default {
	[BenchmarkTitles.InchesToFeet]() {
		// There is a bug in @favware/converter that is swapping the from <-> type, but only for length which is why this is `'ft', 'in'` instead of `'in', 'ft'`
		return convert(1024, 'ft', 'in');
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return convert(4.2, 'l', 'in3');
	}
};
