import {Unit} from 'uom';
import {Units} from 'uom-units';
import {BenchmarkTitles} from '../config.js';

export const name = 'uom';

export default {
	[BenchmarkTitles.InchesToMillimeters]() {
		return Unit.convert(4, Units.Inch, Units.Millimeter);
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return Unit.convert(4.2, Units.Liter, Units.CubicInch);
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return Unit.convert(24, Units.Hour, Units.Minute);
	}
};
