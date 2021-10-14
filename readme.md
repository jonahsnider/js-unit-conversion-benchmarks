# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 14 Oct 2021 00:41:00 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az219-668 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v4 @ 2.30GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included when relevant.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 8192 bytes to the best applicable unit

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| [convert](https://npmjs.com/package/convert) (fast)                | `818`ns (100%)                           | `1,222,204`/sec                          |
| [byte-size](https://npmjs.com/package/byte-size) (popular)         | `51,511`ns (6296%)                       | `19,413`/sec                             |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `91,411`ns (11172%)                      | `10,940`/sec                             |

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `242`ns (100%)                           | `4,138,811`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `405`ns (168%)                           | `2,469,267`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `668`ns (276%)                           | `1,498,024`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,296`ns (537%)                         | `771,431`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,311`ns (543%)                         | `762,550`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,339`ns (2210%)                        | `187,299`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `243`ns (100%)                           | `4,112,821`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `446`ns (183%)                           | `2,241,539`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,310`ns (539%)                         | `763,364`/sec                            |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,368`ns (563%)                         | `730,996`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,169`ns (2537%)                        | `162,103`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `7,026`ns (2890%)                        | `142,320`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `238`ns (100%)                           | `4,206,059`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `405`ns (170%)                           | `2,468,688`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `718`ns (302%)                           | `1,393,530`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,046`ns (440%)                         | `956,377`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,164`ns (490%)                         | `859,210`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,571`ns (661%)                         | `636,621`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,308`ns (971%)                         | `433,361`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,819`ns (2027%)                        | `207,529`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,000`ns (3785%)                        | `111,113`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `645`ns (100%)                           | `1,550,863`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `815`ns (126%)                           | `1,227,352`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `896`ns (139%)                           | `1,116,588`/sec                          |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `355`ns (100%)                           | `2,814,158`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `617`ns (174%)                           | `1,620,030`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
