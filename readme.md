# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 05 Mar 2021 05:12:10 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az219-762 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `196`ns (100%)                           |
| raw math (builtin)                                                 | `227`ns (116%)                           |
| [convert](https://npmjs.com/package/convert)                       | `321`ns (164%)                           |
| [uom](https://npmjs.com/package/uom)                               | `646`ns (330%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `883`ns (451%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,092`ns (558%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,115`ns (569%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,393`ns (711%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,800`ns (2451%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,816`ns (25435%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `227`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `288`ns (127%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `973`ns (429%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,173`ns (518%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,281`ns (565%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,529`ns (674%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,755`ns (2098%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,075`ns (2680%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,973`ns (22489%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `196`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `311`ns (158%)                           |
| [uom](https://npmjs.com/package/uom)                               | `664`ns (338%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `891`ns (454%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,015`ns (517%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,091`ns (556%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,169`ns (595%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,457`ns (1251%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,473`ns (2277%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,929`ns (4037%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,675`ns (24781%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `603`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `706`ns (117%)                           |
| [convert](https://npmjs.com/package/convert)       | `842`ns (140%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `337`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `623`ns (185%)                           |

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
