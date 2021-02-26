# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 26 Feb 2021 01:37:17 GMT with Node.js v15.10.0 (V8 v8.6.395.17-node.25) on fv-az60-630 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `195`ns (100%)                           |
| raw math (builtin)                                                 | `198`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `309`ns (158%)                           |
| [uom](https://npmjs.com/package/uom)                               | `528`ns (270%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `855`ns (437%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `958`ns (490%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,121`ns (574%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,448`ns (741%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,016`ns (2054%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,822`ns (21905%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `206`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `419`ns (203%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `949`ns (460%)                           |
| [uom](https://npmjs.com/package/uom)                               | `949`ns (461%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,079`ns (523%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,220`ns (592%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,983`ns (2417%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,286`ns (2564%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `43,308`ns (21009%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `191`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `324`ns (169%)                           |
| [uom](https://npmjs.com/package/uom)                               | `508`ns (265%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `806`ns (421%)                           |
| [moment](https://npmjs.com/package/moment)                         | `991`ns (518%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,031`ns (539%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,148`ns (600%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,183`ns (1140%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,069`ns (2126%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,082`ns (4223%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `42,667`ns (22291%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) | `684`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)           | `691`ns (101%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `312`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `634`ns (203%)                           |

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
