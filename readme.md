# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 04 Apr 2021 08:39:04 GMT with Node.js v15.13.0 (V8 v8.6.395.17-node.28) on fv-az212-111 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `239`ns (100%)                           |
| raw math (builtin)                                                 | `243`ns (102%)                           |
| [uom](https://npmjs.com/package/uom)                               | `598`ns (250%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `852`ns (356%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,011`ns (422%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,290`ns (539%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,461`ns (610%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,569`ns (655%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,467`ns (1866%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,501`ns (19838%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `242`ns (100%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,026`ns (424%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,136`ns (470%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,151`ns (476%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,373`ns (568%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,481`ns (613%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,404`ns (2235%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,485`ns (2269%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,664`ns (19712%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `234`ns (100%)                           |
| [uom](https://npmjs.com/package/uom)                               | `588`ns (251%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `880`ns (376%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,081`ns (462%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,111`ns (474%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,229`ns (525%)                         |
| [convert](https://npmjs.com/package/convert)                       | `1,545`ns (660%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,191`ns (935%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,980`ns (1699%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `8,805`ns (3759%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,720`ns (20374%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `647`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `722`ns (112%)                           |
| [convert](https://npmjs.com/package/convert)       | `2,956`ns (457%)                         |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `335`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `2,372`ns (709%)                         |

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
