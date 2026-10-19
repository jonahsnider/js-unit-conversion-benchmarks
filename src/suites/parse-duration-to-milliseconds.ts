import {Suite} from '@jonahsnider/benchmark';
import {ValidatedTest} from '../validation.ts';
import {parse as lukeedMs} from '@lukeed/ms';
import {convertMany as convert} from 'convert';
import ms from 'ms';
import {BenchmarkTitles, suiteRunOptions} from '../config.ts';

const suite = new Suite(BenchmarkTitles.ParseDurationToMilliseconds, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite
	.addTest('@lukeed/ms', new ValidatedTest(() => lukeedMs('10h'), 36_000_000))
	.addTest('convert', new ValidatedTest(() => convert('10h').to('ms'), 36_000_000))
	.addTest('ms', new ValidatedTest(() => ms('10h'), 36_000_000));
