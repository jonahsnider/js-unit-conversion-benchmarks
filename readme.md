# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 27 Apr 2021 15:56:16 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-721 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `218`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `236`ns (108%)                           |
| [convert](https://npmjs.com/package/convert)                       | `328`ns (150%)                           |
| [uom](https://npmjs.com/package/uom)                               | `582`ns (266%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `941`ns (431%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,067`ns (488%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,354`ns (620%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,392`ns (637%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,035`ns (2306%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,558`ns (22234%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `324`ns (153%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,094`ns (516%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,111`ns (524%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,243`ns (586%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,412`ns (666%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,527`ns (2606%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,512`ns (3070%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,971`ns (23087%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `224`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `335`ns (150%)                           |
| [uom](https://npmjs.com/package/uom)                               | `605`ns (271%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `922`ns (413%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,164`ns (521%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,216`ns (544%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,282`ns (573%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,856`ns (1277%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,863`ns (2175%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,113`ns (4076%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,672`ns (21770%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `689`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `871`ns (126%)                           |
| [ms](https://npmjs.com/package/ms)                 | `960`ns (139%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `326`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `683`ns (209%)                           |

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
