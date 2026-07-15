import {convert} from 'convert';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';
import jsQuantities from 'js-quantities';
import * as SafeUnits from 'safe-units';
import simpleUnits from 'simple-units';
import * as Uom from 'uom';
import * as UomUnits from 'uom-units';
import {BenchmarkTitles} from '../config.ts';
import type {BenchmarkSuite} from '../config.ts';

const convertUnits = configureMeasurements(allMeasures);

const suite = {
	name: BenchmarkTitles.InchesToMillimeters,
	tests: [
		['convert-units', () => convertUnits(4).from('in').to('mm')],
		['convert', () => convert(4, 'in').to('mm')],
		['js-quantities', () => jsQuantities(4, 'in/mm').baseScalar],
		['math', () => 4 * 25.4],
		['safe-units', () => SafeUnits.Measure.of(4, SafeUnits.inches).per(SafeUnits.milli(SafeUnits.meters)).value],
		['simple-units', () => simpleUnits.from(4, 'inch').to('millimeters')],
		['uom', () => Uom.Unit.convert(4, UomUnits.Units.Inch, UomUnits.Units.Millimeter)],
	],
} satisfies BenchmarkSuite;

export default suite;
