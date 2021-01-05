# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 05 Jan 2021 00:24:53 GMT with Node.js v15.5.1 (V8 v8.6.395.17-node.23) on fv-az52-90 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `211`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `375`ns (177%)                           |
| [uom](https://npmjs.com/package/uom)                               | `548`ns (259%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `969`ns (459%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,066`ns (504%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,304`ns (617%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,435`ns (679%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,809`ns (2276%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,439`ns (22930%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `208`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `429`ns (206%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,077`ns (517%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,120`ns (538%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,284`ns (616%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,301`ns (625%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,266`ns (2527%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,349`ns (3047%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,813`ns (23429%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `209`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `357`ns (171%)                           |
| [uom](https://npmjs.com/package/uom)                               | `561`ns (268%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `977`ns (467%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,074`ns (514%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,077`ns (515%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,198`ns (573%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,321`ns (1110%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,659`ns (2229%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,400`ns (4018%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,234`ns (23553%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `731`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `852`ns (117%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `335`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `668`ns (199%)                           |

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
