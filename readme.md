# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 12 Aug 2021 02:06:38 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-881 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `206`ns (100%)                           | `4,863,421`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `348`ns (169%)                           | `2,874,342`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `562`ns (274%)                           | `1,777,919`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,219`ns (593%)                         | `820,463`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,229`ns (598%)                         | `813,597`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,960`ns (2412%)                        | `201,607`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `214`ns (100%)                           | `4,674,758`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `347`ns (162%)                           | `2,885,611`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,171`ns (548%)                         | `853,803`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,389`ns (649%)                         | `720,110`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,789`ns (2706%)                        | `172,755`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,239`ns (2917%)                        | `160,274`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `217`ns (100%)                           | `4,611,590`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `349`ns (161%)                           | `2,867,203`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `625`ns (288%)                           | `1,600,678`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `970`ns (447%)                           | `1,030,734`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,114`ns (514%)                         | `897,878`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,320`ns (609%)                         | `757,705`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,983`ns (914%)                         | `504,369`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,672`ns (2154%)                        | `214,059`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,408`ns (4339%)                        | `106,288`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `593`ns (100%)                           | `1,685,463`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `661`ns (111%)                           | `1,512,084`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `696`ns (117%)                           | `1,436,274`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `319`ns (100%)                           | `3,133,829`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `686`ns (215%)                           | `1,458,121`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
