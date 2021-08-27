# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 27 Aug 2021 02:10:38 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az212-57 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `222`ns (100%)                           | `4,510,575`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (168%)                           | `2,685,052`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `543`ns (245%)                           | `1,841,213`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,082`ns (488%)                         | `924,615`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,540`ns (695%)                         | `649,460`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,918`ns (2218%)                        | `203,354`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `222`ns (100%)                           | `4,510,270`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `365`ns (164%)                           | `2,742,202`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,079`ns (487%)                         | `927,034`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,166`ns (526%)                         | `857,759`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,606`ns (2979%)                        | `151,386`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,338`ns (3309%)                        | `136,283`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `258`ns (100%)                           | `3,881,942`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `373`ns (145%)                           | `2,679,627`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `562`ns (218%)                           | `1,778,392`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `869`ns (338%)                           | `1,150,116`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,009`ns (392%)                         | `990,617`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,289`ns (500%)                         | `775,777`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,116`ns (821%)                         | `472,584`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,770`ns (1852%)                        | `209,651`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,891`ns (3452%)                        | `112,469`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `651`ns (100%)                           | `1,537,168`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `683`ns (105%)                           | `1,465,123`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `961`ns (148%)                           | `1,040,631`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `345`ns (100%)                           | `2,896,348`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `743`ns (215%)                           | `1,346,002`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
