# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 03 Jan 2021 13:22:02 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az151-212 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `228`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `355`ns (156%)                           |
| [uom](https://npmjs.com/package/uom)                               | `562`ns (247%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `985`ns (432%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `995`ns (436%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,265`ns (555%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,286`ns (564%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,366`ns (1914%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,655`ns (21334%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `221`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `369`ns (167%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,037`ns (470%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,039`ns (471%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,143`ns (518%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,337`ns (606%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,476`ns (2481%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,850`ns (2651%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,584`ns (22014%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `209`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `372`ns (178%)                           |
| [uom](https://npmjs.com/package/uom)                               | `538`ns (258%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `857`ns (411%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,078`ns (516%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,132`ns (542%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,227`ns (588%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,360`ns (1131%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,328`ns (2074%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,044`ns (4334%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,247`ns (23121%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `699`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `828`ns (118%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `340`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `670`ns (197%)                           |

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
