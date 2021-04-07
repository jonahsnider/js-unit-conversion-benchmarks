# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 07 Apr 2021 19:45:53 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-18 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `219`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `228`ns (104%)                           |
| [uom](https://npmjs.com/package/uom)                               | `553`ns (253%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `808`ns (369%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `956`ns (437%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,141`ns (522%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,187`ns (542%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,586`ns (725%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,471`ns (2043%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,676`ns (19498%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `219`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `959`ns (438%)                           |
| [uom](https://npmjs.com/package/uom)                               | `975`ns (445%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,045`ns (478%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,357`ns (620%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,673`ns (764%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,856`ns (2219%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,474`ns (2502%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,486`ns (19416%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `214`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `553`ns (259%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `844`ns (395%)                           |
| [moment](https://npmjs.com/package/moment)                         | `977`ns (457%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,086`ns (508%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,255`ns (587%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,683`ns (788%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,178`ns (1019%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,096`ns (1917%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,339`ns (3902%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `43,401`ns (20309%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `568`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `660`ns (116%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,235`ns (569%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `340`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,435`ns (716%)                         |

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
