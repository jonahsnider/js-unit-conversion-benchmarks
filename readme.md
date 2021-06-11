# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 11 Jun 2021 02:36:28 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-615 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `220`ns (104%)                           |
| [convert](https://npmjs.com/package/convert)                       | `323`ns (153%)                           |
| [uom](https://npmjs.com/package/uom)                               | `563`ns (266%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `812`ns (383%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `893`ns (422%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,085`ns (512%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,130`ns (533%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,462`ns (690%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,499`ns (2123%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,863`ns (23533%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `211`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `337`ns (160%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,060`ns (502%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,254`ns (594%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,442`ns (683%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,474`ns (698%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,757`ns (2726%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,970`ns (2827%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,909`ns (23636%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `216`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `320`ns (148%)                           |
| [uom](https://npmjs.com/package/uom)                               | `560`ns (259%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,077`ns (498%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,127`ns (521%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,218`ns (563%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,280`ns (592%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,303`ns (1065%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,591`ns (2123%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,359`ns (4327%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,984`ns (23111%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `612`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `683`ns (112%)                           |
| [ms](https://npmjs.com/package/ms)                 | `737`ns (120%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `323`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `631`ns (195%)                           |

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
