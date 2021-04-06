# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 06 Apr 2021 05:37:24 GMT with Node.js v15.13.0 (V8 v8.6.395.17-node.28) on fv-az266-944 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `238`ns (100%)                           |
| raw math (builtin)                                                 | `247`ns (104%)                           |
| [uom](https://npmjs.com/package/uom)                               | `547`ns (230%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `844`ns (354%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,033`ns (433%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,272`ns (534%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,320`ns (554%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,539`ns (646%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,548`ns (1908%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,071`ns (20591%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `250`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `951`ns (380%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,071`ns (429%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,153`ns (461%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,355`ns (542%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,500`ns (600%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,499`ns (2200%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,737`ns (2295%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,711`ns (19486%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `237`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `574`ns (242%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `905`ns (382%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,074`ns (453%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,084`ns (457%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,239`ns (523%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,526`ns (644%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,336`ns (985%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,326`ns (1825%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,722`ns (3679%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,232`ns (20343%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `572`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `749`ns (131%)                           |
| [convert](https://npmjs.com/package/convert)       | `2,897`ns (506%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `325`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,297`ns (706%)                         |

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
