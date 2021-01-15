# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 15 Jan 2021 00:30:13 GMT with Node.js v15.5.1 (V8 v8.6.395.17-node.23) on fv-az52-118 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `247`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `365`ns (148%)                           |
| [uom](https://npmjs.com/package/uom)                               | `594`ns (241%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,032`ns (418%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,075`ns (436%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,305`ns (529%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,390`ns (564%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,812`ns (1951%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,768`ns (20178%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `231`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `403`ns (174%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,153`ns (499%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,216`ns (526%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,326`ns (574%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,423`ns (616%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,861`ns (2536%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,918`ns (2561%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,169`ns (21275%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `232`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `381`ns (164%)                           |
| [uom](https://npmjs.com/package/uom)                               | `624`ns (269%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `947`ns (407%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,105`ns (475%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,182`ns (508%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,281`ns (551%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,345`ns (1009%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,311`ns (1854%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,330`ns (4013%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,345`ns (21225%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `796`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `846`ns (106%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `373`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `735`ns (197%)                           |

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
