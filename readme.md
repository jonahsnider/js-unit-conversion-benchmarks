# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 06 Oct 2021 02:19:59 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az397-816 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `553`ns (100%)                           | `1,809,577`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `28,607`ns (5177%)                       | `34,956`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `61,821`ns (11187%)                      | `16,176`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `160`ns (100%)                           | `6,250,539`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `322`ns (201%)                           | `3,107,061`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `415`ns (260%)                           | `2,406,919`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `838`ns (524%)                           | `1,193,013`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `893`ns (558%)                           | `1,119,590`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,348`ns (2093%)                        | `298,695`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `165`ns (100%)                           | `6,057,337`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (206%)                           | `2,940,694`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `828`ns (502%)                           | `1,207,775`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `862`ns (522%)                           | `1,159,524`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,379`ns (2652%)                        | `228,364`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,727`ns (2863%)                        | `211,551`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `171`ns (100%)                           | `5,846,644`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `287`ns (168%)                           | `3,478,296`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `414`ns (242%)                           | `2,415,238`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `643`ns (376%)                           | `1,555,182`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `799`ns (467%)                           | `1,252,104`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `955`ns (558%)                           | `1,047,113`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,436`ns (840%)                         | `696,142`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,346`ns (1956%)                        | `298,867`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,829`ns (3993%)                        | `146,428`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `489`ns (100%)                           | `2,043,393`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `503`ns (103%)                           | `1,989,632`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `531`ns (109%)                           | `1,881,813`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `245`ns (100%)                           | `4,084,472`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `443`ns (181%)                           | `2,259,263`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
