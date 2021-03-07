# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 07 Mar 2021 12:47:05 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az266-658 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `206`ns (100%)                           |
| raw math (builtin)                                                 | `219`ns (106%)                           |
| [convert](https://npmjs.com/package/convert)                       | `381`ns (185%)                           |
| [uom](https://npmjs.com/package/uom)                               | `569`ns (276%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `996`ns (483%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,057`ns (512%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,286`ns (624%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,450`ns (703%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,758`ns (2307%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,406`ns (23953%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `216`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `328`ns (152%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,053`ns (488%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,178`ns (546%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,278`ns (592%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,486`ns (688%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,403`ns (2503%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,651`ns (3081%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,244`ns (22812%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `207`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `307`ns (149%)                           |
| [uom](https://npmjs.com/package/uom)                               | `617`ns (299%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `985`ns (477%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,051`ns (509%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,117`ns (541%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,368`ns (662%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,371`ns (1148%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,806`ns (2326%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,917`ns (4317%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,011`ns (23726%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `596`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `731`ns (123%)                           |
| [convert](https://npmjs.com/package/convert)       | `786`ns (132%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `318`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `622`ns (195%)                           |

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
