# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 07 Jul 2021 02:31:08 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-680 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `173`ns (100%)                           | `5,793,595`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `347`ns (201%)                           | `2,883,496`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `451`ns (262%)                           | `2,215,335`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `894`ns (518%)                           | `1,118,965`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `995`ns (577%)                           | `1,004,671`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,875`ns (2245%)                        | `258,085`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `179`ns (100%)                           | `5,598,168`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `261`ns (146%)                           | `3,830,970`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `907`ns (508%)                           | `1,102,301`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,041`ns (583%)                         | `960,497`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,875`ns (2729%)                        | `205,141`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,022`ns (2812%)                        | `199,117`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `175`ns (100%)                           | `5,708,440`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `328`ns (188%)                           | `3,044,164`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `524`ns (299%)                           | `1,908,866`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `777`ns (444%)                           | `1,286,897`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `945`ns (540%)                           | `1,057,738`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,034`ns (590%)                         | `966,800`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,904`ns (1087%)                        | `525,185`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,991`ns (2278%)                        | `250,557`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,617`ns (4348%)                        | `131,286`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `554`ns (100%)                           | `1,805,916`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `562`ns (101%)                           | `1,779,784`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `600`ns (108%)                           | `1,667,156`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `260`ns (100%)                           | `3,841,916`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `549`ns (211%)                           | `1,820,073`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
