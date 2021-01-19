# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 19 Jan 2021 08:11:37 GMT with Node.js v15.6.0 (V8 v8.6.395.17-node.23) on fv-az54-220 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `220`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `362`ns (165%)                           |
| [uom](https://npmjs.com/package/uom)                               | `559`ns (254%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `889`ns (404%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,047`ns (476%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,246`ns (566%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,252`ns (569%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,668`ns (2120%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,105`ns (21391%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `213`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `362`ns (170%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,024`ns (481%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,056`ns (496%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,205`ns (566%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,469`ns (690%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,586`ns (2625%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,587`ns (2625%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,856`ns (22019%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `210`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `352`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `555`ns (265%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `902`ns (430%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,085`ns (517%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,173`ns (559%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,255`ns (598%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,359`ns (1124%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,259`ns (2030%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,800`ns (4195%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,029`ns (22416%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `727`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `773`ns (106%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `337`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `677`ns (201%)                           |

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
