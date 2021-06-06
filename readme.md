# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 06 Jun 2021 00:15:56 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-532 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `222`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `259`ns (117%)                           |
| [convert](https://npmjs.com/package/convert)                       | `340`ns (153%)                           |
| [uom](https://npmjs.com/package/uom)                               | `644`ns (290%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `949`ns (427%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `996`ns (449%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,222`ns (550%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,226`ns (552%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,383`ns (623%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,333`ns (2402%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,341`ns (23572%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `235`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `360`ns (153%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,072`ns (456%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,177`ns (500%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,327`ns (564%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,601`ns (680%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,159`ns (2618%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `7,292`ns (3099%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `52,757`ns (22424%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `250`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `312`ns (125%)                           |
| [uom](https://npmjs.com/package/uom)                               | `599`ns (240%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,012`ns (405%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,199`ns (480%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,357`ns (543%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,495`ns (598%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,875`ns (1150%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,162`ns (2065%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,674`ns (3870%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `51,697`ns (20678%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `711`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `868`ns (122%)                           |
| [ms](https://npmjs.com/package/ms)                 | `931`ns (131%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `351`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `733`ns (209%)                           |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.

A simplified example of a benchmark for raw math (as a baseline) is shown below:

```js
import {BenchmarkTitles} from '../config.js';

export const name = 'raw math (builtin)';

const tests = {
	[BenchmarkTitles.InchesToMillimeters]() {
		return 4 * 25.4;
	}
};

export default tests;
```
