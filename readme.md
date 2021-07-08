# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 08 Jul 2021 02:20:14 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-378 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `176`ns (100%)                           | `5,679,632`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `374`ns (212%)                           | `2,676,126`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `485`ns (276%)                           | `2,061,083`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `974`ns (553%)                           | `1,026,342`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,189`ns (675%)                         | `840,826`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,671`ns (2085%)                        | `272,419`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `171`ns (100%)                           | `5,843,552`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (187%)                           | `3,117,959`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `959`ns (560%)                           | `1,042,664`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,124`ns (657%)                         | `889,525`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,040`ns (2945%)                        | `198,394`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,704`ns (3333%)                        | `175,330`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `173`ns (100%)                           | `5,768,616`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `332`ns (192%)                           | `3,010,207`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `451`ns (260%)                           | `2,217,549`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `699`ns (403%)                           | `1,431,542`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `908`ns (524%)                           | `1,101,837`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,076`ns (621%)                         | `929,572`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,080`ns (1200%)                        | `480,813`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,763`ns (2171%)                        | `265,719`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,601`ns (4962%)                        | `116,267`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `527`ns (100%)                           | `1,898,148`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `593`ns (112%)                           | `1,687,559`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `637`ns (121%)                           | `1,570,395`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `263`ns (100%)                           | `3,800,116`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `639`ns (243%)                           | `1,565,493`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
