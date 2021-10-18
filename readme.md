# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 18 Oct 2021 06:27:58 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-893 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `646`ns (100%)                           | `1,547,204`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `47,585`ns (7362%)                       | `21,015`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `79,844`ns (12353%)                      | `12,524`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `219`ns (100%)                           | `4,576,441`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `254`ns (116%)                           | `3,943,087`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `307`ns (141%)                           | `3,254,403`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `475`ns (217%)                           | `2,106,932`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `872`ns (399%)                           | `1,147,397`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `942`ns (431%)                           | `1,062,026`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,850`ns (2220%)                        | `206,168`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `188`ns (100%)                           | `5,311,934`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `284`ns (151%)                           | `3,526,604`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `288`ns (153%)                           | `3,466,633`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,026`ns (545%)                         | `974,650`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,039`ns (552%)                         | `962,222`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,219`ns (2772%)                        | `191,625`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,133`ns (3258%)                        | `163,047`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `206`ns (100%)                           | `4,856,765`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `289`ns (140%)                           | `3,465,827`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `299`ns (145%)                           | `3,341,095`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `520`ns (253%)                           | `1,922,901`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `829`ns (402%)                           | `1,206,864`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `856`ns (416%)                           | `1,168,507`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,118`ns (543%)                         | `894,784`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,647`ns (800%)                         | `607,161`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,112`ns (1997%)                        | `243,200`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,876`ns (3825%)                        | `126,965`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `624`ns (100%)                           | `1,601,590`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `823`ns (132%)                           | `1,214,620`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `874`ns (140%)                           | `1,144,130`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `350`ns (100%)                           | `2,856,747`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `612`ns (175%)                           | `1,633,947`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
