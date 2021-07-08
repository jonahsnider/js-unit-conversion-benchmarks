# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 08 Jul 2021 01:11:21 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-100 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `199`ns (100%)                           | `5,036,149`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `394`ns (199%)                           | `2,536,183`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `518`ns (261%)                           | `1,929,659`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,085`ns (547%)                         | `921,420`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,186`ns (597%)                         | `843,327`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,053`ns (2041%)                        | `246,725`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `190`ns (100%)                           | `5,267,923`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `302`ns (159%)                           | `3,313,443`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `999`ns (527%)                           | `1,000,502`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,187`ns (625%)                         | `842,552`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,344`ns (2815%)                        | `187,141`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,555`ns (2926%)                        | `180,017`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `185`ns (100%)                           | `5,394,440`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `314`ns (169%)                           | `3,185,218`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `514`ns (277%)                           | `1,944,552`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `892`ns (481%)                           | `1,120,604`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,047`ns (565%)                         | `955,156`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,160`ns (626%)                         | `862,104`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,232`ns (1204%)                        | `447,961`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,236`ns (2285%)                        | `236,078`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,695`ns (4690%)                        | `115,010`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `553`ns (100%)                           | `1,807,270`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `601`ns (109%)                           | `1,662,891`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `666`ns (120%)                           | `1,501,559`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `301`ns (100%)                           | `3,325,596`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `617`ns (205%)                           | `1,621,216`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
