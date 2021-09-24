import convert from 'convert-units';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'convert-units';

export const category = LibraryCategory.Popular;

export default {
	[BenchmarkTitles.InchesToMillimeters]() {
		return convert(4).from('in').to('mm');
	},
	[BenchmarkTitles.LitersToCubicInches]() {
		return convert(2.5).from('l').to('in3');
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return convert(24).from('h').to('min');
	},
	[BenchmarkTitles.BytesToBest]() {
		const best = convert(8192).from('B').toBest();

		return best.val + best.unit;
	},
};
