# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 04 Feb 2021 03:33:32 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az184-398 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `363`ns (171%)                           |
| [uom](https://npmjs.com/package/uom)                               | `548`ns (258%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `906`ns (427%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,147`ns (541%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,310`ns (617%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,387`ns (654%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,110`ns (2409%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,759`ns (22041%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `216`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `354`ns (164%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `974`ns (452%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,058`ns (491%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,176`ns (546%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,299`ns (603%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,962`ns (2303%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,295`ns (2921%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,525`ns (21589%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `231`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `343`ns (148%)                           |
| [uom](https://npmjs.com/package/uom)                               | `554`ns (240%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `842`ns (364%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,067`ns (462%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,100`ns (476%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,113`ns (481%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,288`ns (990%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,720`ns (2042%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,056`ns (3486%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,606`ns (20165%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `648`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `852`ns (131%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `376`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `674`ns (179%)                           |

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
