# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 236ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 549ns (`0.001`ms)                        |
| [uom](https://npmjs.com/package/uom)                               | 645ns (`0.001`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 982ns (`0.001`ms)                        |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 492ns (`0.001`ms)                    |
| [safe-units](https://npmjs.com/package/safe-units)                 | 1µs 535ns (`0.002`ms)                    |
| [convert-units](https://npmjs.com/package/convert-units)           | 1µs 669ns (`0.002`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 5µs 711ns (`0.006`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 53µs 912ns (`0.054`ms)                   |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 221ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 925ns (`0.001`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 1µs 101ns (`0.001`ms)                    |
| [uom](https://npmjs.com/package/uom)                               | 1µs 294ns (`0.001`ms)                    |
| [safe-units](https://npmjs.com/package/safe-units)                 | 1µs 374ns (`0.001`ms)                    |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 547ns (`0.002`ms)                    |
| [convert-units](https://npmjs.com/package/convert-units)           | 5µs 526ns (`0.006`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 7µs 570ns (`0.008`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 52µs 720ns (`0.053`ms)                   |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | 346ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert) | 1µs 373ns (`0.001`ms)                    |

Generated automatically at Thu, 24 Dec 2020 13:06:28 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az60-573 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.

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
