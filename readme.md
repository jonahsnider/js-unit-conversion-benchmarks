# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Tue, 05 Oct 2021 01:27:27 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az204-242 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `767`ns (100%)                           | `1,304,527`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `51,562`ns (6726%)                       | `19,394`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `83,868`ns (10941%)                      | `11,924`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `222`ns (100%)                           | `4,495,964`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `399`ns (179%)                           | `2,508,575`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `598`ns (269%)                           | `1,673,386`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,177`ns (529%)                         | `849,672`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,242`ns (559%)                         | `804,948`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,306`ns (2386%)                        | `188,463`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `240`ns (100%)                           | `4,171,802`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `402`ns (168%)                           | `2,489,608`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,145`ns (478%)                         | `873,592`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,346`ns (561%)                         | `743,130`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,683`ns (2371%)                        | `175,954`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,371`ns (3075%)                        | `135,660`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `215`ns (100%)                           | `4,652,517`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `389`ns (181%)                           | `2,568,616`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `660`ns (307%)                           | `1,516,128`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,065`ns (496%)                         | `938,894`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,172`ns (545%)                         | `853,374`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,457`ns (678%)                         | `686,146`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,080`ns (968%)                         | `480,663`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,984`ns (2319%)                        | `200,632`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `8,809`ns (4098%)                        | `113,526`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `644`ns (100%)                           | `1,553,722`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `718`ns (112%)                           | `1,392,175`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `784`ns (122%)                           | `1,275,982`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `352`ns (100%)                           | `2,843,392`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `611`ns (174%)                           | `1,636,524`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
