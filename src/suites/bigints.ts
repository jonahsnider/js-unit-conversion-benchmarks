import {Suite} from '@jonahsnider/benchmark';
import {ValidatedTest} from '../validation.ts';
import {convert} from 'convert';
import {BenchmarkTitles, suiteRunOptions} from '../config.ts';

const suite = new Suite(BenchmarkTitles.BigIntConversion, {...suiteRunOptions, filepath: import.meta.url});

export default suite;

suite.addTest('math', new ValidatedTest(() => 24n * 60n, 1440n));
suite.addTest('convert', new ValidatedTest(() => convert(24n, 'hours').to('minutes'), 1440n));
