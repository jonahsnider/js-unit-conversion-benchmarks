# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 15 Jun 2021 00:37:46 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-724 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `150`ns (100%)                           |
| [fluxunit](https://npmjs.com/package/fluxunit)                     | `153`ns (102%)                           |
| [convert](https://npmjs.com/package/convert)                       | `239`ns (159%)                           |
| [uom](https://npmjs.com/package/uom)                               | `419`ns (279%)                           |
| [another-dimension](https://npmjs.com/package/another-dimension)   | `630`ns (420%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `675`ns (450%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `826`ns (550%)                           |
| [convert-units](https://npmjs.com/package/convert-units)           | `979`ns (652%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,232`ns (821%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,280`ns (2184%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `35,466`ns (23615%)                      |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `146`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `238`ns (163%)                           |
| [tinu](https://npmjs.com/package/tinu)                             | `744`ns (508%)                           |
| [uom](https://npmjs.com/package/uom)                               | `781`ns (533%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `903`ns (617%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `1,054`ns (720%)                         |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `4,218`ns (2881%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `4,340`ns (2965%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `35,560`ns (24288%)                      |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) |
| ------------------------------------------------------------------ | ---------------------------------------- |
| raw math (builtin)                                                 | `152`ns (100%)                           |
| [convert](https://npmjs.com/package/convert)                       | `238`ns (157%)                           |
| [uom](https://npmjs.com/package/uom)                               | `416`ns (274%)                           |
| [safe-units](https://npmjs.com/package/safe-units)                 | `600`ns (394%)                           |
| [moment](https://npmjs.com/package/moment)                         | `828`ns (544%)                           |
| [units-converter](https://npmjs.com/package/units-converter)       | `872`ns (574%)                           |
| [dayjs](https://npmjs.com/package/dayjs)                           | `922`ns (606%)                           |
| [luxon](https://npmjs.com/package/luxon)                           | `1,712`ns (1126%)                        |
| [js-quantities](https://npmjs.com/package/js-quantities)           | `3,229`ns (2124%)                        |
| [convert-units](https://npmjs.com/package/convert-units)           | `6,825`ns (4488%)                        |
| [@favware/converter](https://npmjs.com/package/@favware/converter) | `35,554`ns (23383%)                      |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) |
| -------------------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `433`ns (100%)                           |
| [ms](https://npmjs.com/package/ms)                 | `504`ns (116%)                           |
| [convert](https://npmjs.com/package/convert)       | `558`ns (129%)                           |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) |
| -------------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `237`ns (100%)                           |
| [convert](https://npmjs.com/package/convert) | `452`ns (191%)                           |

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
