# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 17 Apr 2021 02:39:04 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-172 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `200`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `204`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)                       | `336`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `537`ns (268%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `980`ns (490%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,152`ns (576%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,220`ns (610%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,303`ns (652%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,361`ns (2180%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,802`ns (22397%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `197`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `324`ns (164%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `950`ns (481%)                           |
| [uom](https://npmjs.com/package/uom)                               | `998`ns (505%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,046`ns (530%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,365`ns (691%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,413`ns (2741%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,545`ns (2808%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,172`ns (22368%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `199`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `289`ns (145%)                           |
| [uom](https://npmjs.com/package/uom)                               | `511`ns (257%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `767`ns (385%)                           |
| [moment](https://npmjs.com/package/moment)                         | `973`ns (489%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,046`ns (526%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,177`ns (591%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,207`ns (1108%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,128`ns (2074%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,526`ns (4283%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,953`ns (23083%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `566`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `673`ns (119%)                           |
| [convert](https://npmjs.com/package/convert)       | `677`ns (120%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `301`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `579`ns (192%)                           |

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
