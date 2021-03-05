# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 05 Mar 2021 00:38:30 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az207-156 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `169`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `173`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)                       | `284`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `454`ns (268%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `776`ns (458%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `999`ns (590%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,099`ns (649%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,156`ns (683%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,070`ns (2405%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,599`ns (25179%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `191`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `342`ns (179%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `824`ns (432%)                           |
| [uom](https://npmjs.com/package/uom)                               | `928`ns (486%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,146`ns (601%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,224`ns (642%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,492`ns (2355%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,577`ns (2924%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,149`ns (23147%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `165`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `259`ns (157%)                           |
| [uom](https://npmjs.com/package/uom)                               | `424`ns (257%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `918`ns (556%)                           |
| [moment](https://npmjs.com/package/moment)                         | `930`ns (563%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,026`ns (621%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,028`ns (623%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,076`ns (1257%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,949`ns (2391%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,015`ns (4247%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,006`ns (27248%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `466`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `595`ns (128%)                           |
| [convert](https://npmjs.com/package/convert)       | `697`ns (149%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `277`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `488`ns (176%)                           |

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
