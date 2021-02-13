# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 13 Feb 2021 08:35:03 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az148-441 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `265`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `267`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `400`ns (151%)                           |
| [uom](https://npmjs.com/package/uom)                               | `647`ns (244%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `895`ns (338%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,044`ns (394%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,278`ns (482%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,397`ns (527%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,528`ns (1710%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,289`ns (18608%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `283`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `395`ns (139%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,000`ns (354%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,139`ns (403%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,193`ns (422%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,362`ns (482%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,662`ns (2002%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,651`ns (2351%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,439`ns (17478%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `260`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `410`ns (157%)                           |
| [uom](https://npmjs.com/package/uom)                               | `604`ns (232%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `958`ns (368%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,120`ns (430%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,148`ns (441%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,165`ns (447%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,202`ns (846%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,341`ns (1667%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,981`ns (3449%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,476`ns (19002%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `773`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `838`ns (108%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `380`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `757`ns (199%)                           |

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
