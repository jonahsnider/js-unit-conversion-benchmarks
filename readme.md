# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 15 Mar 2021 23:46:34 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az213-850 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `233`ns (100%)                           |
| raw math (builtin)                                                 | `236`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `329`ns (141%)                           |
| [uom](https://npmjs.com/package/uom)                               | `580`ns (249%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `966`ns (414%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,072`ns (460%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,321`ns (566%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,475`ns (632%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,854`ns (2081%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,885`ns (21816%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `242`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `334`ns (138%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,067`ns (440%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,080`ns (446%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,243`ns (513%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,557`ns (643%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,789`ns (2390%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,990`ns (2473%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,743`ns (20950%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `233`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `345`ns (148%)                           |
| [uom](https://npmjs.com/package/uom)                               | `586`ns (252%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `930`ns (400%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,114`ns (479%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,151`ns (495%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,186`ns (510%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,369`ns (1018%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,513`ns (1939%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,667`ns (4153%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,998`ns (21910%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert)       | `734`ns (100%)                           |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `739`ns (101%)                           |
| [ms](https://npmjs.com/package/ms)                 | `860`ns (117%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `345`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `684`ns (198%)                           |

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
