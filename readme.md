# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 21 Aug 2021 05:41:46 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-374 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `179`ns (100%)                           | `5,586,061`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `393`ns (220%)                           | `2,543,951`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `564`ns (315%)                           | `1,773,815`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,036`ns (579%)                         | `965,545`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,155`ns (645%)                         | `865,948`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,980`ns (2223%)                        | `251,237`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `184`ns (100%)                           | `5,427,364`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `248`ns (134%)                           | `4,035,467`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `964`ns (523%)                           | `1,037,436`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,029`ns (558%)                         | `972,153`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,011`ns (2719%)                        | `199,576`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,048`ns (2740%)                        | `198,088`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `184`ns (100%)                           | `5,435,740`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `262`ns (143%)                           | `3,813,524`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `505`ns (275%)                           | `1,978,453`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `880`ns (478%)                           | `1,136,937`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,047`ns (569%)                         | `954,763`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,071`ns (582%)                         | `933,777`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,833`ns (996%)                         | `545,616`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,902`ns (2121%)                        | `256,258`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,970`ns (4332%)                        | `125,475`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `501`ns (100%)                           | `1,994,892`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `555`ns (111%)                           | `1,800,605`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `604`ns (121%)                           | `1,654,350`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `283`ns (100%)                           | `3,535,950`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `508`ns (180%)                           | `1,967,246`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
