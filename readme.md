# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 20 Mar 2021 09:29:02 GMT with Node.js v15.12.0 (V8 v8.6.395.17-node.27) on fv-az201-127 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `187`ns (100%)                           |
| raw math (builtin)                                                 | `233`ns (125%)                           |
| [uom](https://npmjs.com/package/uom)                               | `567`ns (304%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `804`ns (430%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,047`ns (561%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,103`ns (591%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,273`ns (682%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,715`ns (919%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,594`ns (2461%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,279`ns (26401%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `216`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `917`ns (424%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,082`ns (500%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,157`ns (535%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,176`ns (543%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,695`ns (783%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,724`ns (2182%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,766`ns (2664%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,774`ns (23918%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `205`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `556`ns (270%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `786`ns (382%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `966`ns (471%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,056`ns (514%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,113`ns (542%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,444`ns (703%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,440`ns (1188%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,563`ns (2222%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,146`ns (3966%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `56,699`ns (27604%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `588`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `671`ns (114%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,136`ns (533%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `295`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,234`ns (758%)                         |

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
