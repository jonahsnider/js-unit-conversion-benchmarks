# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 13 Apr 2021 23:36:44 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-83 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `211`ns (100%)                           |
| raw math (builtin)                                                 | `212`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `453`ns (215%)                           |
| [uom](https://npmjs.com/package/uom)                               | `569`ns (270%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `948`ns (449%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `968`ns (459%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,247`ns (591%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,477`ns (700%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,439`ns (2104%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,156`ns (22824%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `211`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `318`ns (151%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,066`ns (504%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,137`ns (538%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,189`ns (563%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,425`ns (674%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,767`ns (2729%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,805`ns (2748%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,881`ns (22660%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `209`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `318`ns (152%)                           |
| [uom](https://npmjs.com/package/uom)                               | `559`ns (267%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `859`ns (411%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,119`ns (535%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,181`ns (564%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,289`ns (617%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,257`ns (1079%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,348`ns (2079%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,088`ns (4345%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,678`ns (22796%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `631`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `694`ns (110%)                           |
| [convert](https://npmjs.com/package/convert)       | `709`ns (112%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `316`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `604`ns (191%)                           |

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
