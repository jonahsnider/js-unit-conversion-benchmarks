# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 31 May 2021 18:18:01 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-569 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `221`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `221`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `378`ns (171%)                           |
| [uom](https://npmjs.com/package/uom)                               | `578`ns (262%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `966`ns (437%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,038`ns (470%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,325`ns (600%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,354`ns (612%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,740`ns (2145%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,842`ns (22552%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `220`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `314`ns (143%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,044`ns (474%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,085`ns (492%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,170`ns (531%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,365`ns (619%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,794`ns (2629%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,939`ns (2694%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,851`ns (22616%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `218`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `322`ns (148%)                           |
| [uom](https://npmjs.com/package/uom)                               | `574`ns (263%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `850`ns (389%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,196`ns (548%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,256`ns (575%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,272`ns (583%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,344`ns (1073%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,360`ns (1997%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,670`ns (4429%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,784`ns (22802%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `647`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `740`ns (114%)                           |
| [ms](https://npmjs.com/package/ms)                 | `777`ns (120%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `336`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `650`ns (193%)                           |

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
