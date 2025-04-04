/**
 * Human readable titles for different types of benchmarks performed on each library.
 */
export enum BenchmarkTitles {
	HoursToMinutes = 'Convert 24 hours to minutes',
	BytesToBest = 'Convert 8192 bytes to the best applicable unit',
	InchesToMillimeters = 'Convert 4 inches to millimeters',
	LitersToCubicInches = 'Convert 2.5 liters to cubic inches',
	ParseDurationToMilliseconds = 'Parse "10h" and convert it to milliseconds',
	BigIntConversion = 'Convert 24 hours to minutes, but with `bigint`s',
}

export const benchmarkTitleOrder: Readonly<Record<BenchmarkTitles, number>> = {
	[BenchmarkTitles.HoursToMinutes]: 0,
	[BenchmarkTitles.BytesToBest]: 1,
	[BenchmarkTitles.InchesToMillimeters]: 2,
	[BenchmarkTitles.LitersToCubicInches]: 3,
	[BenchmarkTitles.ParseDurationToMilliseconds]: 4,
	[BenchmarkTitles.BigIntConversion]: 5,
};

export enum LibraryCategory {
	Baseline = 'baseline',
	Fast = 'fast',
	Popular = 'popular',
}

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

export const libraryCategories: Readonly<Record<Library, LibraryCategory>> = {
	math: LibraryCategory.Baseline,
	'@lukeed/ms': LibraryCategory.Fast,
	'byte-size': LibraryCategory.Popular,
	convert: LibraryCategory.Fast,
	'convert-units': LibraryCategory.Popular,
	dayjs: LibraryCategory.Popular,
	'js-quantities': LibraryCategory.Popular,
	luxon: LibraryCategory.Popular,
	moment: LibraryCategory.Popular,
	ms: LibraryCategory.Popular,
	'safe-units': LibraryCategory.Fast,
	'simple-units': LibraryCategory.Fast,
	uom: LibraryCategory.Fast,
};

if (process.env['NODE_ENV'] !== 'production') {
	console.warn('[!] NODE_ENV is not production, got', process.env['NODE_ENV']);
}

export const suiteRunOptions = {
	run: {trials: 100_000},
	warmup: {trials: 10_000},
};
