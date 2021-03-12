# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 12 Mar 2021 16:08:16 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az198-305 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `187`ns (100%)                           |
| raw math (builtin)                                                 | `189`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `304`ns (162%)                           |
| [uom](https://npmjs.com/package/uom)                               | `475`ns (253%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `807`ns (431%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,046`ns (559%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,161`ns (620%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,226`ns (655%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,169`ns (2227%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,739`ns (22830%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `189`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `267`ns (141%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `916`ns (484%)                           |
| [uom](https://npmjs.com/package/uom)                               | `972`ns (513%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,084`ns (572%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,326`ns (700%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,041`ns (2661%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,060`ns (2671%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `43,425`ns (22923%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `184`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `276`ns (150%)                           |
| [uom](https://npmjs.com/package/uom)                               | `462`ns (251%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `840`ns (457%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `945`ns (514%)                           |
| [moment](https://npmjs.com/package/moment)                         | `977`ns (531%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,017`ns (553%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `1,974`ns (1073%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,952`ns (2149%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,934`ns (4313%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,945`ns (23347%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `484`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `604`ns (125%)                           |
| [ms](https://npmjs.com/package/ms)                 | `621`ns (128%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `301`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `541`ns (180%)                           |

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
