# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 28 May 2021 15:29:48 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-269 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `196`ns (100%)                           |
| raw math (builtin)                                                 | `212`ns (108%)                           |
| [convert](https://npmjs.com/package/convert)                       | `341`ns (174%)                           |
| [uom](https://npmjs.com/package/uom)                               | `596`ns (303%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `938`ns (478%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,016`ns (517%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,239`ns (631%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,360`ns (693%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,360`ns (2730%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,111`ns (23994%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `220`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `299`ns (136%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,070`ns (486%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,086`ns (493%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,102`ns (501%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,307`ns (593%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,967`ns (2256%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,284`ns (2853%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,257`ns (21458%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `208`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `293`ns (141%)                           |
| [uom](https://npmjs.com/package/uom)                               | `650`ns (313%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `858`ns (412%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,000`ns (481%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,105`ns (531%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,221`ns (587%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,302`ns (1107%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,122`ns (2462%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,347`ns (4013%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,255`ns (23199%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `621`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `670`ns (108%)                           |
| [convert](https://npmjs.com/package/convert)       | `756`ns (122%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `302`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `580`ns (192%)                           |

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
