# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 03 Jun 2021 02:47:42 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az212-958 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `195`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `196`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `295`ns (151%)                           |
| [uom](https://npmjs.com/package/uom)                               | `489`ns (250%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `753`ns (385%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `835`ns (428%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,123`ns (575%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,197`ns (613%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,855`ns (1974%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,474`ns (20721%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `198`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `280`ns (142%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `842`ns (425%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `930`ns (469%)                           |
| [uom](https://npmjs.com/package/uom)                               | `955`ns (482%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,197`ns (604%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,844`ns (2445%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,942`ns (2494%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,664`ns (20523%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `189`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `286`ns (151%)                           |
| [uom](https://npmjs.com/package/uom)                               | `473`ns (250%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `719`ns (380%)                           |
| [moment](https://npmjs.com/package/moment)                         | `892`ns (471%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `921`ns (486%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,002`ns (529%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `1,882`ns (993%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,714`ns (1960%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,629`ns (4026%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,303`ns (21268%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `526`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `611`ns (116%)                           |
| [ms](https://npmjs.com/package/ms)                 | `628`ns (119%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `278`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `508`ns (182%)                           |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
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
