# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 26 Dec 2020 06:42:16 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az50-739 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `211`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `236`ns (112%)                           |
| [uom](https://npmjs.com/package/uom)                               | `479`ns (227%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `734`ns (348%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `826`ns (391%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `919`ns (435%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,052`ns (498%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,816`ns (1808%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `36,089`ns (17093%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `195`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `232`ns (119%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `855`ns (438%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `925`ns (474%)                           |
| [uom](https://npmjs.com/package/uom)                               | `939`ns (481%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,093`ns (560%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,210`ns (2157%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,966`ns (2545%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `36,083`ns (18488%)                      |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `287`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `494`ns (172%)                           |

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
