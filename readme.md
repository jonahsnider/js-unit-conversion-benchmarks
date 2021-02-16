# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 16 Feb 2021 20:51:20 GMT with Node.js v15.8.0 (V8 v8.6.395.17-node.23) on fv-az267-85 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `238`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `247`ns (104%)                           |
| [convert](https://npmjs.com/package/convert)                       | `405`ns (170%)                           |
| [uom](https://npmjs.com/package/uom)                               | `600`ns (252%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `942`ns (396%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,143`ns (481%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,371`ns (576%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,378`ns (580%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,095`ns (2142%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,944`ns (22262%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `251`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `410`ns (164%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,053`ns (420%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,119`ns (446%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,322`ns (527%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,418`ns (565%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,188`ns (2465%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,798`ns (2708%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,461`ns (20901%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `233`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `399`ns (171%)                           |
| [uom](https://npmjs.com/package/uom)                               | `615`ns (264%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,050`ns (451%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,148`ns (493%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,195`ns (513%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,389`ns (596%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,565`ns (1101%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,094`ns (2187%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,652`ns (4144%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,443`ns (22518%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `794`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `927`ns (117%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `364`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `758`ns (208%)                           |

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
