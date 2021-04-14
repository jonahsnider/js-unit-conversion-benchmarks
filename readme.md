# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 14 Apr 2021 21:53:55 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-824 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `231`ns (100%)                           |
| raw math (builtin)                                                 | `235`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `363`ns (157%)                           |
| [uom](https://npmjs.com/package/uom)                               | `586`ns (254%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,001`ns (433%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,083`ns (469%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,320`ns (571%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,431`ns (619%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,785`ns (2070%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,294`ns (21321%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `225`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `340`ns (151%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,037`ns (460%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,095`ns (486%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,230`ns (546%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,357`ns (602%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,265`ns (2336%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `7,002`ns (3107%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,600`ns (21566%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `224`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `324`ns (145%)                           |
| [uom](https://npmjs.com/package/uom)                               | `582`ns (260%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `910`ns (407%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,057`ns (473%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,188`ns (531%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,430`ns (639%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,369`ns (1059%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,793`ns (2143%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,862`ns (3963%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,419`ns (21650%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `647`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `741`ns (115%)                           |
| [convert](https://npmjs.com/package/convert)       | `844`ns (130%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `330`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `615`ns (186%)                           |

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
