# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 11 Aug 2021 17:58:00 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-761 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `204`ns (100%)                           | `4,890,415`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `370`ns (181%)                           | `2,703,242`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `541`ns (265%)                           | `1,847,729`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,078`ns (527%)                         | `927,822`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,082`ns (529%)                         | `923,789`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,260`ns (2084%)                        | `234,715`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `200`ns (100%)                           | `4,995,884`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `308`ns (154%)                           | `3,246,664`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,094`ns (547%)                         | `913,671`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,096`ns (547%)                         | `912,743`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,475`ns (2735%)                        | `182,652`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,791`ns (2893%)                        | `172,671`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `206`ns (100%)                           | `4,848,256`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `334`ns (162%)                           | `2,990,059`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `540`ns (262%)                           | `1,851,207`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `823`ns (399%)                           | `1,215,310`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,092`ns (530%)                         | `915,488`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,229`ns (596%)                         | `813,983`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,875`ns (909%)                         | `533,253`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,235`ns (2053%)                        | `236,147`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,108`ns (4416%)                        | `109,796`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `579`ns (100%)                           | `1,726,584`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `656`ns (113%)                           | `1,524,034`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `714`ns (123%)                           | `1,400,034`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `335`ns (100%)                           | `2,982,055`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `639`ns (191%)                           | `1,565,043`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
