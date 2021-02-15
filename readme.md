# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 15 Feb 2021 23:58:06 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az184-570 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `250`ns (100%)                           |
| raw math (builtin)                                                 | `279`ns (111%)                           |
| [convert](https://npmjs.com/package/convert)                       | `454`ns (181%)                           |
| [uom](https://npmjs.com/package/uom)                               | `606`ns (242%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,070`ns (427%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,124`ns (449%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,366`ns (546%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,388`ns (554%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,109`ns (2041%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,190`ns (20446%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `253`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `461`ns (182%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,123`ns (444%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,155`ns (457%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,362`ns (539%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,367`ns (541%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,774`ns (2284%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `7,250`ns (2868%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,578`ns (20403%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `246`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `424`ns (172%)                           |
| [uom](https://npmjs.com/package/uom)                               | `612`ns (248%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,000`ns (406%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,153`ns (468%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,290`ns (523%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,486`ns (603%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,686`ns (1090%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,956`ns (2011%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,910`ns (3615%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,998`ns (21503%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `770`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `949`ns (123%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `450`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `768`ns (171%)                           |

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
