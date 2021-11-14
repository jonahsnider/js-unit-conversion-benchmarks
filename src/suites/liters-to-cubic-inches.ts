import {Suite} from '@jonahsnider/benchmark';
import convert from 'convert';
import convertUnits from 'convert-units';
import jsQuantities from 'js-quantities';
import * as SafeUnits from 'safe-units';
import simpleUnits from 'simple-units';
import * as Uom from 'uom';
import * as UomUnits from 'uom-units';
import {BenchmarkTitles, suiteRunOptions} from '../config.js';

const suite = new Suite(BenchmarkTitles.LitersToCubicInches, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite
	.addTest('math', () => 2.5 * 61.0237440947323)
	.addTest('convert', () => convert(2.5, 'l').to('in3'))
	.addTest('convert-units', () => convertUnits(2.5).from('l').to('in3'))
	.addTest('js-quantities', () => jsQuantities(2.5, 'l/in3').baseScalar)
	.addTest('safe-units', () => SafeUnits.Measure.of(2.5, SafeUnits.liters).per(SafeUnits.inches.cubed()).value)
	.addTest('simple-units', () => (simpleUnits as unknown as {default: typeof simpleUnits}).default.from(2.5, 'l').to('in3'))
	.addTest('uom', () => Uom.Unit.convert(2.5, UomUnits.Units.Liter, UomUnits.Units.CubicInch));
