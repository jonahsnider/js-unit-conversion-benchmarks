# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 207ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 490ns (`0.000`ms)                        |
| [uom](https://npmjs.com/package/uom)                               | 555ns (`0.001`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 842ns (`0.001`ms)                        |
| [safe-units](https://npmjs.com/package/safe-units)                 | 930ns (`0.001`ms)                        |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 221ns (`0.001`ms)                    |
| [convert-units](https://npmjs.com/package/convert-units)           | 1µs 284ns (`0.001`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 4µs 586ns (`0.005`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 46µs 707ns (`0.047`ms)                   |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | 217ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert)                       | 767ns (`0.001`ms)                        |
| [tinu](https://npmjs.com/package/tinu)                             | 1µs 11ns (`0.001`ms)                     |
| [safe-units](https://npmjs.com/package/safe-units)                 | 1µs 46ns (`0.001`ms)                     |
| [uom](https://npmjs.com/package/uom)                               | 1µs 109ns (`0.001`ms)                    |
| [units-converter](https://npmjs.com/package/units-converter)       | 1µs 355ns (`0.001`ms)                    |
| [convert-units](https://npmjs.com/package/convert-units)           | 5µs 371ns (`0.005`ms)                    |
| [js-quantities](https://npmjs.com/package/js-quantities)           | 5µs 516ns (`0.006`ms)                    |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | 46µs 417ns (`0.046`ms)                   |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | 358ns (`0.000`ms)                        |
| [convert](https://npmjs.com/package/convert) | 1µs 21ns (`0.001`ms)                     |

Generated automatically at Thu, 24 Dec 2020 12:35:13 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az12-647 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.

<!-- endblock(results) -->

The mean of the execution times are displayed in the table above.

---

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

---

## Benchmark strategy

Each library is tested in converting `1024` inches to feet.
This is done by writing a function that calculates the value using the library.
Each of these trials are repeated several times for each library.

An example of one benchmark for [convert](https://github.com/pizzafox/convert) is shown below:

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
