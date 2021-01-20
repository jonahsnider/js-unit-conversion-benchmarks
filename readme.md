# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 20 Jan 2021 02:00:37 GMT with Node.js v15.6.0 (V8 v8.6.395.17-node.23) on fv-az59-669 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `180`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `283`ns (157%)                           |
| [uom](https://npmjs.com/package/uom)                               | `495`ns (275%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `734`ns (408%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `857`ns (476%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,102`ns (612%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,119`ns (622%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,870`ns (2150%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,137`ns (22301%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `174`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `310`ns (178%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `862`ns (495%)                           |
| [uom](https://npmjs.com/package/uom)                               | `928`ns (533%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `976`ns (560%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,170`ns (672%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,623`ns (2655%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,741`ns (2723%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,384`ns (23194%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `174`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `305`ns (175%)                           |
| [uom](https://npmjs.com/package/uom)                               | `478`ns (275%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `761`ns (438%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `940`ns (541%)                           |
| [moment](https://npmjs.com/package/moment)                         | `946`ns (545%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `965`ns (555%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,837`ns (1058%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,946`ns (2272%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,333`ns (4221%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,236`ns (23163%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `626`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `664`ns (106%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `306`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `602`ns (197%)                           |

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
