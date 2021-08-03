# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 03 Aug 2021 04:58:59 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az154-625 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `169`ns (100%)                           | `5,915,404`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `326`ns (193%)                           | `3,064,615`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `486`ns (288%)                           | `2,056,042`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `917`ns (542%)                           | `1,090,510`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,057`ns (625%)                         | `946,516`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,718`ns (2199%)                        | `268,944`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `169`ns (100%)                           | `5,901,117`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `273`ns (161%)                           | `3,668,744`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `936`ns (553%)                           | `1,068,073`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `939`ns (554%)                           | `1,065,223`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,908`ns (2896%)                        | `203,743`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,929`ns (2909%)                        | `202,880`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `173`ns (100%)                           | `5,780,969`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `267`ns (154%)                           | `3,747,259`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `515`ns (298%)                           | `1,940,571`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `729`ns (421%)                           | `1,372,269`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `909`ns (526%)                           | `1,099,505`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,041`ns (602%)                         | `960,272`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,542`ns (891%)                         | `648,545`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,766`ns (2177%)                        | `265,510`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,665`ns (4431%)                        | `130,457`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `528`ns (100%)                           | `1,893,833`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `531`ns (101%)                           | `1,883,069`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `591`ns (112%)                           | `1,691,490`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `271`ns (100%)                           | `3,688,902`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `528`ns (195%)                           | `1,892,921`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
