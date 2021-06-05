# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 05 Jun 2021 22:36:28 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-756 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `208`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `212`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)                       | `336`ns (162%)                           |
| [uom](https://npmjs.com/package/uom)                               | `555`ns (267%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `773`ns (372%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `864`ns (415%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,033`ns (496%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,076`ns (517%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,571`ns (755%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,199`ns (2018%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,787`ns (22483%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `209`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `315`ns (151%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,008`ns (482%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,069`ns (511%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,076`ns (514%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,365`ns (653%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,343`ns (2555%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,664`ns (2708%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,135`ns (22058%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `218`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `310`ns (142%)                           |
| [uom](https://npmjs.com/package/uom)                               | `552`ns (253%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `802`ns (368%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,015`ns (466%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,096`ns (503%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,199`ns (550%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,169`ns (995%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,191`ns (1923%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,947`ns (4106%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,144`ns (21179%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `582`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `725`ns (125%)                           |
| [ms](https://npmjs.com/package/ms)                 | `736`ns (126%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `331`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `621`ns (187%)                           |

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
