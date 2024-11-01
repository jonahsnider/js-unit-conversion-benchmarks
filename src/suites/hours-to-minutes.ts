import {Suite} from '@jonahsnider/benchmark';
import {convert} from 'convert';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import jsQuantities from 'js-quantities';
import * as luxon from 'luxon';
import moment from 'moment';
import * as SafeUnits from 'safe-units';
import {BenchmarkTitles, suiteRunOptions} from '../config.js';
import simpleUnits from 'simple-units';
import * as Uom from 'uom';
import * as UomUnits from 'uom-units';
import configureMeasurements from 'convert-units';
import allMeasures from 'convert-units/definitions/all';

dayjs.extend(duration);
const convertUnits = configureMeasurements(allMeasures);

const suite = new Suite(BenchmarkTitles.HoursToMinutes, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite
	.addTest('math', () => 24 * 60)
	.addTest('convert', () => convert(24, 'hours').to('minutes'))
	.addTest('convert-units', () => convertUnits(24).from('h').to('min'))
	.addTest('dayjs', () => dayjs.duration({hours: 24}).asMinutes())
	.addTest('js-quantities', () => jsQuantities(24, 'h/min').baseScalar)
	.addTest('luxon', () => luxon.Duration.fromObject({hours: 24}).as('minutes'))
	.addTest('moment', () => moment.duration(24, 'hours').asMinutes())
	.addTest('safe-units', () => SafeUnits.Measure.of(24, SafeUnits.hours).per(SafeUnits.minutes).value)
	.addTest('simple-units', () => simpleUnits.from(24, 'hours').to('minutes'))
	.addTest('uom', () => Uom.Unit.convert(24, UomUnits.Units.Hour, UomUnits.Units.Minute));
