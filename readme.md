# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 13 Feb 2021 05:18:58 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az297-346 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `208`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `239`ns (115%)                           |
| [convert](https://npmjs.com/package/convert)                       | `337`ns (162%)                           |
| [uom](https://npmjs.com/package/uom)                               | `596`ns (287%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `832`ns (401%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,018`ns (490%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,218`ns (586%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,309`ns (630%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,667`ns (2247%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,941`ns (22115%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `230`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `378`ns (164%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `895`ns (389%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,039`ns (452%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,144`ns (498%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,217`ns (530%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,118`ns (2228%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,468`ns (2380%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,010`ns (19591%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `221`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `368`ns (167%)                           |
| [uom](https://npmjs.com/package/uom)                               | `541`ns (245%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `915`ns (414%)                           |
| [moment](https://npmjs.com/package/moment)                         | `963`ns (436%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,214`ns (550%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,363`ns (617%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,153`ns (974%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,467`ns (2021%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,210`ns (3715%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,547`ns (21063%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `685`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `830`ns (121%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `338`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `725`ns (214%)                           |

<!-- endblock(results) -->

---

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

---

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
