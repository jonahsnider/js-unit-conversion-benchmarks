# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 08 Sep 2021 01:46:24 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-101 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `200`ns (100%)                           | `5,008,113`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `399`ns (200%)                           | `2,506,939`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `529`ns (265%)                           | `1,891,544`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,065`ns (533%)                         | `939,261`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,475`ns (739%)                         | `677,999`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,737`ns (2372%)                        | `211,103`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `194`ns (100%)                           | `5,155,808`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `394`ns (203%)                           | `2,535,215`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,017`ns (524%)                         | `983,486`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,168`ns (602%)                         | `856,449`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,578`ns (2876%)                        | `179,271`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,953`ns (3069%)                        | `167,988`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `182`ns (100%)                           | `5,506,071`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `339`ns (187%)                           | `2,948,404`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (320%)                           | `1,719,342`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `790`ns (435%)                           | `1,265,816`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `938`ns (516%)                           | `1,066,384`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,267`ns (698%)                         | `789,236`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,944`ns (1071%)                        | `514,317`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,499`ns (2477%)                        | `222,254`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,039`ns (4977%)                        | `110,635`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `614`ns (100%)                           | `1,629,938`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `626`ns (102%)                           | `1,596,439`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `791`ns (129%)                           | `1,263,787`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `283`ns (100%)                           | `3,534,899`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `631`ns (223%)                           | `1,584,530`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
