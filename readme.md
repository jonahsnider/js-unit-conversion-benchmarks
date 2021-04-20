# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 20 Apr 2021 02:20:40 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az207-445 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `235`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `261`ns (111%)                           |
| [convert](https://npmjs.com/package/convert)                       | `359`ns (153%)                           |
| [uom](https://npmjs.com/package/uom)                               | `595`ns (253%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `872`ns (371%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,079`ns (459%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,344`ns (571%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,384`ns (588%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,140`ns (2185%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,436`ns (21440%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `237`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `331`ns (140%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,019`ns (430%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,226`ns (518%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,364`ns (576%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,432`ns (605%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,354`ns (2262%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,776`ns (2863%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,248`ns (20808%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `219`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `345`ns (158%)                           |
| [uom](https://npmjs.com/package/uom)                               | `687`ns (313%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,049`ns (479%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,120`ns (511%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,201`ns (548%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,469`ns (670%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,602`ns (1188%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,872`ns (2223%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,908`ns (4065%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,295`ns (23864%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)                 | `700`ns (100%)                           |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `757`ns (108%)                           |
| [convert](https://npmjs.com/package/convert)       | `894`ns (128%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `346`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `643`ns (186%)                           |

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
