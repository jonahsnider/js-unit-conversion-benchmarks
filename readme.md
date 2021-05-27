# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 27 May 2021 02:30:52 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-881 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `222`ns (100%)                           |
| raw math (builtin)                                                 | `223`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `363`ns (164%)                           |
| [uom](https://npmjs.com/package/uom)                               | `752`ns (339%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `955`ns (431%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,050`ns (474%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,422`ns (641%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,674`ns (755%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,064`ns (2285%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `53,188`ns (23999%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `235`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `349`ns (149%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,102`ns (470%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,204`ns (513%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,327`ns (566%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,483`ns (633%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,308`ns (2690%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,762`ns (2883%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,675`ns (22035%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `234`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `347`ns (148%)                           |
| [uom](https://npmjs.com/package/uom)                               | `667`ns (285%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `947`ns (404%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,189`ns (508%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,280`ns (546%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,709`ns (729%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,468`ns (1054%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,005`ns (2137%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,641`ns (4117%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,771`ns (21678%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `622`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `828`ns (133%)                           |
| [convert](https://npmjs.com/package/convert)       | `992`ns (159%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `335`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `764`ns (228%)                           |

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
