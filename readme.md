# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 31 Dec 2020 01:51:37 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az184-39 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `232`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `794`ns (342%)                           |
| [uom](https://npmjs.com/package/uom)                               | `3,567`ns (1537%)                        |
| [tinu](https://npmjs.com/package/tinu)                             | `3,580`ns (1543%)                        |
| [safe-units](https://npmjs.com/package/safe-units)                 | `3,777`ns (1628%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,530`ns (2384%)                        |
| [units-converter](https://npmjs.com/package/units-converter)       | `6,340`ns (2733%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `15,559`ns (6706%)                       |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `56,691`ns (24436%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `257`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `1,199`ns (467%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `3,983`ns (1550%)                        |
| [units-converter](https://npmjs.com/package/units-converter)       | `4,024`ns (1566%)                        |
| [safe-units](https://npmjs.com/package/safe-units)                 | `4,471`ns (1740%)                        |
| [uom](https://npmjs.com/package/uom)                               | `4,843`ns (1884%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,199`ns (2412%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `18,564`ns (7223%)                       |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `56,983`ns (22172%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `260`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `1,057`ns (407%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `3,073`ns (1182%)                        |
| [safe-units](https://npmjs.com/package/safe-units)                 | `3,079`ns (1184%)                        |
| [moment](https://npmjs.com/package/moment)                         | `4,682`ns (1801%)                        |
| [uom](https://npmjs.com/package/uom)                               | `5,338`ns (2053%)                        |
| [units-converter](https://npmjs.com/package/units-converter)       | `7,920`ns (3046%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `10,947`ns (4210%)                       |
| [luxon](https://npmjs.com/package/luxon)                           | `13,800`ns (5308%)                       |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `27,564`ns (10601%)                      |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `59,828`ns (23011%)                      |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `331`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `1,711`ns (517%)                         |

### Parse a duration string and normalize it to milliseconds

| Library                            | Average execution time (lower is better) |
| ---------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms) | `725`ns (100%)                           |

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
