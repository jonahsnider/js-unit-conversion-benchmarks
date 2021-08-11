# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 11 Aug 2021 14:15:25 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-761 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `210`ns (100%)                           | `4,767,822`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `377`ns (180%)                           | `2,652,436`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `540`ns (257%)                           | `1,852,187`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,070`ns (510%)                         | `934,991`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,090`ns (520%)                         | `917,036`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,426`ns (2110%)                        | `225,962`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `209`ns (100%)                           | `4,785,645`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `323`ns (155%)                           | `3,093,306`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,065`ns (510%)                         | `938,723`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,304`ns (624%)                         | `766,862`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,750`ns (2752%)                        | `173,908`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,055`ns (2898%)                        | `165,155`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `211`ns (100%)                           | `4,728,183`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `318`ns (150%)                           | `3,145,072`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `611`ns (289%)                           | `1,636,211`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `843`ns (399%)                           | `1,185,879`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,196`ns (566%)                         | `836,056`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,207`ns (571%)                         | `828,284`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,935`ns (915%)                         | `516,898`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,489`ns (2123%)                        | `222,745`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,309`ns (4401%)                        | `107,424`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `591`ns (100%)                           | `1,693,090`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `639`ns (108%)                           | `1,564,770`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `692`ns (117%)                           | `1,445,339`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `320`ns (100%)                           | `3,121,241`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `631`ns (197%)                           | `1,584,341`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
