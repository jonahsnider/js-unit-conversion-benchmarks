# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 10 May 2021 01:51:22 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-720 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `209`ns (100%)                           |
| raw math (builtin)                                                 | `209`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `346`ns (166%)                           |
| [uom](https://npmjs.com/package/uom)                               | `607`ns (291%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `884`ns (424%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,027`ns (492%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,309`ns (628%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,374`ns (659%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,069`ns (2431%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,257`ns (22657%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `202`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `315`ns (156%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `981`ns (486%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,133`ns (562%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,267`ns (628%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,346`ns (667%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,961`ns (2459%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,444`ns (3195%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,229`ns (23909%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `209`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `296`ns (142%)                           |
| [uom](https://npmjs.com/package/uom)                               | `586`ns (281%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `959`ns (460%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,043`ns (500%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,217`ns (583%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,327`ns (636%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,505`ns (1201%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,702`ns (2254%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,242`ns (3951%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,413`ns (23208%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `624`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `630`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)       | `755`ns (121%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `335`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `655`ns (196%)                           |

<!-- endblock(results) -->

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
