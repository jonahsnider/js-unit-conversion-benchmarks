# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 30 Sep 2021 03:00:21 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-990 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `721`ns (100%)                           | `1,386,614`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `47,380`ns (6570%)                       | `21,106`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `81,840`ns (11348%)                      | `12,219`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `214`ns (100%)                           | `4,664,443`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `364`ns (170%)                           | `2,749,197`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `612`ns (286%)                           | `1,633,287`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,070`ns (499%)                         | `934,775`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,180`ns (551%)                         | `847,185`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,659`ns (2173%)                        | `214,650`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `226`ns (100%)                           | `4,418,118`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `362`ns (160%)                           | `2,758,834`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,104`ns (488%)                         | `905,483`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,245`ns (550%)                         | `803,327`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,420`ns (2395%)                        | `184,487`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,613`ns (2922%)                        | `151,226`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `235`ns (100%)                           | `4,250,314`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `352`ns (149%)                           | `2,844,936`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `602`ns (256%)                           | `1,661,604`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `906`ns (385%)                           | `1,103,802`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,067`ns (454%)                         | `937,003`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,318`ns (560%)                         | `758,520`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,992`ns (847%)                         | `502,040`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,497`ns (1911%)                        | `222,385`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,953`ns (3805%)                        | `111,691`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `616`ns (100%)                           | `1,624,467`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `741`ns (120%)                           | `1,349,355`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `857`ns (139%)                           | `1,167,193`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `325`ns (100%)                           | `3,077,442`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `685`ns (211%)                           | `1,460,176`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
