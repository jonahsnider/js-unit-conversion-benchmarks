import {Suite} from '@jonahsnider/benchmark';
import convert from 'convert';
import {BenchmarkTitles, suiteRunOptions} from '../config.js';

const suite = new Suite(BenchmarkTitles.BigIntConversion, {...suiteRunOptions, filename: import.meta.url});

export default suite;

suite.addTest('math', () => 24n * 60n);
suite.addTest('convert', () => convert(24n, 'hours').to('minutes'));
