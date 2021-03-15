# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 15 Mar 2021 11:03:10 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az296-193 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `191`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `206`ns (108%)                           |
| [convert](https://npmjs.com/package/convert)                       | `306`ns (160%)                           |
| [uom](https://npmjs.com/package/uom)                               | `536`ns (280%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `916`ns (479%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,180`ns (617%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,246`ns (652%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,250`ns (654%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,839`ns (2530%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,617`ns (26991%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `200`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `291`ns (146%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `976`ns (488%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,052`ns (526%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,193`ns (596%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,227`ns (613%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,177`ns (2586%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,911`ns (2953%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `55,082`ns (27519%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `195`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `304`ns (156%)                           |
| [uom](https://npmjs.com/package/uom)                               | `549`ns (281%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `958`ns (490%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,135`ns (580%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,161`ns (594%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,232`ns (630%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,354`ns (1204%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,468`ns (2285%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,579`ns (4388%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,576`ns (26893%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `607`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `765`ns (126%)                           |
| [convert](https://npmjs.com/package/convert)       | `810`ns (133%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `312`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `607`ns (195%)                           |

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
