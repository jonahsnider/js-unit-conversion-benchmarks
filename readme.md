# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 14 Feb 2021 21:28:10 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az184-570 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `244`ns (100%)                           |
| raw math (builtin)                                                 | `286`ns (117%)                           |
| [convert](https://npmjs.com/package/convert)                       | `402`ns (165%)                           |
| [uom](https://npmjs.com/package/uom)                               | `673`ns (276%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,166`ns (479%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,238`ns (508%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,440`ns (592%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,469`ns (603%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,523`ns (2268%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,633`ns (21615%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `262`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `437`ns (166%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,258`ns (479%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,382`ns (527%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,545`ns (589%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,677`ns (639%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,985`ns (2281%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,356`ns (2422%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,023`ns (19822%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `223`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `388`ns (174%)                           |
| [uom](https://npmjs.com/package/uom)                               | `653`ns (293%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,096`ns (491%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,195`ns (536%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,301`ns (583%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,470`ns (659%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,973`ns (1333%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,352`ns (2399%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,733`ns (4362%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,968`ns (22843%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `808`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `932`ns (115%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `454`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `773`ns (170%)                           |

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
