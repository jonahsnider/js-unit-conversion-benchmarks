# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 27 Jun 2021 04:06:46 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-370 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `212`ns (100%)                           | `4,724,704`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (189%)                           | `2,500,321`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `670`ns (317%)                           | `1,491,904`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,196`ns (565%)                         | `836,128`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,371`ns (648%)                         | `729,565`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,606`ns (2176%)                        | `217,098`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `213`ns (100%)                           | `4,701,451`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (161%)                           | `2,926,267`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,264`ns (594%)                         | `791,302`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,541`ns (724%)                         | `649,019`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,097`ns (2866%)                        | `164,017`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,473`ns (3043%)                        | `154,480`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `216`ns (100%)                           | `4,634,198`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `330`ns (153%)                           | `3,029,815`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `681`ns (316%)                           | `1,467,710`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,011`ns (468%)                         | `989,526`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,190`ns (551%)                         | `840,607`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,338`ns (620%)                         | `747,647`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,781`ns (1289%)                        | `359,573`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,757`ns (2204%)                        | `210,238`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `10,226`ns (4739%)                       | `97,795`/sec                             |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `673`ns (100%)                           | `1,485,813`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `741`ns (110%)                           | `1,348,887`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `800`ns (119%)                           | `1,250,493`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `324`ns (100%)                           | `3,090,646`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `662`ns (205%)                           | `1,511,269`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
