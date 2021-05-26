# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 26 May 2021 01:48:52 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-711 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `223`ns (105%)                           |
| [convert](https://npmjs.com/package/convert)                       | `350`ns (165%)                           |
| [uom](https://npmjs.com/package/uom)                               | `545`ns (257%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `897`ns (423%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `966`ns (455%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,311`ns (618%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,341`ns (632%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,530`ns (2134%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,721`ns (22479%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `310`ns (146%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,004`ns (474%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,053`ns (496%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,189`ns (561%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,341`ns (632%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,448`ns (2569%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,592`ns (2637%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,923`ns (22598%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `209`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `317`ns (151%)                           |
| [uom](https://npmjs.com/package/uom)                               | `611`ns (292%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `899`ns (430%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,069`ns (511%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,079`ns (516%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,188`ns (568%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,187`ns (1046%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,285`ns (2049%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,053`ns (4329%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,526`ns (22723%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `577`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `695`ns (120%)                           |
| [ms](https://npmjs.com/package/ms)                 | `705`ns (122%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `320`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `615`ns (192%)                           |

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
