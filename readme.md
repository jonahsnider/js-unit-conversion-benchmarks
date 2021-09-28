# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 28 Sep 2021 02:13:49 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az213-905 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `568`ns (100%)                           | `1,760,600`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,904`ns (5617%)                       | `31,345`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `69,382`ns (12215%)                      | `14,413`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `170`ns (100%)                           | `5,870,613`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `337`ns (198%)                           | `2,969,725`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `602`ns (353%)                           | `1,661,641`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `896`ns (526%)                           | `1,115,589`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `957`ns (562%)                           | `1,044,414`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,762`ns (2796%)                        | `209,974`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `176`ns (100%)                           | `5,667,383`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `299`ns (169%)                           | `3,349,687`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `913`ns (517%)                           | `1,095,238`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `932`ns (528%)                           | `1,073,101`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,956`ns (2809%)                        | `201,777`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,991`ns (2829%)                        | `200,344`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `171`ns (100%)                           | `5,843,365`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `301`ns (176%)                           | `3,325,050`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `437`ns (255%)                           | `2,290,847`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `717`ns (419%)                           | `1,394,275`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `916`ns (535%)                           | `1,092,225`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,000`ns (585%)                         | `999,663`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,537`ns (898%)                         | `650,495`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,809`ns (2226%)                        | `262,560`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,622`ns (4454%)                        | `131,191`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `554`ns (100%)                           | `1,804,985`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `562`ns (101%)                           | `1,779,296`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `581`ns (105%)                           | `1,721,220`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `260`ns (100%)                           | `3,848,113`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `466`ns (179%)                           | `2,146,358`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
