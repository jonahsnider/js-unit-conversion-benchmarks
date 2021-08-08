# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 08 Aug 2021 00:30:07 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-413 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `205`ns (100%)                           | `4,868,831`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `420`ns (205%)                           | `2,378,384`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `525`ns (256%)                           | `1,905,023`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,079`ns (525%)                         | `926,762`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,083`ns (528%)                         | `922,989`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,327`ns (2107%)                        | `231,122`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `204`ns (100%)                           | `4,896,480`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `295`ns (144%)                           | `3,392,776`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,105`ns (541%)                         | `905,076`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,152`ns (564%)                         | `868,169`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,725`ns (2803%)                        | `174,686`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,917`ns (2897%)                        | `169,012`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `207`ns (100%)                           | `4,839,817`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (155%)                           | `3,116,532`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `515`ns (249%)                           | `1,943,001`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `832`ns (403%)                           | `1,201,707`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,058`ns (512%)                         | `944,841`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,168`ns (565%)                         | `856,491`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,785`ns (864%)                         | `560,120`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,476`ns (2166%)                        | `223,433`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,000`ns (4356%)                        | `111,115`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `621`ns (100%)                           | `1,610,017`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `655`ns (105%)                           | `1,526,588`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `696`ns (112%)                           | `1,435,888`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `312`ns (100%)                           | `3,207,836`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `623`ns (200%)                           | `1,605,720`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
