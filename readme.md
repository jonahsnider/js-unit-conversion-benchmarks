# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 13 Apr 2021 01:43:04 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-184 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `190`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `200`ns (105%)                           |
| [uom](https://npmjs.com/package/uom)                               | `515`ns (271%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `749`ns (395%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `939`ns (495%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,062`ns (560%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,117`ns (589%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,450`ns (764%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,165`ns (2195%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `37,119`ns (19566%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `197`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `827`ns (420%)                           |
| [uom](https://npmjs.com/package/uom)                               | `900`ns (457%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,027`ns (521%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,040`ns (528%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,490`ns (757%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `3,960`ns (2011%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,046`ns (2563%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `37,897`ns (19250%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `186`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `523`ns (281%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `758`ns (407%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `927`ns (498%)                           |
| [moment](https://npmjs.com/package/moment)                         | `954`ns (512%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `960`ns (516%)                           |
| [convert](https://npmjs.com/package/convert)                       | `1,454`ns (781%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `1,924`ns (1033%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,680`ns (1977%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,615`ns (3553%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `36,810`ns (19772%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `532`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `614`ns (115%)                           |
| [convert](https://npmjs.com/package/convert)       | `2,732`ns (513%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `293`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,177`ns (743%)                         |

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
