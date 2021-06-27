# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 27 Jun 2021 01:43:09 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-524 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `224`ns (100%)                           | `4,465,286`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `339`ns (152%)                           | `2,946,422`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `547`ns (244%)                           | `1,826,876`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,071`ns (478%)                         | `933,829`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,160`ns (518%)                         | `861,830`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,042`ns (1805%)                        | `247,391`/sec                            |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `206`ns (100%)                           | `4,851,676`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `294`ns (142%)                           | `3,404,737`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,035`ns (502%)                         | `966,272`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,100`ns (533%)                         | `909,422`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,380`ns (2610%)                        | `185,869`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,714`ns (2772%)                        | `175,020`/sec                            |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `209`ns (100%)                           | `4,778,346`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `293`ns (140%)                           | `3,409,335`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `564`ns (269%)                           | `1,773,107`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `886`ns (424%)                           | `1,128,110`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,056`ns (504%)                         | `947,404`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,127`ns (538%)                         | `887,601`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,216`ns (1059%)                        | `451,173`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,302`ns (2056%)                        | `232,436`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,809`ns (4209%)                        | `113,523`/sec                            |

### Parse a duration string and normalize it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `662`ns (100%)                           | `1,509,616`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `671`ns (101%)                           | `1,489,920`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `723`ns (109%)                           | `1,383,490`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `357`ns (100%)                           | `2,804,565`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `549`ns (154%)                           | `1,820,441`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
