# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 13 Apr 2021 18:57:41 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az207-19 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `258`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `279`ns (108%)                           |
| [uom](https://npmjs.com/package/uom)                               | `544`ns (211%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `844`ns (328%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,122`ns (435%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,159`ns (450%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,224`ns (475%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,421`ns (552%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,127`ns (1990%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,815`ns (15454%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `266`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `984`ns (370%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,048`ns (394%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,110`ns (417%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,190`ns (448%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,538`ns (578%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,387`ns (1650%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,735`ns (2157%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `38,471`ns (14469%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `250`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `565`ns (226%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `898`ns (359%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,025`ns (410%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,034`ns (413%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,104`ns (441%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,700`ns (679%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,028`ns (810%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,926`ns (1968%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,039`ns (2812%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,739`ns (16673%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `660`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `922`ns (140%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,238`ns (490%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `376`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,391`ns (636%)                         |

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
