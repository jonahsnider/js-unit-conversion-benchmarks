# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 14 Oct 2021 03:56:20 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-311 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `524`ns (100%)                           | `1,909,749`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `31,945`ns (6101%)                       | `31,304`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `70,606`ns (13484%)                      | `14,163`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `173`ns (100%)                           | `5,783,012`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `266`ns (154%)                           | `3,756,704`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `313`ns (181%)                           | `3,193,316`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `392`ns (227%)                           | `2,548,243`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `784`ns (454%)                           | `1,275,013`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `817`ns (473%)                           | `1,223,515`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,382`ns (1956%)                        | `295,700`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `177`ns (100%)                           | `5,664,582`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `284`ns (161%)                           | `3,526,584`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `301`ns (170%)                           | `3,327,374`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `877`ns (497%)                           | `1,140,823`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `905`ns (513%)                           | `1,104,669`/sec                          |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,660`ns (2640%)                        | `214,592`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,885`ns (2767%)                        | `204,708`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `183`ns (100%)                           | `5,476,756`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `271`ns (148%)                           | `3,688,545`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `312`ns (171%)                           | `3,207,167`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `481`ns (264%)                           | `2,077,957`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `709`ns (388%)                           | `1,411,432`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `915`ns (501%)                           | `1,093,309`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,055`ns (578%)                         | `947,620`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,325`ns (726%)                         | `754,846`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,544`ns (1941%)                        | `282,204`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,954`ns (4356%)                        | `125,716`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `473`ns (100%)                           | `2,115,583`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `510`ns (108%)                           | `1,961,855`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `565`ns (119%)                           | `1,770,505`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `286`ns (100%)                           | `3,497,179`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `453`ns (158%)                           | `2,208,448`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
