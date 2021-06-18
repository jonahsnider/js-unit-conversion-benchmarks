# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 18 Jun 2021 21:57:07 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-28 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `217`ns (100%)                           | `4,601,447`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `371`ns (171%)                           | `2,692,664`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `586`ns (270%)                           | `1,705,898`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,061`ns (488%)                         | `942,659`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,138`ns (524%)                         | `878,831`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,242`ns (1952%)                        | `235,745`/sec                            |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `229`ns (100%)                           | `4,368,220`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `339`ns (148%)                           | `2,949,702`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,081`ns (472%)                         | `925,303`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,132`ns (495%)                         | `883,196`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,752`ns (2513%)                        | `173,842`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,768`ns (2520%)                        | `173,376`/sec                            |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `221`ns (100%)                           | `4,514,973`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `337`ns (152%)                           | `2,968,739`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `555`ns (250%)                           | `1,803,276`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `884`ns (399%)                           | `1,131,019`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,086`ns (490%)                         | `920,650`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,196`ns (540%)                         | `835,935`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,176`ns (982%)                         | `459,547`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,493`ns (2028%)                        | `222,580`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,045`ns (4084%)                        | `110,556`/sec                            |

### Parse a duration string and normalize it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `679`ns (100%)                           | `1,472,456`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `713`ns (105%)                           | `1,403,472`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `729`ns (107%)                           | `1,371,978`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `341`ns (100%)                           | `2,935,473`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `634`ns (186%)                           | `1,576,570`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
