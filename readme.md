# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 24 Dec 2020 13:41:16 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az12-647 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 199ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 393ns (`0.000`ms)                        |
| [uom](https://npmjs.com/package/uom)                               | 468ns (`0.000`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 747ns (`0.001`ms)                        |
| [safe-units](https://npmjs.com/package/safe-units)                 | 838ns (`0.001`ms)                        |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 75ns (`0.001`ms)                     |
| [convert-units](https://npmjs.com/package/convert-units)           | 1µs 170ns (`0.001`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 3µs 821ns (`0.004`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 40µs 804ns (`0.041`ms)                   |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 177ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 666ns (`0.001`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 857ns (`0.001`ms)                        |
| [uom](https://npmjs.com/package/uom)                               | 919ns (`0.001`ms)                        |
| [safe-units](https://npmjs.com/package/safe-units)                 | 943ns (`0.001`ms)                        |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 136ns (`0.001`ms)                    |
| [convert-units](https://npmjs.com/package/convert-units)           | 4µs 830ns (`0.005`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 4µs 902ns (`0.005`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 40µs 500ns (`0.041`ms)                   |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | 278ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert) | 858ns (`0.001`ms)                        |

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
