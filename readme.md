# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 27 Apr 2021 08:24:07 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az296-429 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `223`ns (100%)                           |
| raw math (builtin)                                                 | `234`ns (105%)                           |
| [convert](https://npmjs.com/package/convert)                       | `340`ns (152%)                           |
| [uom](https://npmjs.com/package/uom)                               | `544`ns (244%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `886`ns (397%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,000`ns (448%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,260`ns (564%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,268`ns (568%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,834`ns (2165%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,213`ns (20252%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `242`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `327`ns (135%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,028`ns (424%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,097`ns (453%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,155`ns (476%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,255`ns (518%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,845`ns (1999%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,159`ns (2541%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,376`ns (18719%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `236`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `312`ns (132%)                           |
| [uom](https://npmjs.com/package/uom)                               | `556`ns (235%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `860`ns (364%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,032`ns (437%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,078`ns (456%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,152`ns (487%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,217`ns (937%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,445`ns (1880%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,070`ns (3413%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,711`ns (19333%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `606`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `688`ns (114%)                           |
| [convert](https://npmjs.com/package/convert)       | `754`ns (124%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `346`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `593`ns (171%)                           |

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
