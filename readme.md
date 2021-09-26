# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 26 Sep 2021 02:35:13 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-118 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `690`ns (100%)                           | `1,448,710`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `37,833`ns (5481%)                       | `26,432`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,923`ns (11868%)                      | `12,207`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `227`ns (100%)                           | `4,414,802`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `391`ns (173%)                           | `2,558,450`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `569`ns (251%)                           | `1,757,197`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,086`ns (480%)                         | `920,401`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,140`ns (503%)                         | `877,042`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,302`ns (1899%)                        | `232,443`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `238`ns (100%)                           | `4,194,052`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (155%)                           | `2,698,253`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,090`ns (457%)                         | `917,773`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,329`ns (557%)                         | `752,601`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,670`ns (2378%)                        | `176,360`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,844`ns (2451%)                        | `171,113`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `238`ns (100%)                           | `4,199,876`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `372`ns (156%)                           | `2,686,459`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `607`ns (255%)                           | `1,647,526`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `854`ns (359%)                           | `1,171,239`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,159`ns (487%)                         | `862,932`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,227`ns (515%)                         | `814,726`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,062`ns (866%)                         | `484,932`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,356`ns (1829%)                        | `229,575`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,051`ns (3801%)                        | `110,486`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `608`ns (100%)                           | `1,644,633`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `672`ns (110%)                           | `1,488,590`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `741`ns (122%)                           | `1,348,658`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `326`ns (100%)                           | `3,066,813`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `592`ns (182%)                           | `1,688,508`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
