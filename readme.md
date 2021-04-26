# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 26 Apr 2021 22:58:33 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-331 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `210`ns (100%)                           |
| raw math (builtin)                                                 | `229`ns (109%)                           |
| [convert](https://npmjs.com/package/convert)                       | `339`ns (161%)                           |
| [uom](https://npmjs.com/package/uom)                               | `581`ns (276%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `916`ns (436%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `977`ns (464%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,295`ns (615%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,315`ns (625%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,877`ns (2318%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,787`ns (23665%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `222`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `376`ns (169%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,080`ns (486%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,147`ns (516%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,192`ns (537%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,371`ns (617%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,854`ns (2635%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,859`ns (2637%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,762`ns (21947%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `236`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `322`ns (137%)                           |
| [uom](https://npmjs.com/package/uom)                               | `540`ns (229%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `863`ns (366%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,077`ns (457%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,170`ns (496%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,181`ns (501%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,323`ns (986%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,361`ns (1851%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,514`ns (4038%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,550`ns (20179%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `627`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `713`ns (114%)                           |
| [ms](https://npmjs.com/package/ms)                 | `721`ns (115%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `340`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `621`ns (183%)                           |

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
