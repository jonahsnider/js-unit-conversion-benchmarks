import byteSize from 'byte-size';
import {convert} from 'convert';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import {BenchmarkTitles} from '../config.ts';
import type {BenchmarkSuite} from '../config.ts';

const convertUnits = configureMeasurements(allMeasures);

const suite = {
	name: BenchmarkTitles.BytesToBest,
	tests: [
		// @ts-expect-error The types are wrong for convert-units
		['byte-size', () => byteSize(8192).toString()],
		['convert', () => convert(8192, 'bytes').to('best').toString()],
		[
			'convert-units',
			() => {
				const best = convertUnits(8192).from('byte').toBest();

				return best!.val + best!.unit;
			},
		],
	],
} satisfies BenchmarkSuite;

export default suite;
