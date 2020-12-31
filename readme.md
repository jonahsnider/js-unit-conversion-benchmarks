# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 31 Dec 2020 07:56:31 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az59-708 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `207`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `360`ns (173%)                           |
| [uom](https://npmjs.com/package/uom)                               | `597`ns (288%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,036`ns (499%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,123`ns (541%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,297`ns (625%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,437`ns (693%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,027`ns (2423%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `54,171`ns (26111%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `203`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `348`ns (171%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,097`ns (541%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,196`ns (589%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,239`ns (610%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,454`ns (716%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,892`ns (2902%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,396`ns (3151%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,220`ns (25725%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `197`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `385`ns (196%)                           |
| [uom](https://npmjs.com/package/uom)                               | `612`ns (311%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,023`ns (520%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,202`ns (611%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,222`ns (621%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,289`ns (655%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,588`ns (1315%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,062`ns (2572%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,672`ns (4915%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,396`ns (26624%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `713`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `826`ns (116%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `328`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `716`ns (218%)                           |

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
