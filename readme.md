# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 12 Feb 2021 12:40:35 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az195-204 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `221`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `259`ns (117%)                           |
| [convert](https://npmjs.com/package/convert)                       | `366`ns (166%)                           |
| [uom](https://npmjs.com/package/uom)                               | `654`ns (296%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,064`ns (481%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,319`ns (597%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,420`ns (643%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,484`ns (672%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,072`ns (2296%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,244`ns (22744%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `242`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `429`ns (178%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,157`ns (479%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,252`ns (518%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,360`ns (563%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,623`ns (672%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,363`ns (2220%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,304`ns (2610%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,130`ns (20752%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `279`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `384`ns (138%)                           |
| [uom](https://npmjs.com/package/uom)                               | `694`ns (249%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,029`ns (369%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,203`ns (431%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,210`ns (433%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,248`ns (447%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,494`ns (893%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,860`ns (1741%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,769`ns (3141%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,694`ns (18877%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `923`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `964`ns (104%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `392`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `735`ns (187%)                           |

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
