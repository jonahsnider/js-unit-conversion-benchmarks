import {Suite} from '@jonahsnider/benchmark';
import convert from 'convert';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import jsQuantities from 'js-quantities';
import * as SafeUnits from 'safe-units';
import simpleUnits from 'simple-units';
import * as Uom from 'uom';
import * as UomUnits from 'uom-units';
import {BenchmarkTitles, suiteRunOptions} from '../config.js';

const convertUnits = configureMeasurements(allMeasures);

const suite = new Suite(BenchmarkTitles.InchesToMillimeters, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite
	.addTest('convert-units', () => convertUnits(4).from('in').to('mm'))
	.addTest('convert', () => convert(4, 'in').to('mm'))
	.addTest('js-quantities', () => jsQuantities(4, 'in/mm').baseScalar)
	.addTest('math', () => 4 * 25.4)
	.addTest('safe-units', () => SafeUnits.Measure.of(4, SafeUnits.inches).per(SafeUnits.milli(SafeUnits.meters)).value)
	.addTest('simple-units', () => simpleUnits.from(4, 'inch').to('millimeters'))
	.addTest('uom', () => Uom.Unit.convert(4, UomUnits.Units.Inch, UomUnits.Units.Millimeter));
