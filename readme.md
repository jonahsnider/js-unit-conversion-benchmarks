# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 22 Jan 2021 11:48:46 GMT with Node.js v15.6.0 (V8 v8.6.395.17-node.23) on fv-az59-707 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `177`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `292`ns (165%)                           |
| [uom](https://npmjs.com/package/uom)                               | `528`ns (298%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `753`ns (426%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `859`ns (485%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,094`ns (618%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,216`ns (687%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,917`ns (2212%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,607`ns (22935%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `174`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `299`ns (171%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `858`ns (493%)                           |
| [uom](https://npmjs.com/package/uom)                               | `928`ns (533%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `982`ns (564%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,158`ns (665%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,705`ns (2701%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,715`ns (2707%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,414`ns (23200%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `172`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `304`ns (176%)                           |
| [uom](https://npmjs.com/package/uom)                               | `480`ns (278%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `737`ns (427%)                           |
| [moment](https://npmjs.com/package/moment)                         | `919`ns (533%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `971`ns (563%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,090`ns (632%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `1,865`ns (1082%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,718`ns (2156%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,545`ns (4375%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,478`ns (23472%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `617`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `681`ns (110%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `287`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `599`ns (209%)                           |

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
