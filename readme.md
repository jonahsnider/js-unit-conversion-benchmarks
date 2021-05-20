# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 20 May 2021 04:17:05 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az213-716 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `173`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `174`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `259`ns (150%)                           |
| [uom](https://npmjs.com/package/uom)                               | `495`ns (287%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `729`ns (422%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `809`ns (468%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,083`ns (627%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,103`ns (639%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,824`ns (2214%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,092`ns (23213%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `173`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `298`ns (172%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `831`ns (480%)                           |
| [uom](https://npmjs.com/package/uom)                               | `899`ns (519%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `928`ns (536%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,096`ns (633%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,652`ns (2687%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,043`ns (2913%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,898`ns (23047%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `177`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `256`ns (144%)                           |
| [uom](https://npmjs.com/package/uom)                               | `519`ns (293%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `693`ns (391%)                           |
| [moment](https://npmjs.com/package/moment)                         | `888`ns (501%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `911`ns (514%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `951`ns (537%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,819`ns (1026%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,680`ns (2075%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,418`ns (4183%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,757`ns (22420%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `493`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `610`ns (124%)                           |
| [ms](https://npmjs.com/package/ms)                 | `686`ns (139%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `253`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `505`ns (200%)                           |

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
