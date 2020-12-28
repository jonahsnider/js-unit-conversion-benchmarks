# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 28 Dec 2020 17:00:49 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az50-739 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `218`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `309`ns (141%)                           |
| [uom](https://npmjs.com/package/uom)                               | `564`ns (258%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `897`ns (411%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,056`ns (484%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,341`ns (614%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,542`ns (706%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,800`ns (2199%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `54,693`ns (25058%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `211`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `344`ns (163%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,024`ns (484%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,107`ns (524%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,269`ns (600%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,437`ns (680%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,948`ns (2814%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,373`ns (3015%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `54,467`ns (25772%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `216`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `331`ns (154%)                           |
| [uom](https://npmjs.com/package/uom)                               | `542`ns (251%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `940`ns (436%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,133`ns (526%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,215`ns (564%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,496`ns (1158%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,744`ns (2201%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `10,055`ns (4665%)                       |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `53,253`ns (24708%)                      |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `332`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `660`ns (198%)                           |

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
