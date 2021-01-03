# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 03 Jan 2021 18:56:03 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az60-573 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `208`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `383`ns (184%)                           |
| [uom](https://npmjs.com/package/uom)                               | `540`ns (260%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `960`ns (462%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `985`ns (473%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,302`ns (626%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,318`ns (634%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,461`ns (2145%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,281`ns (22257%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `342`ns (161%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,030`ns (485%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,033`ns (486%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,085`ns (511%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,259`ns (593%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,380`ns (2533%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,385`ns (2535%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,425`ns (21854%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `201`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `339`ns (168%)                           |
| [uom](https://npmjs.com/package/uom)                               | `537`ns (266%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `822`ns (408%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,070`ns (531%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,124`ns (558%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,154`ns (573%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,179`ns (1082%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,280`ns (2125%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,617`ns (4279%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `46,222`ns (22952%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `697`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `731`ns (105%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `322`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `636`ns (197%)                           |

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
