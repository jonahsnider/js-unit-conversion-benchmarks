# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 25 Apr 2021 19:14:05 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az194-875 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `239`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `270`ns (113%)                           |
| [convert](https://npmjs.com/package/convert)                       | `431`ns (180%)                           |
| [uom](https://npmjs.com/package/uom)                               | `739`ns (309%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,271`ns (532%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,390`ns (581%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,504`ns (629%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,599`ns (669%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,697`ns (2382%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,216`ns (21835%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `250`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `409`ns (163%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,259`ns (504%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,434`ns (574%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,571`ns (629%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,674`ns (669%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,722`ns (2289%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `7,614`ns (3046%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `53,280`ns (21315%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `220`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `337`ns (153%)                           |
| [uom](https://npmjs.com/package/uom)                               | `719`ns (327%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,218`ns (554%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,252`ns (569%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,412`ns (642%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,474`ns (670%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `3,059`ns (1391%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,292`ns (2860%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,339`ns (4245%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,266`ns (23757%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `794`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `898`ns (113%)                           |
| [ms](https://npmjs.com/package/ms)                 | `1,044`ns (132%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `428`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `660`ns (154%)                           |

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
