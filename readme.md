# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 19 Mar 2021 06:48:44 GMT with Node.js v15.12.0 (V8 v8.6.395.17-node.27) on fv-az201-127 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `223`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `234`ns (105%)                           |
| [convert](https://npmjs.com/package/convert)                       | `346`ns (156%)                           |
| [uom](https://npmjs.com/package/uom)                               | `565`ns (254%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `896`ns (402%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,133`ns (509%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,260`ns (566%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,269`ns (570%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,406`ns (1979%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,297`ns (22139%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `268`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `315`ns (117%)                           |
| [uom](https://npmjs.com/package/uom)                               | `1,061`ns (396%)                         |
| [tinu](https://npmjs.com/package/tinu)                             | `1,078`ns (402%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,362`ns (508%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,493`ns (557%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,019`ns (1872%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,137`ns (1917%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `62,165`ns (23193%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `191`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `328`ns (171%)                           |
| [uom](https://npmjs.com/package/uom)                               | `603`ns (315%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,052`ns (550%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,104`ns (577%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,138`ns (595%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,141`ns (597%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,140`ns (1119%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,915`ns (2047%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,132`ns (4252%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `61,994`ns (32415%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `505`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `662`ns (131%)                           |
| [convert](https://npmjs.com/package/convert)       | `750`ns (148%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `272`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `583`ns (214%)                           |

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
