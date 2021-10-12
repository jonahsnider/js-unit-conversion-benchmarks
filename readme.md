# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 12 Oct 2021 09:50:23 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-519 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `579`ns (100%)                           | `1,727,826`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,952`ns (5521%)                       | `31,297`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,666`ns (12210%)                      | `14,151`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `175`ns (100%)                           | `5,711,237`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `311`ns (177%)                           | `3,219,224`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `474`ns (271%)                           | `2,110,933`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `913`ns (522%)                           | `1,094,885`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `964`ns (551%)                           | `1,037,132`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,696`ns (2111%)                        | `270,544`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `179`ns (100%)                           | `5,578,071`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `297`ns (166%)                           | `3,364,640`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `918`ns (512%)                           | `1,089,776`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `931`ns (519%)                           | `1,074,385`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,468`ns (3050%)                        | `182,880`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,488`ns (3061%)                        | `182,212`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `173`ns (100%)                           | `5,773,491`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `302`ns (174%)                           | `3,313,141`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `459`ns (265%)                           | `2,178,349`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `717`ns (414%)                           | `1,395,388`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `888`ns (513%)                           | `1,125,676`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,032`ns (596%)                         | `969,071`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,741`ns (1005%)                        | `574,510`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,757`ns (2169%)                        | `266,179`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,452`ns (4879%)                        | `118,322`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `499`ns (100%)                           | `2,002,941`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `549`ns (110%)                           | `1,822,703`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `600`ns (120%)                           | `1,665,781`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `255`ns (100%)                           | `3,914,140`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `478`ns (187%)                           | `2,092,591`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
