# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 27 Aug 2021 02:38:53 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-526 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `216`ns (100%)                           | `4,639,191`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `442`ns (205%)                           | `2,263,187`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `702`ns (326%)                           | `1,425,245`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,214`ns (563%)                         | `823,441`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,429`ns (663%)                         | `699,576`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,081`ns (2357%)                        | `196,817`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `207`ns (100%)                           | `4,824,559`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `357`ns (172%)                           | `2,801,910`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,211`ns (584%)                         | `825,526`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,274`ns (615%)                         | `784,722`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,335`ns (3056%)                        | `157,853`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,372`ns (3074%)                        | `156,944`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `215`ns (100%)                           | `4,644,623`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (186%)                           | `2,500,467`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `660`ns (307%)                           | `1,515,153`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,057`ns (491%)                         | `945,806`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,145`ns (532%)                         | `873,094`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,468`ns (682%)                         | `681,212`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,102`ns (976%)                         | `475,839`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,332`ns (2477%)                        | `187,539`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,952`ns (4622%)                        | `100,487`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `679`ns (100%)                           | `1,472,341`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `745`ns (110%)                           | `1,342,729`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `762`ns (112%)                           | `1,312,521`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `360`ns (100%)                           | `2,779,664`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `688`ns (191%)                           | `1,453,746`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
