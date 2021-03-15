# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 15 Mar 2021 23:49:05 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az212-465 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `203`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `244`ns (120%)                           |
| [convert](https://npmjs.com/package/convert)                       | `293`ns (144%)                           |
| [uom](https://npmjs.com/package/uom)                               | `610`ns (301%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `958`ns (472%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,083`ns (534%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,212`ns (597%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,409`ns (694%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,885`ns (2406%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,308`ns (23797%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `191`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `351`ns (183%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,056`ns (552%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,074`ns (561%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,218`ns (636%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,231`ns (643%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,488`ns (2868%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,328`ns (3307%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,992`ns (25078%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `179`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `297`ns (166%)                           |
| [uom](https://npmjs.com/package/uom)                               | `579`ns (324%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `874`ns (489%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,048`ns (587%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,108`ns (620%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,278`ns (715%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,397`ns (1342%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,996`ns (2796%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,493`ns (4753%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,940`ns (26273%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `682`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `718`ns (105%)                           |
| [convert](https://npmjs.com/package/convert)       | `880`ns (129%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `334`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `644`ns (193%)                           |

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
