# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 09 Jul 2021 00:30:23 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-906 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `199`ns (100%)                           | `5,019,125`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `358`ns (180%)                           | `2,789,626`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `521`ns (261%)                           | `1,920,238`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,037`ns (520%)                         | `964,741`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,069`ns (537%)                         | `935,257`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,234`ns (2125%)                        | `236,156`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `196`ns (100%)                           | `5,113,099`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `290`ns (148%)                           | `3,448,592`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,013`ns (518%)                         | `986,857`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,068`ns (546%)                         | `936,043`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,452`ns (2788%)                        | `183,409`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,665`ns (2897%)                        | `176,527`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `194`ns (100%)                           | `5,143,919`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `329`ns (169%)                           | `3,041,391`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `509`ns (262%)                           | `1,964,118`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `782`ns (402%)                           | `1,278,215`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,032`ns (531%)                         | `969,073`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,157`ns (595%)                         | `864,573`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,209`ns (1136%)                        | `452,692`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,064`ns (2090%)                        | `246,090`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,972`ns (4615%)                        | `111,457`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `559`ns (100%)                           | `1,788,546`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `598`ns (107%)                           | `1,672,836`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `660`ns (118%)                           | `1,514,006`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `292`ns (100%)                           | `3,428,149`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `646`ns (222%)                           | `1,547,638`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
