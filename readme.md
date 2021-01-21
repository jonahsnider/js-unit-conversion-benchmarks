# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 21 Jan 2021 03:22:32 GMT with Node.js v15.6.0 (V8 v8.6.395.17-node.23) on fv-az184-545 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `181`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `331`ns (182%)                           |
| [uom](https://npmjs.com/package/uom)                               | `483`ns (266%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `750`ns (413%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `836`ns (461%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,117`ns (615%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,421`ns (783%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,871`ns (2133%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,508`ns (22319%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `186`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `333`ns (179%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `913`ns (490%)                           |
| [uom](https://npmjs.com/package/uom)                               | `936`ns (503%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,006`ns (540%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,169`ns (628%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,670`ns (2508%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,878`ns (2619%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,025`ns (21490%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `179`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `319`ns (178%)                           |
| [uom](https://npmjs.com/package/uom)                               | `502`ns (280%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `745`ns (415%)                           |
| [moment](https://npmjs.com/package/moment)                         | `942`ns (525%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `959`ns (535%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `988`ns (551%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,984`ns (1106%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,744`ns (2087%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,458`ns (4158%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,813`ns (22195%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `641`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `674`ns (105%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `303`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `616`ns (203%)                           |

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
