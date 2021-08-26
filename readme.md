# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 26 Aug 2021 06:46:36 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-620 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `207`ns (100%)                           | `4,827,006`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `403`ns (194%)                           | `2,483,415`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `542`ns (262%)                           | `1,845,421`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,255`ns (606%)                         | `796,848`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,401`ns (676%)                         | `713,761`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,452`ns (2149%)                        | `224,621`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `203`ns (100%)                           | `4,916,523`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `357`ns (175%)                           | `2,803,083`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,073`ns (527%)                         | `932,055`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,261`ns (620%)                         | `792,752`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,870`ns (2886%)                        | `170,354`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,914`ns (2907%)                        | `169,103`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `209`ns (100%)                           | `4,781,355`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `351`ns (168%)                           | `2,852,067`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `520`ns (249%)                           | `1,922,110`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `819`ns (392%)                           | `1,220,336`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,232`ns (589%)                         | `811,838`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,252`ns (598%)                         | `799,035`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,055`ns (983%)                         | `486,604`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,805`ns (2297%)                        | `208,119`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,024`ns (4315%)                        | `110,811`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `637`ns (100%)                           | `1,569,931`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `674`ns (106%)                           | `1,483,612`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `730`ns (115%)                           | `1,369,014`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `300`ns (100%)                           | `3,332,061`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `685`ns (228%)                           | `1,460,677`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
