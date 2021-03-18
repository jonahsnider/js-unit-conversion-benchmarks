# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 18 Mar 2021 06:47:24 GMT with Node.js v15.12.0 (V8 v8.6.395.17-node.27) on fv-az212-559 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `218`ns (100%)                           |
| raw math (builtin)                                                 | `230`ns (106%)                           |
| [convert](https://npmjs.com/package/convert)                       | `353`ns (161%)                           |
| [uom](https://npmjs.com/package/uom)                               | `536`ns (245%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `766`ns (351%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,154`ns (529%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,270`ns (581%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,333`ns (611%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,747`ns (2174%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,764`ns (22333%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `236`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `316`ns (134%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `925`ns (392%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,121`ns (476%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,291`ns (547%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,320`ns (560%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,666`ns (2403%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,677`ns (2407%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,327`ns (20917%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `214`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `332`ns (156%)                           |
| [uom](https://npmjs.com/package/uom)                               | `535`ns (251%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `966`ns (453%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,036`ns (485%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,047`ns (490%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,239`ns (580%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,232`ns (1045%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,376`ns (2049%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,313`ns (4361%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,024`ns (22488%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `557`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `654`ns (117%)                           |
| [convert](https://npmjs.com/package/convert)       | `718`ns (129%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `311`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `625`ns (201%)                           |

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
