# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 25 May 2021 01:44:05 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az213-490 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `177`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `179`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `296`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `442`ns (251%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `732`ns (415%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `891`ns (505%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,057`ns (599%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,123`ns (636%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,938`ns (2231%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,024`ns (22674%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `176`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `255`ns (146%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `824`ns (469%)                           |
| [uom](https://npmjs.com/package/uom)                               | `842`ns (480%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `929`ns (529%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,140`ns (649%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,722`ns (2690%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,823`ns (2748%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,069`ns (22825%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `189`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `299`ns (158%)                           |
| [uom](https://npmjs.com/package/uom)                               | `455`ns (241%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `700`ns (371%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `924`ns (490%)                           |
| [moment](https://npmjs.com/package/moment)                         | `936`ns (496%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,000`ns (530%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,005`ns (1062%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,876`ns (2054%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,589`ns (4021%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,853`ns (21115%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `528`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `587`ns (111%)                           |
| [ms](https://npmjs.com/package/ms)                 | `590`ns (112%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `259`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `511`ns (197%)                           |

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
