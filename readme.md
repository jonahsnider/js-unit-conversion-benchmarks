# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 05 Feb 2021 23:54:46 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az12-189 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `262`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `267`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)                       | `379`ns (144%)                           |
| [uom](https://npmjs.com/package/uom)                               | `601`ns (229%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,055`ns (402%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,178`ns (449%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,376`ns (524%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,434`ns (546%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,265`ns (2006%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `53,010`ns (20199%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `257`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `499`ns (194%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,142`ns (444%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,170`ns (455%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,313`ns (511%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,435`ns (558%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,523`ns (2148%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,755`ns (2627%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,791`ns (20139%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `258`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `423`ns (164%)                           |
| [uom](https://npmjs.com/package/uom)                               | `613`ns (238%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,101`ns (427%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,134`ns (440%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,151`ns (446%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,275`ns (494%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,739`ns (1063%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,126`ns (1988%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,920`ns (3460%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,081`ns (19816%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `770`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `1,057`ns (137%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `414`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `777`ns (188%)                           |

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
