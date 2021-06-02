# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 02 Jun 2021 01:26:35 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az213-876 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `216`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `231`ns (107%)                           |
| [convert](https://npmjs.com/package/convert)                       | `374`ns (173%)                           |
| [uom](https://npmjs.com/package/uom)                               | `621`ns (287%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,180`ns (545%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,197`ns (553%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,358`ns (628%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,594`ns (737%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,643`ns (2609%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,825`ns (23959%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `246`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `374`ns (152%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,180`ns (480%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,396`ns (568%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,412`ns (574%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,439`ns (585%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,606`ns (2279%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `7,336`ns (2982%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,171`ns (19990%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `239`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `347`ns (145%)                           |
| [uom](https://npmjs.com/package/uom)                               | `710`ns (298%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,117`ns (468%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,252`ns (525%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,340`ns (561%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,847`ns (774%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,574`ns (1079%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,003`ns (2097%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,219`ns (3864%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,030`ns (20550%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `784`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `934`ns (119%)                           |
| [convert](https://npmjs.com/package/convert)       | `1,070`ns (137%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `382`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `621`ns (163%)                           |

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
