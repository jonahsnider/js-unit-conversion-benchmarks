# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 24 Sep 2021 02:17:44 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-819 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `649`ns (100%)                           | `1,540,898`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,848`ns (5832%)                       | `26,421`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `82,152`ns (12659%)                      | `12,173`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `208`ns (100%)                           | `4,810,497`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `392`ns (189%)                           | `2,551,086`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `539`ns (259%)                           | `1,854,105`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,111`ns (535%)                         | `899,769`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,180`ns (568%)                         | `847,215`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,330`ns (2083%)                        | `230,957`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `214`ns (100%)                           | `4,666,196`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (158%)                           | `2,945,272`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,027`ns (479%)                         | `974,117`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,141`ns (532%)                         | `876,357`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,838`ns (2724%)                        | `171,291`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,043`ns (2820%)                        | `165,473`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `207`ns (100%)                           | `4,837,032`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (165%)                           | `2,934,768`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `526`ns (255%)                           | `1,900,253`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `842`ns (407%)                           | `1,187,061`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,031`ns (499%)                         | `969,844`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,127`ns (545%)                         | `886,985`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,936`ns (937%)                         | `516,479`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,212`ns (2037%)                        | `237,435`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,086`ns (4395%)                        | `110,063`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `620`ns (100%)                           | `1,613,686`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `639`ns (103%)                           | `1,564,837`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `718`ns (116%)                           | `1,392,464`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `323`ns (100%)                           | `3,095,831`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `516`ns (160%)                           | `1,939,098`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
