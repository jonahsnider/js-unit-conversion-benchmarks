# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 13 Oct 2021 02:22:44 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-724 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `836`ns (100%)                           | `1,195,669`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `52,418`ns (6267%)                       | `19,077`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `91,396`ns (10928%)                      | `10,941`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `236`ns (100%)                           | `4,235,405`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `431`ns (182%)                           | `2,321,305`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `672`ns (284%)                           | `1,488,918`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,213`ns (514%)                         | `824,724`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,379`ns (584%)                         | `725,060`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,013`ns (2123%)                        | `199,472`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `249`ns (100%)                           | `4,009,893`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `430`ns (172%)                           | `2,326,072`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,305`ns (523%)                         | `766,264`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,666`ns (668%)                         | `600,267`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,167`ns (2473%)                        | `162,158`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `8,176`ns (3279%)                        | `122,307`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `239`ns (100%)                           | `4,191,569`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `403`ns (169%)                           | `2,484,469`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `710`ns (298%)                           | `1,408,084`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,015`ns (425%)                         | `985,352`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,188`ns (498%)                         | `841,996`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,360`ns (570%)                         | `735,359`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,061`ns (864%)                         | `485,123`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,097`ns (2136%)                        | `196,193`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,728`ns (4078%)                        | `102,797`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `723`ns (100%)                           | `1,383,680`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `822`ns (114%)                           | `1,216,204`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `828`ns (115%)                           | `1,208,273`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `376`ns (100%)                           | `2,660,481`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `579`ns (154%)                           | `1,728,262`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
