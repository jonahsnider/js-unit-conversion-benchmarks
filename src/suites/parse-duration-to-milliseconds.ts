import {Suite} from '@jonahsnider/benchmark';
import {parse as lukeedMs} from '@lukeed/ms';
import {convertMany as convert} from 'convert';
import ms from 'ms';
import {BenchmarkTitles, suiteRunOptions} from '../config.js';

const suite = new Suite(BenchmarkTitles.ParseDurationToMilliseconds, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite
	.addTest('@lukeed/ms', () => lukeedMs('10h'))
	.addTest('convert', () => convert('10h').to('ms'))
	.addTest('ms', () => ms('10h'));
