# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 04 Feb 2021 10:12:17 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az50-227 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `231`ns (100%)                           |
| raw math (builtin)                                                 | `235`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)                       | `358`ns (155%)                           |
| [uom](https://npmjs.com/package/uom)                               | `550`ns (238%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `817`ns (354%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `985`ns (426%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,217`ns (527%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,271`ns (550%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,417`ns (1912%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,890`ns (20298%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `240`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `422`ns (176%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `959`ns (399%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,012`ns (421%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,256`ns (523%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,321`ns (550%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,587`ns (2325%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,719`ns (2380%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,166`ns (19627%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `228`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `385`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `564`ns (247%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `839`ns (367%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,040`ns (455%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,081`ns (473%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,107`ns (484%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,168`ns (949%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,257`ns (1864%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,784`ns (3846%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,461`ns (20341%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `682`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `765`ns (112%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `368`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `694`ns (189%)                           |

<!-- endblock(results) -->

---

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

---

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
