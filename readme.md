# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 14 Oct 2021 08:33:21 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az212-146 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `500`ns (100%)                           | `2,001,354`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,874`ns (6379%)                       | `31,374`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `68,259`ns (13661%)                      | `14,650`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `169`ns (100%)                           | `5,903,858`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `220`ns (130%)                           | `4,542,596`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `289`ns (171%)                           | `3,457,047`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `382`ns (225%)                           | `2,618,760`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `781`ns (461%)                           | `1,280,948`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `890`ns (526%)                           | `1,123,237`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,477`ns (2053%)                        | `287,638`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `174`ns (100%)                           | `5,757,854`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `263`ns (152%)                           | `3,797,966`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `293`ns (169%)                           | `3,412,943`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `913`ns (526%)                           | `1,095,629`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `949`ns (546%)                           | `1,053,793`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,871`ns (2805%)                        | `205,288`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,553`ns (3198%)                        | `180,071`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `171`ns (100%)                           | `5,855,492`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `259`ns (152%)                           | `3,862,675`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `302`ns (177%)                           | `3,310,641`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `535`ns (313%)                           | `1,868,471`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `694`ns (406%)                           | `1,441,215`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `769`ns (450%)                           | `1,299,869`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `884`ns (518%)                           | `1,131,462`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,421`ns (832%)                         | `703,527`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,804`ns (2227%)                        | `262,905`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,503`ns (4393%)                        | `133,280`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `468`ns (100%)                           | `2,135,079`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `496`ns (106%)                           | `2,014,350`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `632`ns (135%)                           | `1,583,152`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `270`ns (100%)                           | `3,704,051`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `439`ns (163%)                           | `2,277,465`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
