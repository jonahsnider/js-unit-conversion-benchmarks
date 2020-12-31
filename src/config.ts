/** Total trials to use in results. */
export const trials = 100;

/** Number of trials to perform as warmup period, these are discarded. */
export const skip = 500;

/**
 * Human readable titles for different types of benchmarks performed on each library.
 */
export enum BenchmarkTitles {
	/** Converting inches to feet. */
	InchesToFeet = 'Inches to feet',
	FractionLitersToCubicInches = 'Fractional liters to cubic inches',
  HoursToMinutes = 'Converting hours to minutes',
  ParseDurationAndNormalize = 'Parse a duration string and normalize it to milliseconds',
	BigIntConversion = 'Converting hours to minutes, but with `BigInt`s'
}
