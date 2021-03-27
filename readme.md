# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 27 Mar 2021 11:46:53 GMT with Node.js v15.12.0 (V8 v8.6.395.17-node.27) on fv-az154-581 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `226`ns (100%)                           |
| raw math (builtin)                                                 | `250`ns (110%)                           |
| [uom](https://npmjs.com/package/uom)                               | `561`ns (248%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,004`ns (444%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,072`ns (474%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,284`ns (568%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,348`ns (596%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,530`ns (676%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,467`ns (1975%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `53,169`ns (23509%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `234`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,150`ns (493%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,161`ns (497%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,204`ns (515%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,232`ns (528%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,626`ns (696%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,991`ns (2137%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,268`ns (2684%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `60,246`ns (25799%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `229`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `562`ns (245%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `907`ns (396%)                           |
| [moment](https://npmjs.com/package/moment)                         | `998`ns (436%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,123`ns (490%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,274`ns (556%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,574`ns (687%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,299`ns (1004%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,048`ns (2204%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,916`ns (3457%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `55,695`ns (24323%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)                 | `661`ns (100%)                           |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `832`ns (126%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,188`ns (482%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `315`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,367`ns (751%)                         |

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
