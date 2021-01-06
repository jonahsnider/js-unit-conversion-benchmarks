# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 06 Jan 2021 01:32:21 GMT with Node.js v15.5.1 (V8 v8.6.395.17-node.23) on fv-az184-39 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `223`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `342`ns (153%)                           |
| [uom](https://npmjs.com/package/uom)                               | `582`ns (260%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `969`ns (434%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,113`ns (498%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,273`ns (570%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,354`ns (606%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,051`ns (2261%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,631`ns (23106%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `221`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `352`ns (160%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,066`ns (483%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,082`ns (490%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,216`ns (551%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,457`ns (660%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,397`ns (2447%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,567`ns (2977%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,595`ns (22937%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `219`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `365`ns (167%)                           |
| [uom](https://npmjs.com/package/uom)                               | `610`ns (279%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `929`ns (425%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,130`ns (517%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,161`ns (531%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,204`ns (550%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,435`ns (1113%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,975`ns (2275%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,723`ns (3988%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,378`ns (23033%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `780`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `828`ns (106%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `357`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `736`ns (206%)                           |

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
