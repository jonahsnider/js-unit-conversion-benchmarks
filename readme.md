# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 19 Feb 2021 06:17:44 GMT with Node.js v15.9.0 (V8 v8.6.395.17-node.25) on fv-az52-701 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `223`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `228`ns (103%)                           |
| [convert](https://npmjs.com/package/convert)                       | `378`ns (170%)                           |
| [uom](https://npmjs.com/package/uom)                               | `572`ns (257%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `982`ns (441%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,070`ns (480%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,388`ns (623%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,456`ns (654%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,091`ns (2286%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,904`ns (23305%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `231`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `368`ns (160%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,033`ns (448%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,178`ns (511%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,218`ns (528%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,378`ns (597%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,740`ns (2487%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,524`ns (2827%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,434`ns (22720%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `206`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `390`ns (189%)                           |
| [uom](https://npmjs.com/package/uom)                               | `594`ns (288%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `937`ns (455%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,117`ns (542%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,254`ns (609%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,267`ns (615%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,566`ns (1245%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,962`ns (2407%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,396`ns (4558%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,394`ns (25417%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `725`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `921`ns (127%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `351`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `717`ns (204%)                           |

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
