import {convert, convertMany} from 'convert';
import {BenchmarkTitles} from '../config.js';

export const name = 'convert';

const tests = {
	[BenchmarkTitles.InchesToMillimeters]() {
		return convert(4).from('inch').to('millimeters');
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return convert(4.2).from('l').to('in3');
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return convert(24).from('hours').to('minutes');
	},
	[BenchmarkTitles.ParseDurationAndNormalize]() {
		return convertMany('10h').to('ms');
	},
	[BenchmarkTitles.BigIntConversion]() {
		return convert(24n).from('hours').to('minutes');
	}
};

export default tests;
