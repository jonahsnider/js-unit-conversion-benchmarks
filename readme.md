# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 18 Jun 2021 01:13:57 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-719 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `212`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `218`ns (103%)                           |
| [convert](https://npmjs.com/package/convert)                       | `329`ns (155%)                           |
| [uom](https://npmjs.com/package/uom)                               | `636`ns (300%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `902`ns (425%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `952`ns (449%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,165`ns (550%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,316`ns (621%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,319`ns (622%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,788`ns (2259%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `50,647`ns (23891%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `210`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `335`ns (159%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,088`ns (517%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,199`ns (570%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,247`ns (593%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,538`ns (732%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,734`ns (2728%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `6,983`ns (3322%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,339`ns (23475%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `207`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `295`ns (142%)                           |
| [uom](https://npmjs.com/package/uom)                               | `673`ns (325%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,094`ns (529%)                         |
| [moment](https://npmjs.com/package/moment)                         | `1,117`ns (540%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,188`ns (574%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,307`ns (632%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,477`ns (1197%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,101`ns (2465%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,860`ns (4281%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `49,491`ns (23915%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `691`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `756`ns (109%)                           |
| [ms](https://npmjs.com/package/ms)                 | `760`ns (110%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `315`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `623`ns (198%)                           |

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
