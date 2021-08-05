# JavaScript unit conversion benchmarks

Some benchmarks of community-made JavaScript/TypeScript libraries for converting units.

## Results

<!-- beginblock(results) -->

Generated automatically at Thu, 05 Aug 2021 02:56:30 GMT with Node.js v15.14.0 (V8 v8.6.395.17-node.28) on fv-az292-578 (Linux-x64 Intel(R) Xeon(R) CPU E5-2673 v3 @ 2.40GHz)

Each library was called 500 times to allow the runtime to warmup.
Afterward 100,000 trials were performed for each library.
The mean of the execution times are displayed in the tables below.

A baseline of raw math is included in each benchmark.
It should always be the fastest, although sometimes fast libraries get lucky and can outperform it.

If you want a different library to be added to the benchmark, make an issue or create a pull request if you're comfortable.

### Convert 4 inches to millimeters

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `249`ns (100%)                           | `4,015,846`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `420`ns (169%)                           | `2,381,947`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `647`ns (260%)                           | `1,544,897`/sec                          |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `1,166`ns (468%)                         | `857,654`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,175`ns (472%)                         | `850,969`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `4,988`ns (2003%)                        | `200,463`/sec                            |

### Convert 2.5 liters to cubic inches

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `221`ns (100%)                           | `4,519,173`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `333`ns (151%)                           | `3,001,177`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `1,291`ns (583%)                         | `774,747`/sec                            |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,331`ns (602%)                         | `751,192`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `6,095`ns (2754%)                        | `164,079`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `6,603`ns (2984%)                        | `151,443`/sec                            |

### Convert 24 hours to minutes

| Library                                                            | Average execution time (lower is better) | Executions per second (higher is better) |
| ------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                                | `230`ns (100%)                           | `4,346,644`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)                | `342`ns (149%)                           | `2,924,509`/sec                          |
| [uom](https://npmjs.com/package/uom) (fast)                        | `646`ns (281%)                           | `1,547,088`/sec                          |
| [safe-units](https://npmjs.com/package/safe-units) (fast)          | `1,143`ns (497%)                         | `875,256`/sec                            |
| [moment](https://npmjs.com/package/moment) (popular)               | `1,175`ns (511%)                         | `851,273`/sec                            |
| [dayjs](https://npmjs.com/package/dayjs) (popular)                 | `1,344`ns (584%)                         | `744,136`/sec                            |
| [luxon](https://npmjs.com/package/luxon) (popular)                 | `2,140`ns (930%)                         | `467,308`/sec                            |
| [js-quantities](https://npmjs.com/package/js-quantities) (popular) | `5,031`ns (2187%)                        | `198,760`/sec                            |
| [convert-units](https://npmjs.com/package/convert-units) (popular) | `9,687`ns (4211%)                        | `103,229`/sec                            |

### Parse "10h" and convert it to milliseconds

| Library                                                   | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| [@lukeed/ms](https://npmjs.com/package/@lukeed/ms) (fast) | `609`ns (100%)                           | `1,640,719`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast)       | `771`ns (126%)                           | `1,297,440`/sec                          |
| [ms](https://npmjs.com/package/ms) (popular)              | `795`ns (130%)                           | `1,258,015`/sec                          |

### Converting hours to minutes, but with `BigInt`s

| Library                                             | Average execution time (lower is better) | Executions per second (higher is better) |
| --------------------------------------------------- | ---------------------------------------- | ---------------------------------------- |
| raw math (baseline)                                 | `374`ns (100%)                           | `2,673,423`/sec                          |
| [convert](https://npmjs.com/package/convert) (fast) | `795`ns (212%)                           | `1,258,633`/sec                          |

<!-- endblock(results) -->

## Benchmark strategy

Each library is tested with a few different common use cases.
These are written as functions that return the value calculated by that use case (ex. converting inches to millimeters).
Each of these functions are benchmarked several times and the execution time is recorded.
The mean execution time for each use case is displayed in the above tables.
