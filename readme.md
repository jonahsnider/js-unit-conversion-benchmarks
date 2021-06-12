# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 12 Jun 2021 01:10:45 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-724 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `175`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `181`ns (103%)                           |
| [convert](https://npmjs.com/package/convert)                       | `271`ns (155%)                           |
| [uom](https://npmjs.com/package/uom)                               | `496`ns (283%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `695`ns (397%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `720`ns (411%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `862`ns (492%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `997`ns (569%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,022`ns (583%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,254`ns (1857%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `36,402`ns (20772%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `169`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `266`ns (157%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `842`ns (498%)                           |
| [uom](https://npmjs.com/package/uom)                               | `875`ns (517%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `898`ns (531%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,114`ns (659%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,364`ns (2580%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,512`ns (2668%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `36,289`ns (21459%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `173`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `239`ns (138%)                           |
| [uom](https://npmjs.com/package/uom)                               | `442`ns (255%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `635`ns (366%)                           |
| [moment](https://npmjs.com/package/moment)                         | `816`ns (471%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `848`ns (489%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `904`ns (521%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,731`ns (998%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,212`ns (1852%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `7,046`ns (4062%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `36,890`ns (21266%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `448`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)       | `543`ns (121%)                           |
| [ms](https://npmjs.com/package/ms)                 | `558`ns (124%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `258`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `493`ns (191%)                           |

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
