import convert from 'convert-units';
import {BenchmarkTitles} from '../config.js';

export const name = 'convert-units';

export default {
	[BenchmarkTitles.InchesToFeet]() {
		return convert(1024).from('in').to('ft');
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return convert(4.2).from('l').to('in3');
	}
};
