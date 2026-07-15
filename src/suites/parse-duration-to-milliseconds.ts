import {parse as lukeedMs} from '@lukeed/ms';
import {convertMany as convert} from 'convert';
import ms from 'ms';
import {BenchmarkTitles} from '../config.ts';
import type {BenchmarkSuite} from '../config.ts';

const suite = {
	name: BenchmarkTitles.ParseDurationToMilliseconds,
	tests: [
		['@lukeed/ms', () => lukeedMs('10h')!],
		['convert', () => convert('10h').to('ms')],
		['ms', () => ms('10h')!],
	],
} satisfies BenchmarkSuite;

export default suite;
