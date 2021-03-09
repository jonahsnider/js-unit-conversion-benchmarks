# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 09 Mar 2021 19:56:55 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az213-371 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `208`ns (100%)                           |
| raw math (builtin)                                                 | `211`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `268`ns (129%)                           |
| [uom](https://npmjs.com/package/uom)                               | `509`ns (245%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `909`ns (438%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,017`ns (490%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,113`ns (536%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,241`ns (597%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,585`ns (2207%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,449`ns (22842%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `207`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `274`ns (133%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,016`ns (491%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,026`ns (496%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,155`ns (558%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,264`ns (611%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,197`ns (2512%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,060`ns (2929%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,684`ns (22085%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `197`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `322`ns (163%)                           |
| [uom](https://npmjs.com/package/uom)                               | `511`ns (259%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `868`ns (441%)                           |
| [moment](https://npmjs.com/package/moment)                         | `993`ns (504%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,018`ns (517%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,258`ns (639%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,147`ns (1090%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,631`ns (2351%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,685`ns (4410%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `45,833`ns (23270%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `587`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `702`ns (120%)                           |
| [convert](https://npmjs.com/package/convert)       | `825`ns (141%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `306`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `622`ns (203%)                           |

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
