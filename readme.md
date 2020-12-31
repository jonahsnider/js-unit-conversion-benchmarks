# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 31 Dec 2020 02:07:23 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az50-739 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `244`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `323`ns (132%)                           |
| [uom](https://npmjs.com/package/uom)                               | `582`ns (238%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `958`ns (393%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,073`ns (440%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,342`ns (550%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,352`ns (554%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,387`ns (2209%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,689`ns (21601%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `225`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `303`ns (135%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,074`ns (478%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,127`ns (501%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,247`ns (555%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,385`ns (616%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,993`ns (2665%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,431`ns (2860%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,185`ns (23209%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `198`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `312`ns (157%)                           |
| [uom](https://npmjs.com/package/uom)                               | `617`ns (311%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `957`ns (482%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,063`ns (536%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,141`ns (575%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,396`ns (704%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,709`ns (1366%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,085`ns (2563%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,192`ns (4633%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,662`ns (26542%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `739`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `778`ns (105%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `346`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `683`ns (197%)                           |

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
