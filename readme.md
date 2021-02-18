# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 18 Feb 2021 22:44:19 GMT with Node.js v15.9.0 (V8 v8.6.395.17-node.25) on fv-az148-411 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `220`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `227`ns (103%)                           |
| [convert](https://npmjs.com/package/convert)                       | `379`ns (172%)                           |
| [uom](https://npmjs.com/package/uom)                               | `560`ns (254%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `876`ns (398%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,111`ns (505%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,354`ns (616%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,559`ns (709%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,022`ns (2283%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,721`ns (23053%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `226`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `412`ns (182%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,072`ns (474%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,091`ns (482%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,160`ns (512%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,338`ns (591%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,362`ns (2369%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,739`ns (2978%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,928`ns (22501%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `207`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `410`ns (198%)                           |
| [uom](https://npmjs.com/package/uom)                               | `573`ns (278%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `895`ns (433%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,106`ns (536%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,180`ns (571%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,467`ns (710%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,414`ns (1169%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,843`ns (2829%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,725`ns (4224%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,198`ns (24304%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `809`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `1,187`ns (147%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `348`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `734`ns (211%)                           |

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
