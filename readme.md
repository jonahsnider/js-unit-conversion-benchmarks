# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 22 Mar 2021 06:00:53 GMT with Node.js v15.12.0 (V8 v8.6.395.17-node.27) on fv-az219-114 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `209`ns (100%)                           |
| raw math (builtin)                                                 | `237`ns (113%)                           |
| [uom](https://npmjs.com/package/uom)                               | `561`ns (269%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `914`ns (438%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,119`ns (536%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,361`ns (652%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,376`ns (659%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,839`ns (881%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,855`ns (2325%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `57,627`ns (27601%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `266`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,122`ns (421%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,129`ns (424%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,171`ns (440%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,262`ns (474%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,722`ns (647%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,684`ns (2135%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,717`ns (2523%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `61,148`ns (22971%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `226`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `601`ns (265%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `900`ns (398%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,126`ns (498%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,193`ns (527%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,282`ns (567%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,656`ns (732%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,679`ns (1184%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,217`ns (2305%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,104`ns (4023%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `59,100`ns (26116%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)                 | `674`ns (100%)                           |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `775`ns (115%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,247`ns (481%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `319`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,719`ns (853%)                         |

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
