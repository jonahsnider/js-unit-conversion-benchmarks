# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 01 Jul 2021 02:21:24 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-906 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `213`ns (100%)                           | `4,684,287`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `386`ns (181%)                           | `2,587,627`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `578`ns (271%)                           | `1,730,684`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,120`ns (525%)                         | `892,735`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,127`ns (528%)                         | `887,641`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,512`ns (2114%)                        | `221,608`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `212`ns (100%)                           | `4,707,396`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `339`ns (160%)                           | `2,950,737`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,103`ns (519%)                         | `907,003`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,242`ns (585%)                         | `804,879`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,977`ns (2813%)                        | `167,316`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,070`ns (2857%)                        | `164,747`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `217`ns (100%)                           | `4,617,319`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (162%)                           | `2,845,717`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `550`ns (254%)                           | `1,816,969`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `836`ns (386%)                           | `1,196,284`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,096`ns (506%)                         | `912,024`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,212`ns (560%)                         | `825,064`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,293`ns (1059%)                        | `436,067`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,535`ns (2094%)                        | `220,521`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,415`ns (4347%)                        | `106,215`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `611`ns (100%)                           | `1,635,376`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `666`ns (109%)                           | `1,500,473`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `717`ns (117%)                           | `1,394,246`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `350`ns (100%)                           | `2,854,141`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `677`ns (193%)                           | `1,476,416`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
