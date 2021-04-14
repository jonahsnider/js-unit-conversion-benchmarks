# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 14 Apr 2021 21:51:15 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-154 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `211`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `296`ns (140%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `314`ns (149%)                           |
| [uom](https://npmjs.com/package/uom)                               | `628`ns (297%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `927`ns (439%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,023`ns (484%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,209`ns (572%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,281`ns (606%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,701`ns (2224%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,178`ns (21380%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `213`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `329`ns (154%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,019`ns (479%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,081`ns (508%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,091`ns (513%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,377`ns (647%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,190`ns (2438%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,750`ns (2702%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,141`ns (21680%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `229`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `279`ns (122%)                           |
| [uom](https://npmjs.com/package/uom)                               | `551`ns (240%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `921`ns (402%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,007`ns (439%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,114`ns (486%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,361`ns (594%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,447`ns (1067%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,998`ns (2180%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,720`ns (3367%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,044`ns (19646%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `612`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `671`ns (110%)                           |
| [convert](https://npmjs.com/package/convert)       | `815`ns (133%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `306`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `568`ns (185%)                           |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to feet).
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
