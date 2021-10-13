# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 13 Oct 2021 06:39:10 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az212-309 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `755`ns (100%)                           | `1,324,206`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `53,504`ns (7085%)                       | `18,690`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `87,164`ns (11542%)                      | `11,473`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `214`ns (100%)                           | `4,670,032`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `397`ns (185%)                           | `2,520,630`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `602`ns (281%)                           | `1,661,245`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,136`ns (530%)                         | `880,513`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,214`ns (567%)                         | `823,506`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,776`ns (2697%)                        | `173,135`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `218`ns (100%)                           | `4,584,905`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `368`ns (169%)                           | `2,715,842`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,168`ns (536%)                         | `856,027`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,239`ns (568%)                         | `807,265`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,627`ns (3038%)                        | `150,900`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,231`ns (3316%)                        | `138,286`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `212`ns (100%)                           | `4,722,260`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `391`ns (185%)                           | `2,554,596`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `632`ns (298%)                           | `1,582,642`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,021`ns (482%)                         | `979,203`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,236`ns (584%)                         | `809,082`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,333`ns (630%)                         | `750,066`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,060`ns (973%)                         | `485,470`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,332`ns (2518%)                        | `187,532`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `10,544`ns (4979%)                       | `94,844`/sec                             |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `660`ns (100%)                           | `1,515,343`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `731`ns (111%)                           | `1,368,735`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `805`ns (122%)                           | `1,242,865`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `346`ns (100%)                           | `2,890,233`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `690`ns (199%)                           | `1,450,289`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
