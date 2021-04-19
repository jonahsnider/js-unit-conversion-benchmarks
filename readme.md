# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 19 Apr 2021 23:32:17 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az296-124 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `259`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `297`ns (115%)                           |
| [convert](https://npmjs.com/package/convert)                       | `414`ns (160%)                           |
| [uom](https://npmjs.com/package/uom)                               | `669`ns (259%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,061`ns (410%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,194`ns (462%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,570`ns (607%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,647`ns (637%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,192`ns (2394%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `54,804`ns (21187%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `277`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `368`ns (133%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,275`ns (460%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,406`ns (507%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,501`ns (541%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,612`ns (581%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,186`ns (2230%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `7,579`ns (2732%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `55,838`ns (20131%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `279`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `397`ns (143%)                           |
| [uom](https://npmjs.com/package/uom)                               | `740`ns (265%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,125`ns (403%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,354`ns (486%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,413`ns (507%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,581`ns (567%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,940`ns (1055%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,609`ns (2012%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `10,503`ns (3768%)                       |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `55,085`ns (19761%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `788`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `878`ns (112%)                           |
| [convert](https://npmjs.com/package/convert)       | `1,019`ns (129%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `394`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `783`ns (199%)                           |

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
