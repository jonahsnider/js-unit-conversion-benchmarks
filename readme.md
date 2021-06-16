# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 16 Jun 2021 02:01:47 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az213-298 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `216`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)                       | `343`ns (161%)                           |
| [uom](https://npmjs.com/package/uom)                               | `597`ns (281%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `840`ns (396%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `903`ns (425%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,083`ns (510%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,132`ns (533%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,389`ns (654%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,401`ns (2071%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,872`ns (22529%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `207`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `322`ns (156%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,080`ns (522%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,120`ns (541%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,142`ns (552%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,372`ns (663%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,604`ns (2708%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,997`ns (2898%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,905`ns (23145%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `208`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `306`ns (147%)                           |
| [uom](https://npmjs.com/package/uom)                               | `590`ns (284%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `813`ns (391%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,084`ns (522%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,146`ns (552%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,245`ns (599%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,270`ns (1092%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,351`ns (2094%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,461`ns (4552%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,269`ns (23224%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `610`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `690`ns (113%)                           |
| [convert](https://npmjs.com/package/convert)       | `701`ns (115%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `341`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `616`ns (180%)                           |

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
