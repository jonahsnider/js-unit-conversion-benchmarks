# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 25 Oct 2021 10:31:00 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az212-238 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `659`ns (100%)                           | `1,517,987`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `50,524`ns (7670%)                       | `19,792`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,193`ns (12629%)                      | `12,020`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `217`ns (100%)                           | `4,608,789`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `316`ns (146%)                           | `3,164,926`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `362`ns (167%)                           | `2,763,842`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `515`ns (237%)                           | `1,940,786`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,061`ns (489%)                         | `942,079`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,155`ns (532%)                         | `865,751`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,519`ns (2083%)                        | `221,265`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `217`ns (100%)                           | `4,603,106`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `321`ns (148%)                           | `3,112,269`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `337`ns (155%)                           | `2,970,643`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,095`ns (504%)                         | `913,344`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,415`ns (652%)                         | `706,496`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,332`ns (2454%)                        | `187,560`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,110`ns (2812%)                        | `163,668`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `222`ns (100%)                           | `4,511,130`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `309`ns (139%)                           | `3,233,842`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `314`ns (142%)                           | `3,180,973`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `545`ns (246%)                           | `1,836,438`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `942`ns (425%)                           | `1,061,591`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,069`ns (482%)                         | `935,759`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,089`ns (491%)                         | `917,911`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,510`ns (681%)                         | `662,243`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,567`ns (2060%)                        | `218,941`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,512`ns (3840%)                        | `117,486`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `641`ns (100%)                           | `1,559,970`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `653`ns (102%)                           | `1,530,880`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `705`ns (110%)                           | `1,418,078`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `312`ns (100%)                           | `3,207,806`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `554`ns (178%)                           | `1,805,872`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
