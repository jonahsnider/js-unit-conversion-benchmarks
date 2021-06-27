/** Total trials to use in results. */
export const trials = 100_000;

/** Number of trials to perform as warmup period, these are discarded. */
export const skip = 500;

/**
 * Human readable titles for different types of benchmarks performed on each library.
 */
export enum BenchmarkTitles {
	InchesToMillimeters = 'Convert 4 inches to millimeters',
	LitersToCubicInches = 'Convert 2.5 liters to cubic inches',
	HoursToMinutes = 'Convert 24 hours to minutes',
	ParseDurationToMilliseconds = 'Parse "10h" and convert it to milliseconds',
	BigIntConversion = 'Converting hours to minutes, but with `BigInt`s'
}

export enum LibraryCategory {
	Baseline = 'baseline',
	Fast = 'fast',
	Popular = 'popular'
}

if (process.env.NODE_ENV !== 'production') {
	console.warn('[!] NODE_ENV is not production, got', process.env.NODE_ENV);
}
