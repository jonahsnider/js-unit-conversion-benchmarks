# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 02 Mar 2021 17:04:31 GMT with Node.js v15.10.0 (V8 v8.6.395.17-node.25) on fv-az99-135 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `207`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `236`ns (114%)                           |
| [convert](https://npmjs.com/package/convert)                       | `348`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `634`ns (307%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `853`ns (413%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,142`ns (552%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,145`ns (554%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,301`ns (629%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,854`ns (2349%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,401`ns (21966%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `254`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `455`ns (179%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,051`ns (414%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,319`ns (520%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,394`ns (549%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,402`ns (553%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,774`ns (1881%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,709`ns (2643%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,007`ns (17732%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `184`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `381`ns (208%)                           |
| [uom](https://npmjs.com/package/uom)                               | `500`ns (273%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,091`ns (594%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,097`ns (598%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,141`ns (622%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,173`ns (639%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,257`ns (1230%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,196`ns (2831%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,764`ns (4230%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,664`ns (24880%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) | `719`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)           | `759`ns (106%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `442`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `857`ns (194%)                           |

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
