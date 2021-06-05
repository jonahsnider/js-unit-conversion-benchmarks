import {convert} from '@favware/converter';
import {BenchmarkTitles} from '../config.js';

export const name = '@favware/converter';

export default {
	[BenchmarkTitles.InchesToMillimeters]() {
		// There is a bug in @favware/converter that is swapping the from <-> to units, but only for length which is why this is `'mm', 'in'` instead of `'in', 'mm'`
		return convert(4, 'mm', 'in');
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return convert(4.2, 'l', 'in3');
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return convert(24, 'h', 'min');
	}
};
