import {BenchmarkTitles} from '../config.js';

export const name = 'raw math (builtin)';

const tests = {
	[BenchmarkTitles.InchesToFeet]() {
		return 1024 / 12;
	},
	[BenchmarkTitles.BigIntConversion]() {
		return 24n * 60n;
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return 4.2 * 61.0237440947323;
	}
};

export default tests;
