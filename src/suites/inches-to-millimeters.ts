import {Suite} from '@jonahsnider/benchmark';
import {ValidatedTest} from '../validation.ts';
import {convert} from 'convert';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import jsQuantities from 'js-quantities';
import * as SafeUnits from 'safe-units';
import simpleUnits from 'simple-units';
import * as Uom from 'uom';
import * as UomUnits from 'uom-units';
import {BenchmarkTitles, suiteRunOptions} from '../config.ts';

const convertUnits = configureMeasurements(allMeasures);

const suite = new Suite(BenchmarkTitles.InchesToMillimeters, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite
	.addTest('convert-units', new ValidatedTest(() => convertUnits(4).from('in').to('mm'), 101.6))
	.addTest('convert', new ValidatedTest(() => convert(4, 'in').to('mm'), 101.6))
	.addTest('js-quantities', new ValidatedTest(() => jsQuantities(4, 'in/mm').baseScalar, 101.6))
	.addTest('math', new ValidatedTest(() => 4 * 25.4, 101.6))
	.addTest('safe-units', new ValidatedTest(() => SafeUnits.Measure.of(4, SafeUnits.inches).per(SafeUnits.milli(SafeUnits.meters)).value, 101.6))
	.addTest('simple-units', new ValidatedTest(() => simpleUnits.from(4, 'inch').to('millimeters'), 101.6))
	.addTest('uom', new ValidatedTest(() => Uom.Unit.convert(4, UomUnits.Units.Inch, UomUnits.Units.Millimeter), 101.6));
