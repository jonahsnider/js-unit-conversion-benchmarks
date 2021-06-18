# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 18 Jun 2021 21:03:07 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-296 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                      | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (builtin)                                           | `201`ns (100%)                           | `4,964,101`/sec                          |
| [convert](https://npmjs.com/package/convert)                 | `382`ns (190%)                           | `2,615,837`/sec                          |
| [uom](https://npmjs.com/package/uom)                         | `684`ns (339%)                           | `1,462,653`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units)           | `1,042`ns (517%)                         | `960,111`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units)     | `1,084`ns (538%)                         | `922,171`/sec                            |
| [units-converter](https://npmjs.com/package/units-converter) | `1,324`ns (657%)                         | `755,338`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities)     | `4,190`ns (2080%)                        | `238,690`/sec                            |

### Fractional liters to cubic inches

| Library                                                      | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (builtin)                                           | `206`ns (100%)                           | `4,861,249`/sec                          |
| [convert](https://npmjs.com/package/convert)                 | `353`ns (172%)                           | `2,829,260`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units)           | `1,163`ns (565%)                         | `860,142`/sec                            |
| [units-converter](https://npmjs.com/package/units-converter) | `1,404`ns (683%)                         | `712,145`/sec                            |
| [uom](https://npmjs.com/package/uom)                         | `1,437`ns (698%)                         | `695,980`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities)     | `5,583`ns (2714%)                        | `179,126`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units)     | `5,721`ns (2781%)                        | `174,796`/sec                            |

### Converting hours to minutes

| Library                                                      | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (builtin)                                           | `213`ns (100%)                           | `4,688,399`/sec                          |
| [convert](https://npmjs.com/package/convert)                 | `304`ns (143%)                           | `3,289,373`/sec                          |
| [uom](https://npmjs.com/package/uom)                         | `577`ns (270%)                           | `1,733,653`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units)           | `817`ns (383%)                           | `1,223,399`/sec                          |
| [moment](https://npmjs.com/package/moment)                   | `1,051`ns (493%)                         | `951,663`/sec                            |
| [units-converter](https://npmjs.com/package/units-converter) | `1,099`ns (515%)                         | `909,604`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs)                     | `1,194`ns (560%)                         | `837,450`/sec                            |
| [luxon](https://npmjs.com/package/luxon)                     | `2,216`ns (1039%)                        | `451,345`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities)     | `4,332`ns (2031%)                        | `230,827`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units)     | `9,006`ns (4223%)                        | `111,031`/sec                            |

### Parse a duration string and normalize it to milliseconds

| Library                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| -------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) | `586`ns (100%)                           | `1,707,374`/sec                          |
| [ms](https://npmjs.com/package/ms)                 | `673`ns (115%)                           | `1,485,445`/sec                          |
| [convert](https://npmjs.com/package/convert)       | `737`ns (126%)                           | `1,356,234`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                      | Average execution time (lower is better) | Executions per second (higher is better) |
| -------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (builtin)                           | `325`ns (100%)                           | `3,078,955`/sec                          |
| [convert](https://npmjs.com/package/convert) | `615`ns (189%)                           | `1,626,204`/sec                          |

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
