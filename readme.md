# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Fri, 17 Sep 2021 03:04:11 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az290-487 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `333`ns (100%)                           | `2,998,913`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `559`ns (168%)                           | `1,787,355`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `988`ns (296%)                           | `1,011,719`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,356`ns (407%)                         | `737,558`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,685`ns (505%)                         | `593,508`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,851`ns (1755%)                        | `170,899`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `285`ns (100%)                           | `3,504,999`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `388`ns (136%)                           | `2,576,293`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,452`ns (509%)                         | `688,702`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,572`ns (551%)                         | `635,981`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,623`ns (2321%)                        | `150,988`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,113`ns (2493%)                        | `140,587`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `305`ns (100%)                           | `3,275,338`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `429`ns (140%)                           | `2,333,462`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `759`ns (248%)                           | `1,318,082`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,149`ns (376%)                         | `870,560`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,447`ns (474%)                         | `691,049`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,538`ns (504%)                         | `650,125`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,261`ns (740%)                         | `442,371`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,320`ns (2070%)                        | `158,238`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `10,878`ns (3563%)                       | `91,928`/sec                             |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `779`ns (100%)                           | `1,283,924`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `858`ns (110%)                           | `1,165,530`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `1,088`ns (140%)                         | `919,191`/sec                            |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `465`ns (100%)                           | `2,151,497`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `687`ns (148%)                           | `1,455,138`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
