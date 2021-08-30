# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Mon, 30 Aug 2021 03:23:44 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-741 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `211`ns (100%)                           | `4,746,696`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `422`ns (201%)                           | `2,367,095`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `623`ns (296%)                           | `1,604,454`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,232`ns (585%)                         | `811,927`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,634`ns (776%)                         | `612,058`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,429`ns (2577%)                        | `184,208`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `218`ns (100%)                           | `4,588,068`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `400`ns (184%)                           | `2,497,753`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,230`ns (565%)                         | `812,706`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,599`ns (734%)                         | `625,262`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `5,977`ns (2742%)                        | `167,320`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,684`ns (3067%)                        | `149,608`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `219`ns (100%)                           | `4,559,704`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `459`ns (209%)                           | `2,178,202`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `608`ns (277%)                           | `1,643,927`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `935`ns (427%)                           | `1,069,067`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,101`ns (502%)                         | `908,350`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,653`ns (754%)                         | `605,042`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,962`ns (894%)                         | `509,750`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,103`ns (2327%)                        | `195,945`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,090`ns (4145%)                        | `110,014`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `648`ns (100%)                           | `1,543,049`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `734`ns (113%)                           | `1,363,289`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `1,031`ns (159%)                         | `969,847`/sec                            |

### Convert 24 hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `373`ns (100%)                           | `2,678,433`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `866`ns (232%)                           | `1,154,495`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
