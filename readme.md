# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 15 Oct 2021 07:53:23 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-888 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `674`ns (100%)                           | `1,482,944`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `39,855`ns (5910%)                       | `25,091`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,501`ns (12679%)                      | `11,696`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `228`ns (100%)                           | `4,377,946`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `342`ns (150%)                           | `2,927,628`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `378`ns (166%)                           | `2,643,726`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `516`ns (226%)                           | `1,937,501`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `963`ns (422%)                           | `1,038,622`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,141`ns (500%)                         | `876,263`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,046`ns (1771%)                        | `247,167`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `232`ns (100%)                           | `4,312,082`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `352`ns (152%)                           | `2,842,434`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `365`ns (157%)                           | `2,738,007`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,141`ns (492%)                         | `876,093`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,270`ns (547%)                         | `787,604`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,659`ns (2440%)                        | `176,705`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,912`ns (2549%)                        | `169,152`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `240`ns (100%)                           | `4,169,692`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `364`ns (152%)                           | `2,748,572`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `374`ns (156%)                           | `2,672,488`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `570`ns (238%)                           | `1,753,089`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `870`ns (363%)                           | `1,149,545`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `976`ns (407%)                           | `1,024,160`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,138`ns (474%)                         | `878,932`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,597`ns (666%)                         | `626,100`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,339`ns (1809%)                        | `230,480`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,379`ns (3911%)                        | `106,624`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `607`ns (100%)                           | `1,648,072`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `630`ns (104%)                           | `1,588,051`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `686`ns (113%)                           | `1,456,885`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `359`ns (100%)                           | `2,784,829`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `598`ns (167%)                           | `1,672,334`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
