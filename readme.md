# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 10 Jul 2021 07:13:51 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-100 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `151`ns (100%)                           | `6,640,147`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `290`ns (193%)                           | `3,447,570`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `436`ns (289%)                           | `2,293,725`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `835`ns (555%)                           | `1,197,267`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `856`ns (568%)                           | `1,168,045`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,358`ns (2230%)                        | `297,770`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `147`ns (100%)                           | `6,812,220`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `230`ns (157%)                           | `4,341,331`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `831`ns (566%)                           | `1,203,282`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `893`ns (608%)                           | `1,120,129`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,346`ns (2960%)                        | `230,112`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,426`ns (3015%)                        | `225,933`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `151`ns (100%)                           | `6,642,971`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `238`ns (158%)                           | `4,199,503`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `445`ns (296%)                           | `2,245,611`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `603`ns (401%)                           | `1,657,131`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `837`ns (556%)                           | `1,195,395`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `877`ns (583%)                           | `1,140,346`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,768`ns (1175%)                        | `565,480`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,302`ns (2193%)                        | `302,889`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,902`ns (4585%)                        | `144,884`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `445`ns (100%)                           | `2,247,544`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `479`ns (108%)                           | `2,086,343`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `536`ns (120%)                           | `1,865,824`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `249`ns (100%)                           | `4,020,454`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `498`ns (200%)                           | `2,007,949`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
