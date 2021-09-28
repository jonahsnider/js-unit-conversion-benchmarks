# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 28 Sep 2021 02:39:14 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-118 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `703`ns (100%)                           | `1,422,874`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `48,774`ns (6940%)                       | `20,503`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,931`ns (12369%)                      | `11,503`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `214`ns (100%)                           | `4,670,934`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `362`ns (169%)                           | `2,760,596`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `582`ns (272%)                           | `1,717,733`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,164`ns (544%)                         | `858,977`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,312`ns (613%)                         | `761,944`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,835`ns (2726%)                        | `171,378`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `216`ns (100%)                           | `4,627,294`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `384`ns (178%)                           | `2,603,890`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,212`ns (561%)                         | `825,143`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,374`ns (636%)                         | `727,964`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,769`ns (2669%)                        | `173,353`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,267`ns (2900%)                        | `159,572`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `246`ns (100%)                           | `4,063,367`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `346`ns (141%)                           | `2,887,326`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `578`ns (235%)                           | `1,728,696`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,045`ns (425%)                         | `957,186`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,159`ns (471%)                         | `862,713`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,287`ns (523%)                         | `776,986`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,162`ns (879%)                         | `462,465`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,932`ns (2004%)                        | `202,744`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,421`ns (3828%)                        | `106,150`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `664`ns (100%)                           | `1,504,959`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `729`ns (110%)                           | `1,372,656`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `741`ns (112%)                           | `1,349,125`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `372`ns (100%)                           | `2,688,217`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `716`ns (192%)                           | `1,397,504`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
