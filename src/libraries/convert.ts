import {convert} from 'convert';
import {BenchmarkTitles} from '../config.js';

export const name = 'convert';

const tests = {
	[BenchmarkTitles.InchesToFeet]() {
		return convert(1024).from('inch').to('foot');
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return convert(4.2).from('l').to('in3');
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return convert(24).from('hours').to('minutes');
	},
	[BenchmarkTitles.BigIntConversion]() {
		return convert(24n).from('hours').to('minutes');
	}
};

export default tests;
