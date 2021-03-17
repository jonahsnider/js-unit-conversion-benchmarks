# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 17 Mar 2021 05:01:57 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az219-744 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `188`ns (100%)                           |
| raw math (builtin)                                                 | `203`ns (108%)                           |
| [convert](https://npmjs.com/package/convert)                       | `266`ns (141%)                           |
| [uom](https://npmjs.com/package/uom)                               | `515`ns (274%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `864`ns (459%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `930`ns (494%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,124`ns (597%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,126`ns (598%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,720`ns (2508%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,585`ns (24219%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `200`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `276`ns (138%)                           |
| [uom](https://npmjs.com/package/uom)                               | `995`ns (498%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,003`ns (503%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,105`ns (553%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,178`ns (590%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,623`ns (2316%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,760`ns (2885%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,985`ns (22533%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `197`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `278`ns (141%)                           |
| [uom](https://npmjs.com/package/uom)                               | `511`ns (259%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `848`ns (431%)                           |
| [moment](https://npmjs.com/package/moment)                         | `919`ns (467%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,014`ns (515%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,090`ns (554%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,307`ns (1171%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,417`ns (2243%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,537`ns (3827%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,781`ns (23248%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)                 | `639`ns (100%)                           |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `649`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)       | `741`ns (116%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `312`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `598`ns (192%)                           |

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
