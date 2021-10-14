# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 14 Oct 2021 07:44:46 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az219-668 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 10,000 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `722`ns (100%)                           | `1,385,779`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `49,464`ns (6855%)                       | `20,217`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `88,104`ns (12209%)                      | `11,350`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `217`ns (100%)                           | `4,608,994`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `351`ns (162%)                           | `2,849,101`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `364`ns (168%)                           | `2,747,628`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `511`ns (235%)                           | `1,957,707`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `987`ns (455%)                           | `1,013,280`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,047`ns (483%)                         | `955,100`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,854`ns (2237%)                        | `206,035`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `218`ns (100%)                           | `4,593,957`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `344`ns (158%)                           | `2,903,896`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `369`ns (169%)                           | `2,712,147`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,189`ns (546%)                         | `841,195`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,325`ns (609%)                         | `754,749`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,951`ns (2734%)                        | `168,044`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,453`ns (2964%)                        | `154,967`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `217`ns (100%)                           | `4,608,289`/sec                          |
| [simple-units](https://npmjs.com/package/simple-units) (fast)      | `331`ns (153%)                           | `3,017,557`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `340`ns (157%)                           | `2,943,252`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `677`ns (312%)                           | `1,476,639`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `930`ns (429%)                           | `1,075,229`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `936`ns (431%)                           | `1,068,913`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,326`ns (611%)                         | `753,889`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,504`ns (1154%)                        | `399,431`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,881`ns (2249%)                        | `204,878`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,052`ns (4172%)                        | `110,468`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `642`ns (100%)                           | `1,557,901`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `698`ns (109%)                           | `1,433,661`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `728`ns (113%)                           | `1,373,717`/sec                          |

### Convert 24 hours to minutes, but with `bigint`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `433`ns (100%)                           | `2,310,683`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `707`ns (163%)                           | `1,414,808`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
