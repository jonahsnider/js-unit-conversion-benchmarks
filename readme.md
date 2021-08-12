# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 12 Aug 2021 05:25:01 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az219-211 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `174`ns (100%)                           | `5,750,264`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `327`ns (188%)                           | `3,062,402`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `587`ns (337%)                           | `1,704,872`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,016`ns (584%)                         | `984,589`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,061`ns (610%)                         | `942,140`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,212`ns (2422%)                        | `237,438`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `176`ns (100%)                           | `5,675,279`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `272`ns (154%)                           | `3,675,215`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,130`ns (641%)                         | `885,276`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,301`ns (738%)                         | `768,529`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,113`ns (2902%)                        | `195,594`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,619`ns (3189%)                        | `177,958`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `179`ns (100%)                           | `5,595,032`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `296`ns (166%)                           | `3,375,223`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `600`ns (336%)                           | `1,665,641`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `890`ns (498%)                           | `1,123,058`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `977`ns (547%)                           | `1,023,364`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,114`ns (623%)                         | `898,022`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,601`ns (896%)                         | `624,509`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,412`ns (2469%)                        | `226,643`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,053`ns (4505%)                        | `124,183`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `527`ns (100%)                           | `1,895,738`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `575`ns (109%)                           | `1,739,573`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `610`ns (116%)                           | `1,639,983`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `283`ns (100%)                           | `3,534,910`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `607`ns (215%)                           | `1,646,255`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
