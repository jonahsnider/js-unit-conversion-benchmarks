# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 13 Apr 2021 19:29:57 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-184 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `301`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `303`ns (101%)                           |
| [uom](https://npmjs.com/package/uom)                               | `628`ns (209%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `964`ns (320%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,036`ns (344%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,349`ns (448%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,421`ns (472%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,719`ns (571%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,659`ns (1548%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,797`ns (15883%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `302`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,102`ns (365%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,142`ns (378%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,204`ns (399%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,379`ns (457%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,687`ns (559%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,346`ns (1771%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,708`ns (1891%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,846`ns (15851%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `313`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `666`ns (213%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `903`ns (289%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,176`ns (376%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,181`ns (377%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,286`ns (411%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,717`ns (548%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,317`ns (740%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,407`ns (1408%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,042`ns (2888%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,357`ns (15128%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `683`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `784`ns (115%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,090`ns (452%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `412`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,448`ns (594%)                         |

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
