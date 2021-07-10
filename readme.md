# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 10 Jul 2021 08:25:05 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-378 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `231`ns (100%)                           | `4,336,915`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `399`ns (173%)                           | `2,508,349`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `641`ns (278%)                           | `1,559,445`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,236`ns (536%)                         | `809,229`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,249`ns (542%)                         | `800,414`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,885`ns (2118%)                        | `204,723`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `225`ns (100%)                           | `4,448,802`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `380`ns (169%)                           | `2,628,914`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,239`ns (551%)                         | `806,957`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,362`ns (606%)                         | `734,364`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,736`ns (2997%)                        | `148,448`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,646`ns (3402%)                        | `130,788`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `234`ns (100%)                           | `4,272,798`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `364`ns (156%)                           | `2,747,281`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `629`ns (269%)                           | `1,590,068`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `962`ns (411%)                           | `1,039,995`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,232`ns (527%)                         | `811,534`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,428`ns (610%)                         | `700,064`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,844`ns (1215%)                        | `351,580`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,019`ns (2145%)                        | `199,241`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `10,633`ns (4543%)                       | `94,051`/sec                             |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `648`ns (100%)                           | `1,542,697`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `744`ns (115%)                           | `1,343,975`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `817`ns (126%)                           | `1,223,508`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `382`ns (100%)                           | `2,614,839`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `684`ns (179%)                           | `1,462,462`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
