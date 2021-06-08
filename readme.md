# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 08 Jun 2021 02:04:27 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az219-949 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `178`ns (100%)                           |
| raw math (builtin)                                                 | `183`ns (103%)                           |
| [convert](https://npmjs.com/package/convert)                       | `287`ns (161%)                           |
| [uom](https://npmjs.com/package/uom)                               | `472`ns (265%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `739`ns (415%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `745`ns (418%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `942`ns (529%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `957`ns (538%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,159`ns (651%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,959`ns (2223%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,235`ns (23156%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `165`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `294`ns (178%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `814`ns (492%)                           |
| [uom](https://npmjs.com/package/uom)                               | `912`ns (551%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,004`ns (607%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,233`ns (745%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,708`ns (2847%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,007`ns (3028%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,600`ns (25156%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `178`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `255`ns (144%)                           |
| [uom](https://npmjs.com/package/uom)                               | `512`ns (288%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `745`ns (420%)                           |
| [moment](https://npmjs.com/package/moment)                         | `857`ns (483%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,049`ns (591%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,166`ns (657%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,171`ns (1222%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,332`ns (2439%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,528`ns (4238%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,960`ns (23060%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)                 | `582`ns (100%)                           |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `589`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)       | `612`ns (105%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `289`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `497`ns (172%)                           |

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
