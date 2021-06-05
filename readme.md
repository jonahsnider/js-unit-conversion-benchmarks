# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 05 Jun 2021 22:38:43 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-947 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `164`ns (100%)                           |
| raw math (builtin)                                                 | `168`ns (103%)                           |
| [convert](https://npmjs.com/package/convert)                       | `291`ns (178%)                           |
| [uom](https://npmjs.com/package/uom)                               | `490`ns (299%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `701`ns (428%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `885`ns (540%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `927`ns (566%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,026`ns (626%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,223`ns (747%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,620`ns (2209%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,903`ns (24350%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `171`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `273`ns (160%)                           |
| [uom](https://npmjs.com/package/uom)                               | `913`ns (534%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `922`ns (540%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `930`ns (545%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,255`ns (735%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,400`ns (2576%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,728`ns (2768%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,270`ns (23579%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `177`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `260`ns (147%)                           |
| [uom](https://npmjs.com/package/uom)                               | `464`ns (262%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `691`ns (390%)                           |
| [moment](https://npmjs.com/package/moment)                         | `896`ns (506%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `976`ns (551%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,126`ns (635%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,053`ns (1158%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,519`ns (1985%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,372`ns (4158%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,745`ns (22980%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert)       | `593`ns (100%)                           |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `666`ns (112%)                           |
| [ms](https://npmjs.com/package/ms)                 | `704`ns (119%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `283`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `534`ns (189%)                           |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.

A simplified example of a benchmark for raw math (as a baseline) is shown below:

```js
import {BenchmarkTitles} from '../config.js';

export const name = 'raw math (builtin)';

const tests = {
	[BenchmarkTitles.InchesToFeet]() {
		return 1024 / 12;
	}
};

export default tests;
```
