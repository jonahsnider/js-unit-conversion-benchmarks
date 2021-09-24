# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 24 Sep 2021 01:31:04 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-473 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `194`ns (100%)                           | `5,146,034`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `503`ns (259%)                           | `1,987,636`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `902`ns (464%)                           | `1,108,139`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,279`ns (658%)                         | `781,862`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,280`ns (659%)                         | `781,085`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,011`ns (2579%)                        | `199,571`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `220`ns (100%)                           | `4,554,369`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `379`ns (173%)                           | `2,639,101`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,145`ns (522%)                         | `873,190`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,623`ns (739%)                         | `616,216`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,560`ns (2532%)                        | `179,862`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,227`ns (2836%)                        | `160,581`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `188`ns (100%)                           | `5,309,508`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `369`ns (196%)                           | `2,708,354`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `671`ns (356%)                           | `1,489,524`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `865`ns (460%)                           | `1,155,469`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,241`ns (659%)                         | `806,062`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,241`ns (659%)                         | `805,647`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,879`ns (997%)                         | `532,331`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,909`ns (2606%)                        | `203,706`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,560`ns (5076%)                        | `104,604`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `650`ns (100%)                           | `1,537,921`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `759`ns (117%)                           | `1,318,098`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `835`ns (128%)                           | `1,197,503`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `301`ns (100%)                           | `3,324,620`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `568`ns (189%)                           | `1,761,266`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
