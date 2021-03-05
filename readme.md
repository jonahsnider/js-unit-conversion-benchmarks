# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 05 Mar 2021 00:30:55 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az212-593 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `200`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `218`ns (109%)                           |
| [convert](https://npmjs.com/package/convert)                       | `338`ns (169%)                           |
| [uom](https://npmjs.com/package/uom)                               | `568`ns (284%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `942`ns (471%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,112`ns (556%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,334`ns (666%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,336`ns (668%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,104`ns (2551%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,522`ns (26249%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `371`ns (175%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,112`ns (524%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,174`ns (553%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,248`ns (589%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,316`ns (621%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,558`ns (2620%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,496`ns (3063%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,714`ns (24384%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `189`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `376`ns (199%)                           |
| [uom](https://npmjs.com/package/uom)                               | `600`ns (317%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,022`ns (541%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,085`ns (574%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,098`ns (581%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,272`ns (673%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,405`ns (1272%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,970`ns (2629%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,709`ns (4606%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,435`ns (26677%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `684`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `910`ns (133%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `329`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `715`ns (217%)                           |

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
