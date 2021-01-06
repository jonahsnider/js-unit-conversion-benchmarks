# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 06 Jan 2021 02:29:05 GMT with Node.js v15.5.1 (V8 v8.6.395.17-node.23) on fv-az59-708 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `173`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `292`ns (169%)                           |
| [uom](https://npmjs.com/package/uom)                               | `465`ns (269%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `785`ns (454%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `831`ns (480%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,107`ns (640%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,207`ns (698%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,841`ns (2222%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,773`ns (23008%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `172`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `299`ns (173%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `860`ns (499%)                           |
| [uom](https://npmjs.com/package/uom)                               | `932`ns (541%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `966`ns (561%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,164`ns (676%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,534`ns (2634%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,577`ns (2659%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,517`ns (22961%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `176`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `301`ns (171%)                           |
| [uom](https://npmjs.com/package/uom)                               | `450`ns (256%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `707`ns (402%)                           |
| [moment](https://npmjs.com/package/moment)                         | `869`ns (494%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `960`ns (546%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,005`ns (572%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `1,931`ns (1099%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,699`ns (2105%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,298`ns (4153%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,332`ns (22381%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `601`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `645`ns (107%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `300`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `570`ns (190%)                           |

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
