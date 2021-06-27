import Qty from 'js-quantities';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'js-quantities';

export const category = LibraryCategory.Popular;

export default {
	[BenchmarkTitles.InchesToMillimeters]() {
		return Qty(4, 'in/mm').baseScalar;
	},
	[BenchmarkTitles.LitersToCubicInches]() {
		return Qty(2.5, 'l/in3').baseScalar;
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return Qty(24, 'h/min').baseScalar;
	}
};
