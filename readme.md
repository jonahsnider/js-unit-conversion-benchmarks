# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 18 Oct 2021 09:00:00 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-446 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `781`ns (100%)                           | `1,280,201`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `51,444`ns (6586%)                       | `19,439`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `89,803`ns (11497%)                      | `11,135`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `285`ns (100%)                           | `3,513,640`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `337`ns (118%)                           | `2,971,740`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `470`ns (165%)                           | `2,128,161`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `662`ns (232%)                           | `1,511,513`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,166`ns (410%)                         | `857,579`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,207`ns (424%)                         | `828,614`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,401`ns (1898%)                        | `185,161`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `265`ns (100%)                           | `3,778,088`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `373`ns (141%)                           | `2,683,482`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `415`ns (157%)                           | `2,407,481`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,227`ns (464%)                         | `814,934`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,536`ns (580%)                         | `651,206`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,347`ns (2398%)                        | `157,560`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,013`ns (2650%)                        | `142,595`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `282`ns (100%)                           | `3,540,861`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `375`ns (133%)                           | `2,669,561`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `442`ns (156%)                           | `2,263,990`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `848`ns (300%)                           | `1,178,568`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,139`ns (403%)                         | `877,762`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,589`ns (563%)                         | `629,420`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,781`ns (631%)                         | `561,544`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,413`ns (854%)                         | `414,459`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,355`ns (1896%)                        | `186,740`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,656`ns (3419%)                        | `103,558`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `845`ns (100%)                           | `1,183,162`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `900`ns (106%)                           | `1,111,359`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `1,003`ns (119%)                         | `996,584`/sec                            |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `457`ns (100%)                           | `2,186,800`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `884`ns (193%)                           | `1,130,916`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
