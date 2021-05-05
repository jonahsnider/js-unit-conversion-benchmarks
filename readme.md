# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 05 May 2021 02:13:04 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-515 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `207`ns (100%)                           |
| raw math (builtin)                                                 | `208`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `328`ns (159%)                           |
| [uom](https://npmjs.com/package/uom)                               | `535`ns (258%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `852`ns (411%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `972`ns (469%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,229`ns (593%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,295`ns (625%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,413`ns (2131%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,878`ns (22635%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `202`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `361`ns (179%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `958`ns (474%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,075`ns (532%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,093`ns (541%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,361`ns (673%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,385`ns (2663%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,683`ns (2811%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,612`ns (23056%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `206`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `310`ns (150%)                           |
| [uom](https://npmjs.com/package/uom)                               | `563`ns (273%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `806`ns (390%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,051`ns (509%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,090`ns (528%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,112`ns (539%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,079`ns (1007%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,334`ns (2100%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,720`ns (4224%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,434`ns (22494%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `544`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `673`ns (124%)                           |
| [convert](https://npmjs.com/package/convert)       | `697`ns (128%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `301`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `593`ns (197%)                           |

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
