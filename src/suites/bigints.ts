import {convert} from 'convert';
import {BenchmarkTitles} from '../config.ts';
import type {BenchmarkSuite} from '../config.ts';

const suite = {
	name: BenchmarkTitles.BigIntConversion,
	tests: [
		['math', () => 24n * 60n],
		['convert', () => convert(24n, 'hours').to('minutes')],
	],
} satisfies BenchmarkSuite;

export default suite;
