# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 27 Mar 2021 03:25:26 GMT with Node.js v15.12.0 (V8 v8.6.395.17-node.27) on fv-az154-581 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `217`ns (100%)                           |
| raw math (builtin)                                                 | `242`ns (111%)                           |
| [uom](https://npmjs.com/package/uom)                               | `555`ns (256%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `886`ns (409%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,066`ns (492%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,219`ns (562%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,257`ns (580%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,667`ns (769%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,619`ns (2129%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,447`ns (24180%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `229`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,042`ns (454%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,128`ns (492%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,233`ns (538%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,417`ns (618%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,769`ns (771%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,375`ns (2344%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,254`ns (2727%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `59,351`ns (25883%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `211`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `533`ns (253%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `970`ns (460%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,046`ns (495%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,126`ns (534%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,162`ns (550%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,732`ns (820%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,526`ns (1197%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,755`ns (2252%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,844`ns (4189%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `57,839`ns (27398%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `622`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `735`ns (118%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,410`ns (548%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `307`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,543`ns (828%)                         |

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
