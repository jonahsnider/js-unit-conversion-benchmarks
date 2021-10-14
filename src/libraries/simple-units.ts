import simpleUnits from 'simple-units';
import {BenchmarkTitles, LibraryCategory} from '../config.js';

// simple-units typings are incorrect
const units = (simpleUnits as any).default as typeof simpleUnits;

export const name = 'simple-units';

export const category = LibraryCategory.Fast;

const tests = {
	[BenchmarkTitles.InchesToMillimeters]() {
		return units.from(4, 'inch').to('millimeters');
	},
  [BenchmarkTitles.LitersToCubicInches]() {
		return units.from(2.5, 'l').to('in3');
	},
	[BenchmarkTitles.HoursToMinutes]() {
		return units.from(24, 'hours').to('minutes');
	},
};

export default tests;
