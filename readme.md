# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 13 Sep 2021 06:07:00 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-543 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `173`ns (100%)                           | `5,781,700`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `316`ns (183%)                           | `3,160,297`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `571`ns (330%)                           | `1,751,703`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `978`ns (566%)                           | `1,022,391`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,089`ns (630%)                         | `918,169`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,874`ns (2240%)                        | `258,120`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `176`ns (100%)                           | `5,694,774`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `258`ns (147%)                           | `3,870,637`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,020`ns (581%)                         | `980,682`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,063`ns (605%)                         | `941,028`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,705`ns (2680%)                        | `212,521`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,880`ns (2779%)                        | `204,904`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `182`ns (100%)                           | `5,485,779`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `257`ns (141%)                           | `3,886,637`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `513`ns (281%)                           | `1,950,253`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `729`ns (400%)                           | `1,371,979`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,015`ns (557%)                         | `985,401`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,095`ns (601%)                         | `913,327`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,830`ns (1004%)                        | `546,358`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,896`ns (2137%)                        | `256,660`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,619`ns (4180%)                        | `131,247`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `523`ns (100%)                           | `1,911,673`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `536`ns (102%)                           | `1,865,918`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `643`ns (123%)                           | `1,554,564`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `283`ns (100%)                           | `3,534,329`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `560`ns (198%)                           | `1,784,970`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
