import convert from 'convert-units';
import {BenchmarkTitles} from '../config.js';

export const name = 'convert-units';

export default {
	[BenchmarkTitles.InchesToMillimeters]() {
		return convert(4).from('in').to('mm');
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return convert(4.2).from('l').to('in3');
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return convert(24).from('h').to('min');
	}
};
