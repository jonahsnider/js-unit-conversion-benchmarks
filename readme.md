# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 13 Jan 2021 23:16:59 GMT with Node.js v15.5.1 (V8 v8.6.395.17-node.23) on fv-az54-685 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `215`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `361`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `585`ns (273%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `971`ns (452%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,059`ns (493%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,455`ns (678%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,461`ns (681%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,856`ns (2262%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,545`ns (23549%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `211`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `361`ns (171%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,082`ns (513%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,142`ns (541%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,202`ns (570%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,468`ns (696%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,776`ns (2738%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,797`ns (2748%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,067`ns (23260%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `210`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `354`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `604`ns (287%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `892`ns (424%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,076`ns (512%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,168`ns (556%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,170`ns (556%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,273`ns (1081%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,635`ns (2204%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,202`ns (4376%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,201`ns (23397%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `724`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `796`ns (110%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `330`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `732`ns (222%)                           |

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
