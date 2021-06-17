# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 17 Jun 2021 01:49:04 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-931 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `202`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `231`ns (114%)                           |
| [convert](https://npmjs.com/package/convert)                       | `331`ns (163%)                           |
| [uom](https://npmjs.com/package/uom)                               | `594`ns (293%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `932`ns (461%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `946`ns (468%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,167`ns (577%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,284`ns (635%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,437`ns (710%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,440`ns (2689%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,541`ns (24981%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `219`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `340`ns (156%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,148`ns (525%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,187`ns (543%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,206`ns (552%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,414`ns (646%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,082`ns (2781%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `7,088`ns (3240%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,941`ns (22833%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `203`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `311`ns (153%)                           |
| [uom](https://npmjs.com/package/uom)                               | `629`ns (309%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `901`ns (443%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,109`ns (545%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,282`ns (630%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,309`ns (644%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,642`ns (1299%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,044`ns (2479%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,970`ns (4409%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,691`ns (24423%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `623`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `736`ns (118%)                           |
| [convert](https://npmjs.com/package/convert)       | `786`ns (126%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `324`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `636`ns (196%)                           |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.

A simplified example of a benchmark for raw math (as a baseline) is shown below:

```js
import {BenchmarkTitles} from '../config.js';

export const name = 'raw math (builtin)';

const tests = {
	[BenchmarkTitles.InchesToMillimeters]() {
		return 4 * 25.4;
	}
};

export default tests;
```
