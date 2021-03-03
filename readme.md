# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 03 Mar 2021 08:15:18 GMT with Node.js v15.11.0 (V8 v8.6.395.17-node.27) on fv-az201-619 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `159`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `161`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `265`ns (167%)                           |
| [uom](https://npmjs.com/package/uom)                               | `415`ns (261%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `644`ns (405%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `735`ns (463%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `945`ns (595%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,016`ns (640%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,464`ns (2181%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `36,430`ns (22931%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `171`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `285`ns (167%)                           |
| [uom](https://npmjs.com/package/uom)                               | `785`ns (460%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `802`ns (470%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `882`ns (517%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,074`ns (629%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,282`ns (2508%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,409`ns (2582%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `36,456`ns (21352%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `152`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `267`ns (176%)                           |
| [uom](https://npmjs.com/package/uom)                               | `407`ns (268%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `655`ns (431%)                           |
| [moment](https://npmjs.com/package/moment)                         | `787`ns (518%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `802`ns (528%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `810`ns (534%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,684`ns (1109%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,327`ns (2191%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,721`ns (4426%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `36,267`ns (23884%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `532`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `562`ns (106%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `256`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `488`ns (191%)                           |

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
