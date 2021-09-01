# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 01 Sep 2021 02:03:04 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-277 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `213`ns (100%)                           | `4,701,977`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `414`ns (195%)                           | `2,413,663`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `529`ns (249%)                           | `1,889,435`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,070`ns (503%)                         | `934,650`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,389`ns (653%)                         | `719,899`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,627`ns (2176%)                        | `216,127`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `215`ns (100%)                           | `4,656,083`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `356`ns (166%)                           | `2,809,651`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,041`ns (485%)                         | `960,765`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,063`ns (495%)                         | `940,347`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,873`ns (2735%)                        | `170,261`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,987`ns (2788%)                        | `167,026`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `226`ns (100%)                           | `4,425,234`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `348`ns (154%)                           | `2,876,725`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `550`ns (243%)                           | `1,817,963`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `822`ns (364%)                           | `1,216,627`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,041`ns (461%)                         | `960,753`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,214`ns (537%)                         | `823,576`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,008`ns (889%)                         | `498,051`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,565`ns (2020%)                        | `219,043`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,069`ns (4013%)                        | `110,268`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `643`ns (100%)                           | `1,555,585`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `697`ns (108%)                           | `1,435,079`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `706`ns (110%)                           | `1,415,950`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `335`ns (100%)                           | `2,983,150`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `685`ns (204%)                           | `1,458,993`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
