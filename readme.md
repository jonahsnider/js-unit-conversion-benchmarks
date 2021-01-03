# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 03 Jan 2021 14:28:51 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az52-90 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `213`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `346`ns (162%)                           |
| [uom](https://npmjs.com/package/uom)                               | `547`ns (256%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `888`ns (416%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,057`ns (495%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,322`ns (620%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,397`ns (655%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,065`ns (2374%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,395`ns (23623%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `198`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `365`ns (185%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,044`ns (528%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,102`ns (558%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,177`ns (595%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,355`ns (686%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,556`ns (2812%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,261`ns (3169%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,999`ns (25810%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `199`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `345`ns (173%)                           |
| [uom](https://npmjs.com/package/uom)                               | `550`ns (276%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `837`ns (420%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,070`ns (537%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,095`ns (550%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,288`ns (647%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,669`ns (1341%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,971`ns (2497%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,528`ns (4283%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,917`ns (26074%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `715`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `825`ns (115%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `328`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `667`ns (203%)                           |

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
