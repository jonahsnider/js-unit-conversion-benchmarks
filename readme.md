# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sat, 10 Jul 2021 08:26:31 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-906 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `301`ns (100%)                           | `3,323,680`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `394`ns (131%)                           | `2,535,531`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `573`ns (191%)                           | `1,744,591`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,064`ns (354%)                         | `940,013`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,125`ns (374%)                         | `888,644`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,584`ns (1523%)                        | `218,174`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `206`ns (100%)                           | `4,865,575`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `304`ns (148%)                           | `3,287,383`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,072`ns (522%)                         | `932,802`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,182`ns (575%)                         | `846,150`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,628`ns (2738%)                        | `177,689`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,782`ns (2813%)                        | `172,956`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `211`ns (100%)                           | `4,731,041`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `326`ns (154%)                           | `3,070,702`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `550`ns (260%)                           | `1,817,368`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `853`ns (404%)                           | `1,172,027`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,100`ns (520%)                         | `909,129`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,179`ns (558%)                         | `847,905`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,228`ns (1054%)                        | `448,810`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,355`ns (2060%)                        | `229,608`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,017`ns (4266%)                        | `110,900`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)       | `652`ns (100%)                           | `1,533,264`/sec                          |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `667`ns (102%)                           | `1,498,317`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `743`ns (114%)                           | `1,346,183`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `320`ns (100%)                           | `3,122,158`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `647`ns (202%)                           | `1,546,421`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
