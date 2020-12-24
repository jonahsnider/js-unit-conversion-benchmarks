# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 24 Dec 2020 14:50:21 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az184-39 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 220ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 482ns (`0.000`ms)                        |
| [uom](https://npmjs.com/package/uom)                               | 549ns (`0.001`ms)                        |
| [safe-units](https://npmjs.com/package/safe-units)                 | 997ns (`0.001`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 1µs 1ns (`0.001`ms)                      |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 251ns (`0.001`ms)                    |
| [convert-units](https://npmjs.com/package/convert-units)           | 1µs 425ns (`0.001`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 4µs 691ns (`0.005`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 49µs 126ns (`0.049`ms)                   |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 201ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 840ns (`0.001`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 1µs 21ns (`0.001`ms)                     |
| [uom](https://npmjs.com/package/uom)                               | 1µs 81ns (`0.001`ms)                     |
| [safe-units](https://npmjs.com/package/safe-units)                 | 1µs 156ns (`0.001`ms)                    |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 265ns (`0.001`ms)                    |
| [convert-units](https://npmjs.com/package/convert-units)           | 5µs 148ns (`0.005`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 5µs 835ns (`0.006`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 47µs 862ns (`0.048`ms)                   |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | 332ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert) | 1µs 100ns (`0.001`ms)                    |

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
