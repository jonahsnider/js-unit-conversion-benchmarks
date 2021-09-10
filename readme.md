# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 10 Sep 2021 10:07:29 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-8 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `244`ns (100%)                           | `4,104,488`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `637`ns (261%)                           | `1,570,621`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `700`ns (287%)                           | `1,428,568`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,287`ns (528%)                         | `776,739`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,353`ns (555%)                         | `738,984`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,030`ns (2064%)                        | `198,823`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `235`ns (100%)                           | `4,258,383`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `410`ns (174%)                           | `2,441,897`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,306`ns (556%)                         | `765,892`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,347`ns (574%)                         | `742,473`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,710`ns (2431%)                        | `175,143`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,458`ns (2750%)                        | `154,847`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `242`ns (100%)                           | `4,133,285`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `393`ns (163%)                           | `2,543,097`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `688`ns (284%)                           | `1,454,431`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,021`ns (422%)                         | `979,728`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,191`ns (492%)                         | `839,403`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,351`ns (558%)                         | `740,282`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,206`ns (912%)                         | `453,406`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,784`ns (1977%)                        | `209,037`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,087`ns (3756%)                        | `110,052`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `660`ns (100%)                           | `1,515,718`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `791`ns (120%)                           | `1,264,913`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `929`ns (141%)                           | `1,075,875`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `360`ns (100%)                           | `2,778,646`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `689`ns (191%)                           | `1,451,411`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
