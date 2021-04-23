# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 23 Apr 2021 22:14:22 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-331 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `222`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `247`ns (111%)                           |
| [convert](https://npmjs.com/package/convert)                       | `385`ns (173%)                           |
| [uom](https://npmjs.com/package/uom)                               | `554`ns (250%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `928`ns (419%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,079`ns (487%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,305`ns (589%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,453`ns (655%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,003`ns (2257%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,858`ns (22939%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `202`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `395`ns (196%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,009`ns (501%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,082`ns (537%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,123`ns (557%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,388`ns (689%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,174`ns (2568%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,193`ns (3073%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,484`ns (24557%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `279`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `298`ns (107%)                           |
| [uom](https://npmjs.com/package/uom)                               | `574`ns (206%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `868`ns (311%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,031`ns (369%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,202`ns (431%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,227`ns (440%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,465`ns (883%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,655`ns (1668%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,101`ns (2903%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,176`ns (17263%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `640`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `705`ns (110%)                           |
| [convert](https://npmjs.com/package/convert)       | `775`ns (121%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `319`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `637`ns (200%)                           |

<!-- endblock(results) -->

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
