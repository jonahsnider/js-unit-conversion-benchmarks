# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 26 Sep 2021 05:11:47 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-990 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `827`ns (100%)                           | `1,209,682`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `52,095`ns (6302%)                       | `19,196`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `94,202`ns (11395%)                      | `10,616`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `222`ns (100%)                           | `4,510,783`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `435`ns (196%)                           | `2,296,841`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `639`ns (288%)                           | `1,566,138`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,152`ns (520%)                         | `867,764`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,257`ns (567%)                         | `795,463`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,977`ns (2245%)                        | `200,916`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `231`ns (100%)                           | `4,329,398`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `430`ns (186%)                           | `2,323,378`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,219`ns (528%)                         | `820,234`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,255`ns (543%)                         | `796,615`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,846`ns (2964%)                        | `146,060`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,944`ns (3006%)                        | `144,019`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `223`ns (100%)                           | `4,481,693`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `405`ns (181%)                           | `2,470,290`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `651`ns (292%)                           | `1,537,218`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `963`ns (431%)                           | `1,038,832`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,272`ns (570%)                         | `786,223`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,363`ns (611%)                         | `733,654`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,257`ns (1012%)                        | `443,016`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,240`ns (2348%)                        | `190,850`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `10,240`ns (4589%)                       | `97,660`/sec                             |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `680`ns (100%)                           | `1,470,742`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `763`ns (112%)                           | `1,310,573`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `766`ns (113%)                           | `1,305,083`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `386`ns (100%)                           | `2,589,560`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `623`ns (161%)                           | `1,605,377`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
