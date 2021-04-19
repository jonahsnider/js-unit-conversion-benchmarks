# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 19 Apr 2021 01:27:18 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az296-124 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `209`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `233`ns (111%)                           |
| [convert](https://npmjs.com/package/convert)                       | `383`ns (183%)                           |
| [uom](https://npmjs.com/package/uom)                               | `598`ns (287%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `924`ns (443%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,015`ns (486%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,283`ns (615%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,424`ns (682%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,848`ns (2323%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,299`ns (22659%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `210`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `329`ns (157%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,033`ns (493%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,140`ns (544%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,185`ns (566%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,325`ns (632%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,071`ns (2420%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,159`ns (2939%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,583`ns (22707%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `219`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `315`ns (144%)                           |
| [uom](https://npmjs.com/package/uom)                               | `635`ns (291%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `893`ns (408%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,190`ns (544%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,212`ns (554%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,249`ns (571%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,676`ns (1224%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,777`ns (2185%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,445`ns (3863%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,519`ns (21739%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `618`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `823`ns (133%)                           |
| [convert](https://npmjs.com/package/convert)       | `860`ns (139%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `332`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `596`ns (180%)                           |

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
