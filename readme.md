# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 02 Aug 2021 02:07:13 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-659 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `226`ns (100%)                           | `4,433,451`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `422`ns (187%)                           | `2,369,590`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `644`ns (286%)                           | `1,552,816`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,115`ns (494%)                         | `897,023`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,266`ns (561%)                         | `790,030`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,248`ns (1883%)                        | `235,398`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `226`ns (100%)                           | `4,426,455`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `353`ns (156%)                           | `2,835,482`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,133`ns (501%)                         | `882,649`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,198`ns (530%)                         | `834,401`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,383`ns (2383%)                        | `185,772`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,220`ns (2753%)                        | `160,770`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `226`ns (100%)                           | `4,419,985`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `350`ns (155%)                           | `2,856,666`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `663`ns (293%)                           | `1,508,582`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `846`ns (374%)                           | `1,181,637`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,067`ns (472%)                         | `937,267`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,186`ns (524%)                         | `842,855`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,765`ns (780%)                         | `566,559`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,405`ns (1947%)                        | `226,996`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,485`ns (4192%)                        | `105,431`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `624`ns (100%)                           | `1,601,818`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `678`ns (109%)                           | `1,475,693`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `772`ns (124%)                           | `1,295,580`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `331`ns (100%)                           | `3,023,175`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `833`ns (252%)                           | `1,201,025`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
