# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 16 Mar 2021 02:21:31 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az268-165 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `188`ns (100%)                           |
| raw math (builtin)                                                 | `223`ns (119%)                           |
| [convert](https://npmjs.com/package/convert)                       | `304`ns (162%)                           |
| [uom](https://npmjs.com/package/uom)                               | `496`ns (264%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `860`ns (458%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,046`ns (557%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,088`ns (579%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,092`ns (581%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,090`ns (2710%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,627`ns (23763%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `194`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `260`ns (134%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `914`ns (471%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,063`ns (547%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,125`ns (579%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,259`ns (648%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,838`ns (2491%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,256`ns (3221%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,735`ns (23033%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `186`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `318`ns (171%)                           |
| [uom](https://npmjs.com/package/uom)                               | `538`ns (289%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `876`ns (471%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `933`ns (502%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,055`ns (568%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,161`ns (625%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,386`ns (1284%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,992`ns (2687%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,062`ns (4338%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,221`ns (25411%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `558`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `796`ns (143%)                           |
| [convert](https://npmjs.com/package/convert)       | `815`ns (146%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `320`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `563`ns (176%)                           |

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
