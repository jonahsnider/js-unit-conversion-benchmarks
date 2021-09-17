# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 17 Sep 2021 02:05:54 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-303 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `190`ns (100%)                           | `5,276,292`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `314`ns (165%)                           | `3,188,335`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `540`ns (285%)                           | `1,850,995`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `995`ns (525%)                           | `1,005,208`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,143`ns (603%)                         | `875,255`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,353`ns (2297%)                        | `229,720`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `189`ns (100%)                           | `5,284,489`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `281`ns (149%)                           | `3,555,580`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,161`ns (614%)                         | `861,076`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,210`ns (639%)                         | `826,355`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,656`ns (2461%)                        | `214,765`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,659`ns (2990%)                        | `176,716`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `195`ns (100%)                           | `5,126,893`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `285`ns (146%)                           | `3,505,459`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `506`ns (259%)                           | `1,976,538`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `904`ns (464%)                           | `1,106,004`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `964`ns (494%)                           | `1,037,635`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,211`ns (621%)                         | `825,967`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,835`ns (941%)                         | `544,985`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,672`ns (2395%)                        | `214,053`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,722`ns (3959%)                        | `129,501`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `543`ns (100%)                           | `1,843,302`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `615`ns (113%)                           | `1,626,756`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `711`ns (131%)                           | `1,405,915`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `296`ns (100%)                           | `3,382,183`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `575`ns (195%)                           | `1,737,807`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
