# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 09 Aug 2021 02:50:07 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-413 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `222`ns (100%)                           | `4,494,926`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `408`ns (183%)                           | `2,449,784`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `694`ns (312%)                           | `1,441,560`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,160`ns (522%)                         | `861,770`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,275`ns (573%)                         | `784,052`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,756`ns (2138%)                        | `210,269`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `219`ns (100%)                           | `4,571,069`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `341`ns (156%)                           | `2,931,080`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,117`ns (510%)                         | `895,577`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,158`ns (529%)                         | `863,713`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,025`ns (2754%)                        | `165,970`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,239`ns (2852%)                        | `160,278`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `221`ns (100%)                           | `4,526,723`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `492`ns (223%)                           | `2,032,691`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `619`ns (280%)                           | `1,615,669`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `904`ns (409%)                           | `1,106,648`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,079`ns (489%)                         | `926,600`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,221`ns (553%)                         | `819,099`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,907`ns (863%)                         | `524,286`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,751`ns (2151%)                        | `210,462`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,708`ns (4395%)                        | `103,006`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `640`ns (100%)                           | `1,563,065`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `694`ns (109%)                           | `1,440,534`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `755`ns (118%)                           | `1,324,449`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `324`ns (100%)                           | `3,085,812`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `697`ns (215%)                           | `1,434,485`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
