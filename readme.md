# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 12 Jul 2021 02:43:19 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-965 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `198`ns (100%)                           | `5,049,351`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `393`ns (198%)                           | `2,546,291`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `566`ns (286%)                           | `1,767,255`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,037`ns (523%)                         | `964,679`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,184`ns (598%)                         | `844,832`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,768`ns (2408%)                        | `209,734`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `201`ns (100%)                           | `4,963,791`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `300`ns (149%)                           | `3,331,593`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,052`ns (522%)                         | `950,700`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,092`ns (542%)                         | `915,820`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,847`ns (2406%)                        | `206,320`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,067`ns (3012%)                        | `164,826`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `239`ns (100%)                           | `4,182,695`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `312`ns (130%)                           | `3,210,257`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (239%)                           | `1,752,458`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `813`ns (340%)                           | `1,230,591`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,031`ns (431%)                         | `969,512`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,274`ns (533%)                         | `784,902`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,736`ns (726%)                         | `576,195`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,845`ns (2026%)                        | `206,412`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,147`ns (3408%)                        | `122,742`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `597`ns (100%)                           | `1,676,128`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `665`ns (111%)                           | `1,504,683`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `855`ns (143%)                           | `1,169,509`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `308`ns (100%)                           | `3,249,076`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `594`ns (193%)                           | `1,684,364`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
