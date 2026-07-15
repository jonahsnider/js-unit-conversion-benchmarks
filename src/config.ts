/**
 * Human readable titles for different types of benchmarks performed on each library.
 */
export const BenchmarkTitles = {
	HoursToMinutes: 'Convert 24 hours to minutes',
	BytesToBest: 'Convert 8192 bytes to the best applicable unit',
	InchesToMillimeters: 'Convert 4 inches to millimeters',
	LitersToCubicInches: 'Convert 2.5 liters to cubic inches',
	ParseDurationToMilliseconds: 'Parse "10h" and convert it to milliseconds',
	BigIntConversion: 'Convert 24 hours to minutes, but with `bigint`s',
} as const;

export type BenchmarkTitles = (typeof BenchmarkTitles)[keyof typeof BenchmarkTitles];

export type Library =
	| 'math'
	| '@lukeed/ms'
	| 'byte-size'
	| 'convert'
	| 'convert-units'
	| 'dayjs'
	| 'js-quantities'
	| 'luxon'
	| 'moment'
	| 'ms'
	| 'safe-units'
	| 'simple-units'
	| 'uom';

export type BenchmarkOutput = string | number | bigint;

export type BenchmarkTest = readonly [name: Library, run: () => BenchmarkOutput];

export type BenchmarkSuite = {
	name: BenchmarkTitles;
	tests: readonly BenchmarkTest[];
};
