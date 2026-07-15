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
	name: BenchmarkTitles.LitersToCubicInches,
	tests: [
		['math', () => 2.5 * 61.0237440947323],
		['convert', () => convert(2.5, 'l').to('in3')],
		['convert-units', () => convertUnits(2.5).from('l').to('in3')],
		['js-quantities', () => jsQuantities(2.5, 'l/in3').baseScalar],
		['safe-units', () => SafeUnits.Measure.of(2.5, SafeUnits.liters).per(SafeUnits.inches.cubed()).value],
		['simple-units', () => simpleUnits.from(2.5, 'l').to('in3')],
		['uom', () => Uom.Unit.convert(2.5, UomUnits.Units.Liter, UomUnits.Units.CubicInch)],
	],
} satisfies BenchmarkSuite;

export default suite;
