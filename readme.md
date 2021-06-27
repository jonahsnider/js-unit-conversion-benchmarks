# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 27 Jun 2021 13:26:48 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-578 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `197`ns (100%)                           | `5,083,071`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `361`ns (183%)                           | `2,772,598`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `519`ns (264%)                           | `1,925,976`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,030`ns (524%)                         | `970,486`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,030`ns (524%)                         | `970,410`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,200`ns (2135%)                        | `238,081`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `208`ns (100%)                           | `4,810,536`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `271`ns (130%)                           | `3,695,393`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `971`ns (467%)                           | `1,029,589`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,075`ns (517%)                         | `930,180`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,240`ns (2521%)                        | `190,837`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,499`ns (2645%)                        | `181,862`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `203`ns (100%)                           | `4,925,544`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `281`ns (138%)                           | `3,558,130`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `505`ns (249%)                           | `1,979,493`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `769`ns (379%)                           | `1,299,844`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,003`ns (494%)                         | `997,373`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,132`ns (557%)                         | `883,708`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,103`ns (1036%)                        | `475,435`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,096`ns (2018%)                        | `244,133`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,477`ns (4176%)                        | `117,961`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `587`ns (100%)                           | `1,703,436`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `627`ns (107%)                           | `1,594,806`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `657`ns (112%)                           | `1,521,485`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `299`ns (100%)                           | `3,347,674`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `565`ns (189%)                           | `1,769,842`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
