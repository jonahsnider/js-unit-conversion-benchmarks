# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 19 Aug 2021 02:30:27 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-178 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `202`ns (100%)                           | `4,961,689`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `404`ns (200%)                           | `2,476,634`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `542`ns (269%)                           | `1,843,769`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,078`ns (535%)                         | `927,237`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,218`ns (604%)                         | `820,884`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,551`ns (2258%)                        | `219,713`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `204`ns (100%)                           | `4,894,279`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `293`ns (144%)                           | `3,408,294`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,054`ns (516%)                         | `948,811`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,250`ns (612%)                         | `799,758`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,753`ns (2816%)                        | `173,818`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,238`ns (3053%)                        | `160,310`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `200`ns (100%)                           | `4,999,346`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `312`ns (156%)                           | `3,209,034`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `513`ns (257%)                           | `1,947,462`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `939`ns (469%)                           | `1,065,303`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,092`ns (546%)                         | `916,097`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,191`ns (595%)                         | `839,698`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,042`ns (1021%)                        | `489,704`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,690`ns (2345%)                        | `213,197`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,023`ns (4511%)                        | `110,823`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `627`ns (100%)                           | `1,593,910`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `643`ns (103%)                           | `1,554,287`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `704`ns (112%)                           | `1,419,881`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `334`ns (100%)                           | `2,994,610`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `643`ns (193%)                           | `1,555,189`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
