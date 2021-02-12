# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 12 Feb 2021 00:23:28 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az184-570 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `237`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `282`ns (119%)                           |
| [convert](https://npmjs.com/package/convert)                       | `405`ns (171%)                           |
| [uom](https://npmjs.com/package/uom)                               | `608`ns (257%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `922`ns (389%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,069`ns (452%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,347`ns (569%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,363`ns (576%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,211`ns (2202%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,651`ns (21401%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `248`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `437`ns (176%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,057`ns (426%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,158`ns (467%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,257`ns (507%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,341`ns (541%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,288`ns (2133%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,682`ns (2696%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,444`ns (20752%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `236`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `498`ns (211%)                           |
| [uom](https://npmjs.com/package/uom)                               | `725`ns (307%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,002`ns (424%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,097`ns (464%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,175`ns (497%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,194`ns (505%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,512`ns (1062%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,101`ns (2158%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,822`ns (3732%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,150`ns (22059%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `717`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `992`ns (138%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `385`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `751`ns (195%)                           |

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
