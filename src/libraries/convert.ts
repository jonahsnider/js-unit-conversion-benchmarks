import {convert, convertMany} from 'convert';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'convert';

export const category = LibraryCategory.Fast;

const tests = {
	[BenchmarkTitles.InchesToMillimeters]() {
		return convert(4, 'inch').to('millimeters');
	},
	[BenchmarkTitles.LitersToCubicInches]() {
		return convert(2.5, 'l').to('in3');
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return convert(24, 'hours').to('minutes');
	},
	[BenchmarkTitles.ParseDurationToMilliseconds]() {
		return convertMany('10h').to('ms');
	},
	[BenchmarkTitles.BigIntConversion]() {
		return convert(24n, 'hours').to('minutes');
	},
};

export default tests;
