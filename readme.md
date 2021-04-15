# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 15 Apr 2021 15:52:24 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-16 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `187`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `208`ns (111%)                           |
| [convert](https://npmjs.com/package/convert)                       | `293`ns (157%)                           |
| [uom](https://npmjs.com/package/uom)                               | `541`ns (289%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `764`ns (409%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `894`ns (478%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,045`ns (559%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,223`ns (654%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,945`ns (2111%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `43,969`ns (23531%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `191`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `302`ns (158%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `934`ns (490%)                           |
| [uom](https://npmjs.com/package/uom)                               | `986`ns (517%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,011`ns (530%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,302`ns (683%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,052`ns (2650%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,072`ns (2660%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `43,633`ns (22883%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `197`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `273`ns (138%)                           |
| [uom](https://npmjs.com/package/uom)                               | `548`ns (278%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `724`ns (367%)                           |
| [moment](https://npmjs.com/package/moment)                         | `945`ns (479%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,072`ns (543%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,121`ns (568%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,077`ns (1052%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,011`ns (2032%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,364`ns (4237%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,576`ns (21566%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert)       | `585`ns (100%)                           |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `630`ns (108%)                           |
| [ms](https://npmjs.com/package/ms)                 | `649`ns (111%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `284`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `530`ns (186%)                           |

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
