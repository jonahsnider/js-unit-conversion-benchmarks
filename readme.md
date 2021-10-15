# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 15 Oct 2021 08:06:23 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-254 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `562`ns (100%)                           | `1,780,344`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `40,581`ns (7225%)                       | `24,642`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `63,895`ns (11376%)                      | `15,651`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `176`ns (100%)                           | `5,671,944`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `261`ns (148%)                           | `3,837,768`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `277`ns (157%)                           | `3,605,122`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `420`ns (238%)                           | `2,380,568`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `752`ns (426%)                           | `1,329,897`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `842`ns (477%)                           | `1,188,132`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,511`ns (1992%)                        | `284,806`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `188`ns (100%)                           | `5,315,386`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `259`ns (137%)                           | `3,867,966`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `280`ns (149%)                           | `3,567,004`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `866`ns (460%)                           | `1,155,166`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `887`ns (472%)                           | `1,126,858`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,386`ns (2331%)                        | `228,019`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,657`ns (2475%)                        | `214,753`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `181`ns (100%)                           | `5,528,696`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `266`ns (147%)                           | `3,763,329`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `277`ns (153%)                           | `3,612,714`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `548`ns (303%)                           | `1,825,976`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `686`ns (379%)                           | `1,457,939`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `863`ns (477%)                           | `1,158,327`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,270`ns (702%)                         | `787,568`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,494`ns (826%)                         | `669,383`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,637`ns (2011%)                        | `274,970`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,689`ns (3698%)                        | `149,507`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `489`ns (100%)                           | `2,044,768`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `554`ns (113%)                           | `1,804,550`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `578`ns (118%)                           | `1,730,513`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `276`ns (100%)                           | `3,627,803`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `480`ns (174%)                           | `2,083,689`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
