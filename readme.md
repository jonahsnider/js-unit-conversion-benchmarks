# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 12 May 2021 23:35:27 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-356 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `226`ns (100%)                           |
| raw math (builtin)                                                 | `237`ns (105%)                           |
| [convert](https://npmjs.com/package/convert)                       | `379`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `639`ns (283%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,012`ns (448%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,240`ns (549%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,357`ns (601%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,494`ns (662%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,243`ns (2321%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,183`ns (21772%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `232`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `389`ns (168%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,113`ns (480%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,211`ns (522%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,411`ns (609%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,433`ns (618%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,548`ns (2393%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,641`ns (2864%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,090`ns (21175%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `219`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `310`ns (142%)                           |
| [uom](https://npmjs.com/package/uom)                               | `630`ns (288%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,060`ns (484%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,150`ns (525%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,336`ns (610%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,337`ns (610%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,529`ns (1154%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,041`ns (2301%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,246`ns (4220%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,466`ns (22579%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `612`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `722`ns (118%)                           |
| [convert](https://npmjs.com/package/convert)       | `857`ns (140%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `342`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `657`ns (192%)                           |

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
