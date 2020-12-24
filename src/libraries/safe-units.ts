import {feet, inches, liters, Measure} from 'safe-units';
import {BenchmarkTitles} from '../config.js';

export const name = 'safe-units';

export default {
	[BenchmarkTitles.InchesToFeet]() {
		return Measure.of(1024, inches).per(feet).value;
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return Measure.of(4.2, liters).per(inches.cubed()).value;
	}
};
