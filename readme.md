# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 09 Jan 2021 10:38:16 GMT with Node.js v15.5.1 (V8 v8.6.395.17-node.23) on fv-az151-212 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `181`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `281`ns (155%)                           |
| [uom](https://npmjs.com/package/uom)                               | `493`ns (273%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `851`ns (471%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `975`ns (539%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,068`ns (591%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,240`ns (686%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,781`ns (2645%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,880`ns (24828%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `194`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `361`ns (186%)                           |
| [uom](https://npmjs.com/package/uom)                               | `998`ns (514%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,067`ns (550%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,159`ns (597%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,409`ns (726%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,469`ns (2302%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,595`ns (3397%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `43,419`ns (22363%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `185`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `288`ns (155%)                           |
| [uom](https://npmjs.com/package/uom)                               | `470`ns (254%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `863`ns (466%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `923`ns (499%)                           |
| [moment](https://npmjs.com/package/moment)                         | `965`ns (521%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,179`ns (637%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,258`ns (1219%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,003`ns (2162%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,782`ns (4203%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,427`ns (22916%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `678`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `758`ns (112%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `287`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `567`ns (197%)                           |

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
