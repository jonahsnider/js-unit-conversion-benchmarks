# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 15 Sep 2021 02:06:47 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-667 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `223`ns (100%)                           | `4,478,894`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `382`ns (171%)                           | `2,616,502`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `699`ns (313%)                           | `1,430,448`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,216`ns (544%)                         | `822,678`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,219`ns (546%)                         | `820,222`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,647`ns (2081%)                        | `215,214`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `218`ns (100%)                           | `4,586,621`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `368`ns (169%)                           | `2,716,500`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,287`ns (590%)                         | `777,074`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,412`ns (648%)                         | `708,252`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,595`ns (2566%)                        | `178,745`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,581`ns (3019%)                        | `151,945`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `223`ns (100%)                           | `4,487,751`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `309`ns (139%)                           | `3,236,391`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `785`ns (352%)                           | `1,274,450`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `995`ns (447%)                           | `1,004,838`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,095`ns (491%)                         | `913,512`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,356`ns (609%)                         | `737,327`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,123`ns (953%)                         | `471,040`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,752`ns (2132%)                        | `210,457`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,779`ns (3940%)                        | `113,911`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `687`ns (100%)                           | `1,455,001`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `732`ns (106%)                           | `1,366,882`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `760`ns (111%)                           | `1,315,583`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `325`ns (100%)                           | `3,078,480`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `623`ns (192%)                           | `1,605,044`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
