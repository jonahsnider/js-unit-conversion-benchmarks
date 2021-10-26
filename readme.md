# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 26 Oct 2021 04:10:13 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az213-918 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `693`ns (100%)                           | `1,443,665`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `51,091`ns (7376%)                       | `19,573`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `85,208`ns (12301%)                      | `11,736`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `213`ns (100%)                           | `4,696,828`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `326`ns (153%)                           | `3,068,759`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `373`ns (175%)                           | `2,681,883`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `567`ns (266%)                           | `1,764,414`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `968`ns (454%)                           | `1,033,414`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `992`ns (466%)                           | `1,008,511`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,407`ns (2070%)                        | `226,919`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `215`ns (100%)                           | `4,659,185`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `323`ns (151%)                           | `3,095,393`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `380`ns (177%)                           | `2,633,688`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,100`ns (513%)                         | `908,970`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,186`ns (553%)                         | `842,931`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,450`ns (2539%)                        | `183,487`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,295`ns (2933%)                        | `158,847`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `209`ns (100%)                           | `4,784,652`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `328`ns (157%)                           | `3,046,092`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (158%)                           | `3,026,406`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `615`ns (294%)                           | `1,625,591`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `984`ns (471%)                           | `1,016,218`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,002`ns (480%)                         | `997,788`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,166`ns (558%)                         | `857,308`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,668`ns (798%)                         | `599,536`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,646`ns (2223%)                        | `215,230`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,554`ns (4571%)                        | `104,673`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `651`ns (100%)                           | `1,536,298`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `652`ns (100%)                           | `1,533,472`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `653`ns (100%)                           | `1,532,422`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `349`ns (100%)                           | `2,862,642`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `594`ns (170%)                           | `1,684,022`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
