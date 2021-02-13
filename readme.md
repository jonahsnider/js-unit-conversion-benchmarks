# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 13 Feb 2021 12:14:41 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az60-303 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `198`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `209`ns (106%)                           |
| [convert](https://npmjs.com/package/convert)                       | `301`ns (152%)                           |
| [uom](https://npmjs.com/package/uom)                               | `492`ns (249%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `744`ns (376%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `969`ns (490%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,119`ns (566%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,172`ns (592%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,390`ns (2219%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,890`ns (20162%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `199`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `305`ns (153%)                           |
| [uom](https://npmjs.com/package/uom)                               | `891`ns (448%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `901`ns (453%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `969`ns (488%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,279`ns (643%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,464`ns (2245%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,488`ns (2761%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,025`ns (23153%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `186`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `293`ns (157%)                           |
| [uom](https://npmjs.com/package/uom)                               | `503`ns (270%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `800`ns (430%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `911`ns (489%)                           |
| [moment](https://npmjs.com/package/moment)                         | `964`ns (518%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,009`ns (542%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,205`ns (1185%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,282`ns (2300%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,706`ns (3602%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,707`ns (22939%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `624`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `738`ns (118%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `319`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `567`ns (178%)                           |

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
