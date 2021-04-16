# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 16 Apr 2021 21:38:07 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az194-515 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `183`ns (100%)                           |
| raw math (builtin)                                                 | `206`ns (113%)                           |
| [convert](https://npmjs.com/package/convert)                       | `319`ns (175%)                           |
| [uom](https://npmjs.com/package/uom)                               | `532`ns (291%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `772`ns (422%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `984`ns (538%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,138`ns (623%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,188`ns (650%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,207`ns (2303%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,769`ns (22861%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `200`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `280`ns (140%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `890`ns (444%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,047`ns (523%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,080`ns (539%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,260`ns (629%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,408`ns (2199%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,340`ns (2665%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,593`ns (20254%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `192`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `268`ns (140%)                           |
| [uom](https://npmjs.com/package/uom)                               | `514`ns (268%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `777`ns (405%)                           |
| [moment](https://npmjs.com/package/moment)                         | `885`ns (462%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,014`ns (529%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,147`ns (599%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,684`ns (1401%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,912`ns (2042%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,947`ns (3626%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,640`ns (21216%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `542`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `684`ns (126%)                           |
| [convert](https://npmjs.com/package/convert)       | `720`ns (133%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `263`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `515`ns (195%)                           |

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
