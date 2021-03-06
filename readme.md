# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 06 Mar 2021 19:27:45 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az194-370 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `204`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `205`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `301`ns (148%)                           |
| [uom](https://npmjs.com/package/uom)                               | `545`ns (267%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `928`ns (455%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,059`ns (520%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,243`ns (610%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,304`ns (639%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,151`ns (2526%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,850`ns (24937%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `203`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `284`ns (140%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,053`ns (518%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,075`ns (529%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,261`ns (621%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,272`ns (626%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,700`ns (2806%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,695`ns (3296%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,410`ns (25307%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `195`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `277`ns (142%)                           |
| [uom](https://npmjs.com/package/uom)                               | `555`ns (284%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `936`ns (479%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,027`ns (526%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,114`ns (570%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,195`ns (612%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,379`ns (1218%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,215`ns (2670%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,241`ns (4732%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,638`ns (26441%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `635`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `735`ns (116%)                           |
| [convert](https://npmjs.com/package/convert)       | `877`ns (138%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `339`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `642`ns (189%)                           |

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
