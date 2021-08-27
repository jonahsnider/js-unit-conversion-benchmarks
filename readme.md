# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 27 Aug 2021 22:01:22 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az201-808 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `199`ns (100%)                           | `5,025,077`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `409`ns (206%)                           | `2,443,737`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `561`ns (282%)                           | `1,782,219`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,022`ns (513%)                         | `978,706`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,425`ns (716%)                         | `701,594`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,465`ns (2244%)                        | `223,948`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `199`ns (100%)                           | `5,032,691`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `365`ns (183%)                           | `2,743,228`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,051`ns (529%)                         | `951,735`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,082`ns (544%)                         | `924,461`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,117`ns (3078%)                        | `163,489`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,196`ns (3118%)                        | `161,399`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `199`ns (100%)                           | `5,025,268`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `345`ns (174%)                           | `2,895,207`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `527`ns (265%)                           | `1,898,407`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `817`ns (411%)                           | `1,223,548`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,035`ns (520%)                         | `965,799`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,249`ns (628%)                         | `800,438`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,158`ns (1084%)                        | `463,379`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,653`ns (2338%)                        | `214,933`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,351`ns (4699%)                        | `106,940`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [ms](https://npmjs.com/package/ms) (popular)              | `657`ns (100%)                           | `1,522,197`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `659`ns (100%)                           | `1,516,460`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `736`ns (112%)                           | `1,359,447`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `291`ns (100%)                           | `3,430,578`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `676`ns (232%)                           | `1,478,637`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
