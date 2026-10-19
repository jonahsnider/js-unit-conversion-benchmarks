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

const suite = new Suite(BenchmarkTitles.LitersToCubicInches, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite
	.addTest('math', new ValidatedTest(() => 2.5 * 61.0237440947323, 152.5593602368307))
	.addTest('convert', new ValidatedTest(() => convert(2.5, 'l').to('in3'), 152.5593602368307))
	.addTest('convert-units', new ValidatedTest(() => convertUnits(2.5).from('l').to('in3'), 152.5593602368307))
	.addTest('js-quantities', new ValidatedTest(() => jsQuantities(2.5, 'l/in3').baseScalar, 152.5593602368307))
	.addTest('safe-units', new ValidatedTest(() => SafeUnits.Measure.of(2.5, SafeUnits.liters).per(SafeUnits.inches.cubed()).value, 152.5593602368307))
	.addTest('simple-units', new ValidatedTest(() => simpleUnits.from(2.5, 'l').to('in3'), 152.5593602368307))
	.addTest('uom', new ValidatedTest(() => Uom.Unit.convert(2.5, UomUnits.Units.Liter, UomUnits.Units.CubicInch), 152.5593602368307));
