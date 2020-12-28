# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 28 Dec 2020 17:10:12 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az50-739 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `223`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `330`ns (148%)                           |
| [uom](https://npmjs.com/package/uom)                               | `575`ns (257%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `958`ns (429%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,102`ns (493%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,344`ns (602%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,468`ns (657%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,772`ns (2136%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,498`ns (22602%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `218`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `347`ns (159%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,147`ns (526%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,158`ns (530%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,208`ns (554%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,267`ns (580%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,239`ns (2399%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,560`ns (3005%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,879`ns (22388%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `234`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `329`ns (141%)                           |
| [uom](https://npmjs.com/package/uom)                               | `591`ns (252%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `936`ns (399%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,102`ns (470%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,111`ns (474%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,335`ns (570%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,334`ns (996%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,750`ns (2027%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,606`ns (3673%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,962`ns (20895%)                      |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `325`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `646`ns (199%)                           |

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
