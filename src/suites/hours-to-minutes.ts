import {convert} from 'convert';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import jsQuantities from 'js-quantities';
import * as luxon from 'luxon';
import moment from 'moment';
import * as SafeUnits from 'safe-units';
import {BenchmarkTitles} from '../config.ts';
import type {BenchmarkSuite} from '../config.ts';
import simpleUnits from 'simple-units';
import * as Uom from 'uom';
import * as UomUnits from 'uom-units';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';

dayjs.extend(duration);
const convertUnits = configureMeasurements(allMeasures);

const suite = {
	name: BenchmarkTitles.HoursToMinutes,
	tests: [
		['math', () => 24 * 60],
		['convert', () => convert(24, 'hours').to('minutes')],
		['convert-units', () => convertUnits(24).from('h').to('min')],
		['dayjs', () => dayjs.duration({hours: 24}).asMinutes()],
		['js-quantities', () => jsQuantities(24, 'h/min').baseScalar],
		['luxon', () => luxon.Duration.fromObject({hours: 24}).as('minutes')],
		['moment', () => moment.duration(24, 'hours').asMinutes()],
		['safe-units', () => SafeUnits.Measure.of(24, SafeUnits.hours).per(SafeUnits.minutes).value],
		['simple-units', () => simpleUnits.from(24, 'hours').to('minutes')],
		['uom', () => Uom.Unit.convert(24, UomUnits.Units.Hour, UomUnits.Units.Minute)],
	],
} satisfies BenchmarkSuite;

export default suite;
