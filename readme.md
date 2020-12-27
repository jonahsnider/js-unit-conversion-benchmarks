# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 27 Dec 2020 01:30:37 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az60-573 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `231`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `318`ns (137%)                           |
| [uom](https://npmjs.com/package/uom)                               | `548`ns (237%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `915`ns (395%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,025`ns (443%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,247`ns (539%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,348`ns (583%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,957`ns (2142%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,127`ns (21228%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `200`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `304`ns (152%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,011`ns (505%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,109`ns (553%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,111`ns (555%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,264`ns (631%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,096`ns (2543%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,522`ns (3255%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,846`ns (24377%)                      |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `318`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `654`ns (205%)                           |

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
