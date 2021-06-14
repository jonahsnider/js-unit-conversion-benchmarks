# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 14 Jun 2021 01:05:05 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-758 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `163`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `168`ns (103%)                           |
| [convert](https://npmjs.com/package/convert)                       | `280`ns (172%)                           |
| [uom](https://npmjs.com/package/uom)                               | `485`ns (297%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `697`ns (428%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `733`ns (450%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `973`ns (597%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,045`ns (641%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,161`ns (713%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,760`ns (2307%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,033`ns (25182%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `177`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `278`ns (157%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `880`ns (497%)                           |
| [uom](https://npmjs.com/package/uom)                               | `900`ns (508%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `998`ns (564%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,228`ns (694%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,579`ns (2586%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,817`ns (2721%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,527`ns (23459%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `183`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `246`ns (134%)                           |
| [uom](https://npmjs.com/package/uom)                               | `465`ns (254%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `678`ns (370%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `973`ns (531%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,026`ns (560%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,039`ns (567%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `1,946`ns (1062%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,906`ns (2131%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,695`ns (4199%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,005`ns (22377%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `492`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `620`ns (126%)                           |
| [ms](https://npmjs.com/package/ms)                 | `633`ns (129%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `272`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `530`ns (195%)                           |

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
