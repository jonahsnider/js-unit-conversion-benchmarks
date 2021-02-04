# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 04 Feb 2021 07:40:32 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az184-398 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `203`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `206`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `339`ns (167%)                           |
| [uom](https://npmjs.com/package/uom)                               | `519`ns (256%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `735`ns (363%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `848`ns (419%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,096`ns (541%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,130`ns (558%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,088`ns (2019%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,149`ns (20319%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `213`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `310`ns (145%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `819`ns (384%)                           |
| [uom](https://npmjs.com/package/uom)                               | `926`ns (434%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,007`ns (472%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,130`ns (530%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,815`ns (2257%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,016`ns (2351%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,307`ns (19362%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `195`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `307`ns (157%)                           |
| [uom](https://npmjs.com/package/uom)                               | `470`ns (241%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `730`ns (374%)                           |
| [moment](https://npmjs.com/package/moment)                         | `917`ns (470%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `987`ns (505%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,003`ns (514%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `1,862`ns (954%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,814`ns (1953%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,612`ns (3898%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `41,533`ns (21270%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `626`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `657`ns (105%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `303`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `584`ns (193%)                           |

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
