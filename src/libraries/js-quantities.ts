import Qty from 'js-quantities';
import {BenchmarkTitles} from '../config.js';

export const name = 'js-quantities';

export default {
	[BenchmarkTitles.InchesToMillimeters]() {
		return Qty(4, 'in/mm').baseScalar;
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return Qty(4.2, 'l/in3').baseScalar;
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return Qty(24, 'h/min').baseScalar;
	}
};
