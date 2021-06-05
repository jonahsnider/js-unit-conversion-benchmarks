import {length, volume, time} from 'units-converter/dist/es/index.js';
import {BenchmarkTitles} from '../config.js';

export const name = 'units-converter';

export default {
	[BenchmarkTitles.InchesToMillimeters]() {
		return length(4).from('in').to('mm').value;
	},
	[BenchmarkTitles.FractionLitersToCubicInches]() {
		return volume(4.2).from('l').to('in3').value;
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return time(24).from('h').to('min').value;
	}
};
