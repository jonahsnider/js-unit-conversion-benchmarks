# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 27 Mar 2021 15:18:09 GMT with Node.js v15.12.0 (V8 v8.6.395.17-node.27) on fv-az154-581 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `204`ns (100%)                           |
| raw math (builtin)                                                 | `238`ns (117%)                           |
| [uom](https://npmjs.com/package/uom)                               | `642`ns (315%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `881`ns (432%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,116`ns (548%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,321`ns (648%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,378`ns (676%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,602`ns (786%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,155`ns (2530%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,819`ns (24938%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `219`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,112`ns (507%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,218`ns (555%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,379`ns (629%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,537`ns (701%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,659`ns (756%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,238`ns (2388%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,091`ns (2776%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,496`ns (22106%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `225`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `614`ns (273%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,010`ns (449%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,045`ns (465%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,162`ns (517%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,166`ns (519%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,547`ns (689%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,452`ns (1091%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,819`ns (2145%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,203`ns (3651%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `58,697`ns (26127%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `606`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `813`ns (134%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,244`ns (535%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `308`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,419`ns (785%)                         |

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
