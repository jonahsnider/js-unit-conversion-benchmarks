# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 14 Jan 2021 22:21:33 GMT with Node.js v15.5.1 (V8 v8.6.395.17-node.23) on fv-az60-653 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `180`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `323`ns (180%)                           |
| [uom](https://npmjs.com/package/uom)                               | `481`ns (267%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `786`ns (437%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `889`ns (494%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,034`ns (575%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,206`ns (670%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,934`ns (2186%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,715`ns (22075%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `185`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `320`ns (173%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `885`ns (478%)                           |
| [uom](https://npmjs.com/package/uom)                               | `927`ns (501%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `967`ns (523%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,091`ns (589%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,615`ns (2494%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,846`ns (2619%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,886`ns (21554%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `189`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `308`ns (163%)                           |
| [uom](https://npmjs.com/package/uom)                               | `457`ns (241%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `738`ns (390%)                           |
| [moment](https://npmjs.com/package/moment)                         | `888`ns (469%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `957`ns (506%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `984`ns (520%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,958`ns (1034%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,690`ns (1949%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,503`ns (3963%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,772`ns (21006%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `618`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `687`ns (111%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `288`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `579`ns (201%)                           |

<!-- endblock(results) -->

---

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

---

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
