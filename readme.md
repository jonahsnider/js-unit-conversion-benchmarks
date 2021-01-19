# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 19 Jan 2021 08:44:22 GMT with Node.js v15.6.0 (V8 v8.6.395.17-node.23) on fv-az52-731 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `179`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `292`ns (163%)                           |
| [uom](https://npmjs.com/package/uom)                               | `499`ns (278%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `772`ns (431%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `877`ns (489%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,179`ns (658%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,243`ns (694%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,907`ns (2179%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `37,858`ns (21119%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `180`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `360`ns (199%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `896`ns (497%)                           |
| [uom](https://npmjs.com/package/uom)                               | `949`ns (526%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `969`ns (537%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,153`ns (640%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,697`ns (2604%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,951`ns (2745%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,466`ns (22437%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `178`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `328`ns (185%)                           |
| [uom](https://npmjs.com/package/uom)                               | `491`ns (277%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `802`ns (452%)                           |
| [moment](https://npmjs.com/package/moment)                         | `950`ns (535%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `964`ns (543%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `985`ns (555%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `2,122`ns (1195%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,710`ns (2090%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,449`ns (4195%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,280`ns (22686%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `652`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `666`ns (102%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `298`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `612`ns (205%)                           |

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
