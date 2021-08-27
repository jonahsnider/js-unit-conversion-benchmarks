# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 27 Aug 2021 03:03:10 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-348 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `191`ns (100%)                           | `5,245,186`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `295`ns (155%)                           | `3,384,819`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `589`ns (309%)                           | `1,699,190`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,153`ns (605%)                         | `867,317`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,181`ns (620%)                         | `846,586`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,857`ns (2548%)                        | `205,870`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `183`ns (100%)                           | `5,472,285`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `270`ns (148%)                           | `3,697,144`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,166`ns (638%)                         | `857,333`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,169`ns (639%)                         | `855,723`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,062`ns (2770%)                        | `197,553`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,328`ns (3463%)                        | `158,026`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `185`ns (100%)                           | `5,396,259`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `299`ns (161%)                           | `3,343,809`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `538`ns (290%)                           | `1,859,583`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `949`ns (512%)                           | `1,053,234`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,025`ns (553%)                         | `975,856`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,162`ns (627%)                         | `860,486`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,695`ns (915%)                         | `589,802`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,384`ns (2366%)                        | `228,109`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,964`ns (4298%)                        | `125,566`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `571`ns (100%)                           | `1,749,842`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `676`ns (118%)                           | `1,478,554`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `679`ns (119%)                           | `1,473,587`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `290`ns (100%)                           | `3,448,226`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `583`ns (201%)                           | `1,715,231`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
