import {Suite} from '@jonahsnider/benchmark';
import {ValidatedTest} from '../validation.ts';
import byteSize from 'byte-size';
import {convert} from 'convert';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import {BenchmarkTitles, suiteRunOptions} from '../config.ts';

const convertUnits = configureMeasurements(allMeasures);

const suite = new Suite(BenchmarkTitles.BytesToBest, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite
	// @ts-expect-error The types are wrong for convert-units
	.addTest('byte-size', new ValidatedTest(() => byteSize(8192).toString(), '8.2 kB'))
	.addTest('convert', new ValidatedTest(() => convert(8192, 'bytes').to('best').toString(), '8.192 KB'))
	.addTest(
		'convert-units',
		new ValidatedTest(() => {
			const best = convertUnits(8192).from('byte').toBest();

			return best!.val + best!.unit;
		}, '8.192kB'),
	);
