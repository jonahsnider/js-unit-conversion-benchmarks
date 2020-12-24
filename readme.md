# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 24 Dec 2020 21:05:44 GMT with Node.js v15.5.0 (V8 v8.6.395.17-node.23) on fv-az59-708 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

### Inches to feet

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `187`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `419`ns (224%)                           |
| [uom](https://npmjs.com/package/uom)                               | `473`ns (252%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `744`ns (397%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `857`ns (457%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `1,157`ns (617%)                         |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,181`ns (630%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,210`ns (2246%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,356`ns (21532%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `180`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `733`ns (406%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `875`ns (485%)                           |
| [uom](https://npmjs.com/package/uom)                               | `905`ns (501%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `950`ns (527%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,136`ns (630%)                         |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,821`ns (2672%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,849`ns (2687%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `40,607`ns (22504%)                      |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `290`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `862`ns (297%)                           |

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
