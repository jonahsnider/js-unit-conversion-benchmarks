# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 31 Dec 2020 02:01:34 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az184-39 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `203`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `335`ns (165%)                           |
| [uom](https://npmjs.com/package/uom)                               | `552`ns (272%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `851`ns (419%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,033`ns (509%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,228`ns (606%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,296`ns (639%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,272`ns (2107%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,586`ns (22477%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `199`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `298`ns (150%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `979`ns (492%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,026`ns (515%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,085`ns (545%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,268`ns (637%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,196`ns (2610%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,322`ns (2673%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,151`ns (22680%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `199`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `300`ns (151%)                           |
| [uom](https://npmjs.com/package/uom)                               | `512`ns (258%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `796`ns (401%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,006`ns (507%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,109`ns (559%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,121`ns (565%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,205`ns (1111%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,127`ns (2079%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,489`ns (4276%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,564`ns (22951%)                      |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `364`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `592`ns (163%)                           |

### Parse a duration string and normalize it to milliseconds

| Library                            | Average execution time (lower is better) |
| ---------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms) | `425`ns (100%)                           |

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
