# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 15 Oct 2021 01:55:08 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-434 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `488`ns (100%)                           | `2,050,121`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,668`ns (5877%)                       | `34,882`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `62,164`ns (12744%)                      | `16,087`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `156`ns (100%)                           | `6,418,318`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `251`ns (161%)                           | `3,989,629`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `293`ns (188%)                           | `3,414,200`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `462`ns (296%)                           | `2,165,804`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `735`ns (472%)                           | `1,360,784`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `808`ns (519%)                           | `1,237,457`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,040`ns (1951%)                        | `328,926`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `158`ns (100%)                           | `6,315,165`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `255`ns (161%)                           | `3,919,655`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `288`ns (182%)                           | `3,476,963`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `864`ns (546%)                           | `1,157,321`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `944`ns (596%)                           | `1,059,147`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,213`ns (2661%)                        | `237,338`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,320`ns (2728%)                        | `231,482`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `166`ns (100%)                           | `6,034,056`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `246`ns (149%)                           | `4,060,179`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `303`ns (183%)                           | `3,297,992`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `466`ns (281%)                           | `2,143,903`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `716`ns (432%)                           | `1,395,678`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `778`ns (469%)                           | `1,285,827`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `852`ns (514%)                           | `1,173,974`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,164`ns (702%)                         | `859,230`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,249`ns (1960%)                        | `307,834`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,901`ns (4164%)                        | `144,908`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `447`ns (100%)                           | `2,237,915`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `466`ns (104%)                           | `2,145,388`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `581`ns (130%)                           | `1,719,890`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `245`ns (100%)                           | `4,083,471`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `377`ns (154%)                           | `2,653,490`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
