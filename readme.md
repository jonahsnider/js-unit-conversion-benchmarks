# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Sun, 25 Jul 2021 03:19:18 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az198-120 (Linux-x64 Intel(R) Xeon(R) Platinum 8171M CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `212`ns (100%)                           | `4,709,209`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `392`ns (185%)                           | `2,549,886`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `607`ns (286%)                           | `1,647,391`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,149`ns (541%)                         | `870,426`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,242`ns (585%)                         | `805,259`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,451`ns (2096%)                        | `224,693`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `210`ns (100%)                           | `4,761,632`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `326`ns (155%)                           | `3,069,210`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,124`ns (535%)                         | `889,740`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,171`ns (557%)                         | `854,243`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,037`ns (2875%)                        | `165,648`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,118`ns (2913%)                        | `163,442`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `213`ns (100%)                           | `4,692,790`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `338`ns (159%)                           | `2,954,353`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `604`ns (284%)                           | `1,655,056`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `840`ns (394%)                           | `1,190,304`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,094`ns (513%)                         | `913,884`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,232`ns (578%)                         | `812,002`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,882`ns (883%)                         | `531,316`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,493`ns (2108%)                        | `222,571`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,551`ns (4482%)                        | `104,704`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `620`ns (100%)                           | `1,611,646`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `657`ns (106%)                           | `1,522,432`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `725`ns (117%)                           | `1,379,733`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `312`ns (100%)                           | `3,201,058`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `657`ns (210%)                           | `1,522,841`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
