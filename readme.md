# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 24 Dec 2020 13:38:32 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az50-739 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 208ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 449ns (`0.000`ms)                        |
| [uom](https://npmjs.com/package/uom)                               | 576ns (`0.001`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 966ns (`0.001`ms)                        |
| [safe-units](https://npmjs.com/package/safe-units)                 | 972ns (`0.001`ms)                        |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 459ns (`0.001`ms)                    |
| [convert-units](https://npmjs.com/package/convert-units)           | 1µs 591ns (`0.002`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 4µs 913ns (`0.005`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 49µs 959ns (`0.050`ms)                   |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 188ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 824ns (`0.001`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 1µs 60ns (`0.001`ms)                     |
| [uom](https://npmjs.com/package/uom)                               | 1µs 96ns (`0.001`ms)                     |
| [safe-units](https://npmjs.com/package/safe-units)                 | 1µs 162ns (`0.001`ms)                    |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 393ns (`0.001`ms)                    |
| [convert-units](https://npmjs.com/package/convert-units)           | 5µs 248ns (`0.005`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 6µs 290ns (`0.006`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 49µs 811ns (`0.050`ms)                   |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | 317ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert) | 1µs 224ns (`0.001`ms)                    |

<!-- endblock(results) -->

The mean of the execution times are displayed in the table above.

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
