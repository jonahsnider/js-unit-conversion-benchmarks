# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 12 May 2021 22:09:44 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-637 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `175`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `179`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)                       | `276`ns (158%)                           |
| [uom](https://npmjs.com/package/uom)                               | `484`ns (277%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `752`ns (429%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `887`ns (506%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,101`ns (628%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,132`ns (646%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,904`ns (2229%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,325`ns (23022%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `175`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `259`ns (148%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `861`ns (492%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `917`ns (525%)                           |
| [uom](https://npmjs.com/package/uom)                               | `934`ns (534%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,184`ns (677%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,691`ns (2683%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,012`ns (2866%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,211`ns (22999%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `182`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `254`ns (140%)                           |
| [uom](https://npmjs.com/package/uom)                               | `477`ns (262%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `686`ns (377%)                           |
| [moment](https://npmjs.com/package/moment)                         | `904`ns (496%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `982`ns (539%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `999`ns (549%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,875`ns (1030%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,911`ns (2148%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,540`ns (4142%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,051`ns (22002%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `503`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `557`ns (111%)                           |
| [convert](https://npmjs.com/package/convert)       | `597`ns (119%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `266`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `509`ns (191%)                           |

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
