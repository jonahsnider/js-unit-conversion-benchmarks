# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 19 Jun 2021 07:16:22 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az219-749 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `173`ns (100%)                           | `5,796,309`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `297`ns (172%)                           | `3,363,413`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `447`ns (259%)                           | `2,237,135`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `903`ns (523%)                           | `1,107,791`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `949`ns (550%)                           | `1,054,186`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,707`ns (2149%)                        | `269,758`/sec                            |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `171`ns (100%)                           | `5,841,628`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `245`ns (143%)                           | `4,085,759`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `870`ns (508%)                           | `1,149,451`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `932`ns (544%)                           | `1,073,525`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,773`ns (2788%)                        | `209,517`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,980`ns (2909%)                        | `200,808`/sec                            |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `169`ns (100%)                           | `5,924,364`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `247`ns (146%)                           | `4,048,596`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `426`ns (252%)                           | `2,348,136`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `724`ns (429%)                           | `1,381,767`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `928`ns (550%)                           | `1,077,466`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `991`ns (587%)                           | `1,008,654`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,931`ns (1144%)                        | `517,849`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,744`ns (2218%)                        | `267,092`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,500`ns (4443%)                        | `133,337`/sec                            |

### Parse a duration string and normalize it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `488`ns (100%)                           | `2,051,267`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `549`ns (113%)                           | `1,821,250`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `590`ns (121%)                           | `1,695,777`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `261`ns (100%)                           | `3,834,073`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `505`ns (194%)                           | `1,979,826`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
