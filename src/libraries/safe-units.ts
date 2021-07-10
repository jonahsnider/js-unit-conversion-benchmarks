import {milli, hours, inches, liters, Measure, minutes, meters} from 'safe-units';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

export const name = 'safe-units';

export const category = LibraryCategory.Fast;

export default {
	[BenchmarkTitles.InchesToMillimeters]() {
		return Measure.of(4, inches).per(milli(meters)).value;
	},
	[BenchmarkTitles.LitersToCubicInches]() {
		return Measure.of(2.5, liters).per(inches.cubed()).value;
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return Measure.of(24, hours).per(minutes).value;
	},
};
