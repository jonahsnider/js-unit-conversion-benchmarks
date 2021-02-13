# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 13 Feb 2021 21:34:58 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az60-303 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `271`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `301`ns (111%)                           |
| [convert](https://npmjs.com/package/convert)                       | `394`ns (146%)                           |
| [uom](https://npmjs.com/package/uom)                               | `639`ns (236%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,005`ns (372%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,195`ns (442%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,392`ns (514%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,560`ns (577%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,267`ns (1947%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,370`ns (18991%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `284`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `489`ns (172%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,125`ns (396%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,158`ns (408%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,364`ns (480%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,487`ns (523%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,625`ns (1979%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,765`ns (2380%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,865`ns (17544%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `276`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `462`ns (167%)                           |
| [uom](https://npmjs.com/package/uom)                               | `618`ns (224%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,132`ns (410%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,219`ns (441%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,239`ns (448%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,344`ns (486%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,687`ns (972%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,078`ns (1838%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,007`ns (3260%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,600`ns (17952%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `807`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `1,023`ns (127%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `412`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `818`ns (199%)                           |

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
