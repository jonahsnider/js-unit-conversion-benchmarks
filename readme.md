# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 05 Jun 2021 22:43:25 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-764 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `167`ns (100%)                           |
| raw math (builtin)                                                 | `172`ns (103%)                           |
| [convert](https://npmjs.com/package/convert)                       | `255`ns (153%)                           |
| [uom](https://npmjs.com/package/uom)                               | `444`ns (266%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `628`ns (377%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `713`ns (428%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `881`ns (529%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `950`ns (570%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,079`ns (648%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,472`ns (2084%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `37,650`ns (22602%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `163`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `262`ns (161%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `874`ns (535%)                           |
| [uom](https://npmjs.com/package/uom)                               | `880`ns (539%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `890`ns (545%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,111`ns (680%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,523`ns (2770%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,719`ns (2889%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `37,751`ns (23115%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `170`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `243`ns (143%)                           |
| [uom](https://npmjs.com/package/uom)                               | `409`ns (240%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `676`ns (398%)                           |
| [moment](https://npmjs.com/package/moment)                         | `870`ns (512%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `959`ns (564%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `970`ns (571%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,949`ns (1147%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,636`ns (2140%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,197`ns (4236%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `37,541`ns (22096%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `501`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `541`ns (108%)                           |
| [ms](https://npmjs.com/package/ms)                 | `566`ns (113%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `252`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `512`ns (203%)                           |

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
