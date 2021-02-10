# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 10 Feb 2021 22:24:09 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az195-98 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `231`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `233`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `407`ns (176%)                           |
| [uom](https://npmjs.com/package/uom)                               | `581`ns (252%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `874`ns (379%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,048`ns (454%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,334`ns (578%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,473`ns (638%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,783`ns (2071%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,634`ns (22359%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `243`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `479`ns (197%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,017`ns (418%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,100`ns (452%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,248`ns (513%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,367`ns (562%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,588`ns (2296%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,260`ns (2573%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,780`ns (21280%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `219`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `441`ns (202%)                           |
| [uom](https://npmjs.com/package/uom)                               | `581`ns (266%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `889`ns (407%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,094`ns (500%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,105`ns (505%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,158`ns (530%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,419`ns (1107%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,335`ns (1983%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,660`ns (4419%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,098`ns (23375%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `679`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `825`ns (122%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `350`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `715`ns (204%)                           |

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
