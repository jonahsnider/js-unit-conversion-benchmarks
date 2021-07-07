# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Wed, 07 Jul 2021 01:39:00 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az212-186 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `174`ns (100%)                           | `5,748,401`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `332`ns (191%)                           | `3,012,442`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `468`ns (269%)                           | `2,134,788`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `893`ns (513%)                           | `1,120,248`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,042`ns (599%)                         | `960,034`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,810`ns (2190%)                        | `262,496`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `175`ns (100%)                           | `5,704,967`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `260`ns (148%)                           | `3,846,161`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `917`ns (523%)                           | `1,089,922`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,057`ns (603%)                         | `946,004`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,770`ns (2721%)                        | `209,656`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,945`ns (2821%)                        | `202,235`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `177`ns (100%)                           | `5,657,627`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `279`ns (158%)                           | `3,584,316`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `469`ns (265%)                           | `2,132,342`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `814`ns (461%)                           | `1,228,179`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `872`ns (493%)                           | `1,146,732`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,000`ns (566%)                         | `1,000,060`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,885`ns (1067%)                        | `530,473`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,832`ns (2168%)                        | `260,984`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,497`ns (4241%)                        | `133,394`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `495`ns (100%)                           | `2,021,333`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `568`ns (115%)                           | `1,759,391`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `611`ns (124%)                           | `1,636,148`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `270`ns (100%)                           | `3,708,945`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `544`ns (202%)                           | `1,838,046`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
