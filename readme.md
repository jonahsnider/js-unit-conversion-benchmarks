# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 02 Apr 2021 17:00:28 GMT with Node.js v15.13.0 (V8 v8.6.395.17-node.28) on fv-az194-618 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `223`ns (100%)                           |
| raw math (builtin)                                                 | `243`ns (109%)                           |
| [uom](https://npmjs.com/package/uom)                               | `582`ns (261%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,019`ns (457%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,298`ns (582%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,334`ns (598%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,350`ns (606%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,709`ns (767%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,351`ns (2400%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,018`ns (22887%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `209`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,042`ns (499%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,151`ns (551%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,363`ns (653%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,566`ns (750%)                         |
| [convert](https://npmjs.com/package/convert)                       | `2,099`ns (1005%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,340`ns (2557%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `7,298`ns (3495%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,983`ns (24413%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `246`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `589`ns (239%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,145`ns (465%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,165`ns (473%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,193`ns (485%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,370`ns (556%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,638`ns (665%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,678`ns (1088%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,135`ns (2086%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,443`ns (3429%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,421`ns (20886%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `642`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `881`ns (137%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,331`ns (519%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `398`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,718`ns (683%)                         |

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
