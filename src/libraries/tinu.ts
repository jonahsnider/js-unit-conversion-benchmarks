import Tinu from 'tinu';
import {BenchmarkTitles} from '../config.js';

export const name = 'tinu';

export default {
	[BenchmarkTitles.InchesToMillimeters]() {
		return Tinu.distance(4, 'in').to('mm').value;
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return Tinu.volume(4.2, 'lt').to('in3').value;
	}
};
