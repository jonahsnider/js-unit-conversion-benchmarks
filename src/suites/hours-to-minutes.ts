import {Suite} from '@jonahsnider/benchmark';
import {ValidatedTest} from '../validation.ts';
import {convert} from 'convert';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration.js';
import jsQuantities from 'js-quantities';
import * as luxon from 'luxon';
import moment from 'moment';
import * as SafeUnits from 'safe-units';
import {BenchmarkTitles, suiteRunOptions} from '../config.ts';
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
	.addTest('math', new ValidatedTest(() => 24 * 60, 1440))
	.addTest('convert', new ValidatedTest(() => convert(24, 'hours').to('minutes'), 1440))
	.addTest('convert-units', new ValidatedTest(() => convertUnits(24).from('h').to('min'), 1440))
	.addTest('dayjs', new ValidatedTest(() => dayjs.duration({hours: 24}).asMinutes(), 1440))
	.addTest('js-quantities', new ValidatedTest(() => jsQuantities(24, 'h/min').baseScalar, 1440))
	.addTest('luxon', new ValidatedTest(() => luxon.Duration.fromObject({hours: 24}).as('minutes'), 1440))
	.addTest('moment', new ValidatedTest(() => moment.duration(24, 'hours').asMinutes(), 1440))
	.addTest('safe-units', new ValidatedTest(() => SafeUnits.Measure.of(24, SafeUnits.hours).per(SafeUnits.minutes).value, 1440))
	.addTest('simple-units', new ValidatedTest(() => simpleUnits.from(24, 'hours').to('minutes'), 1440))
	.addTest('uom', new ValidatedTest(() => Uom.Unit.convert(24, UomUnits.Units.Hour, UomUnits.Units.Minute), 1440));
