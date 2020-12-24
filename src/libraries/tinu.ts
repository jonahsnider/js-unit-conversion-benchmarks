import Tinu from 'tinu';
import {BenchmarkTitles} from '../config.js';

export const name = 'tinu';

export default {
	[BenchmarkTitles.InchesToFeet]() {
		return Tinu.distance(1024, 'in').to('ft').value;
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return Tinu.volume(4.2, 'lt').to('in3').value;
	}
};
