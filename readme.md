# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 31 Dec 2020 22:54:45 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az12-647 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `163`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `283`ns (174%)                           |
| [uom](https://npmjs.com/package/uom)                               | `438`ns (269%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `690`ns (424%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `740`ns (454%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,016`ns (624%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,051`ns (645%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,402`ns (2089%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `38,750`ns (23798%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `168`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `304`ns (181%)                           |
| [uom](https://npmjs.com/package/uom)                               | `860`ns (512%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `871`ns (519%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `902`ns (537%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,019`ns (607%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,258`ns (2536%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,808`ns (2863%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `35,917`ns (21391%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `165`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `299`ns (181%)                           |
| [uom](https://npmjs.com/package/uom)                               | `415`ns (252%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `639`ns (387%)                           |
| [moment](https://npmjs.com/package/moment)                         | `844`ns (512%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `851`ns (516%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,006`ns (610%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `1,713`ns (1038%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,303`ns (2002%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,640`ns (4632%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `35,636`ns (21606%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms)           | `513`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `653`ns (127%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `259`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `581`ns (224%)                           |

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
