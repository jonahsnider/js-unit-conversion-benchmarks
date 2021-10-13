# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 13 Oct 2021 04:22:46 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az212-309 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `739`ns (100%)                           | `1,352,458`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `47,137`ns (6375%)                       | `21,215`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `86,517`ns (11701%)                      | `11,558`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `199`ns (100%)                           | `5,034,996`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `338`ns (170%)                           | `2,960,978`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `579`ns (292%)                           | `1,726,974`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,159`ns (583%)                         | `863,029`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,216`ns (612%)                         | `822,218`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,630`ns (2331%)                        | `216,004`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `202`ns (100%)                           | `4,962,760`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (170%)                           | `2,922,701`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,110`ns (551%)                         | `900,946`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,195`ns (593%)                         | `836,562`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,428`ns (2694%)                        | `184,229`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,493`ns (3222%)                        | `154,016`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `206`ns (100%)                           | `4,849,455`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `358`ns (174%)                           | `2,790,831`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `595`ns (288%)                           | `1,680,925`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `859`ns (417%)                           | `1,163,818`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,066`ns (517%)                         | `938,260`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,322`ns (641%)                         | `756,216`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,957`ns (949%)                         | `510,986`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,803`ns (2329%)                        | `208,189`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,961`ns (4346%)                        | `111,592`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `647`ns (100%)                           | `1,544,496`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `678`ns (105%)                           | `1,474,437`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `743`ns (115%)                           | `1,346,238`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `318`ns (100%)                           | `3,144,920`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `625`ns (196%)                           | `1,600,491`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
