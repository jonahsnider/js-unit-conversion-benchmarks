import Qty from 'js-quantities';
import {BenchmarkTitles} from '../config.js';

export const name = 'js-quantities';

export default {
	[BenchmarkTitles.InchesToFeet]() {
		return Qty(1024, 'in/feet').baseScalar;
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return Qty(4.2, 'l/in3').baseScalar;
	}
};
