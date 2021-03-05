# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 05 Mar 2021 05:05:36 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az207-156 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `225`ns (100%)                           |
| raw math (builtin)                                                 | `229`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)                       | `344`ns (153%)                           |
| [uom](https://npmjs.com/package/uom)                               | `723`ns (322%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,024`ns (456%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,112`ns (495%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,285`ns (572%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,361`ns (606%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,211`ns (2320%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,648`ns (23434%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `240`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `322`ns (134%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,112`ns (463%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,232`ns (513%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,310`ns (545%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,355`ns (564%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,349`ns (2226%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,451`ns (2685%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,269`ns (21756%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `228`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `341`ns (150%)                           |
| [uom](https://npmjs.com/package/uom)                               | `582`ns (255%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `968`ns (425%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,118`ns (491%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,297`ns (569%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,636`ns (718%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,613`ns (1147%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,086`ns (2233%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,627`ns (3787%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,926`ns (23234%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `698`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `733`ns (105%)                           |
| [convert](https://npmjs.com/package/convert)       | `820`ns (117%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `368`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `649`ns (176%)                           |

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
