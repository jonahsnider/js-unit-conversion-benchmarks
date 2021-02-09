# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 09 Feb 2021 20:28:18 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az60-834 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `201`ns (100%)                           |
| raw math (builtin)                                                 | `208`ns (104%)                           |
| [convert](https://npmjs.com/package/convert)                       | `311`ns (155%)                           |
| [uom](https://npmjs.com/package/uom)                               | `494`ns (246%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `737`ns (368%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `815`ns (406%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,055`ns (526%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,082`ns (540%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,902`ns (1946%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,684`ns (20782%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `216`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `374`ns (173%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `825`ns (381%)                           |
| [uom](https://npmjs.com/package/uom)                               | `928`ns (429%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `986`ns (455%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,134`ns (524%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,937`ns (2280%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,054`ns (2334%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,403`ns (19126%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `196`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `305`ns (156%)                           |
| [uom](https://npmjs.com/package/uom)                               | `471`ns (241%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `810`ns (414%)                           |
| [moment](https://npmjs.com/package/moment)                         | `896`ns (458%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `961`ns (492%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `995`ns (509%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,846`ns (944%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,727`ns (1906%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,650`ns (3912%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,253`ns (21099%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `667`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `748`ns (112%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `298`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `603`ns (203%)                           |

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
