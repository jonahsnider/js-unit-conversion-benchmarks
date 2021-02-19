# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 19 Feb 2021 20:07:25 GMT with Node.js v15.9.0 (V8 v8.6.395.17-node.25) on fv-az59-909 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `181`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `182`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `293`ns (162%)                           |
| [uom](https://npmjs.com/package/uom)                               | `491`ns (271%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `679`ns (375%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,013`ns (559%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,272`ns (702%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,390`ns (767%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,242`ns (2342%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,920`ns (24799%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `205`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `328`ns (160%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `842`ns (410%)                           |
| [uom](https://npmjs.com/package/uom)                               | `937`ns (456%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `981`ns (478%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,390`ns (677%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,614`ns (2246%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,423`ns (2640%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,389`ns (21611%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `163`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `312`ns (191%)                           |
| [uom](https://npmjs.com/package/uom)                               | `463`ns (283%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `776`ns (475%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,036`ns (635%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,144`ns (701%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,283`ns (786%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,088`ns (1279%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,902`ns (2390%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,601`ns (4655%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,496`ns (27251%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `580`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `701`ns (121%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `288`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `608`ns (211%)                           |

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
