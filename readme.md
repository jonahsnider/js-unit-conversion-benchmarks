# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 13 Jun 2021 06:13:05 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-758 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `187`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `201`ns (108%)                           |
| [convert](https://npmjs.com/package/convert)                       | `307`ns (164%)                           |
| [uom](https://npmjs.com/package/uom)                               | `634`ns (340%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `742`ns (398%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `845`ns (453%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,038`ns (556%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,109`ns (594%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,377`ns (737%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,391`ns (2351%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,356`ns (23750%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `204`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `364`ns (178%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `985`ns (483%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,027`ns (503%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,113`ns (546%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,286`ns (630%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,033`ns (2467%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,781`ns (2834%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `44,434`ns (21785%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `272`ns (128%)                           |
| [uom](https://npmjs.com/package/uom)                               | `566`ns (267%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `852`ns (402%)                           |
| [moment](https://npmjs.com/package/moment)                         | `975`ns (460%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,124`ns (531%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,221`ns (577%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,217`ns (1047%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,720`ns (2230%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,002`ns (3780%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `43,844`ns (20711%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `596`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `746`ns (125%)                           |
| [ms](https://npmjs.com/package/ms)                 | `851`ns (143%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `324`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `581`ns (179%)                           |

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
	[BenchmarkTitles.InchesToMillimeters]() {
		return 4 * 25.4;
	}
};

export default tests;
```
