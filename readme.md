# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 25 Sep 2021 05:50:01 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-819 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `615`ns (100%)                           | `1,625,162`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `44,109`ns (7168%)                       | `22,671`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `69,800`ns (11344%)                      | `14,327`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `200`ns (100%)                           | `4,998,614`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `450`ns (225%)                           | `2,224,295`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `532`ns (266%)                           | `1,880,094`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `970`ns (485%)                           | `1,030,833`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,013`ns (507%)                         | `986,781`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,231`ns (2115%)                        | `236,353`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `218`ns (100%)                           | `4,595,727`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (156%)                           | `2,942,453`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,010`ns (464%)                         | `989,938`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,141`ns (525%)                         | `876,059`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,878`ns (2242%)                        | `204,999`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,720`ns (2629%)                        | `174,815`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `221`ns (100%)                           | `4,533,656`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (169%)                           | `2,689,636`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `530`ns (240%)                           | `1,887,061`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `919`ns (417%)                           | `1,088,263`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,010`ns (458%)                         | `989,702`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,188`ns (538%)                         | `842,090`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,749`ns (793%)                         | `571,755`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,487`ns (2034%)                        | `222,881`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,882`ns (3574%)                        | `126,864`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `584`ns (100%)                           | `1,713,662`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `661`ns (113%)                           | `1,513,549`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `703`ns (120%)                           | `1,423,428`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `321`ns (100%)                           | `3,116,777`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `557`ns (174%)                           | `1,795,627`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
