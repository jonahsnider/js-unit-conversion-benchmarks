import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'raw math';

export const category = LibraryCategory.Baseline;

const tests = {
	[BenchmarkTitles.InchesToMillimeters]() {
		return 4 * 25.4;
	},
	[BenchmarkTitles.BigIntConversion]() {
		return 24n * 60n;
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return 24 * 60;
	},
	[BenchmarkTitles.LitersToCubicInches]() {
		return 2.5 * 61.0237440947323;
	},
};

export default tests;
