# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 09 Aug 2021 14:29:34 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-255 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `215`ns (100%)                           | `4,640,938`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `428`ns (199%)                           | `2,337,151`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `722`ns (335%)                           | `1,384,493`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,234`ns (573%)                         | `810,640`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,436`ns (667%)                         | `696,274`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,033`ns (2336%)                        | `198,675`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `212`ns (100%)                           | `4,714,620`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (155%)                           | `3,032,458`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,253`ns (591%)                         | `798,311`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,364`ns (643%)                         | `733,092`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,032`ns (2844%)                        | `165,772`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,490`ns (3060%)                        | `154,081`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `207`ns (100%)                           | `4,831,131`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `388`ns (188%)                           | `2,575,806`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `853`ns (412%)                           | `1,172,249`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `960`ns (464%)                           | `1,041,316`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,206`ns (583%)                         | `828,883`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,353`ns (654%)                         | `739,070`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,319`ns (1120%)                        | `431,291`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,816`ns (2326%)                        | `207,658`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,779`ns (4724%)                        | `102,261`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `648`ns (100%)                           | `1,543,867`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `781`ns (121%)                           | `1,281,135`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `798`ns (123%)                           | `1,252,796`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `364`ns (100%)                           | `2,749,351`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `691`ns (190%)                           | `1,446,547`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
