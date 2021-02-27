# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 27 Feb 2021 22:39:45 GMT with Node.js v15.10.0 (V8 v8.6.395.17-node.25) on fv-az267-12 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `178`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `180`ns (101%)                           |
| [convert](https://npmjs.com/package/convert)                       | `293`ns (165%)                           |
| [uom](https://npmjs.com/package/uom)                               | `494`ns (278%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `800`ns (450%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `820`ns (461%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,121`ns (630%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,217`ns (684%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,896`ns (2191%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,383`ns (22713%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `188`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `302`ns (160%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `834`ns (443%)                           |
| [uom](https://npmjs.com/package/uom)                               | `934`ns (497%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,015`ns (540%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,138`ns (605%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,640`ns (2468%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,773`ns (2538%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,257`ns (21411%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `177`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `311`ns (176%)                           |
| [uom](https://npmjs.com/package/uom)                               | `469`ns (265%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `740`ns (418%)                           |
| [moment](https://npmjs.com/package/moment)                         | `889`ns (503%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `988`ns (559%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,020`ns (577%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `1,915`ns (1083%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,735`ns (2113%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,599`ns (4298%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `39,988`ns (22617%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `591`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `640`ns (108%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `288`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `582`ns (202%)                           |

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
