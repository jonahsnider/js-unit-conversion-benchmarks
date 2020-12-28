import {Unit} from 'uom';
import {Units} from 'uom-units';
import {BenchmarkTitles} from '../config.js';

export const name = 'uom';

export default {
	[BenchmarkTitles.InchesToFeet]() {
		return Unit.convert(1024, Units.Inch, Units.Foot);
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return Unit.convert(4.2, Units.Liter, Units.CubicInch);
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return Unit.convert(24, Units.Hour, Units.Minute);
	}
};
