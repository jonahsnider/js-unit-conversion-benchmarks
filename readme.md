# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 15 May 2021 20:22:22 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-521 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `225`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `228`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `349`ns (155%)                           |
| [uom](https://npmjs.com/package/uom)                               | `582`ns (259%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `970`ns (431%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,112`ns (495%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,228`ns (547%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,301`ns (579%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,185`ns (2307%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,769`ns (21699%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `220`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `384`ns (174%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `986`ns (448%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,154`ns (524%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,198`ns (544%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,393`ns (632%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,492`ns (2494%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,721`ns (3052%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,253`ns (22818%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `228`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `319`ns (140%)                           |
| [uom](https://npmjs.com/package/uom)                               | `677`ns (297%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `929`ns (408%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,080`ns (474%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,246`ns (546%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,372`ns (602%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,373`ns (1041%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,032`ns (2208%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,727`ns (4267%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,372`ns (21659%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `628`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `716`ns (114%)                           |
| [convert](https://npmjs.com/package/convert)       | `777`ns (124%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `341`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `690`ns (202%)                           |

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
