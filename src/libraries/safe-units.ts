import {feet, hours, inches, liters, Measure, minutes} from 'safe-units';
import {BenchmarkTitles} from '../config.js';

export const name = 'safe-units';

export default {
	[BenchmarkTitles.InchesToFeet]() {
		return Measure.of(1024, inches).per(feet).value;
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return Measure.of(4.2, liters).per(inches.cubed()).value;
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return Measure.of(24, hours).per(minutes).value;
	}
};
