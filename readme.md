# JavaScript unit conversion benchmarks

Some benchmarks of community-made libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 24 Jun 2021 01:17:44 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az216-922 (Linux-x64 Intel(R) Xeon(R) Platinum 8272CL CPU @ 2.60GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `168`ns (100%)                           | `5,947,435`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `282`ns (168%)                           | `3,546,022`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `475`ns (282%)                           | `2,107,033`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `926`ns (550%)                           | `1,080,383`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,077`ns (641%)                         | `928,148`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,540`ns (2105%)                        | `282,526`/sec                            |

### Fractional liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `167`ns (100%)                           | `5,970,877`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `266`ns (159%)                           | `3,753,815`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `912`ns (545%)                           | `1,095,971`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `934`ns (558%)                           | `1,070,345`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `4,365`ns (2606%)                        | `229,084`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,647`ns (2775%)                        | `215,184`/sec                            |

### Converting hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `168`ns (100%)                           | `5,965,966`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `256`ns (153%)                           | `3,907,870`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `489`ns (292%)                           | `2,045,252`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `699`ns (417%)                           | `1,431,045`/sec                          |
| [moment](https://npmjs.com/package/moment) (popular)               | `892`ns (532%)                           | `1,121,432`/sec                          |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `999`ns (596%)                           | `1,001,174`/sec                          |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `1,964`ns (1172%)                        | `509,116`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `3,664`ns (2186%)                        | `272,920`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `7,681`ns (4582%)                        | `130,192`/sec                            |

### Parse a duration string and normalize it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `482`ns (100%)                           | `2,073,337`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `564`ns (117%)                           | `1,774,195`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `570`ns (118%)                           | `1,754,877`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `260`ns (100%)                           | `3,843,361`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `519`ns (199%)                           | `1,927,880`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
