# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 08 Sep 2021 04:56:58 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-491 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `236`ns (100%)                           | `4,242,306`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `442`ns (188%)                           | `2,262,432`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `663`ns (281%)                           | `1,509,262`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,466`ns (622%)                         | `682,045`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,731`ns (734%)                         | `577,816`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,416`ns (2298%)                        | `184,632`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `245`ns (100%)                           | `4,080,333`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `411`ns (168%)                           | `2,434,167`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,235`ns (504%)                         | `809,798`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,329`ns (542%)                         | `752,284`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,226`ns (2540%)                        | `160,625`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,858`ns (2798%)                        | `145,806`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `239`ns (100%)                           | `4,179,711`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `398`ns (166%)                           | `2,514,349`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `649`ns (271%)                           | `1,540,154`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,008`ns (421%)                         | `991,709`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,268`ns (530%)                         | `788,822`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,474`ns (616%)                         | `678,336`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,235`ns (934%)                         | `447,423`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,466`ns (2285%)                        | `182,937`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `10,391`ns (4343%)                       | `96,237`/sec                             |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `688`ns (100%)                           | `1,453,121`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `826`ns (120%)                           | `1,210,452`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `871`ns (127%)                           | `1,147,672`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `364`ns (100%)                           | `2,748,096`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `777`ns (214%)                           | `1,286,276`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
