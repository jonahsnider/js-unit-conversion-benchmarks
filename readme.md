# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 25 Mar 2021 22:40:02 GMT with Node.js v15.12.0 (V8 v8.6.395.17-node.27) on fv-az204-464 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `261`ns (100%)                           |
| raw math (builtin)                                                 | `269`ns (103%)                           |
| [uom](https://npmjs.com/package/uom)                               | `651`ns (250%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,165`ns (446%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,190`ns (456%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,476`ns (566%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,579`ns (605%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,941`ns (744%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,333`ns (2045%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `57,463`ns (22031%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `279`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,259`ns (451%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,282`ns (460%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,396`ns (500%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,532`ns (549%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,874`ns (672%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,146`ns (2203%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `7,184`ns (2576%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `67,881`ns (24336%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `257`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `665`ns (259%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,002`ns (390%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,267`ns (493%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,328`ns (517%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,353`ns (527%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,798`ns (700%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `3,023`ns (1177%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,239`ns (2040%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,775`ns (3807%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `60,059`ns (23392%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `703`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `818`ns (116%)                           |
| [convert](https://npmjs.com/package/convert)       | `3,727`ns (530%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `341`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,914`ns (856%)                         |

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
