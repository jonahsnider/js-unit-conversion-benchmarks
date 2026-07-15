import bigints from './bigints.ts';
import bytesToBest from './bytes-to-best.ts';
import hoursToMinutes from './hours-to-minutes.ts';
import inchesToMillimeters from './inches-to-millimeters.ts';
import litersToCubicInches from './liters-to-cubic-inches.ts';
import parseDurationToMilliseconds from './parse-duration-to-milliseconds.ts';

export const suites = [hoursToMinutes, bytesToBest, inchesToMillimeters, litersToCubicInches, parseDurationToMilliseconds, bigints] as const;
