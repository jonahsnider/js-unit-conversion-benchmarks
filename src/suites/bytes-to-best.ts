import {Suite} from '@jonahsnider/benchmark';
import byteSize from 'byte-size';
import convert from 'convert';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import {BenchmarkTitles, suiteRunOptions} from '../config.js';

const convertUnits = configureMeasurements(allMeasures);

const suite = new Suite(BenchmarkTitles.BytesToBest, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite
	.addTest('byte-size', () => byteSize(8192).toString())
	.addTest('convert', () => convert(8192, 'bytes').to('best').toString())
	.addTest('convert-units', () => {
		const best = convertUnits(8192).from('B').toBest();

		return best!.val + best!.unit;
	});
