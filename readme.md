# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 15 Apr 2021 19:36:38 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az296-468 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `244`ns (100%)                           |
| raw math (builtin)                                                 | `246`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `377`ns (154%)                           |
| [uom](https://npmjs.com/package/uom)                               | `599`ns (245%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `954`ns (390%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,060`ns (434%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,361`ns (557%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,552`ns (635%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,461`ns (2236%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,681`ns (20339%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `255`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `356`ns (139%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,080`ns (423%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,208`ns (473%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,272`ns (499%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,341`ns (526%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,437`ns (2132%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,762`ns (2651%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,846`ns (19541%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `243`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `339`ns (140%)                           |
| [uom](https://npmjs.com/package/uom)                               | `609`ns (250%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `972`ns (400%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,130`ns (465%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,196`ns (492%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,278`ns (525%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,643`ns (1087%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,182`ns (2131%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,682`ns (3570%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,681`ns (20429%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `652`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `813`ns (125%)                           |
| [convert](https://npmjs.com/package/convert)       | `853`ns (131%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `372`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `660`ns (178%)                           |

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
