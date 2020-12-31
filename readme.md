# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 31 Dec 2020 05:51:41 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az12-647 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `210`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `326`ns (155%)                           |
| [uom](https://npmjs.com/package/uom)                               | `589`ns (281%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `926`ns (441%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `997`ns (475%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,293`ns (616%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,498`ns (713%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,479`ns (2132%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,578`ns (23123%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `206`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `311`ns (151%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `1,022`ns (496%)                         |
| [uom](https://npmjs.com/package/uom)                               | `1,164`ns (565%)                         |
| [safe-units](https://npmjs.com/package/safe-units)                 | `1,183`ns (574%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,357`ns (659%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `5,394`ns (2619%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `5,757`ns (2795%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `48,389`ns (23496%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `198`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `310`ns (156%)                           |
| [uom](https://npmjs.com/package/uom)                               | `581`ns (293%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `856`ns (431%)                           |
| [moment](https://npmjs.com/package/moment)                         | `1,108`ns (558%)                         |
| [dayjs](https://npmjs.com/package/dayjs)                           | `1,118`ns (563%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,139`ns (574%)                         |
| [luxon](https://npmjs.com/package/luxon)                           | `2,322`ns (1170%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,146`ns (2089%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `9,094`ns (4582%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `47,880`ns (24123%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) | `636`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)           | `764`ns (120%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `340`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `627`ns (184%)                           |

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
