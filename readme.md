# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 30 Dec 2020 19:11:19 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az12-647 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `217`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `295`ns (136%)                           |
| [uom](https://npmjs.com/package/uom)                               | `554`ns (256%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `881`ns (406%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,009`ns (465%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,358`ns (626%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,406`ns (648%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,398`ns (2028%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,558`ns (21931%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `304`ns (143%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `936`ns (442%)                           |
| [uom](https://npmjs.com/package/uom)                               | `992`ns (469%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,132`ns (534%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,380`ns (652%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,346`ns (2524%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,992`ns (2829%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,970`ns (22177%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `214`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `297`ns (139%)                           |
| [uom](https://npmjs.com/package/uom)                               | `513`ns (240%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `843`ns (395%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,062`ns (497%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,092`ns (511%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,148`ns (537%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,202`ns (1031%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,465`ns (2090%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,369`ns (4385%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,527`ns (22247%)                      |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `333`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `641`ns (192%)                           |

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
