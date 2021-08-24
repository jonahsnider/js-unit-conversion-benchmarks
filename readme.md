# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 24 Aug 2021 20:19:39 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az219-713 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `213`ns (100%)                           | `4,699,296`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `347`ns (163%)                           | `2,878,632`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `661`ns (311%)                           | `1,512,877`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,080`ns (508%)                         | `925,792`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,379`ns (648%)                         | `725,083`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,991`ns (2345%)                        | `200,362`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `226`ns (100%)                           | `4,420,541`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `338`ns (150%)                           | `2,956,505`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,291`ns (571%)                         | `774,594`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,335`ns (590%)                         | `749,052`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,765`ns (2549%)                        | `173,451`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,592`ns (2914%)                        | `151,689`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `198`ns (100%)                           | `5,041,880`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `319`ns (161%)                           | `3,137,331`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `594`ns (300%)                           | `1,682,175`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `889`ns (448%)                           | `1,124,521`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,230`ns (620%)                         | `812,803`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,462`ns (737%)                         | `683,995`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,104`ns (1061%)                        | `475,211`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,222`ns (2633%)                        | `191,499`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,258`ns (4668%)                        | `108,009`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `658`ns (100%)                           | `1,520,822`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `680`ns (103%)                           | `1,470,369`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `775`ns (118%)                           | `1,289,816`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `328`ns (100%)                           | `3,045,862`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `657`ns (200%)                           | `1,523,052`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
