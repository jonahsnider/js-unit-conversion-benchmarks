# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 22 Sep 2021 03:21:53 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-670 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `150`ns (100%)                           | `6,682,091`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `293`ns (196%)                           | `3,409,523`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `406`ns (271%)                           | `2,465,847`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `848`ns (567%)                           | `1,178,921`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `855`ns (572%)                           | `1,169,057`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,238`ns (2164%)                        | `308,796`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `149`ns (100%)                           | `6,695,196`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `217`ns (145%)                           | `4,610,785`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `792`ns (531%)                           | `1,261,957`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `882`ns (590%)                           | `1,134,134`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,150`ns (2778%)                        | `240,985`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,315`ns (2889%)                        | `231,743`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `151`ns (100%)                           | `6,626,072`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `221`ns (146%)                           | `4,523,841`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `397`ns (263%)                           | `2,520,635`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `657`ns (436%)                           | `1,521,446`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `892`ns (591%)                           | `1,121,381`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `919`ns (609%)                           | `1,087,798`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,446`ns (958%)                         | `691,759`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,174`ns (2103%)                        | `315,013`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,759`ns (4479%)                        | `147,941`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `463`ns (100%)                           | `2,159,458`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `469`ns (101%)                           | `2,132,824`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `563`ns (122%)                           | `1,774,895`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `219`ns (100%)                           | `4,557,061`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `448`ns (204%)                           | `2,234,430`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
