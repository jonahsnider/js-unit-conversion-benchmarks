# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 01 Jan 2021 19:52:16 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az60-573 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `215`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `341`ns (158%)                           |
| [uom](https://npmjs.com/package/uom)                               | `581`ns (270%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `994`ns (463%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,021`ns (475%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,348`ns (627%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,441`ns (671%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,428`ns (2060%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,404`ns (22524%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `213`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `357`ns (168%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,076`ns (505%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,140`ns (536%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,171`ns (550%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,371`ns (644%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,602`ns (2631%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,604`ns (2632%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,570`ns (22342%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `210`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `359`ns (171%)                           |
| [uom](https://npmjs.com/package/uom)                               | `555`ns (264%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `906`ns (432%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,119`ns (533%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,145`ns (545%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,183`ns (564%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,371`ns (1129%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,394`ns (2093%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,912`ns (4245%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,469`ns (22612%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `718`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `772`ns (107%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `363`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `682`ns (188%)                           |

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
