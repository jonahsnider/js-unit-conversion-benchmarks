# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 05 Feb 2021 06:54:16 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az267-402 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `235`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `246`ns (105%)                           |
| [convert](https://npmjs.com/package/convert)                       | `371`ns (158%)                           |
| [uom](https://npmjs.com/package/uom)                               | `581`ns (248%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `874`ns (372%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,004`ns (428%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,248`ns (532%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,277`ns (544%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,482`ns (1909%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,234`ns (20974%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `246`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `403`ns (164%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `979`ns (398%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,078`ns (438%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,162`ns (472%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,415`ns (575%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,742`ns (2335%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,750`ns (2338%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,110`ns (19967%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `230`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `377`ns (164%)                           |
| [uom](https://npmjs.com/package/uom)                               | `566`ns (247%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `919`ns (400%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,062`ns (462%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,129`ns (491%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,173`ns (511%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,207`ns (961%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,494`ns (1956%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,103`ns (3963%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,785`ns (21239%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `735`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `795`ns (108%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `362`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `706`ns (195%)                           |

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
